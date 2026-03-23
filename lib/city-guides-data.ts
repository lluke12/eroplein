// ── City Guide Data ─────────────────────────────────────────────────────
// Rich guide content for 6 featured cities

export interface CityGuideArea {
  name: string;
  description: string;
}

export interface CityGuideCategory {
  slug: string;
  name: string;
  description: string;
}

export interface CityGuideTip {
  title: string;
  content: string;
}

export interface CityGuidePracticalInfo {
  bereikbaarheid: string;
  parkeren: string;
  openingstijden: string;
  betalen: string;
}

export interface CityGuide {
  citySlug: string;
  cityName: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  introText2?: string;
  bekendGebieden: CityGuideArea[];
  categorieInfo: CityGuideCategory[];
  praktischeInfo: CityGuidePracticalInfo;
  tips: CityGuideTip[];
  faq: { question: string; answer: string }[];
}

export const cityGuides: Record<string, CityGuide> = {
  amsterdam: {
    citySlug: "amsterdam",
    cityName: "Amsterdam",
    heroSubtitle: "De erotische hoofdstad van Nederland",
    introTitle: "Amsterdam als erotische hoofdstad",
    introText:
      "Amsterdam staat wereldwijd bekend als een van de meest liberale en open-minded steden. De stad heeft een rijke geschiedenis als het gaat om erotisch entertainment, van de iconische Wallen tot de talloze clubs, privéhuizen en escortservices verspreid over de stad. Of je nu een bezoeker bent of hier woont, Amsterdam biedt een ongeëvenaard aanbod in elke categorie.",
    introText2:
      "De Amsterdamse erotische scene is divers en professioneel. Van high-end escortbureaus in Zuid tot gezellige privéhuizen in de Jordaan, en van moderne saunaclubs tot de wereldberoemde ramen in het Wallengebied. Dankzij strenge regelgeving en vergunningen kun je rekenen op een veilige en kwalitatieve ervaring.",
    bekendGebieden: [
      {
        name: "De Wallen (Centrum)",
        description:
          "Het beroemdste rosse buurt ter wereld. Hier vind je de iconische ramen, talloze seksshops, peepshows en erotische theaters. Overdag een toeristische trekpleister, 's avonds bruisend van activiteit.",
      },
      {
        name: "Singel & Grachtengordel",
        description:
          "In de chique grachtengordel bevinden zich diverse discrete privéhuizen en luxe escortservices. De buurt staat bekend om elegantie en een hoger prijsniveau.",
      },
      {
        name: "De Pijp",
        description:
          "Een levendige wijk met een mix van erotische massagesalons, tantra-praktijken en kleinere privéhuizen. Populair bij een jong en hip publiek.",
      },
      {
        name: "Amsterdam Zuid",
        description:
          "Het domein van premium escortbureaus en high-end clubs. Hier vind je de meest exclusieve services van de stad, gericht op een welgestelde clientèle.",
      },
      {
        name: "Amsterdam Oost",
        description:
          "Een opkomend gebied met betaalbare stripclubs, massagesalons en een groeiend aantal nieuwe bedrijven. Goed bereikbaar en minder toeristisch.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Amsterdam heeft het grootste aanbod escorts van Nederland. Van onafhankelijke escorts tot gerenommeerde bureaus, met keuze uit honderden dames. Zowel incall als outcall beschikbaar in de hele stad. Prijzen variëren van middensegment tot ultra-premium.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "De stad telt tientallen privéhuizen, van kleinschalige huiskamersettings tot grotere huizen met meerdere dames. Veel gevestigd in de grachtengordel en Jordaan, met een focus op discretie en kwaliteit.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Amsterdam beschikt over diverse parenclubs, swingersclubs en erotische nachtclubs. Van exclusieve members-only clubs tot laagdrempelige gelegenheden. Thema-avonden zijn populair, vooral in het weekend.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Een breed scala aan massagesalons, van tantra en body-to-body tot Aziatische massageconcepten. Veel salons zijn gevestigd in De Pijp en Centrum. Professionele therapeuten en ontspannen sfeer.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "De Wallen vormen het hart van de Amsterdamse raamprostitutie. Honderden ramen verspreid over meerdere straten in het oudste deel van de stad. Streng gereguleerd en met duidelijke huisregels.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Van iconische winkels op de Wallen tot moderne erotiekboetieks in de zijstraten. Amsterdam heeft de grootste concentratie seksshops van het land, met een enorm assortiment en deskundig personeel.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Meerdere stripclubs verspreid over de stad, van intimate settings tot grote clubs met internationale dansers. Populaire locaties in Centrum en Oost met dagelijkse shows.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "Enkele saunaclubs in en rond Amsterdam bieden een combinatie van wellness en erotiek. Complete faciliteiten met sauna, jacuzzi, bar en privékamers.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Amsterdam Centraal is een knooppunt voor trein, metro, tram en bus. De Wallen liggen op 5 minuten lopen van het station. Tram 4, 9, 14 en 24 bedienen de populairste gebieden. Schiphol is 20 minuten met de trein.",
      parkeren:
        "Parkeren in het centrum is duur (tot €7,50/uur). Gebruik P+R terreinen aan de rand van de stad (vanaf €1/dag bij gebruik van OV). Parkeergarages Byzantium en Europarking zijn centrale opties.",
      openingstijden:
        "De meeste clubs en privéhuizen zijn geopend van 11:00 tot 02:00 uur. Ramen op de Wallen zijn doorgaans actief van 12:00 tot 03:00 uur. Escortservices zijn vaak 24/7 bereikbaar. Seksshops sluiten meestal om 22:00-23:00 uur.",
      betalen:
        "De meeste grotere bedrijven accepteren pin en creditcard. Bij ramen en kleinere privéhuizen is contant geld nog vaak gebruikelijk. Houd hier rekening mee.",
    },
    tips: [
      {
        title: "Boek vooruit voor escorts",
        content:
          "Populaire escorts en bureaus in Amsterdam zijn snel volgeboekt, vooral in het weekend. Boek minstens een dag van tevoren om teleurstelling te voorkomen.",
      },
      {
        title: "Vermijd de drukte op de Wallen",
        content:
          "De Wallen zijn op vrijdag- en zaterdagavond extreem druk met toeristen. Doordeweeks of op zondagavond is het rustiger en plezieriger.",
      },
      {
        title: "Lees reviews op Eroplein",
        content:
          "Check altijd de ervaringen van andere bezoekers voordat je ergens naartoe gaat. Zo weet je precies wat je kunt verwachten en vermijd je teleurstellingen.",
      },
      {
        title: "Respecteer de huisregels",
        content:
          "Elk bedrijf heeft eigen regels. Vraag vooraf naar de voorwaarden en respecteer deze. Goede manieren worden overal gewaardeerd.",
      },
      {
        title: "Gebruik het OV",
        content:
          "Parkeren is duur en lastig. De tram en metro brengen je snel en goedkoop naar elke bestemming in de stad.",
      },
    ],
    faq: [
      {
        question: "Wat is de beste wijk in Amsterdam voor erotisch uitgaan?",
        answer:
          "De Wallen zijn het bekendst, maar voor clubs en privéhuizen zijn de grachtengordel en Amsterdam Zuid ook uitstekende opties. Het hangt af van wat je zoekt.",
      },
      {
        question: "Zijn de bedrijven in Amsterdam veilig?",
        answer:
          "Amsterdam heeft strenge vergunningseisen. Geverifieerde bedrijven op Eroplein voldoen aan alle regelgeving. Check altijd de reviews en kies voor gevestigde namen.",
      },
      {
        question: "Wat kost een avond uit in Amsterdam?",
        answer:
          "Prijzen variëren sterk. Een bezoek aan een club kan vanaf €20 entree, privéhuizen vanaf €50-100, en escorts variëren van €150 tot €500+ per uur.",
      },
    ],
  },

  rotterdam: {
    citySlug: "rotterdam",
    cityName: "Rotterdam",
    heroSubtitle: "Modern en groeiend erotisch aanbod",
    introTitle: "Rotterdam: groeiende erotische scene",
    introText:
      "Rotterdam is een stad in beweging, en dat geldt ook voor de erotische sector. Waar Amsterdam de traditie heeft, kenmerkt Rotterdam zich door een modern en innovatief aanbod. Nieuwe clubs, stijlvolle massagesalons en professionele escortbureaus zijn de afgelopen jaren als paddenstoelen uit de grond geschoten.",
    introText2:
      "De havenstad heeft een nuchter en direct karakter, wat zich ook vertaalt in de erotische scene. Geen opsmuk, maar eerlijke service en goede prijs-kwaliteitsverhouding. Rotterdam is bovendien uitstekend bereikbaar en biedt meer parkeergemak dan Amsterdam.",
    bekendGebieden: [
      {
        name: "Rotterdam Centrum",
        description:
          "Het hart van het Rotterdamse nachtleven. Hier vind je de meeste clubs, stripclubs en uitgaansgelegenheden. Goed bereikbaar met metro en tram.",
      },
      {
        name: "Rotterdam Zuid",
        description:
          "Een opkomend gebied met diverse massagesalons en privéhuizen. Betaalbaar en met een eigen karakter. Goed bereikbaar via de Erasmusbrug.",
      },
      {
        name: "Rotterdam West",
        description:
          "Hier bevinden zich enkele van de grotere saunaclubs en relaxhuizen. Ruim opgezet met betere parkeermogelijkheden dan het centrum.",
      },
      {
        name: "Rotterdam Noord",
        description:
          "Diverse escortservices en kleinere bedrijven zijn hier gevestigd. Een rustigere omgeving met goede bereikbaarheid via de A20.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Rotterdam heeft een groeiend aanbod escortservices, van betaalbaar tot premium. Veel bureaus bieden zowel incall als outcall, ook naar hotels in het centrum en bij de Erasmusbrug.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Moderne parenclubs en swingersclubs met thema-avonden. Rotterdam staat bekend om een relaxte, open sfeer zonder pretentie. Populaire avonden zijn vrijdag en zaterdag.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Diverse massagesalons in Zuid en Centrum, van Aziatische concepten tot tantra. Professionele setting met goede faciliteiten en betaalbare tarieven.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "Rotterdam heeft enkele van de beste saunaclubs van Zuid-Holland. Complete wellness met sauna, zwembad, bar en privékamers. Dagelijks geopend.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "Een kleiner maar kwalitatief aanbod privéhuizen, verspreid over de stad. Discrete locaties met een persoonlijke sfeer.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Meerdere erotiekwinkels in het centrum en online bestelbare shops gevestigd in Rotterdam. Goed assortiment en deskundig advies.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Enkele stripclubs in het centrum met live shows en entertainment. Moderne inrichting en internationale dansers.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "Rotterdam heeft een beperkt ramengebied, kleiner dan Amsterdam maar met een eigen karakter. Gereguleerd en met vaste openingstijden.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Rotterdam Centraal is een groot knooppunt met trein, metro, tram en bus. De metro (lijnen A-E) brengt je snel door de hele stad. Vanaf Schiphol ben je in 25 minuten met de Intercity Direct.",
      parkeren:
        "Parkeren is goedkoper dan in Amsterdam. Straatparkeren in het centrum kost €3-4/uur. Parkeergarages bij de Markthal en Beurs zijn centraal gelegen. In Zuid en West is straatparkeren vaak gratis na 23:00 uur.",
      openingstijden:
        "Clubs openen doorgaans om 20:00-21:00 uur en sluiten om 03:00-04:00 uur. Massagesalons zijn van 10:00-22:00 uur geopend. Escortservices zijn veelal tot middernacht of later bereikbaar.",
      betalen:
        "Pinnen is vrijwel overal mogelijk. Sommige kleinere bedrijven werken alleen met contant geld. Creditcards worden bij grotere clubs en escortbureaus geaccepteerd.",
    },
    tips: [
      {
        title: "Verken Rotterdam Zuid",
        content:
          "Veel bezoekers blijven in het centrum, maar Zuid heeft een groeiend en betaalbaar aanbod aan massagesalons en privéhuizen. De Erasmusbrug is slechts minuten lopen.",
      },
      {
        title: "Check de thema-avonden",
        content:
          "Rotterdamse clubs staan bekend om hun thema-avonden. Kijk vooraf op de website of social media van de club voor het actuele programma.",
      },
      {
        title: "Profiteer van betere parkeermogelijkheden",
        content:
          "In tegenstelling tot Amsterdam is parkeren in Rotterdam betaalbaar en makkelijker te vinden, vooral buiten het directe centrum.",
      },
      {
        title: "Lees de reviews",
        content:
          "Rotterdam groeit snel qua aanbod. Nieuwe bedrijven verschijnen regelmatig. Check de reviews op Eroplein om de kwaliteit te beoordelen.",
      },
    ],
    faq: [
      {
        question: "Hoe verhoudt Rotterdam zich tot Amsterdam qua aanbod?",
        answer:
          "Amsterdam heeft een groter en diverser aanbod, maar Rotterdam groeit snel. De Rotterdamse scene is moderner en vaak betaalbaarder. Beide steden zijn een bezoek waard.",
      },
      {
        question: "Waar vind ik de beste clubs in Rotterdam?",
        answer:
          "De meeste clubs bevinden zich in het centrum en zijn goed bereikbaar met het OV. Check onze categoriepagina voor een actueel overzicht.",
      },
    ],
  },

  utrecht: {
    citySlug: "utrecht",
    cityName: "Utrecht",
    heroSubtitle: "Gezellig en intiem in het hart van Nederland",
    introTitle: "Utrecht: compact en kwalitatief",
    introText:
      "Utrecht is de vierde stad van Nederland en staat bekend om haar gezellige, compacte karakter. De erotische scene in Utrecht is kleiner dan in Amsterdam of Rotterdam, maar kenmerkt zich door hoge kwaliteit en een persoonlijke benadering. De stad heeft een trouwe lokale clientèle en trekt ook bezoekers uit de regio.",
    introText2:
      "Door de centrale ligging is Utrecht uitstekend bereikbaar vanuit heel Nederland. De binnenstad met haar historische grachten en kelders biedt een unieke sfeer die je nergens anders vindt. Veel bedrijven zijn gevestigd in of rond het centrum.",
    bekendGebieden: [
      {
        name: "Utrecht Centrum",
        description:
          "Het historische centrum herbergt diverse clubs, privéhuizen en escortservices. De sfeervolle grachtenpanden bieden een intieme setting.",
      },
      {
        name: "Utrecht Oost",
        description:
          "Een populaire wijk voor massagesalons en kleinere bedrijven. Rustig en residentieel, met goede parkeermogelijkheden.",
      },
      {
        name: "Leidsche Rijn / Papendorp",
        description:
          "Het nieuwere deel van Utrecht met moderne bedrijfslocaties. Enkele escortservices en massagepraktijken zijn hier gevestigd.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Utrecht heeft een select aanbod high-end escorts en bureaus. Door de centrale ligging zijn ook Amsterdamse en Rotterdamse escorts vaak beschikbaar voor outcall naar Utrecht.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Enkele gezellige parenclubs en swingersclubs met een trouwe aanhang. De Utrechtse clubs staan bekend om hun warme sfeer en gastvrije ontvangst.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Diverse massagesalons verspreid over de stad, met een nadruk op kwaliteit en persoonlijke service. Van tantra tot Aziatische massages.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "Een beperkt maar kwalitatief aanbod saunaclubs in de regio Utrecht. Complete wellness met erotische diensten.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "Kleinschalige privéhuizen met een persoonlijke touch. De Utrechtse privéhuizen zijn bekend om hun huiselijke sfeer.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Enkele gespecialiseerde erotiekwinkels in het centrum en aan de rand van de stad. Goed assortiment en persoonlijk advies.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Een beperkt aanbod stripclubs, maar de aanwezige clubs bieden goede shows en een leuke sfeer voor een avondje uit.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "Utrecht heeft een klein ramengebied met een handvol ramen. Kleiner dan Amsterdam maar met een eigen, lokaal karakter.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Utrecht Centraal is het grootste treinstation van Nederland en een knooppunt voor al het OV. De binnenstad is 10 minuten lopen. Bus en tram brengen je naar alle wijken.",
      parkeren:
        "Straatparkeren in het centrum kost €4-5/uur. Parkeergarages Springweg en Vredenburg zijn centraal. P+R terreinen aan de A2 en A12 zijn goedkoper (€5/dag inclusief OV).",
      openingstijden:
        "Clubs zijn doorgaans van 20:00-03:00 uur geopend. Massagesalons van 10:00-22:00 uur. Privéhuizen variëren, maar de meeste zijn overdag en 's avonds geopend.",
      betalen:
        "Pinnen is de standaard in Utrecht. Grotere bedrijven accepteren ook creditcards. Contant geld is bij kleinere bedrijven soms nog nodig.",
    },
    tips: [
      {
        title: "Geniet van de Utrechtse sfeer",
        content:
          "Utrecht is een gezellige stad. Combineer een avond uit met een bezoek aan de werfkelders of een drankje aan de Oudegracht.",
      },
      {
        title: "Reserveer vooraf",
        content:
          "Het aanbod is kleiner dan in de Randstad-steden. Populaire locaties zitten snel vol, vooral in het weekend. Reserveer altijd vooraf.",
      },
      {
        title: "Verken de regio",
        content:
          "Amersfoort en Hilversum liggen op korte afstand en hebben ook een beperkt aanbod. Utrecht is een goede uitvalsbasis voor de hele regio.",
      },
    ],
    faq: [
      {
        question: "Is het aanbod in Utrecht groot genoeg?",
        answer:
          "Utrecht heeft een kleiner maar kwalitatief aanbod. Door de centrale ligging kun je ook eenvoudig terecht bij bedrijven in Amsterdam (25 min) of de regio.",
      },
      {
        question: "Waar kan ik parkeren als ik naar het centrum ga?",
        answer:
          "Gebruik een P+R terrein (vanaf €5/dag met OV) of parkeergarage Springweg/Vredenburg in het centrum (€3-5/uur).",
      },
    ],
  },

  "den-haag": {
    citySlug: "den-haag",
    cityName: "Den Haag",
    heroSubtitle: "Stijlvol en internationaal in de Hofstad",
    introTitle: "Den Haag: de Hofstad met klasse",
    introText:
      "Den Haag, de stad van de regering en internationale organisaties, heeft een erotische scene die past bij haar kosmopolitische karakter. De Hofstad biedt een mix van exclusieve high-end gelegenheden en betaalbare opties, met een sterke internationale invloed door de vele expats en diplomaten.",
    introText2:
      "Van luxe clubs in het centrum tot discrete privéhuizen in de deftige wijken: Den Haag heeft voor ieder wat wils. De stad profiteert van een goede infrastructuur en de nabijheid van Scheveningen voor een nog diverser aanbod.",
    bekendGebieden: [
      {
        name: "Den Haag Centrum",
        description:
          "Het kloppende hart van het Haagse erotische leven. Clubs, escortservices en massagesalons zijn hier geconcentreerd rond het Plein en de Grote Marktstraat.",
      },
      {
        name: "Scheveningen",
        description:
          "De badplaats biedt een apart uitgaansleven met clubs en entertainment. Populair bij toeristen en congresgangers die in de strandhotels verblijven.",
      },
      {
        name: "Benoordenhout",
        description:
          "Een deftige wijk met discrete privéhuizen en high-end escortservices. Rust, privacy en een chique uitstraling kenmerken dit gebied.",
      },
      {
        name: "Laak / Binckhorst",
        description:
          "Een meer industrieel gebied waar diverse betaalbare bedrijven zijn gevestigd. Goede parkeermogelijkheden en bereikbaar via de A12.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Den Haag heeft een sterk aanbod escorts, mede door de internationale gemeenschap. Veel meertalige escorts beschikbaar, met ervaring in het begeleiden van diplomaten en zakenmensen.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Enkele legendarische clubs die al jaren een begrip zijn in de Hofstad. Van exclusieve gentlemen's clubs tot toegankelijke parenclubs. Stijlvol en met karakter.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Diverse massagesalons in het centrum en bij Scheveningen. Zowel luxe settings als betaalbare opties beschikbaar.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "Discrete privéhuizen in rustige wijken. Den Haag staat bekend om de privacy en het hoge serviceniveau van de privéhuizen.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Den Haag heeft enkele van de bekendste stripclubs van Nederland, met internationale shows en een chique sfeer.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Erotiekwinkels in het centrum en bij Scheveningen. Een mix van gespecialiseerde boetieks en grotere winkels.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "Een beperkt aanbod saunaclubs in de regio, maar de aanwezige clubs bieden uitstekende faciliteiten en service.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "Den Haag had historisch raamprostitutie, maar het huidige aanbod is beperkt. Voor ramen is Amsterdam de dichtstbijzijnde optie.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Den Haag heeft twee grote stations: Den Haag Centraal en Den Haag HS. Tram en bus dekken de hele stad. Vanaf Schiphol ben je in 30 minuten met de trein. De A12 en A4 bieden snelle toegang per auto.",
      parkeren:
        "Straatparkeren in het centrum kost €3-4/uur. Parkeergarage Plein, Turfmarkt en Lutherse Burgwal zijn centraal gelegen. Bij Scheveningen zijn seizoensparkeergarages beschikbaar.",
      openingstijden:
        "Clubs zijn van 21:00-04:00 uur geopend. Privéhuizen variëren van 11:00-02:00 uur. Massagesalons zijn overdag en 's avonds geopend (10:00-22:00). Escorts zijn veelal op afspraak beschikbaar.",
      betalen:
        "Pinnen en creditcard worden breed geaccepteerd. Sommige exclusieve gelegenheden prefereren contant voor discretie.",
    },
    tips: [
      {
        title: "Combineer met Scheveningen",
        content:
          "Scheveningen biedt een ander soort uitgaansleven. Combineer een avond in het centrum met de strandsfeer van Scheveningen.",
      },
      {
        title: "Internationale sfeer",
        content:
          "Veel bedrijven in Den Haag zijn Engelstalig door de internationale gemeenschap. Dit maakt de stad ook toegankelijk voor niet-Nederlandstalige bezoekers.",
      },
      {
        title: "Weekdagen zijn rustiger",
        content:
          "In het weekend kan het druk zijn bij populaire clubs. Doordeweeks is de sfeer intiemer en zijn er soms speciale tarieven.",
      },
    ],
    faq: [
      {
        question: "Is Den Haag vergelijkbaar met Amsterdam qua aanbod?",
        answer:
          "Den Haag heeft een kleiner maar stijlvol aanbod, met een nadruk op exclusiviteit en internationale klasse. Voor de breedste keuze is Amsterdam (30 min per trein) nabij.",
      },
      {
        question: "Zijn er goede opties bij Scheveningen?",
        answer:
          "Scheveningen heeft een apart uitgaansleven met clubs en entertainment, vooral gericht op toeristen en hotelgasten. Het centrum van Den Haag biedt meer diversiteit.",
      },
    ],
  },

  eindhoven: {
    citySlug: "eindhoven",
    cityName: "Eindhoven",
    heroSubtitle: "Innovatief en verrassend in Brabant",
    introTitle: "Eindhoven: Brabantse gezelligheid meets innovatie",
    introText:
      "Eindhoven, de stad van licht en technologie, heeft ook op erotisch gebied verrassend veel te bieden. De Brabantse gezelligheid vertaalt zich in een warme, gastvrije scene met moderne faciliteiten. Door de vele internationale werknemers bij ASML, Philips en de TU/e is er een divers publiek.",
    introText2:
      "De Eindhovense erotische sector is de afgelopen jaren sterk gegroeid. Nieuwe saunaclubs, escortservices en massagesalons hebben de stad op de kaart gezet als een serieuze speler buiten de Randstad. Het relatief betaalbare karakter en de goede bereikbaarheid maken Eindhoven aantrekkelijk.",
    bekendGebieden: [
      {
        name: "Eindhoven Centrum",
        description:
          "Het bruisende stadshart met diverse uitgaansgelegenheden, seksshops en escortservices. Het Stratumseind, de langste kroegstraat van Nederland, ligt om de hoek.",
      },
      {
        name: "Strijp",
        description:
          "Het voormalige Philips-industrieterrein is getransformeerd tot een hip en modern gebied. Hier vind je moderne saunaclubs en relaxconcepten in industriële settings.",
      },
      {
        name: "Woensel",
        description:
          "Een diverse wijk met betaalbare opties voor massages en kleinere bedrijven. Goed bereikbaar en met voldoende parkeermogelijkheden.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Eindhoven heeft een groeiend aanbod escortservices die ook de regio Brabant bedienen. Zowel lokale bureaus als landelijke escorts die naar Eindhoven komen. Outcall naar hotels bij het station en de High Tech Campus.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "De Brabantse saunaclubs staan bekend om hun uitgebreide faciliteiten en gezellige sfeer. Eindhoven heeft enkele van de modernste saunaclubs van het land, compleet met wellness, buffet en entertainment.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Gezellige clubs met een Brabantse gastvrijheid. Laagdrempelig en met regelmatige thema-avonden. De sfeer is ontspannen en uitnodigend.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Diverse massagesalons in het centrum en omliggende wijken. Betaalbare tarieven en een professionele benadering. Zowel tantra als klassieke erotische massages.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Meerdere erotiekwinkels in het centrum met een breed assortiment. Betaalbare prijzen en een laagdrempelig winkelconcept.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "Een kleiner aanbod privéhuizen in vergelijking met de Randstad, maar met Brabantse gastvrijheid en persoonlijke service.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Enkele stripclubs en entertainment venues in en rond het centrum. Populair bij studenten en expats.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "Eindhoven heeft geen significante raamprostitutie. Voor ramen kun je terecht in Amsterdam of Den Haag.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Eindhoven Centraal is goed bereikbaar per trein (directe verbinding met Amsterdam in 80 min, Utrecht 40 min). Eindhoven Airport heeft vluchten naar veel Europese bestemmingen. De A2 en A67 bieden snelle toegang per auto.",
      parkeren:
        "Parkeren in het centrum kost €2-3/uur. Parkeergarages bij het station en Heuvel zijn centraal. In Strijp en Woensel is gratis straatparkeren vaak mogelijk.",
      openingstijden:
        "Saunaclubs zijn doorgaans van 11:00-01:00 uur geopend. Clubs van 20:00-03:00 uur. Massagesalons van 10:00-22:00 uur. Seksshops sluiten om 18:00-20:00 uur.",
      betalen:
        "Pinnen is overal mogelijk. Contant geld is zelden nodig maar handig als backup bij kleinere bedrijven.",
    },
    tips: [
      {
        title: "Bezoek Strijp-S",
        content:
          "Het getransformeerde Philips-terrein biedt niet alleen moderne erotische concepten, maar ook restaurants en culturele hotspots. Combineer je bezoek.",
      },
      {
        title: "Brabantse gezelligheid",
        content:
          "In Eindhoven is de sfeer informeel en gastvrij. Je hoeft je niet op je best te kleden, de dress code is relaxed. Geniet van de warme Brabantse ontvangst.",
      },
      {
        title: "Weekenddrukte",
        content:
          "Door de vele studenten en expats zijn weekendavonden populair. Voor een rustigere ervaring is doordeweeks een goede optie.",
      },
    ],
    faq: [
      {
        question: "Is Eindhoven een goede optie buiten de Randstad?",
        answer:
          "Zeker. Eindhoven heeft een groeiend en kwalitatief aanbod, met name saunaclubs en escortservices. De stad is betaalbaarder en minder toeristisch dan Amsterdam.",
      },
      {
        question: "Hoe bereik ik Eindhoven vanaf het vliegveld?",
        answer:
          "Bus 400 en 401 brengen je in 20 minuten van Eindhoven Airport naar het centrum. Een taxi kost circa €20-25.",
      },
    ],
  },

  groningen: {
    citySlug: "groningen",
    cityName: "Groningen",
    heroSubtitle: "Jong, energiek en verrassend in het Noorden",
    introTitle: "Groningen: studentenstad met karakter",
    introText:
      "Groningen is de onbetwiste hoofdstad van het Noorden en staat bekend als een van de jongste steden van Nederland. Met ruim 50.000 studenten heeft de stad een energiek nachtleven en een eigen, onafhankelijke erotische scene. Het aanbod is misschien kleiner dan in de Randstad, maar het karakter is uniek.",
    introText2:
      "De Groningse erotische sector is betaalbaar en laagdrempelig, perfect passend bij het studentenbudget maar ook met opties voor een hoger segment. De compacte binnenstad maakt alles lopend bereikbaar. De stad trekt ook bezoekers uit Friesland en Drenthe.",
    bekendGebieden: [
      {
        name: "Groningen Centrum",
        description:
          "De bruisende binnenstad met clubs, uitgaansgelegenheden en erotische bedrijven. Alles is op loopafstand van de Grote Markt en het Stadspark.",
      },
      {
        name: "Groningen Zuid",
        description:
          "Een rustigere wijk met massagesalons en discrete bedrijven. Goed bereikbaar per bus en met betere parkeermogelijkheden.",
      },
      {
        name: "Helpman / De Wijert",
        description:
          "Residentiële wijken met af en toe een discreet privéhuis of massagepraktijk. Rustig en privé.",
      },
    ],
    categorieInfo: [
      {
        slug: "escorts",
        name: "Escorts",
        description:
          "Een compact maar groeiend aanbod escorts in de stad en regio. Zowel onafhankelijke escorts als bureaus. Betaalbare tarieven vergeleken met de Randstad.",
      },
      {
        slug: "clubs",
        name: "Clubs",
        description:
          "Groningen heeft enkele gezellige clubs die populair zijn bij studenten en young professionals. Betaalbare entree en een ongedwongen sfeer.",
      },
      {
        slug: "erotische-massage",
        name: "Erotische Massage",
        description:
          "Diverse massagesalons met een goede prijs-kwaliteitsverhouding. Populair bij zowel studenten als de lokale bevolking.",
      },
      {
        slug: "privehuizen",
        name: "Privéhuizen",
        description:
          "Een beperkt aantal privéhuizen met een lokaal en persoonlijk karakter. Discrete locaties in de rustiger wijken.",
      },
      {
        slug: "seksshops",
        name: "Seksshops",
        description:
          "Enkele erotiekwinkels in het centrum, met een aanbod gericht op het jongere publiek. Betaalbare prijzen.",
      },
      {
        slug: "saunaclubs",
        name: "Saunaclubs",
        description:
          "Een beperkt aanbod in de stad zelf. Voor grotere saunaclubs wijken bezoekers soms uit naar Drenthe of Friesland.",
      },
      {
        slug: "stripclubs",
        name: "Stripclubs",
        description:
          "Enkele kleinere venues met live entertainment. De sfeer is informeel en studentikoos.",
      },
      {
        slug: "ramen",
        name: "Ramen",
        description:
          "Groningen heeft geen raamprostitutie. De dichtstbijzijnde ramen zijn in Amsterdam te vinden.",
      },
    ],
    praktischeInfo: {
      bereikbaarheid:
        "Groningen Centraal is het eindstation van de IC lijn vanuit de Randstad (2 uur en 10 min vanaf Amsterdam). Stadsbussen dekken alle wijken. De A7 en A28 bieden toegang per auto. Groningen Airport Eelde is 10 km zuidelijk.",
      parkeren:
        "Straatparkeren in het centrum kost €2-3/uur. Parkeergarages Boterdiep en Ossenmarkt zijn centraal. P+R Reitdiep en Meerstad zijn goedkope alternatieven (€1/dag met bus).",
      openingstijden:
        "Clubs zijn van 21:00-04:00 uur geopend (studentenstad, dus vaak lang open). Massagesalons van 10:00-22:00 uur. De meeste bedrijven zijn ook op zondag geopend.",
      betalen:
        "Pinnen is de standaard. Contant geld is zelden nodig. Sommige kleinere bedrijven hebben een minimumbedrag voor pinbetalingen.",
    },
    tips: [
      {
        title: "Profiteer van studentenprijzen",
        content:
          "Veel bedrijven in Groningen bieden scherpe tarieven, passend bij het studentenpubliek. De prijs-kwaliteitsverhouding is uitstekend.",
      },
      {
        title: "Donderdagavond is uitgaansavond",
        content:
          "In Groningen is donderdag de populairste uitgaansavond (studentenavond). Veel clubs en bedrijven spelen hierop in met speciale avonden.",
      },
      {
        title: "Alles op loopafstand",
        content:
          "De binnenstad van Groningen is compact. Je kunt alles lopend bereiken, geen auto of OV nodig als je centraal bent.",
      },
    ],
    faq: [
      {
        question: "Is het aanbod in Groningen groot genoeg?",
        answer:
          "Het aanbod is kleiner dan in de Randstad maar voor een stad van deze grootte verrassend divers. De betaalbare prijzen en gezellige sfeer compenseren het kleinere aanbod.",
      },
      {
        question: "Is Groningen alleen gericht op studenten?",
        answer:
          "Nee. Hoewel de stad veel studenten heeft, zijn er ook bedrijven die een breder publiek bedienen. De sfeer is jong en energiek, maar niet uitsluitend voor studenten.",
      },
    ],
  },
};

export const FEATURED_GUIDE_SLUGS = [
  "amsterdam",
  "rotterdam",
  "utrecht",
  "den-haag",
  "eindhoven",
  "groningen",
];

export function getCityGuide(citySlug: string): CityGuide | undefined {
  return cityGuides[citySlug];
}
