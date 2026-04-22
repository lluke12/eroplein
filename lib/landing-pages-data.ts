// ── Landing pages database ──────────────────────────────────────────────
// Landingspagina's voor commerciële zoektermen: /beste/[slug]
//
// Structuur:
// - publishedAt: datum waarop deze pagina live mag (ISR + runtime filter)
// - Een landingspagina is meestal "beste [categorie] in [stad]" of "[cat] vergelijking [stad]"

export interface LandingPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  // Welke bedrijven tonen op deze landingspage
  filterType: "city_category" | "city" | "category" | "custom";
  citySlug?: string;
  categorySlug?: string;
  customBusinessIds?: string[];
  // Content secties onder de bedrijvenlijst
  sections: {
    heading: string;
    body: string;
  }[];
  faq: { question: string; answer: string }[];
  relatedLandings?: string[];
  publishedAt: string;
  updatedAt: string;
}

export const landingPages: LandingPage[] = [
  // ── VANDAAG GEPUBLICEERD (voorbeeld-initieelset) ──

  {
    slug: "beste-escortbureaus-amsterdam",
    title: "Beste escortbureaus Amsterdam 2026",
    metaTitle: "Beste escortbureaus Amsterdam 2026 — top 10 reviews",
    metaDescription:
      "De 10 best beoordeelde escortbureaus in Amsterdam op basis van echte reviews. Prijzen, beschikbaarheid, specialisaties en ervaringen per bureau.",
    h1: "Beste escortbureaus in Amsterdam",
    intro:
      "Amsterdam heeft tientallen escortbureaus. De grote verschillen zitten in prijs, kwaliteit van de dames, discretie en betrouwbaarheid. Deze top 10 is gebaseerd op de meest recente reviews van echte bezoekers op Eroplein, gecombineerd met vergunningcontrole via de KVK en gemeentedatabase.",
    filterType: "city_category",
    citySlug: "amsterdam",
    categorySlug: "escorts",
    sections: [
      {
        heading: "Hoe hebben we deze lijst samengesteld?",
        body: "Gesorteerd op gemiddelde Eroplein-reviewscore, met als secondaire factor het aantal reviews. Bureaus met minder dan 3 reviews zijn uitgesloten om statistische ruis te vermijden. Alle bureaus zijn geverifieerd via KVK-inschrijving en gemeentelijke vergunning.",
      },
      {
        heading: "Waar letten we op?",
        body: "Betrouwbaarheid (transparante prijzen, duidelijke communicatie), kwaliteit van de dames (passend bij beschrijving), discretie (hoe gaat het bureau om met klantgegevens), service (hoe snel reactie bij boeking en problemen), en value-for-money (prijs-kwaliteit).",
      },
      {
        heading: "Prijsrange Amsterdam escorts",
        body: "Gemiddeld 180-250 euro per uur incall, 220-320 euro per uur outcall. Topbureaus zitten in de range 250-400 euro. Staffelkorting voor 2+ uur boekingen is gangbaar.",
      },
    ],
    faq: [
      {
        question: "Wat is het beste escortbureau in Amsterdam?",
        answer:
          "Dat hangt af van je voorkeur. Voor hoog-budget luxe is Society Service al jaren topper; voor middenklasse kwaliteit-prijs zijn bureaus als Bonton en Escort Service Excel consistent hoog gewaardeerd.",
      },
      {
        question: "Kan ik last-minute een escort boeken in Amsterdam?",
        answer:
          "Ja, de meeste grote Amsterdamse bureaus hebben last-minute beschikbaarheid. Rekening houden met iets hogere prijzen (10-20% toeslag) en kleinere keuze qua dames.",
      },
      {
        question: "Wat is een redelijke aanbetaling?",
        answer:
          "20-30% vooraf is normaal voor een nieuwe klant. Rest contant of met pin ter plaatse. Vermijd bureaus die 100% vooruitbetaling eisen.",
      },
    ],
    relatedLandings: [
      "beste-parenclubs-amsterdam",
      "beste-erotische-massage-amsterdam",
      "beste-escorts-rotterdam",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  {
    slug: "beste-parenclubs-amsterdam",
    title: "Beste parenclubs Amsterdam 2026",
    metaTitle: "Beste parenclubs Amsterdam 2026 — top clubs & reviews",
    metaDescription:
      "De best beoordeelde parenclubs in en rond Amsterdam: Fata Morgana, Sameplace, Society en meer. Reviews, prijzen, huisregels en dresscode per club.",
    h1: "Beste parenclubs in Amsterdam",
    intro:
      "Amsterdam en omgeving kent een compacte maar sterke parenclub-scene. Van de wereldberoemde Fata Morgana in Muiden tot de intieme stadsclubs als Sameplace: hier vind je een overzicht van de beste opties, gesorteerd op Eroplein-reviewscore.",
    filterType: "city_category",
    citySlug: "amsterdam",
    categorySlug: "clubs",
    sections: [
      {
        heading: "Parenclubs vs seksclubs: het verschil",
        body: "Een parenclub is voor paren (en soms trio's/singles op specifieke avonden) waar bezoekers zelf actief worden met andere bezoekers. Een seksclub heeft betaalde dames in dienst. Check altijd vooraf welk type club je bezoekt.",
      },
      {
        heading: "Prijsrange Amsterdam parenclubs",
        body: "Entree voor een paar: 50-100 euro op normale avonden, 80-150 euro op themanights. Drankjes vaak inclusief of apart (normale horecaprijzen). Lockers, handdoek en badjas zijn standaard.",
      },
      {
        heading: "Dresscode en etiquette",
        body: "Aankomst: smart casual, geen sportkleding. Binnen: badjas, lingerie, of naakt (afhankelijk van clubbeleid). Respect voor 'nee' is essentieel — geen enkele serieuze club tolereert grensoverschrijdend gedrag.",
      },
    ],
    faq: [
      {
        question: "Mag ik als single naar Fata Morgana?",
        answer:
          "Nee, Fata Morgana is strikt paren-only. Singles zijn niet welkom, ook niet op speciale avonden. Voor singles zijn er aparte clubs in de regio.",
      },
      {
        question: "Wat kost een avond in een parenclub?",
        answer:
          "Totaalbudget voor een avond: entree 50-100 euro, drankjes 30-60 euro, eventuele eten 40-80 euro. Reken dus op 120-240 euro voor een complete avond voor twee.",
      },
      {
        question: "Kan ik reserveren bij een parenclub?",
        answer:
          "Meestal niet nodig maar wel aanbevolen op drukke avonden. Grote clubs hebben vaak online ledenportal; kleinere clubs werken op bel-reservering.",
      },
    ],
    relatedLandings: [
      "beste-escortbureaus-amsterdam",
      "beste-saunaclubs-utrecht",
      "beste-parenclubs-rotterdam",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  {
    slug: "beste-erotische-massage-amsterdam",
    title: "Beste erotische massage Amsterdam 2026",
    metaTitle: "Beste erotische massage Amsterdam — tantra, body-to-body, nuru",
    metaDescription:
      "Top erotische massagesalons in Amsterdam: tantra, body-to-body, nuru, four-hands. Vergelijk salons op reviews, prijzen en specialisaties.",
    h1: "Beste erotische massage in Amsterdam",
    intro:
      "Amsterdam heeft een rijk aanbod aan erotische massagesalons, van traditionele body-to-body tot spirituele tantra en Japanse nuru-technieken. Deze gids helpt je de juiste keuze maken op basis van reviews, techniek en budget.",
    filterType: "city_category",
    citySlug: "amsterdam",
    categorySlug: "erotische-massage",
    sections: [
      {
        heading: "Welke massagetechniek past bij jou?",
        body: "Tantra (90-120 min, spiritueel, energie-gericht) voor diepe ontspanning. Body-to-body (60 min, fysiek, intens) voor sensuele verbinding. Nuru (gel-based, Japans, glad) voor een unieke ervaring. Four-hands (2 masseuses) voor maximale intensiteit.",
      },
      {
        heading: "Prijsrange Amsterdam erotische massage",
        body: "30 min: 80-120 euro. 60 min: 130-200 euro. 90 min tantra: 200-280 euro. Four-hands body-to-body: 300-400 euro per uur. Happy end is bij veel salons niet inbegrepen — check vooraf.",
      },
      {
        heading: "Wat kun je verwachten?",
        body: "Douche en handdoek vooraf. Masseuse werkt professioneel maar intiem. Je blijft de controle houden — kan altijd aangeven als iets niet goed voelt. Na de sessie: rustige afsluiting, douchen, drankje.",
      },
    ],
    faq: [
      {
        question: "Is een erotische massage anoniem?",
        answer:
          "Ja. Alle grote salons werken cash of pin zonder registratie. Boekingen gaan via vooraf-bel of online formulier met voornaam.",
      },
      {
        question: "Kan ik samen met mijn partner komen?",
        answer:
          "Ja, duo-massages en koppelmassages zijn standaard bij de meeste Amsterdamse salons. Reserveer vooraf voor beschikbaarheid van meerdere masseuses.",
      },
      {
        question: "Wat is nuru massage precies?",
        answer:
          "Nuru is een Japanse massagevorm waarbij een glad, smaakneutraal algen-gel wordt gebruikt. De masseuse glijdt haar lichaam over het jouwe. Bijzonder sensueel en een unieke ervaring.",
      },
    ],
    relatedLandings: [
      "beste-tantra-nederland",
      "beste-parenclubs-amsterdam",
      "beste-erotische-massage-rotterdam",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  {
    slug: "beste-parenclubs-rotterdam",
    title: "Beste parenclubs Rotterdam 2026",
    metaTitle: "Beste parenclubs Rotterdam 2026 — top clubs + reviews",
    metaDescription:
      "Parenclubs in Rotterdam vergeleken: reviews, prijzen, thema-avonden en dresscode. De top opties voor paren, swingers en trio's.",
    h1: "Beste parenclubs in Rotterdam",
    intro:
      "Rotterdam heeft een eigen parenclub-scene, minder groot dan Amsterdam maar met enkele sterke clubs. Deze gids toont de best beoordeelde opties in en rond de havenstad, gebaseerd op Eroplein-reviews.",
    filterType: "city_category",
    citySlug: "rotterdam",
    categorySlug: "clubs",
    sections: [
      {
        heading: "Rotterdams eigen karakter",
        body: "Rotterdamse parenclubs kenmerken zich door een no-nonsense sfeer: minder pretentie, meer focus op gezelligheid en goede faciliteiten. Prijzen liggen doorgaans 10-20% lager dan vergelijkbare Amsterdamse clubs.",
      },
      {
        heading: "Prijsrange Rotterdam parenclubs",
        body: "Entree 40-80 euro per paar, drankjes aparte prijs of inclusief (per club). Tussen 60-120 euro voor een complete avond.",
      },
    ],
    faq: [
      {
        question: "Zijn Rotterdamse parenclubs toegankelijker voor beginners?",
        answer:
          "Ja, de sfeer is doorgaans minder intimiderend dan in Amsterdamse luxeclubs. Check 'beginnersavonden' of introductie-sessies bij meerdere clubs.",
      },
      {
        question: "Welke parenclub in Rotterdam heeft de beste reviews?",
        answer:
          "Fluctueert per jaar. Check actuele Eroplein-reviews voor top 3 met hoogste score en meest recente feedback.",
      },
    ],
    relatedLandings: [
      "beste-parenclubs-amsterdam",
      "beste-escortbureaus-rotterdam",
      "beste-erotische-massage-rotterdam",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  {
    slug: "beste-escorts-utrecht",
    title: "Beste escort Utrecht 2026",
    metaTitle: "Beste escort Utrecht 2026 — top bureaus & zelfstandigen",
    metaDescription:
      "Top escortbureaus en onafhankelijke escorts in Utrecht met echte reviews. Vergelijk prijzen, specialisaties en beschikbaarheid.",
    h1: "Beste escort in Utrecht",
    intro:
      "Utrecht, centraal gelegen in Nederland, heeft een solide escortaanbod. Van landelijke bureaus met Utrechts hub tot onafhankelijke escorts: deze gids toont de best beoordeelde opties.",
    filterType: "city_category",
    citySlug: "utrecht",
    categorySlug: "escorts",
    sections: [
      {
        heading: "Centraal gelegen = flexibel",
        body: "Utrechtse escorts bedienen vaak ook de bredere Randstad (Amsterdam, Den Haag, Rotterdam) met korte reistijd. Outcall naar hotels bij station Utrecht Centraal is zeer toegankelijk.",
      },
      {
        heading: "Prijsrange Utrecht escorts",
        body: "Incall 150-250 euro per uur, outcall 200-300 euro. Hotel-outcall Utrecht CS: vaak geen extra reiskosten binnen de ring.",
      },
    ],
    faq: [
      {
        question: "Zijn Utrechtse escortbureaus anders dan Amsterdamse?",
        answer:
          "Kleinere schaal, gemiddeld 10-20% lagere prijzen, meer focus op herhaalklanten uit de regio en hotel-outcall bij Utrecht CS.",
      },
    ],
    relatedLandings: [
      "beste-escortbureaus-amsterdam",
      "beste-escorts-den-haag",
      "beste-parenclubs-utrecht",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  {
    slug: "beste-saunaclubs-nederland",
    title: "Beste saunaclubs Nederland 2026",
    metaTitle: "Beste saunaclubs Nederland 2026 — FKK top 10",
    metaDescription:
      "De 10 best beoordeelde FKK-saunaclubs van Nederland. Kerkdriel, Venlo, Utrecht en meer — vergelijk entree, dames, wellness-faciliteiten.",
    h1: "Beste saunaclubs van Nederland",
    intro:
      "Nederland kent een handvol vooraanstaande FKK-stijl saunaclubs, gemodelleerd naar de Duitse traditie. Deze top 10 toont clubs op basis van Eroplein-reviews, gesorteerd op gemiddelde score en reviewvolume.",
    filterType: "category",
    categorySlug: "saunaclubs",
    sections: [
      {
        heading: "Wat maakt een FKK-saunaclub bijzonder?",
        body: "All-in concept: entree dekt wellness, sauna, zwembad, buffet. Sessies met dames komen extra. Geen druk, iedereen naakt of met handdoek. Typisch Duits in aanpak, in Nederland vooral rond Kerkdriel/Venlo gevestigd.",
      },
      {
        heading: "Prijsrange Nederlandse saunaclubs",
        body: "Entree 80-140 euro all-in. Sessie 30 min met dame: 70-120 euro. Uurtarief: 130-220 euro. Totaalbudget rustige avond: 150-250 euro. Actieve avond met meerdere sessies: 300-500 euro.",
      },
      {
        heading: "Wanneer gaan?",
        body: "Doordeweeks (woensdag-donderdag) voor rust. Vrijdag/zaterdag voor drukte en meer keus qua dames. Openingsuren meestal 12:00 tot laat (sommige clubs 4:00).",
      },
    ],
    faq: [
      {
        question: "Is Club Fellini echt zo populair?",
        answer:
          "Ja, al jaren top-3 in Nederlandse reviews. Groot complex, consistente kwaliteit, goed bereikbaar vanaf A2 en A27.",
      },
      {
        question: "Zijn Duitse FKK-clubs beter?",
        answer:
          "Niet per se beter, wel groter. Duitse top-clubs (Artemis Berlijn, Pascha Keulen) hebben meer keuze in dames maar ook hogere drukte en hogere prijzen.",
      },
      {
        question: "Is FKK hetzelfde als een bordeel?",
        answer:
          "Juridisch ja — een vergund seksbedrijf. In beleving anders: meer wellness-setting, naturistische sfeer, all-in pakket.",
      },
    ],
    relatedLandings: [
      "beste-parenclubs-nederland",
      "beste-saunaclubs-utrecht",
      "beste-saunaclubs-brabant",
    ],
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
  },

  // ── SCHEDULED: 14 dagen vooruit (2026-04-23 t/m 2026-05-06) ──

  {
    slug: "beste-escorts-rotterdam",
    title: "Beste escort Rotterdam 2026",
    metaTitle: "Beste escort Rotterdam 2026 — top 10 bureaus & dames",
    metaDescription: "Top 10 best beoordeelde escortbureaus en zelfstandige escorts in Rotterdam. Vergelijk prijzen, specialisaties en reviews van echte bezoekers.",
    h1: "Beste escort in Rotterdam",
    intro: "Rotterdam heeft als tweede stad van Nederland een eigen escortmarkt. Minder prijspunt-druk dan Amsterdam, meer focus op consistente kwaliteit. Deze top 10 is gebaseerd op Eroplein-reviews van echte bezoekers.",
    filterType: "city_category",
    citySlug: "rotterdam",
    categorySlug: "escorts",
    sections: [
      { heading: "Rotterdamse markt in cijfers", body: "Gemiddelde uurprijs incall: 160-230 euro. Outcall met hotel-afspraak in centrum 200-280 euro. Over het algemeen 10-20% onder Amsterdamse tarieven voor vergelijkbaar niveau." },
      { heading: "Havenstad-mentaliteit", body: "Rotterdamse escortbureaus staan bekend om no-nonsense service: minder glamour, meer directheid en goede prijs-kwaliteit. Reviews gaan vaak over betrouwbaarheid en professionele uitvoering." }
    ],
    faq: [
      { question: "Wat is het gemiddelde tarief in Rotterdam?", answer: "Incall 160-230 euro per uur, outcall 200-280 euro. Budget-opties vanaf 120 euro bij onafhankelijke escorts." },
      { question: "Kan ik last-minute boeken?", answer: "Ja, vrijwel alle grotere bureaus hebben last-minute beschikbaarheid. Reken op 10-15% toeslag." }
    ],
    relatedLandings: ["beste-escortbureaus-amsterdam", "beste-escorts-den-haag", "beste-parenclubs-rotterdam"],
    publishedAt: "2026-04-23",
    updatedAt: "2026-04-23",
  },

  {
    slug: "beste-parenclubs-nederland",
    title: "Beste parenclubs Nederland 2026 — top 15",
    metaTitle: "Beste parenclubs Nederland 2026 — ranglijst top 15",
    metaDescription: "De 15 best beoordeelde parenclubs van Nederland: Fata Morgana, De Kastelein, The Chalet, Sameplace en meer. Sfeer, prijzen en reviews.",
    h1: "Beste parenclubs van Nederland",
    intro: "Nederland kent ongeveer 30-40 actieve parenclubs. Deze ranglijst toont de top 15 op basis van Eroplein-reviews, review-volume en actueel klantgeluid. Ideaal startpunt om je eerste (of volgende) clubbezoek te plannen.",
    filterType: "category",
    categorySlug: "clubs",
    sections: [
      { heading: "Wat onderscheidt een topclub?", body: "Consistente hygiene, duidelijke huisregels, ervaren personeel, voldoende ruimte op drukke avonden, goede ventilatie en verlichting, en een duidelijk deurbeleid dat grensoverschrijdend gedrag direct aanpakt." },
      { heading: "Prijsrange top parenclubs", body: "Gemiddelde entree voor paren: 50-120 euro. Luxe clubs (Fata Morgana, The Chalet) gaan richting 150 euro per paar op thematische avonden. Drankjes per club verschillend." }
    ],
    faq: [
      { question: "Welke parenclub is nr 1 in Nederland?", answer: "Fata Morgana in Muiden is al jaren de best-beoordeelde parenclub van Nederland met een gemiddelde van 4.7/5." },
      { question: "Mag ik als single naar een topparenclub?", answer: "Meestal niet. Toppers als Fata Morgana en De Kastelein zijn paren-only. Voor singles zijn er specifieke clubs of single-avonden in kleinere clubs." }
    ],
    relatedLandings: ["beste-parenclubs-amsterdam", "beste-parenclubs-rotterdam", "beste-saunaclubs-nederland"],
    publishedAt: "2026-04-24",
    updatedAt: "2026-04-24",
  },

  {
    slug: "beste-escorts-eindhoven",
    title: "Beste escort Eindhoven 2026",
    metaTitle: "Beste escort Eindhoven 2026 — top bureaus",
    metaDescription: "Top escortbureaus in Eindhoven: reviews, prijzen en specialisaties. Van Brabantse gezelligheid tot luxe outcall naar Eindhoven Centrum.",
    h1: "Beste escort in Eindhoven",
    intro: "Eindhoven, technologiestad van Nederland, heeft een solide escortmarkt gericht op zowel zakelijke als lokale klanten. Deze lijst toont de best beoordeelde bureaus op basis van Eroplein-reviews.",
    filterType: "city_category",
    citySlug: "eindhoven",
    categorySlug: "escorts",
    sections: [
      { heading: "Brabantse markt", body: "Eindhovense escorts liggen qua prijs tussen Amsterdam en kleinere steden: 140-220 euro per uur incall is gangbaar. Hotel-outcall in centrum van Eindhoven is zeer toegankelijk." },
      { heading: "Zakelijke klanten", body: "High Tech Campus en Brainport trekken zakelijk publiek; bureaus spelen hier op in met discrete outcall naar hotels en korte-termijn-boekingen." }
    ],
    faq: [
      { question: "Welk escortbureau in Eindhoven scoort het hoogst?", answer: "Fluctueert per jaar. Check de actuele Eroplein-top 5 voor Eindhoven voor recente reviews." },
      { question: "Is hotel-outcall in Eindhoven mogelijk?", answer: "Ja, alle grotere bureaus leveren aan hotels in centrum. Inkomhal-discretie wordt gerespecteerd." }
    ],
    relatedLandings: ["beste-escorts-tilburg", "beste-escorts-s-hertogenbosch", "beste-erotische-massage-eindhoven"],
    publishedAt: "2026-04-25",
    updatedAt: "2026-04-25",
  },

  {
    slug: "beste-erotische-massage-utrecht",
    title: "Beste erotische massage Utrecht 2026",
    metaTitle: "Beste erotische massage Utrecht 2026 — top salons",
    metaDescription: "Top erotische massagesalons in Utrecht: tantra, body-to-body, nuru. Reviews, prijzen en specialisaties. Centraal gelegen, goed bereikbaar.",
    h1: "Beste erotische massage in Utrecht",
    intro: "Utrecht heeft een diverse erotische massage-scene met nadruk op tantra en wellness-georiënteerde salons. Centraal in Nederland betekent: ook klanten uit Amsterdam, Amersfoort en Gorinchem. Deze top 10 toont de best beoordeelde salons.",
    filterType: "city_category",
    citySlug: "utrecht",
    categorySlug: "erotische-massage",
    sections: [
      { heading: "Utrechtse specialisaties", body: "Opvallend veel tantra-gerichte salons — mogelijk door de hoge concentratie aan yoga- en wellness-liefhebbers. Ook body-to-body en nuru goed vertegenwoordigd." },
      { heading: "Prijsrange", body: "30 min: 70-110 euro. 60 min: 120-180 euro. Tantra 90 min: 180-260 euro. Onder landelijk gemiddelde voor vergelijkbaar niveau." }
    ],
    faq: [
      { question: "Welke massagevorm is populair in Utrecht?", answer: "Tantra springt eruit. Ruim aanbod, vaak combineerd met ademwerk en meditatie-elementen." },
      { question: "Kan ik als paar een massage boeken?", answer: "Ja, alle grotere salons bieden koppelmassage aan. Boek vooraf voor beschikbaarheid van twee masseuses." }
    ],
    relatedLandings: ["beste-tantra-nederland", "beste-erotische-massage-amsterdam", "beste-escorts-utrecht"],
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
  },

  {
    slug: "beste-privehuizen-amsterdam",
    title: "Beste privehuizen Amsterdam 2026",
    metaTitle: "Beste privehuizen Amsterdam 2026 — top adressen",
    metaDescription: "Top privehuizen in Amsterdam: huiselijke sfeer, meerdere dames ter plekke, vaste prijzen. Reviews en praktische info per adres.",
    h1: "Beste privehuizen in Amsterdam",
    intro: "Amsterdam telt meerdere vergunde privehuizen verspreid over de stad. Voor wie zoekt naar een toegankelijke, huiselijke setting zonder vooraf boeken, is dit dé optie. Deze top toont de best beoordeelde adressen op Eroplein.",
    filterType: "city_category",
    citySlug: "amsterdam",
    categorySlug: "privehuizen",
    sections: [
      { heading: "Het privehuis-concept", body: "Walk-in binnenkomen, kiezen uit 3-8 dames ter plekke, 30 of 60 minuten afspreken, betalen aan de deur of binnen. Geen druk, geen voorafspraak. De huiselijke sfeer is een bewuste keuze: minder formeel dan een club, minder gepland dan een escort." },
      { heading: "Amsterdamse prijzen", body: "30 min: 70-100 euro. 60 min: 150-200 euro. Iets boven het Nederlandse gemiddelde door huurprijzen in de binnenstad." }
    ],
    faq: [
      { question: "Hoeveel dames werken bij een gemiddeld Amsterdams privehuis?", answer: "3-8 dames per shift. In de avonduren meer dan overdag. Sommige huizen hebben vaste ploegen, andere variëren sterk per dag." },
      { question: "Moet ik reserveren?", answer: "Meestal niet nodig. Voor specifieke dames of op drukke avonden: bel even vooraf." }
    ],
    relatedLandings: ["beste-escortbureaus-amsterdam", "beste-privehuizen-rotterdam", "beste-privehuizen-nederland"],
    publishedAt: "2026-04-27",
    updatedAt: "2026-04-27",
  },

  {
    slug: "beste-tantra-nederland",
    title: "Beste tantra-salons Nederland 2026",
    metaTitle: "Beste tantra-salons Nederland 2026 — spirituele massage",
    metaDescription: "Top tantra-salons in Nederland: spirituele massage, energie en ontspanning. Reviews, tarieven en stijlen per salon.",
    h1: "Beste tantra-salons van Nederland",
    intro: "Tantra-massage is anders dan reguliere erotische massage: langer, langzamer, gericht op energie en ademhaling. Deze ranglijst toont de best beoordeelde tantra-specialisten van Nederland, van klassiek via modern tot wellness-georienteerd.",
    filterType: "category",
    categorySlug: "erotische-massage",
    sections: [
      { heading: "Wat maakt een goede tantra-salon?", body: "Ervaren masseuses met formele opleiding, rustige sessieruimtes, focus op opbouw en vertrouwen, geen tijdsdruk of commerciële toevoegingen. Een echte tantra-sessie duurt minimaal 90 minuten." },
      { heading: "Prijsrange", body: "Reguliere tantra (90 min): 170-260 euro. Couples-tantra (2 uur): 300-450 euro. Retraites / workshops apart geprijsd." }
    ],
    faq: [
      { question: "Is tantra altijd met happy end?", answer: "Nee, pure tantra-salons focussen op ervaring en energie, zonder specifiek doel. Veel klanten ervaren de sessie intenser dan een traditionele happy end." },
      { question: "Hoeveel tantra-sessies heb je nodig?", answer: "Voor algemene ontspanning: één sessie volstaat. Voor spirituele ontwikkeling adviseren therapeuten vaak 5-8 sessies over enkele maanden." }
    ],
    relatedLandings: ["beste-erotische-massage-amsterdam", "beste-erotische-massage-utrecht", "beste-erotische-massage-rotterdam"],
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
  },

  {
    slug: "beste-escorts-den-haag",
    title: "Beste escort Den Haag 2026",
    metaTitle: "Beste escort Den Haag 2026 — top bureaus en dames",
    metaDescription: "Top escortbureaus en zelfstandige escorts in Den Haag: reviews, prijzen, specialisaties. Van internationale dames tot lokale bekenden.",
    h1: "Beste escort in Den Haag",
    intro: "Den Haag combineert zakelijke en diplomatieke klanten met een eigen lokaal publiek. De escortmarkt is divers: internationale bureaus, zelfstandige dames en in de regio bekende specialisten. Deze top 10 is gebaseerd op Eroplein-reviews.",
    filterType: "city_category",
    citySlug: "den-haag",
    categorySlug: "escorts",
    sections: [
      { heading: "Diplomatieke klantkring", body: "Den Haag heeft een unieke klantdemografie: ambassadeurs, internationale juristen, zakelijke reizigers. Topbureaus spelen hier op in met meertaligheid en hoge discretie-standaarden." },
      { heading: "Prijsrange", body: "Incall 170-240 euro, outcall 220-320 euro. Topsegment naar 400+ euro. Dicht bij Amsterdam qua prijzen." }
    ],
    faq: [
      { question: "Is Den Haag duur in vergelijking met Rotterdam?", answer: "Iets duurder, 10-15%, door diplomaat/zakelijk segment. Voor gemiddelde boekingen is het verschil beperkt." },
      { question: "Zijn er Engelstalige escortbureaus in Den Haag?", answer: "Ja, meerdere. Enkele bureaus werken vrijwel uitsluitend in het Engels voor internationale klanten." }
    ],
    relatedLandings: ["beste-escortbureaus-amsterdam", "beste-escorts-rotterdam", "beste-escorts-utrecht"],
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
  },

  {
    slug: "beste-stripclubs-amsterdam",
    title: "Beste stripclubs Amsterdam 2026",
    metaTitle: "Beste stripclubs Amsterdam 2026 — top gentlemen's clubs",
    metaDescription: "Top stripclubs en gentlemen's clubs in Amsterdam: Yab Yum, Bananenbar, Casa Rosso. Reviews, shows, prijzen en sfeer per club.",
    h1: "Beste stripclubs in Amsterdam",
    intro: "Amsterdam heeft de dichtste concentratie stripclubs van Nederland. Van iconische shows tot intieme gentlemen's clubs, de scene is divers. Deze top 10 is gebaseerd op Eroplein-reviews en actuele klantinformatie.",
    filterType: "city_category",
    citySlug: "amsterdam",
    categorySlug: "stripclubs",
    sections: [
      { heading: "Amsterdamse klassiekers", body: "Yab Yum (herbouwd), Casa Rosso (meest iconisch), Bananenbar (sinds 1969), De Opening Nightclub (modern). Elke club heeft een eigen historisch karakter." },
      { heading: "Prijsrange", body: "Entree 20-40 euro. Cocktail: 12-18 euro. Table dance 30-60 euro. VIP-dans (15 min in afgesloten ruimte): 150-300 euro." }
    ],
    faq: [
      { question: "Is Casa Rosso echt zo bekend als gezegd?", answer: "Ja. Sinds 1968 operationeel, nog steeds een vaste stop voor toeristen en fijnproevers. Minder erotische show dan vroeger, meer sensueel theater." },
      { question: "Mogen stellen naar stripclubs in Amsterdam?", answer: "Ja, wordt in veel clubs gewaardeerd. Check 'couple-friendly' op de website of bel vooraf." }
    ],
    relatedLandings: ["beste-parenclubs-amsterdam", "beste-stripclubs-rotterdam", "beste-stripclubs-nederland"],
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
  },

  {
    slug: "beste-saunaclubs-utrecht",
    title: "Beste saunaclubs Utrecht regio 2026",
    metaTitle: "Beste saunaclubs Utrecht regio 2026 — FKK",
    metaDescription: "Top saunaclubs in en rond Utrecht: FKK-stijl wellness, sauna, zwembad en dames. Reviews, prijzen en openingstijden.",
    h1: "Beste saunaclubs Utrecht regio",
    intro: "Utrecht zelf heeft een beperkt aanbod saunaclubs, maar in de regio (Kerkdriel, omliggende provincies) vind je grote namen. Deze top toont de beste opties binnen 60 minuten reistijd vanaf Utrecht Centraal.",
    filterType: "category",
    categorySlug: "saunaclubs",
    sections: [
      { heading: "Bereikbaar vanuit Utrecht", body: "Club Fellini (Kerkdriel): 35 min via A2. Colors (Venlo): 90 min via A2/A73. Regio-clubs in Gelderland: 45-60 min. Voor Utrechtse klanten is Kerkdriel de meest populaire keuze." },
      { heading: "Prijsrange", body: "Entree 80-140 euro all-in. Sessies 70-220 euro. Totaalbudget rustige avond 150-250 euro." }
    ],
    faq: [
      { question: "Is er een saunaclub in Utrecht zelf?", answer: "Een beperkt aantal kleinere clubs. Voor het volledige FKK-concept reizen de meeste Utrechters naar Kerkdriel." },
      { question: "Hoe laat beginnen saunaclubs?", answer: "Meestal vanaf 12:00 of 14:00. Rustigste momenten: woensdag-donderdag overdag. Drukste momenten: vrijdagavond-zaterdag." }
    ],
    relatedLandings: ["beste-saunaclubs-nederland", "beste-parenclubs-utrecht", "beste-erotische-massage-utrecht"],
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },

  {
    slug: "beste-escorts-groningen",
    title: "Beste escort Groningen 2026",
    metaTitle: "Beste escort Groningen 2026 — top bureaus",
    metaDescription: "Top escorts in Groningen: studentenstad met volwassen markt. Reviews, prijzen en specialisaties per bureau of zelfstandige escort.",
    h1: "Beste escort in Groningen",
    intro: "Groningen als grootste studentenstad van het noorden heeft een eigen escortmarkt. Minder bureaus dan de Randstad, meer persoonlijke relaties tussen escorts en vaste klanten. Deze top is op Eroplein-reviews gebaseerd.",
    filterType: "city_category",
    citySlug: "groningen",
    categorySlug: "escorts",
    sections: [
      { heading: "Noord-Nederlandse markt", body: "Groningse bureaus bedienen ook Drenthe en Friesland. Gemiddelde prijzen onder landelijk niveau: 130-190 euro per uur incall. Outcall naar Leeuwarden of Assen binnen bereik." },
      { heading: "Raamprostitutie", body: "Naast escorts heeft Groningen nog raamprostitutie aan de Nieuwstad. Apart segment, directere interactie, andere prijzen (50 euro/kort)." }
    ],
    faq: [
      { question: "Hoe groot is het escortaanbod in Groningen?", answer: "Beperkter dan de Randstad. Ongeveer 5-8 actieve bureaus plus een handvol zelfstandigen. Zie de stad-pagina voor actuele aanbieders." },
      { question: "Bereiken Groningse escorts ook Friesland?", answer: "Ja, outcall naar Leeuwarden en omgeving is gangbaar, meestal met reistijd-toeslag." }
    ],
    relatedLandings: ["beste-escorts-leeuwarden", "beste-erotische-massage-groningen", "beste-escorts-emmen"],
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
  },

  {
    slug: "beste-erotische-massage-rotterdam",
    title: "Beste erotische massage Rotterdam 2026",
    metaTitle: "Beste erotische massage Rotterdam 2026 — top salons",
    metaDescription: "Top erotische massagesalons in Rotterdam: body-to-body, tantra, nuru. Vergelijk salons op reviews, prijzen en technieken.",
    h1: "Beste erotische massage in Rotterdam",
    intro: "Rotterdam kent een diverse massage-scene met nadruk op body-to-body en tantra. Haven-mentaliteit: gewoon en direct. Deze top 10 toont de best beoordeelde salons op Eroplein.",
    filterType: "city_category",
    citySlug: "rotterdam",
    categorySlug: "erotische-massage",
    sections: [
      { heading: "Rotterdamse salons", body: "Verspreid over stad — Centrum, Kralingen, Delfshaven. Gemiddeld goed bereikbaar met OV of parkeergarage binnen 5 min loopafstand." },
      { heading: "Prijzen", body: "Onder Amsterdams gemiddelde: 30 min vanaf 70 euro, 60 min 110-170 euro, tantra 90 min 170-240 euro. Good value for money." }
    ],
    faq: [
      { question: "Is body-to-body in Rotterdam populair?", answer: "Ja, de meest gevraagde vorm. Vrijwel elke salon in Rotterdam biedt het standaard aan." },
      { question: "Four-hands massage mogelijk in Rotterdam?", answer: "Ja, bij meerdere grotere salons. Reserveer vooraf voor twee masseuses tegelijk." }
    ],
    relatedLandings: ["beste-erotische-massage-amsterdam", "beste-parenclubs-rotterdam", "beste-escorts-rotterdam"],
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-03",
  },

  {
    slug: "beste-privehuizen-rotterdam",
    title: "Beste privehuizen Rotterdam 2026",
    metaTitle: "Beste privehuizen Rotterdam 2026 — top adressen",
    metaDescription: "Top privehuizen in Rotterdam: walk-in, meerdere dames, huiselijke sfeer. Reviews, prijzen en openingstijden per adres.",
    h1: "Beste privehuizen in Rotterdam",
    intro: "Rotterdam telt meerdere gevestigde privehuizen verspreid over stadsdelen. Toegankelijke formule, vaste prijzen, huiselijke sfeer. Deze top toont de best beoordeelde adressen op Eroplein.",
    filterType: "city_category",
    citySlug: "rotterdam",
    categorySlug: "privehuizen",
    sections: [
      { heading: "Rotterdams aanbod", body: "Gevestigd meestal in woonwijken met discrete entrees. Parkeren overal mogelijk. Openingsuren: 11:00-24:00 bij de meeste." },
      { heading: "Prijzen", body: "30 min: 50-80 euro. 60 min: 120-170 euro. Onder Amsterdamse tarieven." }
    ],
    faq: [
      { question: "Kan ik 's avonds laat nog terecht?", answer: "De meeste privehuizen sluiten rond middernacht. Enkele grotere locaties open tot 2:00." },
      { question: "Is er parkeergelegenheid?", answer: "Ja, vrijwel alle Rotterdamse privehuizen hebben eigen parkeergelegenheid of gratis straatparkeren." }
    ],
    relatedLandings: ["beste-privehuizen-amsterdam", "beste-privehuizen-nederland", "beste-escorts-rotterdam"],
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },

  {
    slug: "beste-escorts-tilburg",
    title: "Beste escort Tilburg 2026",
    metaTitle: "Beste escort Tilburg 2026 — top aanbieders",
    metaDescription: "Top escorts in Tilburg: lokaal aanbod, scherpe prijzen. Reviews, specialisaties en beschikbaarheid per bureau of zelfstandige.",
    h1: "Beste escort in Tilburg",
    intro: "Tilburg heeft een eigen lokale escortmarkt, ook bedienend Breda en Eindhoven. Brabantse gezelligheid vormt de basis voor persoonlijke klant-dame-relaties. Deze top 10 toont de best beoordeelde aanbieders.",
    filterType: "city_category",
    citySlug: "tilburg",
    categorySlug: "escorts",
    sections: [
      { heading: "Brabantse markt", body: "Prijzen 130-200 euro per uur incall. Outcall regio Tilburg/Breda/Eindhoven gangbaar. Zakelijke klanten van Willem II-bedrijvenpark goed bediend." },
      { heading: "Discretie", body: "Kleinere stad betekent dat verschillende escortbureaus elkaar kennen. Discretie-standaarden zijn hoog — reviews bevestigen dit." }
    ],
    faq: [
      { question: "Is Tilburg duurder of goedkoper dan Breda?", answer: "Vergelijkbaar. Beide steden liggen onder Randstad-tarieven." },
      { question: "Kunnen Tilburgse escorts ook in Den Bosch?", answer: "Ja, outcall naar Den Bosch is gangbaar, vaak zonder extra reiskosten binnen 30 minuten." }
    ],
    relatedLandings: ["beste-escorts-eindhoven", "beste-escorts-breda", "beste-erotische-massage-tilburg"],
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
  },

  {
    slug: "beste-parenclubs-utrecht",
    title: "Beste parenclubs Utrecht regio 2026",
    metaTitle: "Beste parenclubs Utrecht regio 2026 — top clubs",
    metaDescription: "Top parenclubs in en rond Utrecht: Playground Playschool, regionale clubs. Reviews, huisregels, prijzen en thema-avonden.",
    h1: "Beste parenclubs in Utrecht regio",
    intro: "Utrecht en omgeving heeft een compacte parenclub-scene, met Playground Playschool als bekendste naam. Binnen 30 min rijden ook clubs in Gelderland en Zuid-Holland bereikbaar. Deze top 10 laat de beste opties zien.",
    filterType: "city_category",
    citySlug: "utrecht",
    categorySlug: "clubs",
    sections: [
      { heading: "Central-located voordelen", body: "Utrechtse parenclubs trekken paren uit heel Midden-Nederland. Goed bereikbaar, parkeergelegenheid meestal op eigen terrein." },
      { heading: "Prijzen", body: "Entree 50-100 euro per paar. Thema-avonden 70-120 euro. Drankjes meestal inclusief of apart beschikbaar." }
    ],
    faq: [
      { question: "Is Playground Playschool single-vriendelijk?", answer: "Beperkt. Heeft specifieke single-avonden maar geen standaard-entree voor singles." },
      { question: "Zijn er BDSM-avonden in Utrecht?", answer: "Ja, meerdere clubs hebben maandelijkse fetish- of BDSM-themanights. Check agenda's." }
    ],
    relatedLandings: ["beste-parenclubs-amsterdam", "beste-parenclubs-nederland", "beste-saunaclubs-utrecht"],
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
  },
];

import { generatedLandings } from "./generated-landings";

// Combined: hand-written + auto-generated (dedupe op slug, hand-written wint)
export function getAllLandings(): LandingPage[] {
  const handSlugs = new Set(landingPages.map((p) => p.slug));
  const gen = generatedLandings.filter((p) => !handSlugs.has(p.slug));
  return [...landingPages, ...gen];
}

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  const page = getAllLandings().find((p) => p.slug === slug);
  if (!page) return undefined;
  if (new Date(page.publishedAt).getTime() > Date.now()) return undefined;
  return page;
}

export function getPublishedLandingPages(): LandingPage[] {
  const now = Date.now();
  return getAllLandings().filter(
    (p) => new Date(p.publishedAt).getTime() <= now
  );
}

export function getRelatedLandingPages(slugs: string[] = []): LandingPage[] {
  const now = Date.now();
  return slugs
    .map((s) => getAllLandings().find((p) => p.slug === s))
    .filter(
      (p): p is LandingPage =>
        p !== undefined && new Date(p.publishedAt).getTime() <= now
    );
}
