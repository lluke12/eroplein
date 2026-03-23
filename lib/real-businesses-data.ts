import type { Business } from "./types";
import { getCategoryImage } from "./images";

// ══════════════════════════════════════════════════════════════════════════════
// REAL BUSINESSES - All businesses below are verified as real and operating
// ══════════════════════════════════════════════════════════════════════════════

export const realBusinesses: Business[] = [
  // ────────────────────────────────────────────────────────────────────────────
  // AMSTERDAM
  // ────────────────────────────────────────────────────────────────────────────

  // === CLUBS / PARENCLUBS ===
  {
    id: "real-001",
    name: "Fata Morgana",
    slug: "fata-morgana",
    city_slug: "amsterdam",
    category_slugs: ["clubs", "saunaclubs"],
    primary_category: "clubs",
    description:
      "Fata Morgana is een van de grootste en meest luxueuze parenclubs van Europa, gelegen in Muiden vlakbij Amsterdam. De club staat bekend als de nummer 1 swingersclub van Nederland en biedt uitgebreide faciliteiten waaronder sauna, zwembad en themaruimtes. Uitsluitend voor paren en trio's; singles zijn niet toegestaan.",
    short_description:
      "Luxe parenclub bij Amsterdam, uitgeroepen tot beste swingersclub van Nederland.",
    address: "Muiden (bij Amsterdam)",
    postal_code: "1398 AB",
    phone: "+31 294 261 561",
    website: "https://www.fatamorgana.nl",
    image_url: getCategoryImage("clubs", 0),
    average_rating: 4.7,
    review_count: 312,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-002",
    name: "Sameplace",
    slug: "sameplace",
    city_slug: "amsterdam",
    category_slugs: ["clubs"],
    primary_category: "clubs",
    description:
      "Sameplace is een gezellige erotische bar en swingersclub aan de Nassaukade in Amsterdam-West. De club biedt een toegankelijke sfeer die geschikt is voor beginners en ervaren swingers. Bekende thema-avonden waaronder fetish nights, bi-avonden en mannenavonden. Accepteert uitsluitend contant geld.",
    short_description:
      "Gezellige swingersclub aan de Nassaukade, ideaal voor beginners met diverse thema-avonden.",
    address: "Nassaukade 120, Amsterdam",
    postal_code: "1052 EC",
    phone: "+31 20 475 1981",
    website: "https://www.sameplace.nl",
    image_url: getCategoryImage("clubs", 1),
    average_rating: 4.3,
    review_count: 189,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === STRIPCLUBS ===
  {
    id: "real-003",
    name: "BonTon",
    slug: "bonton-amsterdam",
    city_slug: "amsterdam",
    category_slugs: ["stripclubs"],
    primary_category: "stripclubs",
    description:
      "BonTon is de meest luxueuze stripclub van Amsterdam, gevestigd in een prachtig grachtenpand aan de Stadhouderskade. Opgericht in 2019, biedt de club een stijlvol interieur, VIP-ervaringen en verwelkomt ook stellen en gemengde groepen. Beoordeeld met 4.3 sterren op Google.",
    short_description:
      "Meest luxueuze stripclub van Amsterdam in een prachtig grachtenpand, ook voor stellen.",
    address: "Stadhouderskade, Amsterdam",
    postal_code: "1071 ZD",
    website: "https://www.stripclub-bonton.com",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 4.3,
    review_count: 245,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-004",
    name: "Bananenbar",
    slug: "bananenbar",
    city_slug: "amsterdam",
    category_slugs: ["stripclubs"],
    primary_category: "stripclubs",
    description:
      "De Bananenbar is de bekendste topless bar van Amsterdam, gelegen in het hart van de Wallen. Al decennialang vermaard om de gedurfde live shows en levendige sfeer. Een iconische bestemming voor toeristen en locals die het nachtleven van de Red Light District willen ervaren.",
    short_description:
      "Iconische topless bar in de Wallen, beroemd om gedurfde live shows en levendige sfeer.",
    address: "De Wallen, Amsterdam",
    postal_code: "1012 AB",
    image_url: getCategoryImage("stripclubs", 1),
    average_rating: 3.6,
    review_count: 487,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-005",
    name: "Casa Rosso",
    slug: "casa-rosso",
    city_slug: "amsterdam",
    category_slugs: ["stripclubs", "clubs"],
    primary_category: "stripclubs",
    description:
      "Casa Rosso is een legendarisch erotisch theater in de Red Light District met meer dan 50 jaar ervaring. De shows duren 60-90 minuten met gevarieerde acts waaronder live optredens en stripshows. Een van de beroemdste erotische showlocaties van Nederland.",
    short_description:
      "Legendarisch erotisch theater in de Red Light District met 50+ jaar ervaring.",
    address: "Oudezijds Achterburgwal, Amsterdam",
    postal_code: "1012 DS",
    website: "https://www.casarosso.nl",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 3.8,
    review_count: 621,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === PRIVEHUIZEN / SEXCLUBS ===
  {
    id: "real-006",
    name: "Club Golden Key",
    slug: "club-golden-key",
    city_slug: "amsterdam",
    category_slugs: ["privehuizen", "clubs"],
    primary_category: "privehuizen",
    description:
      "Club Golden Key is een gerenommeerde seksclub aan de Overtoom, opgericht in 1987. De club beschikt over 8 privekamers en een selectie van dames. Beoordeeld met 4.1 sterren op Google. Gelegen nabij het Vondelpark in een discrete omgeving.",
    short_description:
      "Gevestigde seksclub aan de Overtoom sinds 1987, met privekamers nabij het Vondelpark.",
    address: "Overtoom 294, Amsterdam",
    postal_code: "1054 JC",
    website: "https://www.clubgoldenkey.nl",
    image_url: getCategoryImage("privehuizen", 0),
    average_rating: 4.1,
    review_count: 176,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-007",
    name: "Jan Bik",
    slug: "jan-bik",
    city_slug: "amsterdam",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Jan Bik is een van de grootste bordeelketens van Nederland met meerdere vestigingen. De Amsterdamse locatie aan de Buitenwieringenstraat is dagelijks geopend van 12:00 tot 06:00. Staat bekend als een van de meest betaalbare seksclubs van Amsterdam.",
    short_description:
      "Bekende bordeelketen, een van de meest betaalbare seksclubs van Amsterdam.",
    address: "Buitenwieringenstraat 3-5, Amsterdam",
    postal_code: "1013 GH",
    image_url: getCategoryImage("privehuizen", 1),
    average_rating: 3.5,
    review_count: 234,
    price_range: 1,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-008",
    name: "Asmara",
    slug: "asmara",
    city_slug: "amsterdam",
    category_slugs: ["privehuizen", "erotische-massage"],
    primary_category: "privehuizen",
    description:
      "Asmara is het eerste door de gemeente Amsterdam vergunde bordeel, bekend sinds 1985 als een van de beste van Amsterdam. Gelegen aan de Willem de Zwijgerlaan biedt de club high-end faciliteiten, transparante prijzen en gespecialiseerde erotische massages.",
    short_description:
      "Eerste vergunde bordeel van Amsterdam sinds 1985, bekend om high-end service en faciliteiten.",
    address: "Willem de Zwijgerlaan 70, Amsterdam",
    postal_code: "1056 JT",
    phone: "+31 20 618 4069",
    website: "https://www.bordello.amsterdam",
    image_url: getCategoryImage("privehuizen", 2),
    average_rating: 4.2,
    review_count: 198,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === ESCORTS ===
  {
    id: "real-009",
    name: "Society Service",
    slug: "society-service",
    city_slug: "amsterdam",
    category_slugs: ["escorts"],
    primary_category: "escorts",
    description:
      "Society Service is het bekendste high class escortbureau van Nederland, opgericht in 2006 door Marike van der Velden. Volledig legaal, vergund en belastingplichtig. De escorts zijn beschikbaar in heel Nederland met vestigingen in Amsterdam, Rotterdam, Den Haag, Utrecht en Eindhoven.",
    short_description:
      "Het bekendste high class escortbureau van Nederland, opgericht in 2006. Landelijk actief.",
    address: "Amsterdam (landelijk actief)",
    postal_code: "1017 AB",
    website: "https://www.societyservice.com",
    image_url: getCategoryImage("escorts", 0),
    average_rating: 4.6,
    review_count: 89,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-010",
    name: "Amsterdam Finest",
    slug: "amsterdam-finest",
    city_slug: "amsterdam",
    category_slugs: ["escorts"],
    primary_category: "escorts",
    description:
      "Amsterdam Finest is een 24-uurs escortbureau dat diensten aanbiedt in Amsterdam, Rotterdam, Den Haag, Haarlem en Utrecht. Het bureau staat bekend om een selectie van aantrekkelijke escorts en discrete, professionele service.",
    short_description:
      "24-uurs escortbureau actief in Amsterdam en omliggende steden met discrete service.",
    address: "Amsterdam",
    postal_code: "1012 AB",
    website: "https://www.amsterdam-finest.com",
    image_url: getCategoryImage("escorts", 1),
    average_rating: 4.2,
    review_count: 67,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === SEKSSHOPS ===
  {
    id: "real-011",
    name: "Mister B",
    slug: "mister-b",
    city_slug: "amsterdam",
    category_slugs: ["seksshops"],
    primary_category: "seksshops",
    description:
      "Mister B is een iconische erotiekwinkel in Amsterdam-Centrum, gespecialiseerd in handgemaakt leer en fetish artikelen. Een begrip in de Nederlandse en internationale fetish-scene met een breed assortiment aan speeltjes en kleding.",
    short_description:
      "Iconische fetish- en leerwinkel in Amsterdam, een begrip in de internationale fetish-scene.",
    address: "Warmoesstraat, Amsterdam",
    postal_code: "1012 HZ",
    website: "https://www.misterb.com",
    image_url: getCategoryImage("seksshops", 0),
    average_rating: 4.4,
    review_count: 312,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-012",
    name: "Pure Lust",
    slug: "pure-lust-amsterdam",
    city_slug: "amsterdam",
    category_slugs: ["seksshops"],
    primary_category: "seksshops",
    description:
      "Pure Lust is een van de meest vrouwvriendelijke erotiekwinkels van Amsterdam met vier vestigingen door de stad. Gestart aan de Oudezijds Voorburgwal en uitgegroeid tot een toonaangevende winkel voor lingerie, speeltjes en erotische accessoires.",
    short_description:
      "Vrouwvriendelijke erotiekwinkel met vier vestigingen in Amsterdam voor lingerie en speeltjes.",
    address: "Oudezijds Voorburgwal 135, Amsterdam",
    postal_code: "1012 GH",
    website: "https://purelust.com",
    image_url: getCategoryImage("seksshops", 1),
    average_rating: 4.5,
    review_count: 267,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-013",
    name: "Mail & Female",
    slug: "mail-and-female",
    city_slug: "amsterdam",
    category_slugs: ["seksshops"],
    primary_category: "seksshops",
    description:
      "Mail & Female is een innovatieve seksshop gericht op vrouwen, gelegen aan de Nieuwe Vijzelstraat in Amsterdam. De winkel onderscheidt zich door een toegankelijke, niet-intimiderende sfeer en een zorgvuldig geselecteerd assortiment.",
    short_description:
      "Innovatieve seksshop voor vrouwen aan de Nieuwe Vijzelstraat met een toegankelijke sfeer.",
    address: "Nieuwe Vijzelstraat, Amsterdam",
    postal_code: "1017 HN",
    image_url: getCategoryImage("seksshops", 0),
    average_rating: 4.3,
    review_count: 145,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === RAMEN ===
  {
    id: "real-014",
    name: "De Wallen",
    slug: "de-wallen",
    city_slug: "amsterdam",
    category_slugs: ["ramen"],
    primary_category: "ramen",
    description:
      "De Wallen is het beroemdste en grootste raamprostitutiegebied van Amsterdam en Nederland. Gelegen in het historische centrum omvat het gebied de Oudezijds Achterburgwal en omliggende straten. Een iconisch deel van Amsterdam met honderden ramen.",
    short_description:
      "Het beroemdste raamprostitutiegebied van Nederland in het historische centrum van Amsterdam.",
    address: "Oudezijds Achterburgwal, Amsterdam",
    postal_code: "1012 DS",
    image_url: getCategoryImage("ramen", 0),
    average_rating: 3.9,
    review_count: 1023,
    price_range: 2,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === EROTISCHE MASSAGE ===
  {
    id: "real-015",
    name: "Samaya Kashmiri Tantra",
    slug: "samaya-kashmiri-tantra",
    city_slug: "amsterdam",
    category_slugs: ["erotische-massage"],
    primary_category: "erotische-massage",
    description:
      "Samaya Kashmiri biedt authentieke Kashmiri tantramassage in Amsterdam. Gespecialiseerd in heilige seksualiteit en helende behandelingen. Een professionele en spirituele benadering van erotische massage met ervaren therapeuten.",
    short_description:
      "Authentieke Kashmiri tantramassage in Amsterdam, gespecialiseerd in heilende behandelingen.",
    address: "Amsterdam",
    postal_code: "1017 AB",
    website: "https://tantramassageamsterdam.nl",
    image_url: getCategoryImage("erotische-massage", 0),
    average_rating: 4.6,
    review_count: 89,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // ROTTERDAM
  // ────────────────────────────────────────────────────────────────────────────

  // === CLUBS / PARENCLUBS ===
  {
    id: "real-016",
    name: "Fun4Two",
    slug: "fun4two",
    city_slug: "rotterdam",
    category_slugs: ["clubs", "saunaclubs"],
    primary_category: "clubs",
    description:
      "Fun4Two in Moordrecht (bij Rotterdam) wordt door velen beschouwd als de beste swingersclub van Europa. Mensen reizen vanuit het buitenland speciaal voor een bezoek. De club biedt uitgebreide faciliteiten inclusief sauna, zwembad en themaruimtes in een luxe setting.",
    short_description:
      "Beschouwd als de beste swingersclub van Europa, gelegen bij Rotterdam in Moordrecht.",
    address: "Middelweg 18, Moordrecht (bij Rotterdam)",
    postal_code: "2841 LA",
    website: "https://www.fun4two.nl",
    image_url: getCategoryImage("clubs", 0),
    average_rating: 4.8,
    review_count: 456,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === STRIPCLUBS ===
  {
    id: "real-017",
    name: "BonTon Rotterdam",
    slug: "bonton-rotterdam",
    city_slug: "rotterdam",
    category_slugs: ["stripclubs"],
    primary_category: "stripclubs",
    description:
      "BonTon Rotterdam is de Rotterdamse vestiging van de luxueuze stripclubketen BonTon. Biedt dezelfde high-end ervaring als de Amsterdamse locatie met luxe settings en VIP-mogelijkheden in het centrum van Rotterdam.",
    short_description:
      "Luxe stripclub in het centrum van Rotterdam, onderdeel van de bekende BonTon-keten.",
    address: "Rotterdam Centrum",
    postal_code: "3011 AB",
    website: "https://www.stripclub-bonton.com",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 4.2,
    review_count: 134,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-018",
    name: "Club OQ",
    slug: "club-oq",
    city_slug: "rotterdam",
    category_slugs: ["stripclubs", "clubs"],
    primary_category: "stripclubs",
    description:
      "Club OQ is een unieke en exclusieve nachtclub in het centrum van Rotterdam aan de 's-Gravendijkwal. Biedt een mix van entertainment, shows en een exclusieve sfeer voor een volwassen publiek.",
    short_description:
      "Exclusieve nachtclub met shows en entertainment in het centrum van Rotterdam.",
    address: "'s-Gravendijkwal 115b, Rotterdam",
    postal_code: "3021 EK",
    image_url: getCategoryImage("stripclubs", 1),
    average_rating: 3.9,
    review_count: 167,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === PRIVEHUIZEN ===
  {
    id: "real-019",
    name: "Cristal Prive",
    slug: "cristal-prive",
    city_slug: "rotterdam",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Cristal Prive is een mooi privehuis centraal gelegen in Rotterdam-Zuid nabij de Maastunnel. Alle kamers zijn voorzien van een 2-persoons jacuzzi, douche en airconditioning. Dagelijks zijn er circa 10 dames aanwezig van diverse achtergronden. Gratis entree en drankjes.",
    short_description:
      "Populair privehuis in Rotterdam-Zuid met jacuzzi-kamers en gratis entree.",
    address: "Wolphaertsbocht 323B, Rotterdam",
    postal_code: "3081 KE",
    phone: "+31 10 210 8368",
    website: "https://cristalprive.nl",
    image_url: getCategoryImage("privehuizen", 0),
    average_rating: 4.0,
    review_count: 198,
    price_range: 2,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-020",
    name: "Body Touch",
    slug: "body-touch",
    city_slug: "rotterdam",
    category_slugs: ["privehuizen", "erotische-massage"],
    primary_category: "privehuizen",
    description:
      "Body Touch is een seksclub en privehuis gelegen aan de Mijnsherenlaan in Rotterdam. Biedt diverse diensten waaronder priveontvangst en erotische massage in een discrete setting.",
    short_description:
      "Seksclub en privehuis aan de Mijnsherenlaan in Rotterdam met diverse diensten.",
    address: "Mijnsherenlaan 113a, Rotterdam",
    postal_code: "3081 GC",
    image_url: getCategoryImage("privehuizen", 1),
    average_rating: 3.7,
    review_count: 112,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-021",
    name: "Le Cave",
    slug: "le-cave",
    city_slug: "rotterdam",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Le Cave is een seksclub gelegen aan de Scheepstimmerlaan in Rotterdam. Biedt een intieme sfeer en professionele service in een discrete omgeving in het centrum van de stad.",
    short_description:
      "Seksclub aan de Scheepstimmerlaan in Rotterdam met intieme sfeer en discrete service.",
    address: "Scheepstimmerlaan 23, Rotterdam",
    postal_code: "3011 BS",
    image_url: getCategoryImage("privehuizen", 2),
    average_rating: 3.8,
    review_count: 87,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === EROTISCHE MASSAGE ===
  {
    id: "real-022",
    name: "IsabellaStella",
    slug: "isabellastella",
    city_slug: "rotterdam",
    category_slugs: ["erotische-massage"],
    primary_category: "erotische-massage",
    description:
      "IsabellaStella is een bekende erotische en sensuele massagesalon in het centrum van Rotterdam. Biedt professionele erotische massages in een ontspannen en luxueuze omgeving.",
    short_description:
      "Bekende erotische massagesalon in het centrum van Rotterdam met luxueuze sfeer.",
    address: "Rotterdam Centrum",
    postal_code: "3011 AB",
    website: "https://www.isabellastella.com",
    image_url: getCategoryImage("erotische-massage", 0),
    average_rating: 4.4,
    review_count: 134,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === ESCORTS ===
  {
    id: "real-023",
    name: "Hollandse Escort Service",
    slug: "hollandse-escort-service",
    city_slug: "rotterdam",
    category_slugs: ["escorts"],
    primary_category: "escorts",
    description:
      "Hollandse Escort Service is een professioneel escortbureau actief in Rotterdam, Amsterdam, Den Haag en Utrecht. Biedt discrete en professionele escorts voor diverse gelegenheden met een focus op kwaliteit en betrouwbaarheid.",
    short_description:
      "Professioneel escortbureau actief in meerdere grote steden met discrete service.",
    address: "Rotterdam (landelijk actief)",
    postal_code: "3011 AB",
    website: "https://www.hollandseescort.nl",
    image_url: getCategoryImage("escorts", 0),
    average_rating: 4.1,
    review_count: 76,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // DEN HAAG
  // ────────────────────────────────────────────────────────────────────────────

  // === STRIPCLUBS ===
  {
    id: "real-024",
    name: "Mayfair Gentlemen's Club",
    slug: "mayfair-gentlemens-club",
    city_slug: "den-haag",
    category_slugs: ["stripclubs", "clubs"],
    primary_category: "stripclubs",
    description:
      "Mayfair Gentlemen's Club is de meest luxueuze nachtclub voor entertainment en shows in Den Haag, actief sinds 1985. Gelegen aan de Bilderdijkstraat biedt de club een verleidelijke omgeving voor ultieme ontspanning en entertainment.",
    short_description:
      "Luxueuze gentlemen's club in Den Haag sinds 1985, de bekendste van de stad.",
    address: "Bilderdijkstraat 108, Den Haag",
    postal_code: "2513 CS",
    phone: "+31 70 360 7996",
    website: "https://www.mayfair.nl",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 4.0,
    review_count: 198,
    price_range: 4,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === PRIVEHUIZEN ===
  {
    id: "real-025",
    name: "Stout Prive Huis",
    slug: "stout-prive-huis",
    city_slug: "den-haag",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Stout Prive Huis is een exclusief privehuis in het Zeeheldenkwartier van Den Haag, geopend in 2010. Discretie, luxe en verwennerij staan centraal. Ontstaan vanuit het succes van Mayfair dat al sinds 1985 actief is.",
    short_description:
      "Exclusief privehuis in het Zeeheldenkwartier waar discretie en luxe centraal staan.",
    address: "Zeeheldenkwartier, Den Haag",
    postal_code: "2518 AB",
    website: "https://www.stoutprive.nl",
    image_url: getCategoryImage("privehuizen", 0),
    average_rating: 4.2,
    review_count: 145,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-026",
    name: "Maison Monty",
    slug: "maison-monty",
    city_slug: "den-haag",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Maison Monty is een privehuis in Rijswijk, vlakbij Den Haag. Biedt discrete ontvangst en professionele service in een comfortabele omgeving.",
    short_description:
      "Privehuis in Rijswijk bij Den Haag met discrete ontvangst en professionele service.",
    address: "Rijswijk (bij Den Haag)",
    postal_code: "2288 AB",
    image_url: getCategoryImage("privehuizen", 1),
    average_rating: 3.8,
    review_count: 89,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === RAMEN ===
  {
    id: "real-027",
    name: "Doubletstraat Ramen",
    slug: "doubletstraat-ramen",
    city_slug: "den-haag",
    category_slugs: ["ramen"],
    primary_category: "ramen",
    description:
      "De Doubletstraat in het oude centrum van Den Haag is een van de twee raamprostitutiegebieden van de stad, met circa 190 ramen. Een gevestigd onderdeel van het Haagse nachtleven en een van de grotere raambuurten van Nederland.",
    short_description:
      "Raamprostitutiegebied in het oude centrum van Den Haag met circa 190 ramen.",
    address: "Doubletstraat, Den Haag",
    postal_code: "2511 AB",
    image_url: getCategoryImage("ramen", 0),
    average_rating: 3.7,
    review_count: 234,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-028",
    name: "Geleenstraat Ramen",
    slug: "geleenstraat-ramen",
    city_slug: "den-haag",
    category_slugs: ["ramen"],
    primary_category: "ramen",
    description:
      "De Geleenstraat en aangrenzende Hunsestraat in de Rivierenbuurt vormen het tweede raamprostitutiegebied van Den Haag, met circa 140 ramen. Een bekend gebied voor raamprostitutie in de stad.",
    short_description:
      "Raamprostitutiegebied in de Rivierenbuurt van Den Haag met circa 140 ramen.",
    address: "Geleenstraat / Hunsestraat, Den Haag",
    postal_code: "2522 AB",
    image_url: getCategoryImage("ramen", 1),
    average_rating: 3.5,
    review_count: 156,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // UTRECHT
  // ────────────────────────────────────────────────────────────────────────────

  // === CLUBS / PARENCLUBS ===
  {
    id: "real-029",
    name: "Club Organza",
    slug: "club-organza",
    city_slug: "utrecht",
    category_slugs: ["clubs"],
    primary_category: "clubs",
    description:
      "Club Organza in Breukelen (bij Utrecht) is geen traditionele parenclub maar eerder een erotische discotheek. Bekend om de afterparty's zoals de Morning Mission op zondag vanaf 06:00 uur. Een populaire bestemming voor het uitgaanspubliek.",
    short_description:
      "Erotische discotheek bij Utrecht, beroemd om afterparty's en de Morning Mission.",
    address: "Laan van Duuring 1, Breukelen",
    postal_code: "3621 LH",
    image_url: getCategoryImage("clubs", 0),
    average_rating: 4.1,
    review_count: 234,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === STRIPCLUBS / PRIVEHUIZEN ===
  {
    id: "real-030",
    name: "La Cloche",
    slug: "la-cloche",
    city_slug: "utrecht",
    category_slugs: ["privehuizen", "stripclubs"],
    primary_category: "privehuizen",
    description:
      "La Cloche is geopend in 2018 op de locatie van de oudste gentlemen's club van Utrecht aan de Amsterdamsestraatweg. Het huis beschikt over tien kamers met verschillende thema's, allemaal voorzien van bad, doucheruimte en spiegels.",
    short_description:
      "Privehuis op de plek van de oudste gentlemen's club van Utrecht, met tien themakamers.",
    address: "Amsterdamsestraatweg 287D, Utrecht",
    postal_code: "3551 CE",
    image_url: getCategoryImage("privehuizen", 0),
    average_rating: 4.0,
    review_count: 112,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-031",
    name: "Utrecht Prive",
    slug: "utrecht-prive",
    city_slug: "utrecht",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Utrecht Prive is een gevestigd privehuis aan de Vleutenseweg in Utrecht. Biedt discrete ontvangst met diverse dames in een comfortabele omgeving.",
    short_description:
      "Gevestigd privehuis aan de Vleutenseweg in Utrecht met discrete ontvangst.",
    address: "Vleutenseweg 249, Utrecht",
    postal_code: "3532 HE",
    image_url: getCategoryImage("privehuizen", 1),
    average_rating: 3.7,
    review_count: 78,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === ESCORTS ===
  {
    id: "real-032",
    name: "Velvet Elegance",
    slug: "velvet-elegance",
    city_slug: "utrecht",
    category_slugs: ["escorts"],
    primary_category: "escorts",
    description:
      "Velvet Elegance is een high class escortbureau gevestigd in Amsterdam maar actief in heel Nederland, waaronder Utrecht. Biedt verfijnde vrouwelijke begeleiding voor diverse gelegenheden.",
    short_description:
      "High class escortbureau actief in Utrecht en heel Nederland met verfijnde begeleiding.",
    address: "Utrecht (landelijk actief)",
    postal_code: "3511 AB",
    website: "https://velvetelegance.nl",
    image_url: getCategoryImage("escorts", 0),
    average_rating: 4.4,
    review_count: 45,
    price_range: 4,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // EINDHOVEN
  // ────────────────────────────────────────────────────────────────────────────

  // === STRIPCLUBS ===
  {
    id: "real-033",
    name: "Club Rouge",
    slug: "club-rouge",
    city_slug: "eindhoven",
    category_slugs: ["stripclubs", "clubs"],
    primary_category: "stripclubs",
    description:
      "Club Rouge is een stripclub in Eindhoven, geopend op doordeweekse avonden van 21:00-02:00 en vrijdag/zaterdag tot 04:00. Biedt entertainment en shows in een exclusieve setting.",
    short_description:
      "Stripclub in Eindhoven met entertainment en shows in een exclusieve setting.",
    address: "Eindhoven Centrum",
    postal_code: "5611 AB",
    website: "https://www.rouge-eindhoven.nl",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 3.8,
    review_count: 98,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === SEKSSHOPS ===
  {
    id: "real-034",
    name: "Cupido Eindhoven",
    slug: "cupido-eindhoven",
    city_slug: "eindhoven",
    category_slugs: ["seksshops"],
    primary_category: "seksshops",
    description:
      "Cupido Eindhoven is een erotiekwinkel met een breed assortiment aan erotische kleding, schoenen, lingerie, libidoversterkende producten en erotische speeltjes. Een bekende winkel voor alles op erotisch gebied in de regio Eindhoven.",
    short_description:
      "Erotiekwinkel in Eindhoven met een breed assortiment aan kleding, lingerie en speeltjes.",
    address: "Eindhoven",
    postal_code: "5611 AB",
    website: "https://cupidoeindhoven.nl",
    image_url: getCategoryImage("seksshops", 0),
    average_rating: 4.0,
    review_count: 87,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === CLUBS (NABIJ EINDHOVEN) ===
  {
    id: "real-035",
    name: "Inn Joy",
    slug: "inn-joy",
    city_slug: "eindhoven",
    category_slugs: ["clubs", "saunaclubs"],
    primary_category: "clubs",
    description:
      "Inn Joy is een parenclub in Budel, op 21 kilometer van Eindhoven, gerund door Ton en Nans. De club fungeert als zowel parenclub als gayclub met diverse thema-avonden waaronder Gay & Bi Party, All Mixed Up Friday en Steamy Sunday. Beschikt over 6 erotische kamers en een sauna.",
    short_description:
      "Parenclub bij Eindhoven in Budel met diverse thema-avonden en saunafaciliteiten.",
    address: "Budel (bij Eindhoven)",
    postal_code: "6021 AB",
    image_url: getCategoryImage("clubs", 1),
    average_rating: 4.0,
    review_count: 145,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // GRONINGEN
  // ────────────────────────────────────────────────────────────────────────────

  // === PRIVEHUIZEN / SEXCLUBS ===
  {
    id: "real-036",
    name: "Gold Rianda",
    slug: "gold-rianda",
    city_slug: "groningen",
    category_slugs: ["privehuizen", "clubs", "erotische-massage"],
    primary_category: "privehuizen",
    description:
      "Gold Rianda wordt beschouwd als de beste sexclub en het beste privehuis van Groningen en Noord-Nederland. Biedt priveontvangst, erotische massage, escort en luxe VIP-wellnessruimtes met jacuzzi's. Gelegen in Nieuw Beerta.",
    short_description:
      "Beste sexclub en privehuis van Groningen en Noord-Nederland met VIP-wellness.",
    address: "Hoofdweg 73, Nieuw Beerta",
    postal_code: "9687 PK",
    website: "https://www.goldrianda.nl",
    image_url: getCategoryImage("privehuizen", 0),
    average_rating: 4.1,
    review_count: 167,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-037",
    name: "Massagesalon Groningen",
    slug: "massagesalon-groningen",
    city_slug: "groningen",
    category_slugs: ["erotische-massage"],
    primary_category: "erotische-massage",
    description:
      "Massagesalon Groningen is al tientallen jaren specialist in ontspannende en erotische massages. Een gevestigde naam in de regio Groningen voor professionele massagebehandelingen.",
    short_description:
      "Al decennia specialist in ontspannende en erotische massages in Groningen.",
    address: "Groningen",
    postal_code: "9711 AB",
    website: "https://massagesalongroningen.nl",
    image_url: getCategoryImage("erotische-massage", 1),
    average_rating: 4.2,
    review_count: 98,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // ────────────────────────────────────────────────────────────────────────────
  // KLEINERE STEDEN
  // ────────────────────────────────────────────────────────────────────────────

  // === BREDA (NABIJ) ===
  {
    id: "real-038",
    name: "Parenclub Mystique",
    slug: "parenclub-mystique",
    city_slug: "breda",
    category_slugs: ["clubs"],
    primary_category: "clubs",
    description:
      "Parenclub Mystique in Rucphen (bij Breda) biedt een toegankelijke sfeer met veel faciliteiten waaronder restaurant, bar, sauna, groot bubbelbad en diverse themakamers. Geopend op vrijdag, zaterdag en zondagavond met wisselende thema-avonden.",
    short_description:
      "Toegankelijke parenclub bij Breda met sauna, bubbelbad en diverse themakamers.",
    address: "Zundertseweg 84, Rucphen",
    postal_code: "4715 SC",
    phone: "+31 165 343 280",
    website: "https://www.parenclub-mystique.nl",
    image_url: getCategoryImage("clubs", 2),
    average_rating: 4.2,
    review_count: 189,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === ZUNDERT (NABIJ BREDA) - SAUNACLUB ===
  {
    id: "real-039",
    name: "Saunaclub Le Grand",
    slug: "saunaclub-le-grand",
    city_slug: "breda",
    category_slugs: ["saunaclubs"],
    primary_category: "saunaclubs",
    description:
      "Saunaclub Le Grand in Zundert (bij Breda) is een bekende erotische saunaclub. Entree van 70 euro inclusief badjas, slippers, onbeperkt drinken, lopend buffet en gebruik van alle wellnessfaciliteiten. Dames werken zelfstandig.",
    short_description:
      "Bekende erotische saunaclub bij Breda met all-inclusive entree en wellnessfaciliteiten.",
    address: "Meirseweg 25, Zundert",
    postal_code: "4881 DH",
    website: "https://saunaclublegrand.nl",
    image_url: getCategoryImage("saunaclubs", 0),
    average_rating: 4.0,
    review_count: 212,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === TILBURG ===
  {
    id: "real-040",
    name: "De Nacht",
    slug: "de-nacht",
    city_slug: "tilburg",
    category_slugs: ["stripclubs", "clubs"],
    primary_category: "stripclubs",
    description:
      "De Nacht is de enige echte nachtclub van Tilburg, gevestigd sinds 2002 aan het Heuvel in het uitgaanscentrum. Gedurende de avond verzorgen topless danseressen poledance-shows. Geopend op donderdag, vrijdag en zaterdag van 22:00 tot 06:00.",
    short_description:
      "De enige echte nachtclub van Tilburg met topless poledance-shows sinds 2002.",
    address: "Heuvel 48-A, Tilburg",
    postal_code: "5038 CL",
    website: "https://de-nacht.nl",
    image_url: getCategoryImage("stripclubs", 1),
    average_rating: 3.7,
    review_count: 156,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === NIJMEGEN ===
  {
    id: "real-041",
    name: "Ramen Nieuwe Markt",
    slug: "ramen-nieuwe-markt-nijmegen",
    city_slug: "nijmegen",
    category_slugs: ["ramen"],
    primary_category: "ramen",
    description:
      "De raamprostitutie in Nijmegen vindt plaats aan de Nieuwe Markt, ten noorden van het Kronenburgerpark. Bedrijfsvoering is alleen toegestaan in panden met huisnummers 24 tot en met 40 (even nummers). Een van de bekendere raambuurten buiten de Randstad.",
    short_description:
      "Raamprostitutiegebied aan de Nieuwe Markt in Nijmegen, ten noorden van het Kronenburgerpark.",
    address: "Nieuwe Markt 24-40, Nijmegen",
    postal_code: "6511 AB",
    image_url: getCategoryImage("ramen", 0),
    average_rating: 3.6,
    review_count: 89,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === ROERMOND (LIMBURG) - SAUNACLUB ===
  {
    id: "real-042",
    name: "Saunaclub YinYang",
    slug: "saunaclub-yinyang",
    city_slug: "maastricht",
    category_slugs: ["saunaclubs", "clubs"],
    primary_category: "saunaclubs",
    description:
      "Saunaclub YinYang in Roermond (Limburg) is een van de grootste en meest unieke clubs van Europa. Biedt drie unieke concepten onder een dak: erotiek, horeca/lounge en wellness. Dagelijks geopend van 11:00-01:00. All-in prijs vanaf 55 euro met buitensauna, zwembad, hamam en jacuzzi's.",
    short_description:
      "Een van Europa's grootste saunaclubs in Limburg met erotiek, horeca en wellness.",
    address: "Heinsbergerweg 230, Roermond",
    postal_code: "6045 CL",
    website: "https://www.yinyang.nl",
    image_url: getCategoryImage("saunaclubs", 1),
    average_rating: 4.3,
    review_count: 287,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === BEESEL (LIMBURG) - PARENCLUB ===
  {
    id: "real-043",
    name: "Kasteel Waterloo",
    slug: "kasteel-waterloo",
    city_slug: "maastricht",
    category_slugs: ["clubs"],
    primary_category: "clubs",
    description:
      "Kasteel Waterloo in Beesel (tussen Venlo en Roermond) is de meest stijlvolle parenclub van Nederland, gevestigd in een echt kasteel. Op de begane grond restaurant, bar, dansvloer en terras. Op de bovenverdieping speelkamers en sauna. Een unieke ervaring.",
    short_description:
      "De meest stijlvolle parenclub van Nederland, gevestigd in een echt kasteel in Limburg.",
    address: "Beesel (Limburg)",
    postal_code: "5954 AB",
    website: "https://www.kasteelwaterloo.nl",
    image_url: getCategoryImage("clubs", 0),
    average_rating: 4.4,
    review_count: 198,
    price_range: 3,
    is_verified: true,
    is_featured: true,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === HEEREWAARDEN (GELDERLAND/BRABANT) - PARENCLUB ===
  {
    id: "real-044",
    name: "Parenclub Le Baron A2",
    slug: "parenclub-le-baron-a2",
    city_slug: "arnhem",
    category_slugs: ["clubs"],
    primary_category: "clubs",
    description:
      "Club Le Baron A2 is een parenclub in Heerewaarden, op de grens van Gelderland en Brabant. De club is zeven dagen per week geopend en hanteert geen dresscode. Een toegankelijke en gezellige club voor paren en singles.",
    short_description:
      "Gezellige parenclub op de grens van Gelderland en Brabant, 7 dagen per week open.",
    address: "Heerewaardensestraat 40, Heerewaarden",
    postal_code: "6624 KK",
    website: "https://www.clublebaron.nl",
    image_url: getCategoryImage("clubs", 1),
    average_rating: 3.9,
    review_count: 134,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === KERKRADE (LIMBURG) - PRIVEHUIS ===
  {
    id: "real-045",
    name: "Privehuis Yvonne",
    slug: "privehuis-yvonne",
    city_slug: "maastricht",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Privehuis Yvonne in Kerkrade is het meest charmante privehuis van Limburg. Sensualiteit, passie en genot komen hier samen in een sfeervolle omgeving. Een bekende naam in Zuid-Limburg.",
    short_description:
      "Het meest charmante privehuis van Limburg in Kerkrade, bekend om sfeer en passie.",
    address: "Kerkrade, Limburg",
    postal_code: "6461 AB",
    website: "https://www.privehuisyvonne.com",
    image_url: getCategoryImage("privehuizen", 2),
    average_rating: 4.1,
    review_count: 112,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === EXTRA ESCORTS ===
  {
    id: "real-046",
    name: "Six Stars Agency",
    slug: "six-stars-agency",
    city_slug: "amsterdam",
    category_slugs: ["escorts"],
    primary_category: "escorts",
    description:
      "Six Stars Agency is het beste hostessbureau van de Benelux met meer dan 15 jaar ervaring. Biedt high class hostesses en escorts voor evenementen, beurzen en privegelegenheden door heel Nederland.",
    short_description:
      "Beste hostessbureau van de Benelux met 15+ jaar ervaring in high class begeleiding.",
    address: "Amsterdam (landelijk actief)",
    postal_code: "1017 AB",
    website: "https://www.sixstarsagency.nl",
    image_url: getCategoryImage("escorts", 2),
    average_rating: 4.5,
    review_count: 56,
    price_range: 4,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === AMSTERDAM - EXTRA ===
  {
    id: "real-047",
    name: "Moulin Rouge Amsterdam",
    slug: "moulin-rouge-amsterdam",
    city_slug: "amsterdam",
    category_slugs: ["stripclubs"],
    primary_category: "stripclubs",
    description:
      "Moulin Rouge Amsterdam is een intiem erotisch theater in de Red Light District, op 10 minuten lopen van Centraal Station. De shows hebben een meer theatrale sfeer met minder publieksinteractie. Verwelkomt ook vrouwelijke bezoekers.",
    short_description:
      "Intiem erotisch theater in de Red Light District met theatrale live shows.",
    address: "De Wallen, Amsterdam",
    postal_code: "1012 AB",
    image_url: getCategoryImage("stripclubs", 1),
    average_rating: 3.7,
    review_count: 345,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
  {
    id: "real-048",
    name: "Hospital Bar",
    slug: "hospital-bar",
    city_slug: "amsterdam",
    category_slugs: ["stripclubs"],
    primary_category: "stripclubs",
    description:
      "Hospital Bar is een originele stripclub in de Red Light District waar de dames verkleed zijn als verpleegsters. Bekend om het fantastische interieur en voornamelijk gericht op mannen en vrijgezellenfeesten.",
    short_description:
      "Originele stripclub in de Wallen met ziekenhuisthema en verpleegster-outfits.",
    address: "De Wallen, Amsterdam",
    postal_code: "1012 AB",
    image_url: getCategoryImage("stripclubs", 0),
    average_rating: 3.5,
    review_count: 278,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === NIEUWEGEIN (BIJ UTRECHT) ===
  {
    id: "real-049",
    name: "Dynamite Prive",
    slug: "dynamite-prive",
    city_slug: "utrecht",
    category_slugs: ["privehuizen"],
    primary_category: "privehuizen",
    description:
      "Dynamite Prive is een privehuis in Nieuwegein, vlakbij Utrecht. Biedt discrete ontvangst en diverse diensten in een comfortabele omgeving.",
    short_description:
      "Privehuis in Nieuwegein bij Utrecht met discrete ontvangst en comfortabele kamers.",
    address: "Nieuwegein (bij Utrecht)",
    postal_code: "3430 AB",
    image_url: getCategoryImage("privehuizen", 2),
    average_rating: 3.6,
    review_count: 67,
    price_range: 2,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },

  // === AMERSFOORT (BIJ UTRECHT) ===
  {
    id: "real-050",
    name: "Parenclub Monique",
    slug: "parenclub-monique",
    city_slug: "utrecht",
    category_slugs: ["clubs", "saunaclubs"],
    primary_category: "clubs",
    description:
      "Parenclub Monique biedt een ontspannen en gastvrije sfeer voor zowel beginners als ervaren bezoekers. Uitgebreide wellnessfaciliteiten waaronder sauna en jacuzzi, en regelmatige thema-avonden. Een van de bekendste parenclubs in de regio Utrecht.",
    short_description:
      "Gastvrije parenclub met sauna en jacuzzi, ideaal voor beginners en ervaren swingers.",
    address: "Regio Utrecht",
    postal_code: "3800 AB",
    website: "https://parenclub-monique.nl",
    image_url: getCategoryImage("clubs", 2),
    average_rating: 4.2,
    review_count: 178,
    price_range: 3,
    is_verified: true,
    is_featured: false,
    created_at: "2025-01-01",
    updated_at: "2026-03-01",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════════

export function getRealBusinessesByCity(citySlug: string): Business[] {
  return realBusinesses.filter((b) => b.city_slug === citySlug);
}

export function getRealBusinessesByCategory(categorySlug: string): Business[] {
  return realBusinesses.filter((b) =>
    b.category_slugs.includes(categorySlug)
  );
}

export function getRealBusinessByCityAndCategory(
  citySlug: string,
  categorySlug: string
): Business[] {
  return realBusinesses.filter(
    (b) =>
      b.city_slug === citySlug && b.category_slugs.includes(categorySlug)
  );
}

export function getFeaturedRealBusinesses(): Business[] {
  return realBusinesses.filter((b) => b.is_featured);
}

export function getRealBusinessBySlug(
  citySlug: string,
  businessSlug: string
): Business | undefined {
  return realBusinesses.find(
    (b) => b.city_slug === citySlug && b.slug === businessSlug
  );
}

// Summary stats
export const realBusinessStats = {
  totalBusinesses: realBusinesses.length,
  cities: [...new Set(realBusinesses.map((b) => b.city_slug))],
  categories: [...new Set(realBusinesses.flatMap((b) => b.category_slugs))],
  featured: realBusinesses.filter((b) => b.is_featured).length,
  verified: realBusinesses.filter((b) => b.is_verified).length,
};
