import type { Business, Review, Article } from "./types";
import { realBusinesses } from "./real-businesses-data";

// Re-export real businesses as the placeholder businesses
export const placeholderBusinesses: Business[] = realBusinesses;

// Category-based placeholder images (Unsplash)
const categoryImages: Record<string, string[]> = {
  clubs: [
    "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=600&h=400&fit=crop",
  ],
  escorts: [
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600&h=400&fit=crop",
  ],
  "erotische-massage": [
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
  ],
  privehuizen: [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
  ],
  saunaclubs: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=600&h=400&fit=crop",
  ],
  stripclubs: [
    "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
  ],
  seksshops: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
  ],
  ramen: [
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  ],
};

function getCategoryImage(category: string, index: number): string {
  const images = categoryImages[category] || categoryImages.clubs;
  return images[index % images.length];
}

// ── Placeholder reviews ─────────────────────────────────────────────────
export const placeholderReviews: Review[] = [
  {
    id: "r1",
    business_id: "real-001",
    user_display_name: "Emma K.",
    user_initial: "E",
    rating: 5,
    title: "Absoluut top ervaring",
    content:
      "Alles klopte. De sfeer, de service en de discretie. Zeker een aanrader als je iets speciaals zoekt. Het interieur is prachtig en het personeel is zeer professioneel.",
    pros: ["Prachtig interieur", "Discrete service", "Goede cocktails"],
    cons: ["Prijzig"],
    helpful_count: 24,
    reply_count: 3,
    created_at: "2026-02-15T10:00:00Z",
  },
  {
    id: "r2",
    business_id: "real-001",
    user_display_name: "Mila V.",
    user_initial: "M",
    rating: 4,
    title: "Heerlijk ontspannen",
    content:
      "De massage was geweldig en het personeel super vriendelijk. Enige minpunt: het was druk op zaterdag. Verder absoluut een aanrader.",
    pros: ["Vriendelijk personeel", "Goede massages"],
    cons: ["Druk in het weekend"],
    helpful_count: 18,
    reply_count: 7,
    created_at: "2026-02-15T07:00:00Z",
  },
  {
    id: "r3",
    business_id: "real-001",
    user_display_name: "Luna B.",
    user_initial: "L",
    rating: 5,
    content:
      "Wat een ongelofelijke avond! De sfeer was intiem en luxueus. Het personeel wist precies wat ze deden. Mijn nieuwe favoriete adres in Amsterdam.",
    helpful_count: 42,
    reply_count: 12,
    created_at: "2026-02-14T22:00:00Z",
  },
  {
    id: "r4",
    business_id: "real-001",
    user_display_name: "Julia R.",
    user_initial: "J",
    rating: 3,
    content:
      "Mooie locatie en goede sfeer, maar de prijs-kwaliteitverhouding kan beter. Service was wel uitstekend, maar voor deze prijs verwacht je iets meer.",
    pros: ["Mooie locatie", "Goede service"],
    cons: ["Prijzig voor wat je krijgt"],
    helpful_count: 9,
    reply_count: 5,
    created_at: "2026-02-14T12:00:00Z",
  },
  {
    id: "r5",
    business_id: "real-015",
    user_display_name: "Sanne D.",
    user_initial: "S",
    rating: 5,
    title: "Beste massage ooit",
    content:
      "Ik kom hier al maanden en het blijft elke keer geweldig. De masseuses zijn echt vakkundig en de sfeer is ontspannen. Absolute aanrader!",
    pros: ["Vakkundige masseuses", "Ontspannen sfeer", "Goede prijs"],
    helpful_count: 31,
    reply_count: 4,
    created_at: "2026-02-13T15:00:00Z",
  },
  {
    id: "r6",
    business_id: "real-009",
    user_display_name: "Thomas H.",
    user_initial: "T",
    rating: 5,
    title: "Klasse apart",
    content:
      "Diamond Escorts is echt de beste in Amsterdam. Altijd op tijd, altijd discreet en de dames zijn stuk voor stuk fantastisch. Prijs is hoog maar je krijgt waar je voor betaalt.",
    pros: ["Top kwaliteit", "Altijd op tijd", "Zeer discreet"],
    cons: ["Hoge prijs"],
    helpful_count: 56,
    reply_count: 8,
    created_at: "2026-03-01T20:00:00Z",
  },
  {
    id: "r7",
    business_id: "real-009",
    user_display_name: "Rick M.",
    user_initial: "R",
    rating: 5,
    content:
      "Derde keer dat ik boek bij Diamond en het blijft elke keer boven verwachting. Communicatie verloopt soepel en de service is impeccable.",
    helpful_count: 34,
    reply_count: 2,
    created_at: "2026-02-28T18:00:00Z",
  },
  {
    id: "r8",
    business_id: "real-016",
    user_display_name: "Mark J.",
    user_initial: "M",
    rating: 4,
    title: "Leuke club, goede sfeer",
    content:
      "Club Eclipse is een welkome toevoeging aan Rotterdam. Moderne inrichting, goede muziek. Op zaterdagavond kan het wel erg vol worden.",
    pros: ["Moderne inrichting", "Goede muziek", "Leuke thema-avonden"],
    cons: ["Vol op zaterdag"],
    helpful_count: 15,
    reply_count: 3,
    created_at: "2026-02-20T23:00:00Z",
  },
  {
    id: "r9",
    business_id: "real-018",
    user_display_name: "Peter V.",
    user_initial: "P",
    rating: 4,
    title: "Betrouwbaar bureau",
    content:
      "Elegance Escorts doet wat ze beloven. Goede communicatie, dames komen op tijd en zien er goed uit. Prijzen zijn fair voor Rotterdam.",
    pros: ["Betrouwbaar", "Goede communicatie", "Eerlijke prijzen"],
    helpful_count: 22,
    reply_count: 1,
    created_at: "2026-03-05T19:00:00Z",
  },
  {
    id: "r10",
    business_id: "real-024",
    user_display_name: "Alexander B.",
    user_initial: "A",
    rating: 5,
    title: "Premium ervaring",
    content:
      "The Penthouse in Den Haag is gewoon next level. De shows zijn spectaculair, de bediening perfect en de sfeer is exclusief. Niet goedkoop maar elke cent waard.",
    pros: ["Spectaculaire shows", "Exclusieve sfeer", "Perfecte bediening"],
    cons: ["Duur"],
    helpful_count: 47,
    reply_count: 9,
    created_at: "2026-03-15T21:00:00Z",
  },
  {
    id: "r11",
    business_id: "real-028",
    user_display_name: "Lisa W.",
    user_initial: "L",
    rating: 5,
    title: "Hemelse massage",
    content:
      "Oriental Zen in Utrecht is een verborgen pareltje. De Aziatische masseuses weten precies wat ze doen. Na afloop voel je je herboren. Absolute aanrader!",
    pros: ["Ervaren masseuses", "Prachtige inrichting", "Ontspannen sfeer"],
    helpful_count: 29,
    reply_count: 6,
    created_at: "2026-02-18T14:00:00Z",
  },
  {
    id: "r12",
    business_id: "real-021",
    user_display_name: "Dennis K.",
    user_initial: "D",
    rating: 4,
    title: "Gezellige avond",
    content:
      "Club Privé Rosa is altijd een gezellige avond uit. De sfeer is warm en uitnodigend. Het wellnessgedeelte is een mooie bonus. Enige minpunt is dat het soms wat rustig kan zijn doordeweeks.",
    pros: ["Warme sfeer", "Wellness faciliteiten", "Betaalbaar"],
    cons: ["Rustig doordeweeks"],
    helpful_count: 11,
    reply_count: 2,
    created_at: "2026-01-30T22:00:00Z",
  },
  {
    id: "r13",
    business_id: "real-035",
    user_display_name: "Kevin R.",
    user_initial: "K",
    rating: 5,
    title: "Beste saunaclub van Brabant",
    content:
      "Glow in Eindhoven is top. Moderne faciliteiten, schoon, goed buffet en vriendelijk personeel. De sauna's zijn heerlijk en er is genoeg privé ruimte.",
    pros: ["Modern", "Schoon", "Goed buffet", "Genoeg privé ruimte"],
    helpful_count: 38,
    reply_count: 7,
    created_at: "2026-02-22T16:00:00Z",
  },
  {
    id: "r14",
    business_id: "real-007",
    user_display_name: "Sophie L.",
    user_initial: "S",
    rating: 5,
    title: "Klassevol als altijd",
    content:
      "Maison Rouge blijft mijn favoriet in Amsterdam. De sfeer is intiem, de dames zijn prachtig en de locatie aan de gracht is uniek. Een echte Amsterdamse ervaring.",
    pros: ["Intieme sfeer", "Unieke locatie", "Prachtige dames"],
    helpful_count: 33,
    reply_count: 4,
    created_at: "2026-02-12T19:00:00Z",
  },
  {
    id: "r15",
    business_id: "real-013",
    user_display_name: "Yara M.",
    user_initial: "Y",
    rating: 4,
    title: "Ontspannend en sensueel",
    content:
      "De tantra massage bij Tantra Temple was een bijzondere ervaring. De therapeut was professioneel en de ruimte was prachtig ingericht. Iets aan de prijzige kant.",
    pros: ["Professionele therapeuten", "Prachtige ruimte"],
    cons: ["Aan de prijzige kant"],
    helpful_count: 19,
    reply_count: 3,
    created_at: "2026-02-15T11:00:00Z",
  },
  {
    id: "r16",
    business_id: "real-046",
    user_display_name: "Bart G.",
    user_initial: "B",
    rating: 5,
    title: "Bourgondisch genieten",
    content:
      "De Wellness Lounge in Maastricht is fantastisch. Limburgse gastvrijheid op zijn best. De faciliteiten zijn top en de thema-avonden zijn altijd een succes.",
    pros: ["Limburgse gastvrijheid", "Top faciliteiten", "Leuke thema-avonden"],
    helpful_count: 25,
    reply_count: 5,
    created_at: "2026-03-08T20:00:00Z",
  },
  {
    id: "r17",
    business_id: "real-020",
    user_display_name: "Marco D.",
    user_initial: "M",
    rating: 4,
    content:
      "Sauna Paradise is een goede keus in Rotterdam. Ruime faciliteiten en prima service. Het zwembad is een fijne toevoeging. Kan soms druk zijn op vrijdagavond.",
    pros: ["Ruime faciliteiten", "Zwembad", "Prima service"],
    cons: ["Druk op vrijdagavond"],
    helpful_count: 14,
    reply_count: 2,
    created_at: "2026-02-01T17:00:00Z",
  },
  {
    id: "r18",
    business_id: "real-032",
    user_display_name: "Anne S.",
    user_initial: "A",
    rating: 5,
    title: "Topservice",
    content:
      "Prestige Escorts in Utrecht levert echt topkwaliteit. Zeer professionele service, perfecte communicatie en de dames zijn charmant en intelligent.",
    pros: ["Professionele service", "Perfecte communicatie", "Charmante dames"],
    helpful_count: 41,
    reply_count: 6,
    created_at: "2026-03-10T21:00:00Z",
  },
  {
    id: "r19",
    business_id: "real-039",
    user_display_name: "Jasper W.",
    user_initial: "J",
    rating: 4,
    title: "Leuk voor Groningen",
    content:
      "Northern Lights is een prima optie in Groningen. Betaalbaar, gezellige sfeer en leuk publiek. Niet het niveau van de Randstad maar zeker de moeite waard.",
    pros: ["Betaalbaar", "Gezellige sfeer", "Leuk publiek"],
    cons: ["Kleiner dan in de Randstad"],
    helpful_count: 8,
    reply_count: 1,
    created_at: "2026-02-05T23:00:00Z",
  },
  {
    id: "r20",
    business_id: "real-026",
    user_display_name: "Femke J.",
    user_initial: "F",
    rating: 4,
    title: "Fijne massage",
    content:
      "Royal Touch in Den Haag biedt een heerlijke massage in een nette, discrete omgeving. De masseuse was ervaren en professioneel. Zeker voor herhaling vatbaar.",
    pros: ["Discrete omgeving", "Ervaren masseuse", "Nette locatie"],
    helpful_count: 16,
    reply_count: 2,
    created_at: "2026-02-25T13:00:00Z",
  },
  {
    id: "r21",
    business_id: "real-044",
    user_display_name: "Roy P.",
    user_initial: "R",
    rating: 4,
    title: "Verrassend goed",
    content:
      "Boudoir Breda verraste me positief. Gezellige bar, mooie dames en de sfeer is heel persoonlijk. Aanrader als je in de buurt van Breda bent.",
    pros: ["Persoonlijke sfeer", "Gezellige bar", "Mooie dames"],
    helpful_count: 12,
    reply_count: 3,
    created_at: "2026-01-25T20:00:00Z",
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
