// ── Content templates ────────────────────────────────────────────────────
// Programmatic content generators — GEEN AI, gebruikt echte data uit de DB
// om unieke content te produceren per brief uit de calendar.

import type { Business, Article } from "../lib/types";
import type { LandingPage } from "../lib/landing-pages-data";

interface Brief {
  date: string;
  slug: string;
  title: string;
  category: string | null;
  city: string | null;
  keyword: string;
  volume: number;
  status?: string;
}

interface LandingBrief {
  date: string;
  slug: string;
  title: string;
  filterType: "city_category" | "city" | "category" | "custom";
  citySlug?: string;
  categorySlug?: string;
  customBusinessIds?: string[];
  keyword: string;
  volume: number;
}

interface CategoryInfo {
  slug: string;
  name: string;
  singular?: string;
  description: string;
  intro_copy?: string;
  long_intro?: string;
  faq_questions?: { q: string; a: string }[];
}

interface CityInfo {
  slug: string;
  name: string;
  province: string;
  population: number;
}

// ── Helpers ─────────────────────────────────────────────────────────────

function pick<T>(arr: T[], seed: string): T {
  // Deterministic pick based on string seed (reproduceerbaar per slug)
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return arr[Math.abs(hash) % arr.length];
}

function pickMultiple<T>(arr: T[], n: number, seed: string): T[] {
  const result: T[] = [];
  const available = [...arr];
  let idx = 0;
  for (let i = 0; i < n && available.length > 0; i++) {
    const seedVar = `${seed}-${i}`;
    let hash = 0;
    for (let j = 0; j < seedVar.length; j++) {
      hash = (hash << 5) - hash + seedVar.charCodeAt(j);
      hash |= 0;
    }
    idx = Math.abs(hash) % available.length;
    result.push(available.splice(idx, 1)[0]);
  }
  return result;
}

function priceRangeForCategory(catSlug: string): {
  incall: [number, number];
  outcall?: [number, number];
  unit: string;
} {
  const ranges: Record<string, { incall: [number, number]; outcall?: [number, number]; unit: string }> = {
    escorts: { incall: [140, 240], outcall: [180, 300], unit: "per uur" },
    privehuizen: { incall: [50, 180], unit: "voor 30-60 min" },
    clubs: { incall: [50, 150], unit: "entree per paar" },
    "erotische-massage": { incall: [80, 220], unit: "per 60 min" },
    ramen: { incall: [50, 150], unit: "voor 15-60 min" },
    seksshops: { incall: [20, 400], unit: "per product" },
    stripclubs: { incall: [20, 60], unit: "entree" },
    saunaclubs: { incall: [80, 200], unit: "all-in entree" },
  };
  return ranges[catSlug] || { incall: [100, 250], unit: "per bezoek" };
}

// ── Blog article generator ──────────────────────────────────────────────

export function generateBlogArticle(
  brief: Brief,
  context: {
    categories: CategoryInfo[];
    cities: CityInfo[];
    businesses: Business[];
  }
): Article {
  const category = brief.category
    ? context.categories.find((c) => c.slug === brief.category)
    : null;
  const city = brief.city
    ? context.cities.find((c) => c.slug === brief.city)
    : null;

  // Filter relevant businesses
  const relevantBusinesses = context.businesses.filter((b) => {
    if (brief.city && b.city_slug !== brief.city) return false;
    if (brief.category && !b.category_slugs.includes(brief.category)) return false;
    return true;
  });

  const topBusinesses = [...relevantBusinesses]
    .sort(
      (a, b) =>
        b.average_rating - a.average_rating || b.review_count - a.review_count
    )
    .slice(0, 5);

  const content = buildBlogContent(brief, category, city, topBusinesses);

  const excerpt = buildExcerpt(brief, category, city, relevantBusinesses.length);

  return {
    id: `gen-${brief.slug}`,
    title: brief.title,
    slug: brief.slug,
    excerpt,
    content,
    category_slug: brief.category ?? undefined,
    city_slug: brief.city ?? undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    image_url: undefined,
    published_at: brief.date,
    reading_time: Math.max(3, Math.round(content.length / 1000)),
    tags: buildTags(brief, city, category),
  };
}

function buildExcerpt(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined,
  count: number
): string {
  const variants = [
    () =>
      city && category
        ? `${count} ${category.name.toLowerCase()} in ${city.name} vergeleken: prijzen, reviews en praktische info voor ${new Date().getFullYear()}.`
        : city
        ? `Alles over erotische diensten in ${city.name}: aanbod, prijzen en wat je kunt verwachten in ${new Date().getFullYear()}.`
        : category
        ? `Complete gids over ${category.name.toLowerCase()} in Nederland: wat het is, wat het kost en hoe je de beste kiest.`
        : `Praktische gids met alles wat je moet weten over dit onderwerp in ${new Date().getFullYear()}.`,
    () =>
      city && category
        ? `De beste ${category.name.toLowerCase()} in ${city.name}: ${count} aanbieders vergeleken, met actuele prijzen en reviews.`
        : `Actuele informatie, prijzen en tips over ${brief.title.toLowerCase()}.`,
  ];
  return pick(variants, brief.slug)();
}

function buildTags(
  brief: Brief,
  city: CityInfo | null | undefined,
  category: CategoryInfo | null | undefined
): string[] {
  const tags = [];
  if (city) tags.push(city.slug);
  if (category) tags.push(category.slug);
  tags.push("gids");
  return tags.slice(0, 4);
}

function buildBlogContent(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined,
  topBusinesses: Business[]
): string {
  const sections: string[] = [];

  // Intro (varies)
  sections.push(buildIntroSection(brief, category, city));

  // Wat kun je verwachten
  sections.push(buildExpectationSection(brief, category, city));

  // Prijzen
  if (category) sections.push(buildPriceSection(brief, category, city));

  // Top aanbieders
  if (topBusinesses.length > 0) {
    sections.push(buildTopBusinessesSection(brief, topBusinesses, category, city));
  }

  // Tips
  sections.push(buildTipsSection(brief, category, city));

  // FAQ
  sections.push(buildFaqSection(brief, category, city));

  return sections.join("\n\n");
}

function buildIntroSection(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  const introTemplates = [
    () =>
      city && category
        ? `## De ${category.name.toLowerCase()}-markt in ${city.name}\n\n${city.name} heeft als ${city.population > 200000 ? "grote Nederlandse stad" : "regionale stad"} in ${city.province} een eigen karakter in de erotische branche. Deze gids zet alles op een rij: wat je kunt verwachten, welke prijzen gangbaar zijn, en waar je op let bij het kiezen van een ${category.singular?.toLowerCase() || category.name.toLowerCase()}.`
        : city
        ? `## Erotisch aanbod in ${city.name}\n\n${city.name}, in ${city.province} met zo'n ${Math.round(city.population / 1000)}.000 inwoners, heeft een divers aanbod aan sekswerk-gerelateerde diensten. Deze gids geeft je een overzicht van wat er speelt, wat de prijzen zijn, en hoe je verstandig kiest.`
        : category
        ? `## Over ${category.name.toLowerCase()}\n\n${category.intro_copy || category.description} Deze gids behandelt de essentie zonder marketingtaal: feiten, prijzen, en praktische info.`
        : `## Inleiding\n\n${brief.title} is een onderwerp dat veel Nederlanders bezighoudt. In deze gids behandelen we de belangrijkste aspecten zodat je weloverwogen keuzes kunt maken.`,
    () =>
      city && category
        ? `## ${category.name} in ${city.name}: de actuele stand\n\nHet ${category.name.toLowerCase()}-aanbod in ${city.name} is in de afgelopen jaren gestabiliseerd. Prijzen liggen ${city.population > 400000 ? "rond het landelijk gemiddelde" : "iets onder het landelijk gemiddelde"}, de kwaliteit van de aanbieders is doorgaans goed. In deze gids lees je wat je kunt verwachten en hoe je kiest uit het aanbod.`
        : brief.title,
  ];
  return pick(introTemplates, brief.slug)();
}

function buildExpectationSection(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  if (!category) {
    return `## Wat je kunt verwachten\n\nDe Nederlandse erotische branche is gereguleerd onder de Wet regulering sekswerk (WRS). Bedrijven werken met vergunning, sekswerkers zijn meerderjarig (21+) en geregistreerd. Voor jou als klant betekent dit: transparantie, veiligheid, en juridische bescherming zolang je bij vergunde aanbieders boekt.`;
  }

  const templates = [
    () =>
      `## Wat je kunt verwachten\n\n${category.intro_copy || category.description}\n\nTypisch ${category.name.toLowerCase()}-bezoek${city ? ` in ${city.name}` : ""}: ${category.slug === "escorts" ? "boeking vooraf, duidelijke prijsafspraak, incall of outcall, sessie van 1-3 uur" : category.slug === "privehuizen" ? "walk-in tijdens openingsuren, keuze uit aanwezige dames, 30-60 minuten sessie" : category.slug === "clubs" ? "entree aan de deur, dresscode, meerdere uren ter plaatse" : category.slug === "erotische-massage" ? "afspraak maken, douche, sessie van 30-90 minuten" : category.slug === "ramen" ? "langs ramen lopen, keuze aan de deur, 15-60 min sessie" : category.slug === "saunaclubs" ? "all-in entree, wellness + optionele sessies met dames, 3-6 uur ter plaatse" : "verschillende services, afhankelijk van aanbieder"}.`,
    () =>
      `## De praktische gang van zaken\n\nBij een ${category.singular?.toLowerCase() || category.name.toLowerCase()} kies je doorgaans voor een van de volgende opties: ${category.slug === "escorts" ? "een bureau (bredere selectie, meer discretie) of een zelfstandige (persoonlijker, vaak lagere prijs)" : category.slug === "clubs" ? "een parenclub (paren-only), seksclub (met dames in dienst), of swingersclub (open voor wisseling)" : category.slug === "erotische-massage" ? "reguliere body-to-body, spirituele tantra, of specialistische nuru" : "het aanbod van vergunde aanbieders in de regio"}. Elke keuze heeft eigen voor- en nadelen die we hieronder verder uitleggen.`,
  ];
  return pick(templates, `${brief.slug}-exp`)();
}

function buildPriceSection(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  if (!category) return "";
  const prices = priceRangeForCategory(category.slug);

  const cityModifier = city
    ? city.population > 400000
      ? "Prijzen liggen iets boven het landelijke gemiddelde door hogere locatiekosten."
      : city.population > 200000
      ? "Prijzen volgen het landelijk gemiddelde."
      : "Prijzen liggen doorgaans onder het landelijk gemiddelde."
    : "";

  return `## Prijzen en wat je krijgt\n\nDe gangbare tarieven${city ? ` in ${city.name}` : ""} zijn:\n\n- Incall: ${prices.incall[0]}-${prices.incall[1]} euro ${prices.unit}\n${prices.outcall ? `- Outcall: ${prices.outcall[0]}-${prices.outcall[1]} euro ${prices.unit} (exclusief reiskosten)\n` : ""}- Extra's en specials: apart geprijsd, altijd vooraf bespreken\n\n${cityModifier} Voor langere boekingen of terugkerende klanten geven veel aanbieders staffelkortingen.`;
}

function buildTopBusinessesSection(
  brief: Brief,
  top: Business[],
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  if (top.length === 0) return "";

  const lines = top.slice(0, 3).map((b, i) => {
    return `**${i + 1}. ${b.name}** — ${b.short_description || b.description.slice(0, 100)}. Gemiddelde reviewscore: ${b.average_rating > 0 ? b.average_rating.toFixed(1) : "nog geen reviews"} op basis van ${b.review_count} ervaringen. Prijsklasse: ${"€".repeat(b.price_range)}. [Bekijk pagina](/${b.city_slug}/${b.primary_category}/${b.slug})`;
  });

  return `## Top aanbieders${city ? ` in ${city.name}` : ""}${category ? ` voor ${category.name.toLowerCase()}` : ""}\n\nOp basis van Eroplein-reviews zijn dit de best beoordeelde aanbieders op dit moment:\n\n${lines.join("\n\n")}\n\nVoor de volledige lijst${city && category ? `: zie [${category.name} in ${city.name}](/${city.slug}/${category.slug})` : "."}`;
}

function buildTipsSection(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  const genericTips = [
    "**Lees reviews.** Drie of meer gedetailleerde reviews met verschillende auteurs is een goede indicator van kwaliteit.",
    "**Check vergunning.** Eroplein vermeldt bij elk bedrijf of het geverifieerd is. Boek bij voorkeur alleen bij vergunde aanbieders.",
    "**Bespreek vooraf wat je wilt.** Transparantie over je verwachtingen voorkomt teleurstelling.",
    "**Betaal nooit volledig vooruit.** Een aanbetaling is normaal, volledige vooruitbetaling via crypto of giftcards is altijd een rode vlag.",
    "**Respecteer grenzen.** Zowel je eigen als die van de sekswerker. Afspraken zijn afspraken.",
  ];

  const categoryTips: Record<string, string[]> = {
    escorts: [
      "**Kies tussen bureau en zelfstandige.** Bureau = breed aanbod + planning; zelfstandig = persoonlijker + vaak goedkoper.",
      "**Outcall naar hotel.** Hotels in centrum van de stad zijn standaard incheck-discreet voor deze boekingen.",
    ],
    clubs: [
      "**Respecteer de dresscode.** Nette kleding aan, binnen vaak badjas/lingerie — check per club.",
      "**Kom niet zwaar aangeschoten.** Vaak geweigerd aan de deur en sowieso onplezierig voor andere bezoekers.",
    ],
    "erotische-massage": [
      "**Douche vooraf.** Dit is bij vrijwel elke massagesalon standaard. Handdoek krijg je van het huis.",
      "**Vraag expliciet om technieken.** Tantra, nuru, body-to-body zijn verschillende ervaringen.",
    ],
    privehuizen: [
      "**Walk-in kan.** Geen reservering nodig bij de meeste privehuizen. Wel handig om te bellen voor bezetting.",
      "**Kies in alle rust.** Je mag eerst gewoon kijken en is ok om weg te gaan als niemand je aanspreekt.",
    ],
    ramen: [
      "**Geen foto's.** Streng verboden en strikt gehandhaafd in Amsterdam.",
      "**Blijf niet staren.** Respectvolle benadering begint met normaal langslopen.",
    ],
    saunaclubs: [
      "**Dress: handdoek.** FKK-concept betekent naakt of met handdoek, geen zwemkleding.",
      "**Kom doordeweeks voor rust.** Woensdag-donderdag zijn rustigste, meeste keuze aan dames.",
    ],
    stripclubs: [
      "**Fooien zijn gebruikelijk.** 10-20% extra na een table dance die je leuk vond.",
      "**Kijken, geen aanraken.** Nederlandse stripclubs: strikt 'look but don't touch' als basis.",
    ],
    seksshops: [
      "**Kies body-safe.** Medisch silicone, ABS, glas. Vermijd poreus jelly.",
      "**Vraag advies.** Verkopers in specialistische shops weten wat ze aanraden voor jouw situatie.",
    ],
  };

  const tips = [
    ...genericTips.slice(0, 3),
    ...((category && categoryTips[category.slug]) || []).slice(0, 2),
  ];

  return `## Tips voor een goede ervaring\n\n${tips.join("\n\n")}`;
}

function buildFaqSection(
  brief: Brief,
  category: CategoryInfo | null | undefined,
  city: CityInfo | null | undefined
): string {
  const faqItems: { q: string; a: string }[] = [];

  if (category && city) {
    faqItems.push({
      q: `Wat kost een ${category.singular?.toLowerCase() || category.name.toLowerCase()} in ${city.name}?`,
      a: `Gemiddeld ${priceRangeForCategory(category.slug).incall[0]}-${priceRangeForCategory(category.slug).incall[1]} euro ${priceRangeForCategory(category.slug).unit}, afhankelijk van aanbieder en specifieke afspraken.`,
    });
    faqItems.push({
      q: `Is ${category.name.toLowerCase()} legaal in ${city.name}?`,
      a: `Ja. Alle vergunde aanbieders werken binnen de Nederlandse wet (Wet regulering sekswerk, gemeentelijke exploitatievergunningen). Boek bij voorkeur bij aanbieders die geverifieerd zijn op Eroplein.`,
    });
  }

  if (category?.faq_questions) {
    faqItems.push(...category.faq_questions.slice(0, 2));
  }

  if (faqItems.length === 0) {
    faqItems.push({
      q: "Is dit legaal in Nederland?",
      a: "Ja, als de aanbieder een vergunning heeft. Sinds 2000 is sekswerk gereguleerd onder de Wet regulering sekswerk.",
    });
    faqItems.push({
      q: "Hoe betaal ik?",
      a: "Contant of pin is standaard. Een kleine aanbetaling vooraf via Tikkie kan gevraagd worden. Volledige vooruitbetaling via crypto of giftcards is een rode vlag.",
    });
  }

  const formatted = faqItems
    .slice(0, 4)
    .map((f) => `**${f.q}**\n\n${f.a}`)
    .join("\n\n");

  return `## Veelgestelde vragen\n\n${formatted}`;
}

// ── Landing page generator ──────────────────────────────────────────────

export function generateLandingPage(
  brief: LandingBrief,
  context: {
    categories: CategoryInfo[];
    cities: CityInfo[];
  }
): LandingPage {
  const category = brief.categorySlug
    ? context.categories.find((c) => c.slug === brief.categorySlug)
    : null;
  const city = brief.citySlug
    ? context.cities.find((c) => c.slug === brief.citySlug)
    : null;

  const singular = category?.singular || category?.name || "aanbieder";
  const target = city
    ? `${singular} in ${city.name}`
    : category
    ? `${singular} in Nederland`
    : brief.title;

  const prices = category ? priceRangeForCategory(category.slug) : null;

  const metaTitle =
    brief.title.length < 60
      ? `${brief.title} — top reviews & prijzen`
      : brief.title;

  const metaDescription = city && category
    ? `De best beoordeelde ${category.name.toLowerCase()} in ${city.name}: vergelijk op reviews, prijzen en reputatie. Geverifieerde aanbieders en actuele info.`
    : category
    ? `Top ${category.name.toLowerCase()} in Nederland: de best beoordeelde opties met reviews, prijzen en vergelijkingstabel.`
    : `Top aanbieders vergeleken: reviews, prijzen en specialisaties op één plek.`;

  const intro = city && category
    ? `${city.name} heeft een divers aanbod aan ${category.name.toLowerCase()}. Deze ranglijst toont de best beoordeelde opties op basis van Eroplein-reviews, gesorteerd op gemiddelde score en review-volume. Alle bedrijven zijn geverifieerd op vergunning of KVK-registratie.`
    : category
    ? `Deze lijst toont de best beoordeelde ${category.name.toLowerCase()} van Nederland, gebaseerd op echte Eroplein-reviews en gemiddelde scores over meerdere maanden.`
    : `Top aanbieders op basis van reviews en reputatie.`;

  const sections: LandingPage["sections"] = [];

  // Section 1: methodologie
  sections.push({
    heading: "Hoe is deze lijst samengesteld?",
    body: `Gesorteerd op gemiddelde Eroplein-reviewscore, met het aantal reviews als secundaire factor. Aanbieders met minder dan 3 reviews zijn uitgesloten. Alle bedrijven zijn geverifieerd via KVK en gemeentelijke vergunningsadministratie.`,
  });

  // Section 2: prijzen (als category)
  if (prices && category) {
    sections.push({
      heading: `Prijsrange ${target.toLowerCase()}`,
      body: `Gangbare tarieven: ${prices.incall[0]}-${prices.incall[1]} euro ${prices.unit}.${prices.outcall ? ` Outcall: ${prices.outcall[0]}-${prices.outcall[1]} euro (exclusief reiskosten).` : ""} ${city ? (city.population > 400000 ? "Amsterdam en andere grote steden liggen iets boven dit gemiddelde." : city.population > 200000 ? "In lijn met landelijk gemiddelde." : "Doorgaans iets onder landelijk gemiddelde.") : ""}`,
    });
  }

  // Section 3: kwaliteitscriteria
  sections.push({
    heading: "Waarop letten we bij de beoordeling?",
    body: `Betrouwbaarheid (transparante prijzen, duidelijke communicatie), consistentie van kwaliteit over reviews heen, discretie en klantenservice, en waarde voor geld. Bedrijven die regelmatig negatieve reviews krijgen op specifieke punten (onduidelijke prijsstellingen, onprofessioneel gedrag) worden lager geplaatst of uitgesloten.`,
  });

  const faq: LandingPage["faq"] = [];

  if (category && city) {
    faq.push({
      question: `Wat is ${prices ? `de prijsrange voor ` : ""}${category.singular?.toLowerCase() || category.name.toLowerCase()} in ${city.name}?`,
      answer: prices
        ? `${prices.incall[0]}-${prices.incall[1]} euro ${prices.unit}, met uitzondering van luxe-segment dat boven ${prices.incall[1]} euro kan liggen.`
        : `Afhankelijk van aanbieder; check individuele bedrijfspagina's voor actuele tarieven.`,
    });
    faq.push({
      question: `Hoe vaak wordt deze ranglijst ge-update?`,
      answer: `Elk kwartaal op basis van de meest recente reviews. Grote veranderingen in de markt worden vaker verwerkt.`,
    });
    faq.push({
      question: `Kunnen bedrijven zichzelf op deze lijst kopen?`,
      answer: `Nee. Positie op Eroplein-ranglijsten wordt uitsluitend bepaald door objectieve reviewscore en volume. Adverteren beïnvloedt de ordening niet.`,
    });
  }

  if (category?.faq_questions) {
    faq.push(
      ...category.faq_questions.slice(0, 2).map((q) => ({
        question: q.q,
        answer: q.a,
      }))
    );
  }

  return {
    slug: brief.slug,
    title: brief.title,
    metaTitle,
    metaDescription,
    h1: brief.title,
    intro,
    filterType: brief.filterType,
    citySlug: brief.citySlug,
    categorySlug: brief.categorySlug,
    customBusinessIds: brief.customBusinessIds,
    sections,
    faq,
    relatedLandings: [],
    publishedAt: brief.date,
    updatedAt: brief.date,
  };
}
