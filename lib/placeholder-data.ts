import type { Business, Review, Article } from "./types";
import { realBusinesses } from "./real-businesses-data";
import { isPublished } from "./publishing";

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
    title: "Amsterdam Erotisch Centrum: nieuwe fase in besluitvorming 2026",
    slug: "amsterdam-erotisch-centrum-2026",
    excerpt:
      "De gemeente Amsterdam zet opnieuw stappen in het dossier Erotisch Centrum. Wat betekent dit voor de Wallen, raamwerkers en bezoekers?",
    content: `
## Waar staan we met het Erotisch Centrum?

Na jaren van politiek touwtrekken ligt er opnieuw een nieuwe fase op tafel voor het Amsterdam Erotisch Centrum (EC). Het plan is om raamprostitutie uit de binnenstad van Amsterdam — hoofdzakelijk de Wallen — te verplaatsen naar een centraal gebouwde locatie buiten het centrum.

## Waarom een Erotisch Centrum?

Het idee werd concreet gemaakt onder burgemeester Halsema als onderdeel van Project 1012, de langlopende aanpak van de Wallen-gentrificatie. De gedachten erachter:

- **Verbetering werkomstandigheden voor sekswerkers** — moderne faciliteiten, betere beveiliging, professionelere omgeving
- **Vermindering toeristische overlast op de Wallen** — de Wallen zijn decennialang overspoeld door toeristen die niet de klanten zijn
- **Makkelijkere handhaving tegen mensenhandel** — centrale locatie is simpeler te monitoren dan verspreide ramen

## Wat vinden sekswerkers?

Belangenorganisaties als PROUD staan kritisch. Hun argument: verplaatsing haalt sekswerkers uit de zichtbaarheid en centraliseert ze op een locatie waar ze minder autonomie hebben. Het is de eerste keer in meer dan een eeuw dat raamwerk zou verdwijnen van de Oudezijds Achterburgwal.

Daarnaast vrezen meerdere sekswerkers dat ze — na de verplaatsing — nieuwe zekerheden en vergunningen moeten aanvragen, met risico op uitval.

## Voor bezoekers en reviewers

Op korte termijn verandert er niets. De Wallen blijven operationeel, prijzen blijven rond de 50 euro voor 15-20 minuten en reviews op Eroplein blijven betrouwbaar. Voor de middellange termijn (2-3 jaar) is het onduidelijk: als de verplaatsing doorgaat, zal er een overgangsfase zijn waarin zowel Wallen als EC actief zijn.

Eroplein blijft het nieuws volgen en update per ontwikkeling. Abonneer je op de nieuwsbrief voor updates.
    `.trim(),
    category_slug: "ramen",
    city_slug: "amsterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    image_url: undefined,
    published_at: "2026-04-18",
    reading_time: 4,
    tags: ["amsterdam", "wetgeving", "ramen", "actueel"],
  },
  {
    id: "a2",
    title: "Wet regulering sekswerk 2026: dit zijn de belangrijkste wijzigingen",
    slug: "wrs-wetgeving-update-2026",
    excerpt:
      "De WRS wordt verder uitgerold. Wat verandert er voor sekswerkers en klanten in de tweede helft van 2026?",
    content: `
## WRS-update: de stand van zaken

De Wet regulering sekswerk (WRS) wordt in fasen ingevoerd. In 2026 staat de verdere uitrol van de registratieplicht voor zelfstandige sekswerkers op de agenda, samen met aanvullende regels voor exploitanten.

## Wat is al van kracht?

- **Minimumleeftijd 21 jaar** voor het aanbieden van seksuele diensten
- **Vergunningplicht exploitanten** (clubs, bureaus, privehuizen) — landelijk geharmoniseerd
- **Verhoogd minimumtarief** voor registratie-ingangen

## Wat staat gepland voor 2026?

- **Verplichte registratie zelfstandigen** — rolt gefaseerd uit per gemeente, met Amsterdam, Rotterdam en Utrecht als eersten
- **Nationaal register exploitantencontrole** — informatie wordt nu landelijk gedeeld tussen gemeenten
- **Strengere ID-controle bij online advertenties** — platforms zoals Eroplein zijn verantwoordelijk voor verificatie

## Wat betekent dit voor klanten?

Kort: niet veel, zolang je via vergunde aanbieders boekt. Het wordt wel moeilijker om bij niet-vergunde aanbieders terecht te komen — wat op zich gezond is. Sekswerkers die zich registreren hebben meer rechten en bescherming. Het algemeen gevoel van "ondergrondse" sekswerk neemt af.

## Wat betekent dit voor sekswerkers?

Zelfstandige dames en heren moeten een vergunning aanvragen. Dat is onder meer de reden dat PROUD zo kritisch is — zij vrezen voor de privacy en stigma-impact van registratie. Gemeenten werken aan privacywaarborgen maar de discussie blijft actueel.

Voor meer: lees onze gids over de [WRS 2026](/gids/wet-regulering-sekswerk-2026).
    `.trim(),
    category_slug: "escorts",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-12",
    reading_time: 5,
    tags: ["wetgeving", "wrs", "regelgeving"],
  },
  {
    id: "a3",
    title: "Parenclub Fata Morgana blijft nummer 1 in Nederlandse reviews",
    slug: "fata-morgana-nummer-1-parenclub-2026",
    excerpt:
      "Na de jaarlijkse review-analyse blijkt Fata Morgana in Muiden opnieuw de best beoordeelde parenclub van Nederland. Wat maakt deze club uniek?",
    content: `
## Top positie verdedigd

De jaarlijkse Eroplein-analyse van parenclub-reviews is afgerond. Fata Morgana in Muiden, net buiten Amsterdam, komt voor het derde jaar op rij als nummer 1 uit de bus. Met een gemiddelde score van 4.7 uit 5 en honderden reviews blijft de club onbetwiste marktleider in de Nederlandse paren-scene.

## Wat maakt Fata Morgana uniek?

- **Schaal** — Fata Morgana is een van de grootste parenclubs van Europa, met themaruimtes, saunacomplex, zwembad en meerdere lounges
- **Kwaliteit van de faciliteiten** — bezoekers noemen consistent de hygiene, de bar-kwaliteit en de sfeerbouw
- **Strenge paren-only beleid** — singles worden niet toegelaten, waardoor de balans intact blijft
- **Ervaring van het personeel** — het team heeft jarenlange ervaring en bestuurt de club routineus

## Nieuwkomers in de top 5

In 2026 zien we een paar verschuivingen in de top-5:

1. **Fata Morgana (Muiden)** — stabiel op 1
2. **De Kastelein (Zeeland)** — stijgt naar plek 2, nieuwe lounge geopend
3. **The Chalet (Gelderland)** — blijft in top 3
4. **Sameplace (Amsterdam)** — stijging dankzij betere reviews over thema-avonden
5. **Playground Playschool (Utrecht)** — nieuwkomer in de top 5

## De Nederlandse parenclub-markt

Nederland telt ongeveer 30-40 actieve parenclubs. De markt is stabiel — geen grote groeispurts, maar ook geen duidelijke daling. Bezoekers maken bewuste keuzes, clubs investeren in faciliteiten, reviews blijven de beste maatstaf.

Voor het volledige overzicht: bekijk onze [parenclub-categoriepagina](/categorieen/clubs).
    `.trim(),
    category_slug: "clubs",
    city_slug: "amsterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-08",
    reading_time: 4,
    tags: ["parenclub", "top-reviews", "amsterdam"],
  },
  {
    id: "a4",
    title: "Prijsanalyse erotische diensten Nederland 2026: waar is het duurder geworden?",
    slug: "prijsanalyse-nederland-2026",
    excerpt:
      "Prijzen voor escorts, massage en parenclubs stegen in 2025-2026. Wat zijn de actuele tarieven per stad en categorie?",
    content: `
## Gemiddelde prijsstijging: 8% in 2025

Uit data-analyse van tarieven bij 200+ bedrijven op Eroplein blijkt dat de gemiddelde prijs voor erotische diensten in Nederland in 2025 met circa 8% is gestegen. Dit is sneller dan de algemene inflatie (4.5% in 2025) en volgt de trend van 2024.

## Breakdown per categorie

**Escort (uurprijs incall)**
- 2024: gemiddeld 175 euro
- 2025: gemiddeld 190 euro (+8.5%)
- 2026 Q1: ongeveer 195 euro

**Parenclub-entree (per paar)**
- 2024: gemiddeld 70 euro
- 2025: gemiddeld 75 euro (+7%)
- 2026 Q1: ongeveer 80 euro

**Erotische massage (60 min)**
- 2024: gemiddeld 130 euro
- 2025: gemiddeld 145 euro (+11.5%)
- 2026 Q1: ongeveer 150 euro

**Privehuis (30 min)**
- 2024: gemiddeld 60 euro
- 2025: gemiddeld 65 euro (+8%)
- 2026 Q1: ongeveer 68 euro

## Waarom de stijging?

- **Hogere kosten voor locaties** — huurprijzen van vergunde panden in binnensteden zijn sterk gestegen
- **Loonstijgingen in de branche** — sekswerkers vragen hogere tarieven
- **Certificering en compliance** — onder WRS zijn administratieve kosten gestegen
- **Vraag blijft stabiel tot licht stijgend** — er is ruimte om prijzen te verhogen zonder klanten te verliezen

## Per stad: waar is het duurst?

1. **Amsterdam** — gemiddeld 15-25% boven landelijk gemiddelde
2. **Utrecht** — +10-15%
3. **Den Haag** — +5-10%
4. **Rotterdam** — rond het landelijk gemiddelde
5. **Middelgrote steden (Eindhoven, Groningen, Tilburg)** — -5 tot -10%

## Betekent dit dat je duurder uit bent?

Ja, inflatie-gecorrigeerd iets duurder. Maar veel bedrijven bieden nog steeds staffelkortingen voor langere boekingen, en aanbiedingen voor weekdagen blijven gangbaar. Door te vergelijken en te boeken op rustige momenten kun je 15-25% besparen.
    `.trim(),
    category_slug: undefined,
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-01",
    reading_time: 5,
    tags: ["prijzen", "trends", "markt"],
  },
  // ── SCHEDULED ARTICLES 14 dagen (auto-live via ISR) ──

  {
    id: "a6",
    title: "Escort op de Wallen Amsterdam: hoe werkt het in 2026",
    slug: "escort-amsterdam-wallen-gids",
    excerpt: "De Wallen in 2026: wat is nog steeds hetzelfde, wat is veranderd, en wat kun je verwachten als bezoeker.",
    content: `## De Wallen anno 2026\n\nAmsterdam's Wallen blijft een van de meest herkenbare roodlichtdistricten ter wereld, maar de realiteit is fundamenteel anders dan tien jaar terug. Project 1012 sloot tientallen ramen, de toerisme-overlast werd beperkt, en de discussie over het Erotisch Centrum loopt nog. Voor wie het gebied bezoekt met serieuze intenties, is het begrijpen van de huidige structuur belangrijk.\n\n## Wat vind je nu?\n\n- **Oudezijds Achterburgwal/Voorburgwal** — kern van de Wallen, ramen aan weerszijden, meest toeristisch maar ook authentiek\n- **Singelgebied** — rustiger, toegankelijker voor beginners, minder drukte\n- **Ruysdaelkade (Amsterdam-Zuid)** — kleine, discrete ramenzone, vaak aanbevolen voor discretie\n\n## Praktische tips\n\n- Standaardprijs: 50 euro voor 15-20 minuten. Langer/speciaal is onderhandelbaar aan de deur.\n- Fotografie: absoluut verboden. Fysiek wegnemen van telefoons is toegestaan door handhaving.\n- Alcohol: te zwaar onder invloed = geweigerd worden aan de deur.\n- Groepen: vermijd. Max 2 personen worden getolereerd in dit deel van de stad.\n\n## En het Erotisch Centrum dan?\n\nDe verplaatsing naar een speciaal gebouwd centrum buiten de binnenstad is nog niet definitief. Actuele berichtgeving loopt. Voor nu blijven de klassieke zones operationeel zoals altijd.`,
    category_slug: "ramen",
    city_slug: "amsterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-23",
    reading_time: 5,
    tags: ["wallen", "amsterdam", "ramen"],
  },

  {
    id: "a7",
    title: "Eerste keer parenclub: complete beginnersgids 2026",
    slug: "parenclub-beginners-gids",
    excerpt: "Waar moet je op letten als koppel bij je eerste parenclub-bezoek? Huisregels, etiquette, dresscode en budget.",
    content: `## Het concept\n\nEen parenclub is géén bordeel — het is een locatie waar bezoekers (uitsluitend of overwegend paren) zelf seksueel actief worden met andere bezoekers. Je boekt je eigen avond, betaalt entree, en stapt in een omgeving van gelijkgestemde paren. Geen betaling aan dames, geen "service".\n\n## Vooraf\n\n- **Bespreek met je partner wat jullie wel en niet willen.** Dit is essentieel — een club kan geen communicatie oplossen die thuis niet goed is.\n- **Bekijk de website van de club.** Huisregels, dresscode, sfeer, openingsuren.\n- **Reserveer bij drukke avonden.** Popular clubs werken met ledenportal of bellen.\n\n## Eerste indruk\n\nBij aankomst: welkom bij receptie, kluisjes voor waardevolle spullen, badjassen aan. Zoek even je ritme in de club — bar, lounge, kijken wat er speelt. Geen druk, niemand verwacht dat je direct actief bent.\n\n## Etiquette\n\n- "Nee" = nee. Altijd. Grensoverschrijdend gedrag = direct uit de club gezet.\n- Geen foto's. Niet met telefoon, niet voor Instagram, nooit.\n- Respecteer gesloten kamerdeuren en draaiende gordijnen.\n- Plaats je drankje niet op een surface waar mensen actief zijn.\n\n## Budget\n\nEerste avond: reken op 120-220 euro voor twee. Entree (50-100), drankjes (30-60), parkeren (10-20). Eten is vaak inclusief of apart beschikbaar.\n\n## Als het niet klikt\n\nHet is ok om weg te gaan. Je mag binnen 10 minuten al besluiten dat deze club niet bij jullie past. Respectvol doei zeggen bij de receptie is voldoende.`,
    category_slug: "clubs",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-24",
    reading_time: 6,
    tags: ["parenclub", "beginners", "tips"],
  },

  {
    id: "a8",
    title: "Tantra vs erotische massage: welk verschil?",
    slug: "tantra-massage-vs-erotische-massage",
    excerpt: "Beide zijn 'volwassen massages', maar het verschil is fundamenteel. Uitgelegd per duur, techniek, doel en prijs.",
    content: `## Doel: het grote verschil\n\n**Tantra** gaat over energie. Het doel is diepe ontspanning, bewustwording van lichaam en ademhaling, en een intens gevoel van verbondenheid — met jezelf of met een partner. Climax is niet het centrale punt.\n\n**Erotische massage** (reguliere vorm, body-to-body) gaat over fysieke ervaring. Het doel is sensuele ontspanning, fysiek genot, en voor velen: climax als afsluiting.\n\n## Duur\n\n- Tantra: minimaal 90 minuten, vaak 120 minuten\n- Erotische: 30, 60 of 90 minuten\n\n## Opbouw\n\n**Tantra-sessie:** 20 min ademhaling/gesprek, 30-40 min langzame opbouw met handen, 20-30 min intense fase, 20 min afsluiting en integratie.\n\n**Erotische massage:** korte douche, 15-20 min oliemassage, 20-40 min body-to-body, 5-10 min afsluiting.\n\n## Prijs (indicatief)\n\n- Tantra 90 min: 170-280 euro\n- Erotische massage 60 min: 120-180 euro\n\n## Welke past bij jou?\n\n- **Kies tantra** als je langdurige ontspanning zoekt, spiritualiteit aanspreekt, en een intens persoonlijke ervaring wilt.\n- **Kies erotische massage** als je het fysieke centraal stelt, een kortere sessie wilt, en/of een duidelijker afrondende ervaring.\n\nBeide zijn volstrekt legitiem in Nederland. Hygiene, professionaliteit en vergunning zijn in beide gevallen vereisten — controleer reviews op Eroplein.`,
    category_slug: "erotische-massage",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-25",
    reading_time: 4,
    tags: ["tantra", "massage", "verschil"],
  },

  {
    id: "a9",
    title: "Escort boeken in Rotterdam: praktische tips 2026",
    slug: "escort-rotterdam-ervaring-tips",
    excerpt: "Rotterdam-specifieke tips voor een goede escort-ervaring: bureaus, hotels, timing en prijsrange.",
    content: `## De Rotterdamse markt\n\nRotterdam heeft een no-nonsense escort-scene. Gemiddelde uurprijs incall: 160-230 euro. Outcall naar hotels zoals Mainport, Room Mate Bruno, of nH Atlantic: 200-280 euro. Minder glamour, meer consistente kwaliteit dan Amsterdam.\n\n## Tips voor het boeken\n\n- **Bel vooraf.** Rotterdam werkt graag met persoonlijk contact. WhatsApp-only bureaus zijn er ook, maar bellen geeft je meer info over beschikbaarheid.\n- **Check reviews op Eroplein.** De beste bureaus hebben consistent hoge scores over meerdere maanden.\n- **Wees duidelijk over timing.** Rotterdammers waarderen directheid — "20:00 tot 22:00, hotel Mainport, voorkeur voor blonde dame" is prima.\n\n## Hotel-outcall\n\nRotterdam heeft veel zakelijke hotels geschikt voor outcall. Geef altijd vooraf door welk hotel: sommige bureaus werken bij voorkeur met specifieke hotels waar discrete incheck gegarandeerd is.\n\n## Prijsrange\n\n- Budget (120-160 euro): zelfstandige escorts\n- Midden (170-230 euro): reguliere bureaus met meerdere dames\n- Premium (240-350 euro): luxe bureaus, top-selectie dames\n- High-end (350+ euro): internationale modellen, overnacht-boekingen\n\n## Red flags\n\n- Prijzen onder 100 euro = overslaan (oplichting of gedwongen werk)\n- Volledige vooruitbetaling via Bitcoin of vouchers = altijd oplichting\n- "Direct beschikbaar, moet nu betalen" = hoge druk = slechte aanbieder\n\nVeilige keuze = vergund, reviews, normale betaalmethoden, bereikbaar kantoor. Check Eroplein voor actuele top.`,
    category_slug: "escorts",
    city_slug: "rotterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-26",
    reading_time: 5,
    tags: ["rotterdam", "escort", "tips"],
  },

  {
    id: "a10",
    title: "Achterdam Alkmaar: complete gids raamprostitutie 2026",
    slug: "raamprostitutie-alkmaar-achterdam",
    excerpt: "Achterdam, Nederlands op een na grootste raamprostitutiezone, in detail: wat, waar, wanneer, hoeveel.",
    content: `## Achterdam in cijfers\n\nDe Achterdam is Alkmaars roodlichtdistrict, gelegen in een aparte straat dichtbij de binnenstad. Na de Wallen (Amsterdam) is het de tweede grootste raamprostitutiezone van Nederland. Ruim 30 actieve ramen, open meeste dagen van 11:00 tot na middernacht.\n\n## Praktisch\n\n- **Locatie**: parallel aan Baansingel, loopafstand van station Alkmaar\n- **Parkeergarage**: Nieuwstraat (3 min lopen)\n- **Prijs**: 50 euro voor 15-20 min, 80-100 voor half uur, 150+ voor uur\n- **Betaalmiddel**: alleen contant\n\n## Sfeer\n\nMinder toeristisch dan de Wallen. Alkmaars publiek is vooral Nederlands, met ook veel bezoekers uit Noord-Holland. De straat is overzichtelijk — je loopt rond de Achterdam en ziet in 10 minuten het hele aanbod.\n\n## Etiquette\n\n- Niet fotograferen (wettelijk verboden en streng gecontroleerd)\n- Niet staren of groepsgewijs langs de ramen lopen\n- Geen harde of agressieve benadering. De dames kloppen op raam als ze je willen spreken.\n- Respecteer "nee" en gesloten gordijnen\n\n## Tijdstippen\n\n- **Middag** (13:00-17:00): rustigst, breedste keus, aanbevolen voor beginners\n- **Avond** (19:00-23:00): drukste, volste keus qua dames\n- **Na middernacht**: minder dames, meer alcohol onder publiek, minder prettig\n\n## Contrast met Wallen\n\nAchterdam voelt minder intimiderend dan de Wallen. Minder toeristen, minder groepen die rondhangen, duidelijker alles "gewoon". Voor wie nooit in de Wallen is geweest vanwege drukte, is Alkmaar een rustiger alternatief.`,
    category_slug: "ramen",
    city_slug: "alkmaar",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-27",
    reading_time: 5,
    tags: ["alkmaar", "achterdam", "ramen"],
  },

  {
    id: "a11",
    title: "Privehuis Utrecht: top locaties met reviews",
    slug: "privehuis-utrecht-reviews",
    excerpt: "Utrecht kent enkele vaste privehuizen met sterke Eroplein-reviews. Overzicht van de best beoordeelde locaties.",
    content: `## Het Utrechtse privehuis-landschap\n\nUtrecht heeft niet de grootste concentratie privehuizen in Nederland (Amsterdam, Rotterdam en Den Haag hebben meer), maar de gevestigde locaties hebben een trouwe klantenkring opgebouwd. Centrale ligging, goede bereikbaarheid vanuit heel Midden-Nederland.\n\n## Wat kun je verwachten?\n\nGemiddelde Utrechtse privehuis: 3-6 dames werkend per shift, openingsuren 11:00-23:00, entree direct op kamer. Prijzen iets onder Amsterdamse tarieven: 30 min 60-90 euro, 60 min 130-180 euro.\n\n## Kwaliteit\n\nDe top-3 privehuizen in Utrecht hebben gemiddelde reviewscores van 4.3+ op Eroplein over 30+ reviews. Dat is een gezond signaal van consistentie.\n\n## Parkeren\n\nAlle gevestigde Utrechtse privehuizen hebben óf eigen parkeerplaats, óf gratis straatparkeren in nabije omgeving. Check vooraf als je auto essentieel is voor je bezoek.\n\n## Tips voor je eerste bezoek\n\n- Kom wanneer je rustig hebt, niet tijdens een lunch break\n- Neem cash mee (pin werkt meestal wel maar traag)\n- Vraag bij binnenkomst om 5 minuten "kijk"-tijd zonder druk\n- Betaal pas nadat je een dame en duur hebt afgesproken\n\nVoor actuele top-3 van Utrechtse privehuizen: zie de stad-pagina voor Utrecht op Eroplein met reviews.`,
    category_slug: "privehuizen",
    city_slug: "utrecht",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-28",
    reading_time: 4,
    tags: ["utrecht", "privehuis", "reviews"],
  },

  {
    id: "a12",
    title: "Beste seksshops Amsterdam: specialist vs keten",
    slug: "seksshop-amsterdam-beste",
    excerpt: "Amsterdam kent beide: de grote ketens en de specialistische boetieks. Welke kies je voor wat?",
    content: `## De tweedeling\n\nAmsterdamse seksshops vallen in twee duidelijke categorieen: **grote ketens** (Christine le Duc, Wolf's World, Bananenbar-shop) en **specialisten** (Mail & Female, Stout Amsterdam, diverse BDSM-boetieks).\n\n## Ketens: waarvoor\n\n- Brede keuze speelgoed voor standaard budgetten\n- Bekende merken: LELO, We-Vibe, Doxy\n- Goede service voor beginners: veel uitleg, toegankelijk personeel\n- Online en offline inwisselbaar\n\n## Specialisten: waarvoor\n\n- Diepere kennis en maatwerk-advies\n- Niche-producten (BDSM, fetish, specifieke materialen)\n- Betere kwaliteit in hogere prijssegmenten\n- Persoonlijkere relatie met verkoper\n\n## Anonimiteit\n\nBeide werken cash of pin zonder registratie. Online ook neutraal verpakt.\n\n## Prijsrange\n\n- Entry-level vibrator: 30-60 euro (ketens)\n- Mid-range (We-Vibe, LELO Sona): 100-220 euro (beide)\n- Premium (LELO Insignia, We-Vibe Chorus): 220-400 euro (beide)\n- Custom of fetish items: vaak 100+ euro, specialist-only\n\n## Mijn aanbeveling\n\nBeginners of cadeau-kopers: ketens. Ervaren users, specifieke wensen, BDSM of niche: boetiek. Check reviews op Eroplein voor actuele top-5.\n\n## Veiligheid\n\nKoop alleen body-safe materialen: medisch silicone, ABS, glas. Vermijd poreus jelly of PVC — materialen die moeilijk te reinigen zijn en allergische reacties kunnen veroorzaken. Goede winkels verkopen dat spul niet.`,
    category_slug: "seksshops",
    city_slug: "amsterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-29",
    reading_time: 4,
    tags: ["amsterdam", "seksshop", "vergelijking"],
  },

  {
    id: "a13",
    title: "Club Fellini Kerkdriel: uitgebreide review 2026",
    slug: "club-fellini-kerkdriel-review",
    excerpt: "De populairste FKK-saunaclub van Nederland onder de loep. Ervaring, prijzen, dames, wellness — het volledige plaatje.",
    content: `## Overzicht\n\nClub Fellini in Kerkdriel (Gelderland) staat al jaren in de top van Nederlandse saunaclub-reviews. All-in concept: entree dekt wellness, sauna, zwembad en buffet; sessies met dames zijn extra.\n\n## Locatie en bereikbaarheid\n\nKerkdriel ligt aan de A2, 35 min vanaf Utrecht, 50 min vanaf Amsterdam. Ruime parkeergelegenheid. Openingstijden: 13:00-02:00 (weekend langer).\n\n## Entree en prijzen\n\n- Doordeweeks: 110 euro\n- Vrijdag/zaterdag: 140 euro\n- Studenten-korting (met ID) op bepaalde dagen\n\nEntree includeert: wellness toegang, buffet, niet-alcoholische drankjes, lockers.\n\n## Wellness\n\nTopkwaliteit: meerdere sauna's (Fins, infrarood, stoom), zwembad met counterflow, rustlounge, buitenterras (zomer). Staat bekend om hygiene en consistente ondershoud.\n\n## Dames\n\n15-35 dames werkzaam per shift, voornamelijk vanuit Duitsland, Polen, Oost-Europa. Selectie in gemeenschappelijke ruimte: oogcontact maken, met haar meegaan naar privéruimte.\n\nSessie-prijzen:\n- 30 min: 80 euro\n- 60 min: 150 euro\n- 90 min: 200 euro\n\n## Wat maakt Fellini populair?\n\nGebaseerd op Eroplein-reviews: consistente kwaliteit (niemand vermeldt slechte ervaringen), brede keuze dames, ruime wellnessfaciliteiten, professioneel personeel. De combinatie van deze factoren levert hoge 4.5+ gemiddelde score.\n\n## Kritieke punten\n\n- Drukte op vrijdagavond — lange wachttijden bij gewilde dames\n- Klantenkring wisselend (Nederlanders, Duitse grenstouristen, business-klanten)\n- Parkeergarage kan vol lopen — kom op tijd\n\n## Onze conclusie\n\nWil je het FKK-concept goed ervaren zonder naar Duitsland te rijden? Club Fellini is de veilige keuze. Voor beginners aanbevolen: vriendelijk team, duidelijke uitleg.`,
    category_slug: "saunaclubs",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-04-30",
    reading_time: 6,
    tags: ["saunaclub", "fellini", "review"],
  },

  {
    id: "a14",
    title: "Escort Den Haag: bureaus & onafhankelijke dames",
    slug: "escort-den-haag-gids",
    excerpt: "Den Haag's escort-markt vergeleken: grote bureaus vs onafhankelijke escorts, wat past bij welke situatie.",
    content: `## Twee typen aanbieders\n\n**Bureaus** werken via centrale boeking, hebben meerdere dames, en bedienen zakelijke klanten (ambassades, hotels) en lokale stamgasten. Topbureaus staan bekend om discretie — essentieel voor Den Haag.\n\n**Onafhankelijke escorts** adverteren zelf en bouwen vaak persoonlijke klantrelaties. Gemiddeld iets lagere prijzen, langere sessies mogelijk, meer ruimte voor maatwerk.\n\n## Wanneer bureau?\n\n- Hotel-outcall (Des Indes, Corona, Babylon, Mercure): bureau heeft vaste werkwijzen\n- Last-minute boeking: bureau heeft altijd beschikbare dame\n- Specifieke voorkeuren (taal, uiterlijk): bureau heeft bredere selectie\n\n## Wanneer zelfstandige?\n\n- Langere sessies (3+ uur, overnight): persoonlijker, vaak 10-20% goedkoper\n- Vaste klantrelatie: bouw een echte connectie op\n- Specifieke specialisaties (massage + escort, romantische dates)\n\n## Prijsrange Den Haag\n\n- Bureau incall: 170-240 euro per uur\n- Bureau outcall naar hotel: 220-320 euro per uur\n- Onafhankelijke: 150-260 euro per uur (hele range)\n- Top-segment: 400+ euro, internationaal gevraagd\n\n## Discretie\n\nDen Haag-klanten vragen bovengemiddeld om discretie vanwege diplomatieke en zakelijke werkverbanden. Topbureaus werken daarom:\n- Geen ID-opslag\n- Geen klantgegevens-retentie langer dan 30 dagen\n- Cash, crypto-ontwijking\n- Niet-traceerbare boekingskanalen\n\n## Selectie\n\nBekijk Eroplein-reviews. De top 5 bureaus in Den Haag hebben consistent hoge scores over 50+ reviews. Fake-reviews worden gefilterd via onze moderatie.`,
    category_slug: "escorts",
    city_slug: "den-haag",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-01",
    reading_time: 5,
    tags: ["den-haag", "escort", "gids"],
  },

  {
    id: "a15",
    title: "Yab Yum Amsterdam: de legende, de realiteit",
    slug: "stripclub-yab-yum-amsterdam",
    excerpt: "Yab Yum was decennialang de bekendste escort/stripclub van Amsterdam. Wat is de realiteit anno 2026?",
    content: `## De legende\n\nYab Yum openende in 1989 als escortclub van de Nederlandse ondernemer Theo Heuft. Decennialang was het dé adres van internationale zakenreizigers, sterren uit Hollywood en Nederlandse prominenten. Luxe interieur in Victoriaans-Aziatische stijl, de beste dames van Europa, prijzen tot 2000 euro per nacht.\n\n## De neergang\n\nBegin jaren 2010 kwam de Yab Yum onder druk: witwas-onderzoeken, verbouwingen verboden, het icoonpand Singel 295 verdween uit de rolverdeling in 2008. Een poging tot heropening in Limburg eindigde stil.\n\n## Vandaag\n\nIn 2026 is "Yab Yum" een naam die door meerdere entiteiten wordt gebruikt — een relatief recent herbouwd concept aan de Singel, niet op het oorspronkelijke adres. Inhoudelijk: moderne stripclub met bar, live shows en optionele VIP-sessies. Geen escortservice meer volgens wettelijke limieten.\n\n## Wat vind je er?\n\n- Stripshows: dagelijks meerdere per avond\n- Cocktailbar: premium prijsniveau (18-25 euro per cocktail)\n- VIP-ruimtes: 150-300 euro per 15-30 minuten\n- Entree: 30-40 euro weekdagen, 50 euro weekend\n\n## Sfeer\n\nMeer "party" dan "club" — veel toeristen, zakelijke events, grote groepen. Niet meer de intieme luxe van de originele Yab Yum. Voor serieuzere ervaringen: specifieke gentlemen's clubs elders in Amsterdam.\n\n## Is het de moeite waard?\n\nAls curiositeit en nostalgische waarde: ja, één bezoek. Voor echte kwaliteit vergeleken met concurrenten zoals Casa Rosso, Bananenbar of moderne gentlemen's clubs: afhankelijk van wat je zoekt. Lees actuele Eroplein-reviews.`,
    category_slug: "stripclubs",
    city_slug: "amsterdam",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-02",
    reading_time: 5,
    tags: ["amsterdam", "yab-yum", "stripclub"],
  },

  {
    id: "a16",
    title: "Escort Eindhoven: prijzen en top bureaus 2026",
    slug: "escort-eindhoven-prijzen",
    excerpt: "Eindhoven's technologiestad heeft een eigen escortmarkt. Prijzen, bureaus, specialisaties in 2026.",
    content: `## De Eindhovense markt\n\nEindhoven, centrum van Brainport en thuisbasis van Philips/ASML, heeft een zakelijk-georienteerde escortmarkt. Veel dames werken voor internationale bedrijfsklanten via discrete bureaus.\n\n## Prijsrange\n\n- Incall: 140-220 euro per uur\n- Outcall naar Eindhoven Airport hotels of Brainport-campus: 190-270 euro\n- Onafhankelijk: vaak 120-180 euro per uur\n- Luxe segment: 300+ euro\n\n## Wie werkt in Eindhoven?\n\n- Nederlandse escorts: 60%\n- Oost-Europees (Hongarije, Pools): 25%\n- Latin Amerikaans of Aziatisch: 15%\n\n## Boekingstypen\n\n- **Standaard 1-2 uur**: meest gevraagd, 140-220 euro\n- **Dinner date**: 3-4 uur, 350-550 euro\n- **Overnight**: 7-9 uur, 800-1200 euro\n- **Weekend / travel**: persoonlijk geboekt\n\n## Discretie in Eindhoven\n\nKleinere stad betekent dat bureaus elkaar kennen en klantinformatie wordt nooit gedeeld. Vaste klanten bouwen persoonlijke relaties op met bepaalde dames, vaak via hetzelfde bureau jaren achtereen.\n\n## Top bureaus (op Eroplein)\n\nActuele ranglijst: zie stad-pagina Eindhoven. Criteria: gemiddelde reviewscore boven 4.2, minimaal 15 reviews in laatste 12 maanden, vergunning geverifieerd.\n\n## Tips voor zakelijke boeking\n\n- Hotel-outcall naar NH, Van der Valk, Pullman: standaard\n- Facturering op bedrijfsnaam: in principe mogelijk via sommige bureaus (check vooraf)\n- Taal: Engelstalige dames vaak aangeboden voor internationale klanten`,
    category_slug: "escorts",
    city_slug: "eindhoven",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-03",
    reading_time: 5,
    tags: ["eindhoven", "escort", "prijzen"],
  },

  {
    id: "a17",
    title: "Swingersclub vs parenclub: is het verschil?",
    slug: "swingersclub-vs-parenclub",
    excerpt: "Termen worden inwisselbaar gebruikt, maar er zijn subtiele verschillen in sfeer, doelgroep en regels.",
    content: `## De termen\n\n**Parenclub**: focus op paren (getrouwd, relatie, of vaste partners die samen avontuur zoeken). Atmosfeer vaak meer ingetogen, minder theatraal.\n\n**Swingersclub**: focus op het actieve wisselen van partners, vaak expliciet georganiseerd (swinger-parties, key-parties). Atmosfeer doorgaans extraverter en direct.\n\nIn de praktijk: de grens is vaag. Veel clubs gebruiken beide termen.\n\n## Sfeer-verschillen\n\n**Parenclub-kenmerken:**\n- Dresscode strikter (smart casual aankomst)\n- Muziek achtergrond, niet dansvloer-volume\n- Meer bar/lounge, minder aparte actieve ruimtes\n- Koppels blijven vaak bij elkaar, occasioneel wisselen\n\n**Swingersclub-kenmerken:**\n- Dresscode vaak expliciet (lingerie, fetish, themakleding)\n- Luidere muziek, dansvloer aanwezig\n- Meer aparte sex-ruimtes (groepsruimte, paarruimtes, single-ruimte)\n- Actief wisselen wordt verwacht\n\n## Singles\n\n- **Parenclub**: meestal single-mannen niet toegelaten (uitzondering op single-avonden)\n- **Swingersclub**: singles vaak wel welkom, soms met balotage of ledenkaart\n\n## Etiquette\n\nIn beide: "nee" is altijd nee. Toestemming expliciet. Voorzichtige benadering van onbekenden. Veel clubs hebben "tap on shoulder" als verzoek tot interactie.\n\n## Voorbeelden Nederland\n\n- **Parenclub**: Fata Morgana, De Kastelein, The Chalet, Society Swing\n- **Swingersclub**: Sameplace (met thema-avonden), Sex Playground, Wisselbeurt\n\n## Welke kies je?\n\n- **Rustig beginnen als paar**: parenclub, standaardavond\n- **Actief wisselen gezocht**: swingersclub, themanight\n- **Singles**: check specifieke club op beleid, of ga naar swingersclub\n\nReviews op Eroplein benadrukken per club hun exacte positionering. Lees voor je gaat.`,
    category_slug: "clubs",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-04",
    reading_time: 5,
    tags: ["swingersclub", "parenclub", "verschil"],
  },

  {
    id: "a18",
    title: "Nuru massage in Nederland: waar, hoe en wat kost het",
    slug: "nuru-massage-nederland",
    excerpt: "Nuru, de Japanse glijmassage, is zeldzaam maar geweldig. Waar vind je het in Nederland en wat kun je verwachten?",
    content: `## Wat is nuru?\n\nNuru-massage komt uit Japan en gebruikt een smaakneutraal algen-gel (nuru-gel). De gel maakt lichaam superglad — de masseuse glijdt met haar hele lichaam over het jouwe. Unieke sensatie, onvergetelijk.\n\n## Waar in Nederland?\n\nMinder breed aangeboden dan body-to-body. Specifiek in nuru gespecialiseerde salons:\n- Amsterdam: enkele massage-specialisten in centrum\n- Rotterdam: beperkt aanbod, top-salons bieden het op afspraak\n- Utrecht: 1-2 salons beschikbaar\n- Andere steden: op afspraak bij bredere salons\n\n## Wat maakt het bijzonder?\n\n- De volledige lichaams-tot-lichaam glij-sensatie is anders dan alles anders\n- Geen oliemassage — gel is waterbasis, wordt afgespoeld\n- Speciale afgesloten matrasjes, vaak waterbestendig\n- Duur meestal 60-90 min, niet korter\n\n## Prijsrange\n\n- 60 min: 150-220 euro (hoger dan body-to-body vanwege specialisatie + gel-kosten)\n- 90 min: 220-320 euro\n- Couples nuru: 400-600 euro (2 masseuses tegelijk)\n\n## Voorbereiding\n\n- Douchen vooraf is standaard\n- De gel is veilig voor huid, smakeloos, reukloos\n- Niet allergeen maar check bij gevoelige huid\n- Stevige afspraak: dit is niet een "erbij doen" sessie, plan 2 uur voor totale ervaring\n\n## Is het erotisch of klassiek massage?\n\nStrikt gezien: erotische massage. De kern is sensuele, volledige lichaamsaanraking. Afronding afhankelijk van specifieke salon — check bij boeking.\n\n## Tips voor je eerste nuru\n\n- Reserveer ruim vooraf — geen walk-in\n- Check reviews specifiek voor nuru (algemene salon-reviews zeggen niets over nuru-kwaliteit)\n- Neem 15 min buffer na afloop — nuru is intens, je wilt tijd om tot rust te komen`,
    category_slug: "erotische-massage",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-05",
    reading_time: 5,
    tags: ["nuru", "massage", "japans"],
  },

  {
    id: "a19",
    title: "Escort Groningen: studentenstad met rijk aanbod",
    slug: "escort-groningen-gids",
    excerpt: "Groningen is geen Amsterdam, maar de escortmarkt is verrassend divers. Wat kun je verwachten in het noorden?",
    content: `## De Groningse markt\n\nGroningen, de grootste studentenstad van Noord-Nederland, heeft een diverser escortmarkt dan je zou verwachten. Bureaus bedienen ook Drenthe, Friesland en Overijssel. Veel vaste klanten, persoonlijke relaties tussen bureaus en klanten — anders dan de anonimiteit van de Randstad.\n\n## Prijsrange\n\n- Incall: 130-190 euro per uur\n- Outcall naar Groningse hotels: 170-240 euro\n- Outcall naar Drenthe/Friesland: vaak +30-50 euro reiskosten\n- Zelfstandige escorts: 120-180 euro\n\n## Wie werkt?\n\n- Noord-Nederlandse escorts: aanzienlijk deel\n- Duitse escorts: regelmatig aanwezig (grens)\n- Oost-Europese: middensegment prijs\n- Studenten-escorts: voorzichtig vermelden bestaat, maar bureaus werken niet met onderwaardige registratie\n\n## Wat maakt Groningen anders?\n\n**Persoonlijkheid**: bureaus kennen hun klanten vaak over jaren. Een bureau dat je goed helpt matcht je aan dames die bij je passen, niet alleen beschikbaar zijn.\n\n**Discretie minder kritiek**: anders dan Amsterdam heeft Groningen geen "iedereen kent iedereen" issue, maar kleinere stad betekent wel voorzichtigheid bij zichtbare locaties.\n\n**Fluctuerende beschikbaarheid**: kleinere pool van dames betekent dat populaire dames boekbaar kunnen zijn met wachtlijst.\n\n## Raamprostitutie\n\nGroningen heeft nog raamwerk aan de Nieuwstad. Andere dynamiek, lagere prijzen (50 euro/kort), directere interactie. Niet voor iedereen — check de Eroplein-gids voor Nieuwstad.\n\n## Top bureaus\n\nActuele top-5 op de Groningen stad-pagina. Criteria: consistente reviews, vergund, transparante prijzen, bereikbaar telefonisch.`,
    category_slug: "escorts",
    city_slug: "groningen",
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-05-06",
    reading_time: 5,
    tags: ["groningen", "escort", "noord-nederland"],
  },

  {
    id: "a5",
    title: "Wellness-trends in saunaclubs: wat klanten in 2026 vragen",
    slug: "saunaclub-trends-2026",
    excerpt:
      "FKK-saunaclubs moderniseren: meer wellness, minder klassiek bordeel. Een overzicht van trends in de Nederlandse saunaclub-markt.",
    content: `
## Van bordeel naar wellness

De FKK-saunaclub, origineel geimporteerd uit Duitsland, is al twee decennia een vaste waarde in de Nederlandse erotische scene. In 2026 zien we een duidelijke verschuiving: clubs investeren in wellness-kwaliteit om buiten de "seks-only" markt een breder publiek aan te spreken.

## Wat veranderd?

- **Betere sauna-faciliteiten** — meerdere saunavarianten (Fins, infrarood, stoombad), professionele opgieters
- **Ruimere wellness-areas** — rustruimtes, meditatieruimtes, zwembaden met counterflow
- **Uitgebreider eten** — van simpel buffet naar a-la-carte kookgelegenheden
- **Langere openingsuren** — enkele clubs blijven open tot 6:00 om het ontbijt aan te bieden

## Wie komt er?

- **Vaste klantengroep: 40-60-jarige zakelijke mannen** — nog steeds kernsegment
- **Nieuwe groep: paren** — tussen 2022-2026 verdubbeling aantal koppel-bezoeken in saunaclubs met couple-friendly beleid
- **Groei: alleenstaande vrouwen** — kleiner maar stabiel groeiend segment
- **Toeristen uit Duitsland/Belgie** — grensclubs (Kerkdriel, Venlo) blijven Duits publiek aantrekken

## Prijzen in 2026

- Standaard saunaclub-entree: 80-140 euro all-in (eten, drankjes, gebruik van faciliteiten)
- Sessie met een dame: 70-130 euro voor 30 minuten
- Couple-avonden: vaak korting van 20-30% op entree

## Top 3 Nederlandse saunaclubs (volgens reviews)

1. **Club Fellini (Kerkdriel)** — grensklassieker, 4.5/5
2. **Colors (Venlo)** — meest moderne wellness-faciliteiten
3. **Club Miracle (Goes)** — nieuwkomer met hoge reviews

Zie [alle saunaclubs op Eroplein](/categorieen/saunaclubs) voor de volledige lijst.
    `.trim(),
    category_slug: "saunaclubs",
    city_slug: undefined,
    author_name: "Redactie Eroplein",
    author_initial: "R",
    published_at: "2026-03-22",
    reading_time: 5,
    tags: ["saunaclub", "wellness", "trends"],
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

export function getPublishedArticles(): Article[] {
  return placeholderArticles.filter((a) => isPublished(a.published_at));
}

export function getPlaceholderArticleBySlug(
  slug: string
): Article | undefined {
  const a = placeholderArticles.find((article) => article.slug === slug);
  if (!a) return undefined;
  if (!isPublished(a.published_at)) return undefined;
  return a;
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
