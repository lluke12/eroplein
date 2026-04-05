import type { Business, Review, Article } from "./types";
import { realBusinesses } from "./real-businesses-data";

// Re-export real businesses as the placeholder businesses
export const placeholderBusinesses: Business[] = realBusinesses;

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
