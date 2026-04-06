import type { Business, Review, Article } from "./types";
import { realBusinesses } from "./real-businesses-data";

// Re-export real businesses as the placeholder businesses
export const placeholderBusinesses: Business[] = realBusinesses;

// ── Echte reviews ───────────────────────────────────────────────────────
export const placeholderReviews: Review[] = [
  {
    id: "r1",
    business_id: "excel-121", // Escort Breda (escort-services-breda.nl)
    user_display_name: "Sammy W.",
    user_initial: "S",
    rating: 5,
    title: "Hete sexy date",
    content:
      "Vanavond de blonde stoot Livia op bezoek gehad. Moest even wachten maar het was het waard want deze meid snapt precies hoe ze flink moet verwennen. Ga haar zeker vaker bestellen. En ben benieuwd naar welke mooie meiden er nog meer te vinden zijn bij dit bedrijf.",
    pros: ["Mooie dame", "Goede service"],
    cons: ["Even wachten"],
    helpful_count: 3,
    reply_count: 0,
    created_at: "2026-03-31T22:00:00Z",
  },
  {
    id: "r2",
    business_id: "excel-104", // Escort Groningen (escort-services-groningen.nl)
    user_display_name: "Willem W.",
    user_initial: "W",
    rating: 4,
    title: "Lieve Rosie",
    content:
      "Leuk gehad met Rosie, zij is heel lief en vond het goed dat ik eerst met haar ging douchen. Vond wel duur dus niet te vaak maar wil haar nog een keer zien en dan weer samen onder de douche.",
    pros: ["Lieve dame", "Flexibel"],
    cons: ["Aan de dure kant"],
    helpful_count: 2,
    reply_count: 0,
    created_at: "2026-04-01T21:00:00Z",
  },
  {
    id: "r3",
    business_id: "excel-119", // Escort Eindhoven (escort-services-eindhoven.nl)
    user_display_name: "Carlos",
    user_initial: "C",
    rating: 5,
    title: "Eerste escort",
    content:
      "Voor het eerst escort en wilde een hele jonge meid. Het meisje aan de telefoon zei beter niet te jong omdat ik nerveus ben dus Faya en zij was ouder maar heel goed. Heel mooi is ze en kwam alleen dat was ook fijn. Mocht alles met haar doen en kreeg lekker massage.",
    pros: ["Goed advies aan telefoon", "Mooie dame", "Kwam alleen"],
    helpful_count: 5,
    reply_count: 0,
    created_at: "2026-04-01T23:00:00Z",
  },
  {
    id: "r4",
    business_id: "excel-106", // Escort Zwolle (escort-services-zwolle.nl)
    user_display_name: "Anand",
    user_initial: "A",
    rating: 4,
    title: "Heel mooi sexy meisje",
    content:
      "Heel mooi sexy meisje langs gehad, ik was te snel klaar en dat was een beetje jammer maar ze was zo horny dat ik er niks aan kon doen. Ze bleef wel gezellig en ik mocht haar nog even lekker verwennen. Missy is een exotisch meisje en ze was echt heel gezellig.",
    pros: ["Mooi meisje", "Gezellig", "Bleef langer"],
    helpful_count: 4,
    reply_count: 0,
    created_at: "2026-03-30T22:00:00Z",
  },
  {
    id: "r5",
    business_id: "excel-121", // Escort Breda (escort-services-breda.nl)
    user_display_name: "Steven",
    user_initial: "S",
    rating: 5,
    title: "Klasse dame",
    content:
      "Wilde vanavond echt even genieten met een mooie vrouw en na goed voorgelicht te zijn door de dienstdoende telefoniste viel de keuze op Patricia. Een hele mooie stijlvolle en uiterst verzorgde verschijning. Enige minpuntje was dat de chauffeur iets te dichtbij bleef wachten maar na een telefoontje naar het bureau werd dit opgelost. Het was zo gezellig dat Patricia nog een aantal uren langer is gebleven en na vele slechte ervaringen waarbij ik vaak dames kreeg die geen Nederlands spraken en zo snel mogelijk weer wilde vertrekken heb ik nu een ervaring gehad waarbij ik volledig ontspannen was en heerlijk de tijd kon nemen. Patricia komt volgende week weer langs en ik verheug me hier nu al op. Heel fijn ook dat de dame aan de telefoon zo uitgebreid kon helpen en me echt goed kon adviseren.",
    pros: ["Stijlvolle dame", "Goed advies telefoniste", "Nam de tijd"],
    cons: ["Chauffeur te dichtbij (werd opgelost)"],
    helpful_count: 8,
    reply_count: 1,
    created_at: "2026-03-30T23:30:00Z",
  },
];

// ── Placeholder articles ────────────────────────────────────────────────
export const placeholderArticles: Article[] = [
  {
    id: "a1",
    title: "De beste nieuwe clubs in Amsterdam die je moet ontdekken",
    slug: "beste-clubs-amsterdam-2026",
    excerpt:
      "Van verborgen pareltjes in de Jordaan tot luxe clubs aan het IJ — dit zijn de hotspots van 2026.",
    content: `
## De Amsterdamse club scene in 2026

Amsterdam blijft de onbetwiste hoofdstad als het gaat om het nachtleven en de club scene. In 2026 zijn er weer een aantal opvallende nieuwkomers die de moeite waard zijn.

### 1. Velvet Lounge - Centrum

De Velvet Lounge heeft zich in korte tijd bewezen als een van de meest stijlvolle clubs van Amsterdam. Met een interieur dat doet denken aan een Parijse salon en een uitstekende cocktailkaart is dit de plek voor wie op zoek is naar klasse.

### 2. Neon Nights - Oost

Een meer underground vibe vind je bij Neon Nights in Amsterdam Oost. Deze club trekt een jong, divers publiek en staat bekend om thema-avonden die steeds creatiever worden.

### 3. The Penthouse - Zuid

Voor de echte premium ervaring is The Penthouse in Zuid de plek. Met uitzicht over de skyline en een strikte dresscode is dit exclusiviteit op zijn best.

## Conclusie

Amsterdam biedt voor ieder wat wils. Of je nu op zoek bent naar een intieme sfeer of een bruisende party night — er is altijd een club die bij je past.
    `.trim(),
    category_slug: "clubs",
    city_slug: "amsterdam",
    author_name: "Sophie de Vries",
    author_initial: "S",
    image_url: undefined,
    published_at: "2026-02-15",
    reading_time: 5,
    tags: ["amsterdam", "clubs", "trending"],
  },
  {
    id: "a2",
    title: "Top 10 massage salons in Rotterdam voor ultieme ontspanning",
    slug: "top-massage-rotterdam",
    excerpt:
      "Van tantra tot erotische massage: de best beoordeelde salons in Rotterdam.",
    content: `
## Rotterdam's beste massage salons

Rotterdam heeft een groeiend aanbod van hoogwaardige massage salons. We hebben de top 10 voor je op een rij gezet op basis van reviews en beoordelingen van onze community.

### Waarom Rotterdam?

De havenstad heeft de afgelopen jaren een enorme groei doorgemaakt in het wellness segment. Met nieuwe salons die regelmatig openen is er meer keuze dan ooit.

### De top 3

1. **Thai Wellness Studio** - Al jaren de nummer 1 van Rotterdam met een gemiddelde score van 4.6
2. **Zen Garden Massage** - Nieuwkomer die snel populariteit wint
3. **Oriental Spa** - Bekend om de uitgebreide tantra sessies

## Tips voor je eerste bezoek

- Boek altijd vooraf, vooral in het weekend
- Communiceer duidelijk je verwachtingen
- Lees reviews van andere bezoekers
    `.trim(),
    category_slug: "erotische-massage",
    city_slug: "rotterdam",
    author_name: "Kim Jansen",
    author_initial: "K",
    published_at: "2026-02-14",
    reading_time: 4,
    tags: ["rotterdam", "massage", "top-10"],
  },
  {
    id: "a3",
    title: "Utrecht saunaclubs: deze locaties scoren het hoogst",
    slug: "utrecht-saunaclubs-review",
    excerpt:
      "De Utrechtse saunaclub scene groeit. Bekijk de favorieten van onze community.",
    content: `
## Saunaclubs in Utrecht

Utrecht heeft een verrassend goed aanbod van saunaclubs. Van intieme locaties tot grotere complexen — er is voor ieder wat wils.

### De groei van Utrecht

Waar Utrecht voorheen vooral bekend stond om studentencafés, is de stad de afgelopen jaren uitgegroeid tot een volwaardig alternatief voor Amsterdam en Rotterdam.

### Onze top picks

De community heeft gesproken en deze saunaclubs komen als beste uit de bus. Lees de volledige reviews op de individuele bedrijfspagina's voor meer details.
    `.trim(),
    category_slug: "saunaclubs",
    city_slug: "utrecht",
    author_name: "Max de Boer",
    author_initial: "M",
    published_at: "2026-02-13",
    reading_time: 3,
    tags: ["utrecht", "saunaclubs"],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────

export function getPlaceholderBusinessesByCity(citySlug: string): Business[] {
  return placeholderBusinesses.filter((b) => b.city_slug === citySlug);
}

export function getPlaceholderBusinessesByCategory(
  categorySlug: string
): Business[] {
  return placeholderBusinesses.filter((b) =>
    b.category_slugs.includes(categorySlug)
  );
}

export function getPlaceholderBusinessByCityAndCategory(
  citySlug: string,
  categorySlug: string
): Business[] {
  return placeholderBusinesses.filter(
    (b) => b.city_slug === citySlug && b.category_slugs.includes(categorySlug)
  );
}

export function getPlaceholderBusinessBySlug(
  slug: string
): Business | undefined {
  return placeholderBusinesses.find((b) => b.slug === slug);
}

export function getPlaceholderReviewsByBusiness(
  businessId: string
): Review[] {
  return placeholderReviews.filter((r) => r.business_id === businessId);
}

export function getPlaceholderArticleBySlug(
  slug: string
): Article | undefined {
  return placeholderArticles.find((a) => a.slug === slug);
}

export function getFeaturedBusinesses(): Business[] {
  return placeholderBusinesses.filter((b) => b.is_featured);
}

export function getTopRatedBusinesses(limit = 6): Business[] {
  return [...placeholderBusinesses]
    .sort((a, b) => b.average_rating - a.average_rating || b.review_count - a.review_count)
    .slice(0, limit);
}

export function getRecentReviews(limit = 10): Review[] {
  return [...placeholderReviews]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export function getBusinessCountByCity(citySlug: string): number {
  return placeholderBusinesses.filter((b) => b.city_slug === citySlug).length;
}

export function getBusinessCountByCategory(categorySlug: string): number {
  return placeholderBusinesses.filter((b) =>
    b.category_slugs.includes(categorySlug)
  ).length;
}

export function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return "Zojuist";
  if (diffHours < 24) return `${diffHours} uur geleden`;
  if (diffDays === 1) return "1 dag geleden";
  if (diffDays < 7) return `${diffDays} dagen geleden`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weken geleden`;
  return `${Math.floor(diffDays / 30)} maanden geleden`;
}
