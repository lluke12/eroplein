import type { Business, Review, Article } from "./types";

// Placeholder businesses tot Supabase is gekoppeld
export const placeholderBusinesses: Business[] = [
  {
    id: "1",
    name: "Velvet Lounge",
    slug: "velvet-lounge",
    city_slug: "amsterdam",
    category_slugs: ["clubs", "privehuizen"],
    primary_category: "clubs",
    description:
      "Velvet Lounge is een exclusieve privéclub in het hart van Amsterdam. Met een stijlvol interieur, discrete sfeer en uitstekende service biedt deze club een onvergetelijke ervaring. Regelmatige thema-avonden en een selecte clientèle zorgen voor een premium beleving.",
    short_description:
      "Exclusieve privéclub met stijlvol interieur en discrete sfeer in Amsterdam Centrum.",
    address: "Amsterdam Centrum",
    postal_code: "1012 AB",
    phone: "+31 20 123 4567",
    website: "https://example.com",
    average_rating: 4.8,
    review_count: 127,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-06-01",
    updated_at: "2026-02-10",
  },
  {
    id: "2",
    name: "Thai Wellness Studio",
    slug: "thai-wellness-studio",
    city_slug: "rotterdam",
    category_slugs: ["erotische-massage"],
    primary_category: "erotische-massage",
    description:
      "Thai Wellness Studio biedt een breed scala aan massages in een ontspannen, luxueuze omgeving. Van traditionele thaise massage tot erotische massages, allemaal uitgevoerd door ervaren masseuses. Populair vanwege de uitstekende prijs-kwaliteitverhouding.",
    short_description:
      "Luxe massagesalon met ervaren masseuses in Rotterdam Zuid.",
    address: "Rotterdam Zuid",
    postal_code: "3071 AB",
    average_rating: 4.6,
    review_count: 91,
    price_range: 2,
    is_verified: true,
    is_featured: true,
    created_at: "2025-07-15",
    updated_at: "2026-02-08",
  },
  {
    id: "3",
    name: "Club Privé Rosa",
    slug: "club-prive-rosa",
    city_slug: "utrecht",
    category_slugs: ["clubs", "saunaclubs"],
    primary_category: "clubs",
    description:
      "Club Privé Rosa is al jaren een begrip in Utrecht. Deze parenclub biedt een warme, gastvrije sfeer met verschillende ruimtes, een bar en een wellnessgedeelte. Bekend om de gezellige avonden en het diverse publiek.",
    short_description:
      "Gezellige parenclub met wellness faciliteiten in Utrecht.",
    address: "Utrecht Centrum",
    postal_code: "3511 AB",
    average_rating: 4.5,
    review_count: 58,
    price_range: 2,
    is_verified: false,
    is_featured: true,
    created_at: "2025-08-20",
    updated_at: "2026-01-30",
  },
];

export const placeholderReviews: Review[] = [
  {
    id: "r1",
    business_id: "1",
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
    business_id: "1",
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
    business_id: "1",
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
    business_id: "1",
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
    business_id: "2",
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
];

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

export function getPlaceholderBusinessesByCity(citySlug: string): Business[] {
  return placeholderBusinesses.filter((b) => b.city_slug === citySlug);
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
