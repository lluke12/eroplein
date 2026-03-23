export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  questions: FaqQuestion[];
}

export const faqCategories: FaqCategory[] = [
  {
    slug: "escorts",
    name: "Escorts",
    icon: "crown",
    description:
      "Veelgestelde vragen over het boeken van escorts, kosten, veiligheid en wat je kunt verwachten.",
    questions: [
      {
        id: "escorts-1",
        question: "Wat kost een escort gemiddeld?",
        answer:
          "De kosten voor een escort in Nederland varieren sterk afhankelijk van de stad, het bureau en de duur van de boeking. Gemiddeld betaal je tussen de 150 en 300 euro per uur. In grote steden als Amsterdam of Rotterdam liggen de prijzen doorgaans iets hoger. Veel escorts en bureaus bieden kortingen aan voor langere boekingen, zoals een overnachting of een dinerafspraak. Prijzen zijn altijd exclusief eventuele reiskosten bij outcall-boekingen.",
      },
      {
        id: "escorts-2",
        question: "Hoe boek ik een escort?",
        answer:
          "Je kunt een escort boeken via een escortbureau of rechtstreeks bij een onafhankelijke escort. Bij de meeste bureaus kun je online of telefonisch reserveren. Geef aan wanneer je een afspraak wilt, hoe lang, en of je een incall of outcall verkiest. Na bevestiging ontvang je verdere instructies. Het is gebruikelijk om je afspraak minimaal enkele uren van tevoren te maken, al bieden sommige bureaus last-minute beschikbaarheid aan.",
      },
      {
        id: "escorts-3",
        question: "Wat is het verschil tussen incall en outcall?",
        answer:
          "Bij een incall-boeking bezoek je de escort op haar of zijn locatie. Dit kan een privewoning of een speciaal ingerichte ruimte zijn. Bij een outcall komt de escort naar jou toe, bijvoorbeeld naar je hotel of thuisadres. Outcall is doorgaans iets duurder vanwege de reistijd en eventuele reiskosten. Niet alle escorts bieden beide opties aan, dus check dit altijd vooraf.",
      },
      {
        id: "escorts-4",
        question: "Hoe weet ik of een escort betrouwbaar is?",
        answer:
          "Lees reviews en ervaringen van andere bezoekers op Eroplein. Betrouwbare escorts en bureaus hebben doorgaans meerdere positieve beoordelingen, geverifieerde foto's en duidelijke contactinformatie. Wees voorzichtig bij advertenties zonder reviews, met onrealistische foto's of met agressieve verkooptechnieken. Een professioneel bureau is altijd transparant over prijzen en voorwaarden.",
      },
      {
        id: "escorts-5",
        question: "Zijn escort services legaal in Nederland?",
        answer:
          "Ja, escortservices zijn legaal in Nederland. Sekswerk is een erkend beroep en escortbureaus hebben een vergunning nodig van de gemeente. Het is belangrijk om altijd te kiezen voor vergunde bureaus of zelfstandige escorts die legaal werken. Dit garandeert niet alleen een veilige ervaring, maar beschermt ook de rechten van de sekswerker.",
      },
      {
        id: "escorts-6",
        question: "Wat als ik niet tevreden ben over een boeking?",
        answer:
          "Als je niet tevreden bent, neem dan in eerste instantie contact op met het escortbureau. Professionele bureaus nemen klachten serieus en zoeken naar een passende oplossing, zoals een gedeeltelijke terugbetaling of een nieuwe afspraak. Je kunt ook een eerlijke review achterlaten op Eroplein zodat andere bezoekers gewaarschuwd zijn. Communiceer altijd respectvol en wees specifiek over wat er misging.",
      },
      {
        id: "escorts-7",
        question: "Wat zijn de omgangsregels bij een escortafspraak?",
        answer:
          "Behandel een escort altijd met respect. Zorg dat je op tijd bent, hygiënisch en nuchter. Bespreek vooraf wat je verwacht en respecteer grenzen die de escort aangeeft. Betaling vindt doorgaans vooraf plaats, in contanten of zoals afgesproken. Maak geen foto's of video's zonder uitdrukkelijke toestemming. Een prettige sfeer zorgt voor de beste ervaring voor beide partijen.",
      },
    ],
  },
  {
    slug: "privehuizen",
    name: "Privehuizen",
    icon: "home",
    description:
      "Alles wat je wilt weten over privehuizen en relaxhuizen in Nederland: kosten, etiquette en wat je kunt verwachten.",
    questions: [
      {
        id: "privehuizen-1",
        question: "Wat is een privehuis precies?",
        answer:
          "Een privehuis, ook wel relaxhuis genoemd, is een adres waar meerdere sekswerkers tegelijk aanwezig zijn en hun diensten aanbieden. In tegenstelling tot een club is de sfeer doorgaans intiem en huiselijk. Je kunt zonder afspraak langskomen, een dame kiezen en samen naar een kamer gaan. Privehuizen zijn vergund en worden regelmatig gecontroleerd door de gemeente.",
      },
      {
        id: "privehuizen-2",
        question: "Wat kost een bezoek aan een privehuis?",
        answer:
          "De prijzen in privehuizen variëren per adres en per dame. Gemiddeld betaal je tussen de 50 en 150 euro voor een sessie van 15 tot 30 minuten. Sommige privehuizen rekenen ook een kleine entreefee. De exacte prijzen worden doorgaans besproken met de dame van je keuze. Betaling gaat bijna altijd in contanten.",
      },
      {
        id: "privehuizen-3",
        question: "Hoe werkt een bezoek aan een privehuis?",
        answer:
          "Je komt binnen, wordt ontvangen door een gastvrouw of de dames zelf, en krijgt iets te drinken aangeboden. Vervolgens kun je kennismaken met de aanwezige dames en je keuze maken. Na overeenstemming over de diensten en de prijs ga je samen naar een kamer. Na afloop vertrek je via de receptie. Het is gebruikelijk om discreet te zijn en andere gasten met rust te laten.",
      },
      {
        id: "privehuizen-4",
        question: "Moet ik van tevoren reserveren?",
        answer:
          "Bij de meeste privehuizen is reserveren niet nodig. Je kunt zonder afspraak langskomen tijdens de openingstijden. Het is wel verstandig om de website of sociale media van het privehuis te checken voor actuele openingstijden en welke dames aanwezig zijn. Sommige populaire adressen kunnen in het weekend druk zijn, dus een belletje vooraf kan handig zijn.",
      },
      {
        id: "privehuizen-5",
        question: "Zijn privehuizen veilig?",
        answer:
          "Vergunde privehuizen in Nederland zijn veilig. Ze worden regelmatig gecontroleerd door de GGD en de gemeente. Hygiëne is een prioriteit en de kamers worden na elk bezoek schoongemaakt. Condoomgebruik is verplicht. Kies altijd voor een vergund adres en lees reviews op Eroplein voor ervaringen van andere bezoekers.",
      },
      {
        id: "privehuizen-6",
        question: "Wat is het verschil tussen een privehuis en een club?",
        answer:
          "Het belangrijkste verschil is de sfeer en opzet. Een privehuis is kleiner en intiemer, met een huiselijke sfeer. Een seksclub is groter, heeft vaak een bar, loungeruimte en soms faciliteiten zoals een jacuzzi of bioscoop. In een club betaal je doorgaans entree en zijn drankjes apart. In een privehuis betaal je meestal alleen voor de sessie met de dame van je keuze.",
      },
      {
        id: "privehuizen-7",
        question: "Hoe vind ik een goed privehuis bij mij in de buurt?",
        answer:
          "Op Eroplein kun je privehuizen zoeken per stad. Lees de reviews en ervaringen van andere bezoekers om een goede keuze te maken. Let op de gemiddelde beoordeling, het aantal reviews en recente ervaringen. Je kunt ook filteren op stad om een privehuis in je eigen regio te vinden.",
      },
    ],
  },
  {
    slug: "clubs",
    name: "Clubs",
    icon: "sparkles",
    description:
      "Veelgestelde vragen over parenclubs, swingersclubs en seksclubs in Nederland.",
    questions: [
      {
        id: "clubs-1",
        question: "Wat is een parenclub precies?",
        answer:
          "Een parenclub, ook wel swingersclub genoemd, is een club waar stellen en soms singles terechtkomen om in een veilige, gelijkgestemde omgeving seksuele ervaringen te delen met anderen. De clubs hebben doorgaans een bar, dansvloer en verschillende speelruimtes. Alles is vrijblijvend en gebeurt alleen met wederzijdse toestemming.",
      },
      {
        id: "clubs-2",
        question: "Mag je alleen als single naar een parenclub?",
        answer:
          "Dit verschilt per club. Veel parenclubs organiseren speciale single-avonden of laten singles toe op bepaalde dagen. Sommige clubs zijn uitsluitend voor stellen. Single mannen betalen doorgaans een hogere entreeprijs dan stellen of single vrouwen. Check altijd de huisregels en het programma van de club voordat je gaat.",
      },
      {
        id: "clubs-3",
        question: "Wat is de dresscode in een parenclub?",
        answer:
          "De meeste parenclubs hanteren een dresscode. Voor mannen is dit doorgaans nette kleding: een lange broek en nette schoenen. Sportschoenen en korte broeken zijn vaak niet toegestaan. Vrouwen worden verwacht zich sexy of feestelijk te kleden. Veel clubs bieden ook de mogelijkheid om je om te kleden ter plaatse. Sommige thema-avonden hebben een specifieke dresscode.",
      },
      {
        id: "clubs-4",
        question: "Wat kost een avond in een parenclub?",
        answer:
          "De entreeprijs varieert per club en per avond. Stellen betalen gemiddeld tussen de 30 en 80 euro entree, vaak inclusief een drankje of toegang tot faciliteiten. Single mannen betalen doorgaans meer, tussen de 50 en 120 euro. Single vrouwen komen bij sommige clubs gratis of voor een verlaagd tarief binnen. Drankjes en snacks zijn meestal apart.",
      },
      {
        id: "clubs-5",
        question: "Zijn er regels voor gedrag in een parenclub?",
        answer:
          "Absoluut. De belangrijkste regel is: nee is nee. Alles gebeurt op basis van wederzijdse toestemming. Staar niet, dring niet aan en respecteer de grenzen van anderen. Gebruik altijd condooms in de speelruimtes. Telefoons en camera's zijn doorgaans verboden. Overmatig alcoholgebruik wordt niet getolereerd. De meeste clubs hebben huisregels die bij binnenkomst worden uitgelegd.",
      },
      {
        id: "clubs-6",
        question: "Is alles vrijblijvend in een parenclub?",
        answer:
          "Ja, alles in een parenclub is volledig vrijblijvend. Je bent nergens toe verplicht. Veel bezoekers komen de eerste keer alleen om de sfeer te proeven, te drinken en te kijken. Pas als alle betrokken partijen instemmen, gebeurt er meer. Het is volkomen normaal om een avond alleen in de bar door te brengen zonder deel te nemen aan activiteiten.",
      },
      {
        id: "clubs-7",
        question: "Hoe vind ik een goede parenclub of seksclub?",
        answer:
          "Op Eroplein vind je reviews en ervaringen van echte bezoekers over parenclubs en seksclubs in heel Nederland. Filter op stad of categorie en lees wat anderen van hun bezoek vonden. Let op de sfeer, schoonheid van de faciliteiten, het personeel en de bezoekers. Een club met consistent goede reviews is meestal een veilige keuze.",
      },
    ],
  },
  {
    slug: "erotische-massage",
    name: "Erotische Massage",
    icon: "heart",
    description:
      "Veelgestelde vragen over erotische massage, tantra en sensuele wellness in Nederland.",
    questions: [
      {
        id: "massage-1",
        question: "Wat is erotische massage precies?",
        answer:
          "Erotische massage is een massagevorm waarbij sensuele aanraking centraal staat. Het combineert ontspannende massagetechnieken met erotische elementen. Er zijn verschillende varianten, van tantra en nuru tot body-to-body massage. De nadruk ligt op ontspanning, lichaamsbewustzijn en sensueel genot. Elke salon of masseur biedt zijn eigen specialisaties aan.",
      },
      {
        id: "massage-2",
        question: "Wat kost een erotische massage?",
        answer:
          "Een erotische massage kost gemiddeld tussen de 80 en 200 euro per sessie van 60 minuten. Tantra-massages zijn doorgaans duurder, vanaf 150 euro. De prijs hangt af van de locatie, de ervaring van de masseur en het type massage. Veel salons bieden pakketten aan met verschillende opties en tijdsduren. Check altijd vooraf wat er precies inbegrepen is.",
      },
      {
        id: "massage-3",
        question: "Wat is het verschil tussen tantra en erotische massage?",
        answer:
          "Tantra-massage is een spirituele massagevorm die gericht is op het vrijmaken van energie en het verdiepen van lichaamsbewustzijn. Het is vaak langer (90-120 minuten) en omvat ademhalingsoefeningen en meditatie. Erotische massage is breder en kan puur gericht zijn op sensueel genot. Tantra wordt vaak gezien als een holistische ervaring, terwijl erotische massage meer op ontspanning en genot is gericht.",
      },
      {
        id: "massage-4",
        question: "Moet ik van tevoren reserveren?",
        answer:
          "Ja, bij de meeste erotische massagesalons is een reservering verplicht of sterk aanbevolen. Populaire masseurs en salons zijn snel volgeboekt, vooral in het weekend. Bel of boek online, liefst een dag of meer van tevoren. Bij je reservering kun je je voorkeuren aangeven, zoals het type massage en de gewenste duur.",
      },
      {
        id: "massage-5",
        question: "Wat moet ik verwachten bij mijn eerste bezoek?",
        answer:
          "Bij aankomst word je ontvangen en kun je je omkleden of douchen. De masseur bespreekt je wensen en eventuele grenzen. Tijdens de massage lig je doorgaans naakt op een massagetafel. De masseur gebruikt warme olie en combineert ontspannende technieken met sensuele aanraking. Communiceer openlijk over wat prettig voelt en wat niet. Na afloop kun je vaak nog even ontspannen met een drankje.",
      },
      {
        id: "massage-6",
        question: "Is erotische massage legaal in Nederland?",
        answer:
          "Erotische massage bevindt zich in een grijs gebied. Massagesalons die puur massage aanbieden zonder seksuele handelingen hebben geen sekswerk-vergunning nodig. Salons die wel seksuele diensten aanbieden vallen onder de regelgeving voor sekswerk en hebben een vergunning nodig. Op Eroplein vermelden we alleen salons die zich aan de geldende wetgeving houden.",
      },
      {
        id: "massage-7",
        question: "Hoe kies ik een goede massagesalon?",
        answer:
          "Lees reviews op Eroplein en let op de professionaliteit, hygiëne en sfeer die andere bezoekers beschrijven. Een goede salon heeft een schone, rustgevende omgeving, professionele masseurs en is transparant over prijzen en diensten. Vermijd salons zonder reviews of met vaag omschreven diensten. Een persoonlijke aanbeveling of meerdere positieve ervaringen is het meest betrouwbaar.",
      },
    ],
  },
  {
    slug: "ramen",
    name: "Ramen",
    icon: "door-open",
    description:
      "Veelgestelde vragen over raamprostitutie en de walletjes in Nederlandse steden.",
    questions: [
      {
        id: "ramen-1",
        question: "Hoe werkt raamprostitutie in Nederland?",
        answer:
          "Bij raamprostitutie huren sekswerkers een kamer met een raam aan de straat. Zij staan achter het raam om klanten aan te trekken. Als je interesse hebt, klop je op de deur. De sekswerker bespreekt kort de diensten en prijs. Als jullie het eens zijn, ga je naar binnen en wordt het gordijn gesloten. Na afloop verlaat je de kamer via dezelfde deur. Het is een directe en transparante manier van sekswerk.",
      },
      {
        id: "ramen-2",
        question: "Wat kost een bezoek aan de ramen?",
        answer:
          "De standaardprijs voor een korte sessie (15-20 minuten) ligt doorgaans tussen de 50 en 75 euro. Voor langere sessies of aanvullende diensten betaal je meer. De prijs wordt altijd vooraf besproken. Zorg dat je contant geld bij je hebt, want pinnen is niet overal mogelijk. Onderhandel niet agressief over de prijs; de sekswerker bepaalt haar eigen tarieven.",
      },
      {
        id: "ramen-3",
        question: "In welke steden zijn er walletjes?",
        answer:
          "De bekendste walletjes zijn in Amsterdam (De Wallen), maar ook steden als Utrecht, Den Haag, Groningen, Eindhoven, Nijmegen en Arnhem hebben raamprostitutiegebieden. Het aantal ramen verschilt sterk per stad. Sommige steden hebben hun raamgebieden de afgelopen jaren verkleind. Op Eroplein vind je een actueel overzicht per stad.",
      },
      {
        id: "ramen-4",
        question: "Wat zijn de omgangsregels op de walletjes?",
        answer:
          "Respecteer de sekswerkers en andere bezoekers. Maak nooit foto's of video's van de ramen of de sekswerkers. Staar niet en blokkeer niet de doorgang. Klop alleen aan als je daadwerkelijk interesse hebt. Wees niet onder invloed van drugs of overmatig alcohol. In veel walletjesgebieden gelden gemeentelijke regels en is er toezicht aanwezig.",
      },
      {
        id: "ramen-5",
        question: "Is raamprostitutie legaal?",
        answer:
          "Ja, raamprostitutie is legaal in Nederland. Sekswerkers huren een vergunde werkplek en werken als zelfstandige. De kamers worden gecontroleerd op veiligheid en hygiëne. Gemeenten geven vergunningen af en handhaven de regels. Het is belangrijk dat je alleen gebruikmaakt van vergunde ramen, herkenbaar aan officiële nummering en vergunningsstickers.",
      },
      {
        id: "ramen-6",
        question: "Hoe herken ik een veilige situatie?",
        answer:
          "Vergunde ramen bevinden zich in aangewezen gebieden en zijn herkenbaar aan hun professionele uitstraling. De sekswerker communiceert vrijwillig en duidelijk. Als iets niet goed voelt, loop dan door. Signalen van onveilige situaties zijn: een erg jonge sekswerker, iemand die angstig of verward lijkt, of druk van derden. In zulke gevallen kun je contact opnemen met de politie of het meldpunt mensenhandel (0800-1813).",
      },
    ],
  },
  {
    slug: "seksshops",
    name: "Seksshops",
    icon: "shopping-bag",
    description:
      "Veelgestelde vragen over seksshops, erotiekwinkels en het kopen van adult producten in Nederland.",
    questions: [
      {
        id: "seksshops-1",
        question: "Wat kan ik verwachten in een seksshop?",
        answer:
          "Een seksshop, ook wel erotiekwinkel of adult store genoemd, verkoopt een breed assortiment aan erotische producten. Denk aan vibrators, lingerie, glijmiddelen, condooms, spelletjes voor stellen, BDSM-artikelen en erotische boeken of films. Moderne seksshops zijn goed verlicht, netjes ingericht en het personeel is discreet en behulpzaam. Je hoeft je nergens voor te schamen.",
      },
      {
        id: "seksshops-2",
        question: "Moet je 18+ zijn om een seksshop binnen te gaan?",
        answer:
          "Ja, je moet minimaal 18 jaar oud zijn om een seksshop te betreden. De winkel kan om identificatie vragen. Dit geldt ook voor online bestellingen bij Nederlandse erotiekwinkels. Sommige winkels controleren strikter dan andere, maar de minimumleeftijd geldt overal.",
      },
      {
        id: "seksshops-3",
        question: "Is het personeel in een seksshop discreet?",
        answer:
          "Ja, bij professionele seksshops is het personeel getraind om discreet en behulpzaam te zijn. Ze zijn gewend aan alle soorten vragen en zullen je nooit veroordelen. Als je advies nodig hebt over een product, kun je gerust vragen stellen. Het personeel kan je helpen het juiste product te kiezen op basis van je wensen en budget.",
      },
      {
        id: "seksshops-4",
        question: "Zijn producten uit een seksshop duurder dan online?",
        answer:
          "Fysieke seksshops zijn soms iets duurder dan online winkels vanwege de overhead van een winkellocatie. Het voordeel is dat je producten kunt bekijken, vastpakken en persoonlijk advies krijgt. Veel seksshops bieden ook een webshop aan met dezelfde producten, soms tegen lagere prijzen. Vergelijk gerust voor de beste deal, maar let bij online bestellen altijd op betrouwbare winkels.",
      },
      {
        id: "seksshops-5",
        question: "Welke merken zijn betrouwbaar voor seksspeeltjes?",
        answer:
          "Bekende en betrouwbare merken zijn onder andere Lelo, We-Vibe, Satisfyer, Fun Factory, Womanizer en Magic Wand. Deze merken gebruiken lichaamsvrij siliconen en andere veilige materialen. Koop bij voorkeur geen goedkope producten van onbekende merken, omdat deze soms schadelijke stoffen kunnen bevatten. Het personeel in een goede seksshop kan je adviseren over veilige keuzes.",
      },
      {
        id: "seksshops-6",
        question: "Hoe vind ik een goede seksshop bij mij in de buurt?",
        answer:
          "Op Eroplein kun je seksshops zoeken per stad. Lees reviews van andere bezoekers over het assortiment, de service, het personeel en de sfeer. Let op winkels met een goed assortiment van betrouwbare merken en behulpzaam personeel. Grote steden hebben doorgaans meerdere winkels om uit te kiezen.",
      },
    ],
  },
  {
    slug: "stripclubs",
    name: "Stripclubs",
    icon: "music",
    description:
      "Veelgestelde vragen over stripclubs en gentlemen's clubs in Nederland.",
    questions: [
      {
        id: "stripclubs-1",
        question: "Wat kan ik verwachten in een stripclub?",
        answer:
          "Een stripclub biedt live erotisch entertainment in de vorm van striptease- en dansshows. De meeste clubs hebben een bar, podium met paaldansers en zitplaatsen. Je kunt genieten van shows, drankjes bestellen en bij sommige clubs een privédans boeken. De sfeer varieert van casual tot exclusief, afhankelijk van de club. Sommige clubs bieden ook VIP-arrangementen aan.",
      },
      {
        id: "stripclubs-2",
        question: "Wat kost een avond in een stripclub?",
        answer:
          "De entreeprijs varieert van gratis tot 20 euro, afhankelijk van de club en de avond. Drankjes zijn doorgaans duurder dan in een normaal café: reken op 8-15 euro per drankje. Een privédans kost gemiddeld 20-50 euro per nummer. VIP-arrangementen met champagne en privéruimte beginnen vanaf 100 euro. Zet vooraf een budget voor jezelf om onaangename verrassingen te voorkomen.",
      },
      {
        id: "stripclubs-3",
        question: "Mag je de danseressen aanraken?",
        answer:
          "Nee, in de meeste stripclubs geldt een strikt hands-off beleid tijdens shows. Tijdens een privédans kunnen de regels iets soepeler zijn, maar dit verschilt per club. De danseres geeft altijd aan wat wel en niet mag. Respecteer dit altijd. Bij overtreding word je uit de club verwijderd. Sommige clubs hebben specifieke huisregels die bij binnenkomst worden uitgelegd.",
      },
      {
        id: "stripclubs-4",
        question: "Zijn stripclubs veilig?",
        answer:
          "Professionele stripclubs in Nederland zijn over het algemeen veilig. Er is beveiliging aanwezig en de clubs houden toezicht op het gedrag van gasten. Wees wel alert op drankprijzen en laat je niet overhalen tot onverwachte uitgaven. Check je rekening voordat je betaalt. Lees reviews op Eroplein om te weten welke clubs betrouwbaar zijn en welke je beter kunt vermijden.",
      },
      {
        id: "stripclubs-5",
        question: "Is er een dresscode?",
        answer:
          "De meeste stripclubs hanteren een nette casual dresscode. Een spijkerbroek met een overhemd of polo is doorgaans prima. Sportkleding, slippers en petten zijn vaak niet toegestaan. Exclusievere clubs kunnen een striktere dresscode hanteren. Check de website van de club of bel vooraf als je twijfelt over de dresscode.",
      },
      {
        id: "stripclubs-6",
        question: "Kan ik met een groep naar een stripclub?",
        answer:
          "Ja, stripclubs zijn populair voor groepsuitjes, vrijgezellenfeesten en verjaardagen. Veel clubs bieden speciale groepsarrangementen aan met gereserveerde tafels, drankpakketten en eventueel een privéshow. Reserveer dit altijd vooraf, zeker in het weekend. Groepen worden wel verwacht zich aan de huisregels te houden, ook als de sfeer feestelijk is.",
      },
      {
        id: "stripclubs-7",
        question: "In welke steden zijn de beste stripclubs?",
        answer:
          "Amsterdam heeft het grootste aanbod aan stripclubs, gevolgd door Rotterdam, Den Haag en Utrecht. Ook steden als Eindhoven en Groningen hebben stripclubs. Op Eroplein kun je per stad zoeken en reviews lezen om de beste clubs in jouw regio te vinden. De kwaliteit verschilt sterk per club, dus reviews zijn waardevol.",
      },
    ],
  },
  {
    slug: "saunaclubs",
    name: "Saunaclubs",
    icon: "flame",
    description:
      "Veelgestelde vragen over erotische saunaclubs en wellnessclubs in Nederland.",
    questions: [
      {
        id: "saunaclubs-1",
        question: "Wat is een erotische saunaclub?",
        answer:
          "Een erotische saunaclub combineert wellnessfaciliteiten zoals sauna's, stoomcabines en jacuzzi's met erotisch entertainment en de mogelijkheid om intieme diensten af te nemen van aanwezige dames. Het verschilt van een reguliere sauna doordat er sekswerkers aanwezig zijn. De sfeer is doorgaans ontspannen en luxueus, met een bar en loungeruimtes.",
      },
      {
        id: "saunaclubs-2",
        question: "Wat kost een bezoek aan een saunaclub?",
        answer:
          "De entreeprijs voor een erotische saunaclub ligt gemiddeld tussen de 40 en 80 euro. Dit omvat doorgaans toegang tot alle wellnessfaciliteiten, een handdoek en vaak een welkomstdrankje. Diensten van de aanwezige dames zijn apart en worden rechtstreeks met hen afgerekend, meestal tussen de 50 en 150 euro afhankelijk van de dienst en duur. Drankjes en eten zijn apart.",
      },
      {
        id: "saunaclubs-3",
        question: "Hoe werkt een bezoek aan een saunaclub?",
        answer:
          "Bij aankomst betaal je de entreeprijs en ontvang je een handdoek en eventueel slippers. Je kleedt je om in een kleedkamer en kunt vervolgens vrij gebruikmaken van de faciliteiten. In de loungeruimtes kun je kennismaken met de aanwezige dames. Als je interesse hebt, bespreek je samen de diensten en prijs en ga je naar een privékamer. Er is geen verplichting; je kunt ook gewoon van de sauna en bar genieten.",
      },
      {
        id: "saunaclubs-4",
        question: "Ben ik verplicht om diensten af te nemen?",
        answer:
          "Nee, absoluut niet. Veel bezoekers komen puur voor de ontspannen sfeer, de saunafaciliteiten en de bar. Er is geen enkele druk om diensten af te nemen van de aanwezige dames. Je kunt een hele middag of avond doorbrengen met alleen sauna, zwembad en drankjes. De dames zullen je wel groeten en een praatje maken, maar respecteren het als je niet geïnteresseerd bent.",
      },
      {
        id: "saunaclubs-5",
        question: "Wat is de etiquette in een saunaclub?",
        answer:
          "Douche voor gebruik van de sauna en het zwembad. Ga respectvol om met de dames en andere gasten. Gebruik handdoeken in de saunaruimtes. Overmatig alcoholgebruik wordt niet getolereerd. Telefoons en camera's zijn in de clubruimtes doorgaans verboden. Behandel de faciliteiten met zorg en volg de aanwijzingen van het personeel.",
      },
      {
        id: "saunaclubs-6",
        question: "Zijn er saunaclubs voor stellen?",
        answer:
          "Sommige erotische saunaclubs verwelkomen ook stellen. Dit verschilt per club. Sommige clubs zijn specifiek gericht op alleenstaande mannen, terwijl andere een gemengd publiek aantrekken. Stellen die geïnteresseerd zijn in een bezoek doen er goed aan vooraf contact op te nemen met de club om te vragen naar de mogelijkheden en speciale avonden voor stellen.",
      },
      {
        id: "saunaclubs-7",
        question: "Waar vind ik saunaclubs in Nederland?",
        answer:
          "Erotische saunaclubs zijn vooral te vinden in en rond de grote steden. Bekende locaties bevinden zich in de regio's Amsterdam, Rotterdam, Den Haag, Utrecht en Eindhoven. Op Eroplein vind je een overzicht per stad met reviews van echte bezoekers. Omdat het aanbod beperkt is vergeleken met andere categorieën, is het de moeite waard om reviews goed te lezen voor je gaat.",
      },
    ],
  },
];

/** Get all FAQ categories */
export function getFaqCategories(): FaqCategory[] {
  return faqCategories;
}

/** Get a specific FAQ category by slug */
export function getFaqCategoryBySlug(slug: string): FaqCategory | undefined {
  return faqCategories.find((cat) => cat.slug === slug);
}

/** Get "most asked" questions across all categories (first 2 from each) */
export function getMostAskedQuestions(): (FaqQuestion & { categorySlug: string; categoryName: string })[] {
  return faqCategories.flatMap((cat) =>
    cat.questions.slice(0, 2).map((q) => ({
      ...q,
      categorySlug: cat.slug,
      categoryName: cat.name,
    }))
  );
}

/** Get all questions flat (for search) */
export function getAllFaqQuestions(): (FaqQuestion & { categorySlug: string; categoryName: string })[] {
  return faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({
      ...q,
      categorySlug: cat.slug,
      categoryName: cat.name,
    }))
  );
}
