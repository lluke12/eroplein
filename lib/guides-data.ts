export interface GuideSection {
  id: string;
  title: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  relatedCategory?: string;
  relatedCategoryLabel?: string;
  relatedGuides: string[];
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: "wat-kost-een-escort",
    title: "Wat Kost Een Escort? Prijzen Gids 2026",
    metaTitle: "Wat Kost Een Escort? Prijzen Per Stad (2026) | Eroplein",
    metaDescription:
      "Wat kost een escort in Nederland? Bekijk actuele prijzen per stad, van Amsterdam tot Rotterdam. Leer welke factoren de kosten bepalen en wat je kunt verwachten.",
    excerpt:
      "Een compleet overzicht van escortprijzen in Nederland. Van gemiddelde uurtarieven per stad tot factoren die de prijs bepalen.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-10",
    readingTime: 8,
    relatedCategory: "escorts",
    relatedCategoryLabel: "Escorts",
    relatedGuides: [
      "eerste-keer-escort",
      "regels-prostitutie-nederland",
      "wat-kost-raamprostitutie",
    ],
    sections: [
      {
        id: "gemiddelde-prijzen",
        title: "Gemiddelde escortprijzen per stad",
        content: `De prijzen voor een escort variëren sterk per stad en regio in Nederland. Hieronder een overzicht van de gemiddelde uurtarieven in 2026.

**Amsterdam** is de duurste stad, met tarieven tussen de €150 en €300 per uur. De hoge vraag en het internationale karakter van de stad drijven de prijzen op.

**Rotterdam** kent iets lagere tarieven, gemiddeld €120 tot €250 per uur. De markt is hier competitiever, wat voor meer variatie in prijzen zorgt.

**Den Haag** ligt qua prijzen tussen Amsterdam en Rotterdam in, met gemiddelden van €130 tot €260 per uur. De nabijheid van ambassades en internationale organisaties speelt hier een rol.

**Utrecht** heeft tarieven van gemiddeld €120 tot €240 per uur. Als studentenstad is er een breed aanbod in verschillende prijsklassen.

**Eindhoven** en andere steden in het zuiden kennen tarieven van €100 tot €220 per uur. In kleinere steden en regio's liggen de prijzen over het algemeen lager, met gemiddelden rond €100 tot €200 per uur.

Let op: dit zijn indicatieve prijzen. Individuele tarieven kunnen afwijken op basis van ervaring, diensten en beschikbaarheid.`,
      },
      {
        id: "factoren-prijs",
        title: "Factoren die de prijs bepalen",
        content: `Meerdere factoren beïnvloeden het tarief van een escort. Het is nuttig om deze te begrijpen voordat je een boeking maakt.

**Duur van de boeking** is de belangrijkste factor. Een boeking van een uur is het meest gangbaar, maar langere boekingen (twee uur, een avond, of een overnachting) hebben vaak een lager uurtarief. Een overnachting kost doorgaans het equivalent van drie tot vijf uurtarieven.

**Ervaring en bekendheid** spelen ook een grote rol. Escorts die al langer actief zijn en een goede reputatie hebben opgebouwd, vragen doorgaans hogere tarieven. Dit geldt ook voor escorts die op meerdere platforms positieve reviews hebben.

**Locatie** beïnvloedt de prijs op twee manieren: de stad waar de escort werkt (grote steden zijn duurder) en of je kiest voor incall of outcall.

**Uiterlijk en presentatie** kunnen ook een rol spelen. Escorts die investeren in hun presentatie, fotografie en profiel rekenen dit soms door in hun tarieven.

**Beschikbaarheid en tijdstip** zijn ook van belang. Last-minute boekingen of afspraken op ongebruikelijke tijdstippen kunnen duurder zijn. Weekenden en feestdagen kennen soms hogere tarieven.`,
      },
      {
        id: "incall-outcall",
        title: "Incall vs. outcall: prijsverschillen",
        content: `Bij het boeken van een escort heb je doorgaans twee opties: incall en outcall. Het verschil zit hem niet alleen in de locatie, maar ook in de prijs.

**Incall** betekent dat je naar de locatie van de escort gaat. Dit is meestal de goedkopere optie, omdat de escort geen reiskosten of extra tijd kwijt is. De locatie is vaak een nette, discrete ruimte die de escort zelf heeft ingericht.

**Outcall** houdt in dat de escort naar jouw locatie komt, zoals een hotel of privéadres. Hiervoor wordt doorgaans een toeslag van €20 tot €50 gerekend, afhankelijk van de reisafstand. Bij grotere afstanden kunnen de reiskosten hoger uitvallen.

Sommige escorts bieden uitsluitend incall of outcall aan. Controleer dit altijd vooraf in het profiel. Bij outcall naar een hotel is het gebruikelijk dat je de escort in de lobby ophaalt of het kamernummer doorgeeft.

De meeste escorts vermelden duidelijk op hun profiel wat de tarieven zijn voor zowel incall als outcall, zodat je vooraf weet waar je aan toe bent.`,
      },
      {
        id: "tips-kosten",
        title: "Tips om kosten te begrijpen",
        content: `Het is belangrijk om transparant en eerlijk te communiceren over kosten. Hier zijn enkele praktische tips.

**Controleer het profiel grondig.** De meeste escorts vermelden hun tarieven duidelijk op hun profiel. Neem de tijd om dit te lezen voordat je contact opneemt. Vraag niet om kortingen; dit wordt als respectloos beschouwd.

**Wees duidelijk over de duur.** Spreek vooraf af hoelang de boeking duurt. Dit voorkomt misverstanden over het tarief. Als je wilt verlengen, bespreek dit dan op tijd.

**Betaling vindt vooraf plaats.** Het is gebruikelijk om het afgesproken bedrag aan het begin van de afspraak te betalen. Leg het bedrag in een envelop en plaats deze zichtbaar, zonder er expliciet over te onderhandelen.

**Extras zijn niet vanzelfsprekend.** Het basistarief dekt een standaard boeking. Specifieke wensen kunnen extra kosten met zich meebrengen. Communiceer hier vooraf over, bij voorkeur via de boekingskanalen.

**Vermijd tussenpersonen.** Boek rechtstreeks of via betrouwbare platforms. Tussenpersonen rekenen vaak extra kosten die niet ten goede komen aan de escort zelf.`,
      },
    ],
  },
  {
    slug: "eerste-keer-escort",
    title: "Eerste Keer Een Escort Boeken: Complete Gids",
    metaTitle:
      "Eerste Keer Een Escort Boeken? Complete Beginnersgids | Eroplein",
    metaDescription:
      "Alles wat je moet weten als je voor het eerst een escort boekt. Van het vinden van een betrouwbare escort tot etiquette, veiligheid en het boekingsproces.",
    excerpt:
      "Nerveus voor je eerste keer? Deze gids legt stap voor stap uit hoe je een betrouwbare escort vindt, het boekingsproces werkt en waar je op moet letten.",
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-05",
    readingTime: 10,
    relatedCategory: "escorts",
    relatedCategoryLabel: "Escorts",
    relatedGuides: [
      "wat-kost-een-escort",
      "regels-prostitutie-nederland",
      "eerste-keer-parenclub",
    ],
    sections: [
      {
        id: "betrouwbare-escort",
        title: "Hoe vind je een betrouwbare escort",
        content: `Het vinden van een betrouwbare escort begint met goed onderzoek. Neem hier de tijd voor, zodat je eerste ervaring positief verloopt.

**Gebruik gerenommeerde platforms.** Kies voor bekende en betrouwbare websites en platforms zoals Eroplein. Deze platforms verifiëren adverteerders en bieden een extra laag van betrouwbaarheid.

**Lees reviews en ervaringen.** Reviews van andere bezoekers zijn ontzettend waardevol. Let op gedetailleerde, genuine reviews in plaats van korte, generieke beoordelingen. Meerdere positieve reviews zijn een goed teken.

**Controleer de foto's.** Betrouwbare escorts gebruiken recente, eigen foto's. Wees voorzichtig met profielen die uitsluitend sterk bewerkte of professionele modelfoto's tonen zonder enige vorm van verificatie.

**Let op verificatiebadges.** Veel platforms bieden een verificatieproces aan. Een geverifieerd profiel betekent dat de identiteit en foto's zijn gecontroleerd door het platform.

**Bekijk de website of social media.** Veel zelfstandige escorts hebben een eigen website met uitgebreide informatie. Dit is vaak een teken van professionaliteit en betrouwbaarheid.

**Vertrouw op je gevoel.** Als iets te mooi lijkt om waar te zijn, is dat het vaak ook. Extreem lage prijzen of onrealistisch ogende foto's kunnen op een onbetrouwbaar profiel wijzen.`,
      },
      {
        id: "boekingsproces",
        title: "Het boekingsproces: stap voor stap",
        content: `Het boeken van een escort hoeft niet ingewikkeld te zijn. Volg deze stappen voor een soepel verloop.

**Stap 1: Kies je escort.** Neem de tijd om profielen te bekijken. Let op tarieven, diensten, beschikbaarheid en locatie. Maak eventueel een shortlist van een paar opties.

**Stap 2: Neem contact op.** De meeste escorts hebben een voorkeur voor een bepaald communicatiemiddel, zoals WhatsApp, e-mail of een contactformulier. Respecteer deze voorkeur. Stuur een kort, beleefd bericht met je naam (of een voornaam), de gewenste datum en tijd, de duur van de boeking, en of je incall of outcall prefereert.

**Stap 3: Wacht op bevestiging.** Geef de escort de tijd om te reageren. Dit kan enkele uren duren. Stuur niet meerdere berichten achter elkaar als je niet direct antwoord krijgt.

**Stap 4: Bevestig de details.** Zodra de escort reageert, bevestig je de afgesproken datum, tijd, locatie en tarief. Vraag eventueel naar parkeerinformatie of aanwijzingen voor de locatie.

**Stap 5: Bereid je voor.** Zorg dat je gedoucht en verzorgd bent. Neem het afgesproken bedrag in contanten mee. Wees op tijd, of geef een seintje als je vertraagd bent.

**Stap 6: De afspraak.** Betaal het afgesproken bedrag aan het begin. Wees respectvol, ontspannen en geniet van de ontmoeting. Bij een incall verlaat je de locatie op de afgesproken tijd.`,
      },
      {
        id: "etiquette",
        title: "Etiquette en gedragsregels",
        content: `Goede manieren maken het verschil. Zowel voor jou als voor de escort zorgt respect voor een prettigere ervaring.

**Hygiëne is essentieel.** Douche voorafgaand aan de afspraak. Poets je tanden, gebruik deodorant en zorg dat je er verzorgd uitziet. Dit is niet optioneel; het is een basisvereiste.

**Wees op tijd.** Kom niet te vroeg en niet te laat. Als je vertraagd bent, laat dit dan weten. De escort heeft haar tijd ingepland en te laat komen verkort jouw boekingstijd, niet die van haar.

**Respecteer grenzen.** Iedere escort heeft haar eigen grenzen en voorkeuren. Deze worden vaak vooraf gecommuniceerd. Accepteer een "nee" zonder discussie. Probeer niet om tijdens de afspraak te onderhandelen over diensten die niet zijn afgesproken.

**Wees discreet.** Deel geen persoonlijke details van de escort met anderen. Maak geen foto's of opnames zonder uitdrukkelijke toestemming. Discretie werkt twee kanten op.

**Behandel de escort als een mens.** Achter het profiel staat een persoon. Wees beleefd, heb een normaal gesprek en toon respect. Een prettige sfeer maakt de ervaring voor beiden beter.

**Vertrek op tijd.** Als de afgesproken tijd voorbij is, maak je aanstalten om te vertrekken. Wil je verlengen? Vraag dit dan vooraf of op een natuurlijk moment, niet op het laatste moment.`,
      },
      {
        id: "veiligheid-discretie",
        title: "Veiligheid en discretie",
        content: `Veiligheid en discretie zijn belangrijk voor zowel de klant als de escort. Hier zijn de belangrijkste aandachtspunten.

**Gebruik altijd bescherming.** Dit is niet onderhandelbaar. Veilige seks beschermt beide partijen. Een betrouwbare escort zal hier zelf ook op staan.

**Deel geen onnodige persoonlijke informatie.** Je hoeft geen achternaam, werkgever of adres te delen. Een voornaam (of alias) is voldoende. Hetzelfde geldt andersom.

**Gebruik een apart telefoonnummer.** Overweeg een prepaid simkaart of een apart nummer voor boekingen. Dit beschermt je privacy.

**Kies voor veilige betaling.** Contant geld is de standaard in deze branche. Vermijd bankoverschrijvingen die te herleiden zijn als je discretie belangrijk vindt.

**Ga niet onder invloed.** Een glas wijn is geen probleem, maar ga niet zwaar onder invloed naar een afspraak. Dit is onprettig voor de escort en vermindert je eigen ervaring.

**Vertel iemand waar je bent.** Als je naar een onbekende locatie gaat, kan het verstandig zijn om een vriend of familielid te laten weten waar je bent, zonder in detail te treden.

**Vertrouw je instinct.** Voelt de situatie ongemakkelijk of onveilig? Dan is het altijd beter om te vertrekken. Jouw veiligheid gaat voor alles.`,
      },
    ],
  },
  {
    slug: "eerste-keer-parenclub",
    title: "Eerste Keer Naar Een Parenclub: Wat Te Verwachten",
    metaTitle:
      "Eerste Keer Naar Een Parenclub? Gids Voor Beginners | Eroplein",
    metaDescription:
      "Wat kun je verwachten bij je eerste bezoek aan een parenclub? Dresscode, regels, etiquette en tips voor stellen en singles. Lees onze complete gids.",
    excerpt:
      "Benieuwd naar een parenclub maar weet je niet wat je kunt verwachten? Deze gids vertelt alles over dresscode, regels en etiquette.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-12",
    readingTime: 9,
    relatedCategory: "clubs",
    relatedCategoryLabel: "Clubs",
    relatedGuides: [
      "eerste-keer-escort",
      "regels-prostitutie-nederland",
      "wat-kost-een-escort",
    ],
    sections: [
      {
        id: "wat-is-parenclub",
        title: "Wat is een parenclub precies?",
        content: `Een parenclub, ook wel swingersclub genoemd, is een uitgaansgelegenheid waar stellen en soms singles terecht kunnen voor erotisch entertainment en ontmoetingen.

**Het concept.** In een parenclub kunnen bezoekers in een veilige, gecontroleerde omgeving andere gelijkgestemde volwassenen ontmoeten. De nadruk ligt op wederzijds respect en toestemming. Niemand is verplicht om deel te nemen aan wat dan ook.

**De doelgroep.** De meeste parenclubs richten zich primair op stellen. Alleenstaande vrouwen zijn doorgaans welkom. Alleenstaande mannen zijn bij sommige clubs toegestaan, maar vaak op specifieke avonden of in beperkt aantal.

**De sfeer.** Een goede parenclub heeft een prettige, ongedwongen sfeer. Het lijkt in eerste instantie op een gewone bar of club, met een dancefloor, bar en zitgedeeltes. Daarnaast zijn er besloten ruimtes voor intieme ontmoetingen.

**Verschillende soorten clubs.** Er zijn clubs voor elk comfort level. Sommige clubs zijn wat ingetogener en richten zich op soft-swing (flirten, kijken), terwijl andere clubs meer gericht zijn op actieve deelname. Informeer vooraf welk type club je bezoekt.

**Leeftijden en achtergronden.** Bezoekers komen uit alle leeftijdsgroepen en achtergronden. De gemiddelde bezoeker is tussen de 30 en 55 jaar. Het is een diverse mix van mensen.`,
      },
      {
        id: "dresscode-regels",
        title: "Dresscode en regels",
        content: `Iedere parenclub heeft een dresscode en huisregels. Het is belangrijk om deze vooraf te kennen.

**Dresscode voor mannen.** De meeste clubs hanteren een nette dresscode. Denk aan een nette broek of donkere jeans, een overhemd of net shirt, en nette schoenen. Sportschoenen, korte broeken en caps zijn vrijwel altijd verboden.

**Dresscode voor vrouwen.** Voor vrouwen geldt over het algemeen: sexy en verzorgd. Een jurk, rok, of lingerie zijn populaire keuzes. Veel clubs hebben een lingerie-verplichting na een bepaald tijdstip, meestal rond middernacht.

**Huisregels.** De belangrijkste regel in iedere parenclub is toestemming. "Nee" betekent "nee", altijd en overal. Aanraken zonder toestemming is niet toegestaan. Deze regel wordt strikt gehandhaafd.

**Telefoons en camera's.** Fotograferen en filmen is in alle parenclubs streng verboden. De meeste clubs vereisen dat je je telefoon opbergt of in een kluisje legt. Dit beschermt de privacy van alle bezoekers.

**Alcohol en drugs.** Alcohol is beschikbaar aan de bar, maar overmatig alcoholgebruik wordt niet getolereerd. Drugsgebruik is in alle clubs verboden en leidt tot onmiddellijke verwijdering.

**Hygiëne.** Douchen voor vertrek is een vereiste. Veel clubs hebben ook douchefaciliteiten ter plekke. Condooms zijn overal beschikbaar en het gebruik ervan is verplicht.`,
      },
      {
        id: "eerste-bezoek",
        title: "Wat kun je verwachten bij je eerste bezoek",
        content: `Je eerste keer naar een parenclub kan spannend en misschien wat zenuwslopend zijn. Weet dat dit volkomen normaal is.

**Bij aankomst.** Je meldt je aan bij de receptie, betaalt de entreeprijs en krijgt een rondleiding door de club. De meeste clubs geven nieuwe bezoekers een uitleg over de ruimtes en regels. Entreekosten liggen meestal tussen €30 en €80 per stel.

**De eerste uren.** Begin rustig. Neem een drankje aan de bar, verken de ruimtes en maak een praatje met andere bezoekers. Er is geen haast en geen druk om meteen "mee te doen". Veel stellen brengen hun eerste bezoek puur verkennend door.

**De ruimtes.** Een typische parenclub heeft een bargedeelte, een dancefloor, een loungeruimte, en verschillende speelkamers. Sommige kamers zijn open (voor kijkers), andere zijn afsluitbaar voor meer privacy. Er zijn ook vaak themaruimtes.

**Communicatie met je partner.** Als je als stel komt, is het essentieel om vooraf duidelijke afspraken te maken. Bespreek jullie grenzen, maak een "stopwoord" af, en check regelmatig bij elkaar hoe het gaat. Communicatie is het allerbelangrijkste.

**Geen druk.** Je hoeft niets te doen waar je je niet prettig bij voelt. Kijken is prima. Alleen met je eigen partner spelen is prima. De sfeer in een goede club is altijd ontspannen en zonder druk.

**Na afloop.** Bespreek de avond na met je partner. Wat vonden jullie leuk? Wat minder? Dit helpt om verwachtingen voor een volgend bezoek af te stemmen.`,
      },
      {
        id: "tips-stellen-singles",
        title: "Tips voor stellen en singles",
        content: `Of je nu als stel of als single gaat, hier zijn praktische tips voor een geslaagd bezoek.

**Tips voor stellen.** Ga pas naar een parenclub als jullie er allebei écht voor open staan. Eén partner die de ander overhaalt, is een recept voor problemen. Bespreek vooraf jullie grenzen en verwachtingen. Begin rustig, met alleen kijken of soft-swing, en bouw eventueel op.

**Maak vooraf afspraken.** Bepaal samen wat wel en niet mag. Mag je apart spelen of alleen samen? Is zoenen met anderen oké? Stel duidelijke regels op en respecteer deze gedurende de avond. Jullie kunt deze altijd later bijstellen.

**Tips voor alleenstaande mannen.** Niet alle clubs laten single mannen toe. Controleer dit vooraf. Als je wel welkom bent, gedraag je dan respectvol en terughoudend. Wacht tot je wordt uitgenodigd. Opdringerig gedrag wordt niet getolereerd.

**Tips voor alleenstaande vrouwen.** Single vrouwen zijn doorgaans zeer welkom in parenclubs. Je kunt zelf bepalen in hoeverre je wilt deelnemen. Het personeel houdt extra in de gaten dat je je veilig voelt.

**Praktische zaken.** Neem contant geld mee voor entree en drankjes. Breng een setje reservekleding mee. Eet goed voordat je gaat. Drink niet te veel alcohol.

**Ga niet met te hoge verwachtingen.** Het eerste bezoek is vaak verkennend. De meeste stellen doen de eerste keer niets of weinig, en dat is volkomen prima. Geniet van de sfeer en de ervaring op zich.`,
      },
    ],
  },
  {
    slug: "regels-prostitutie-nederland",
    title: "Prostitutie in Nederland: Regels & Wetgeving",
    metaTitle:
      "Prostitutie in Nederland: Wetgeving, Regels & Rechten | Eroplein",
    metaDescription:
      "Is prostitutie legaal in Nederland? Leer over de wetgeving, vergunningen, rechten van sekswerkers en wat wel en niet mag als klant. Complete uitleg.",
    excerpt:
      "Nederland staat bekend om zijn liberale houding ten opzichte van prostitutie. Maar wat zijn de exacte regels? Deze gids legt het uit.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-03-15",
    readingTime: 11,
    relatedCategory: "escorts",
    relatedCategoryLabel: "Escorts",
    relatedGuides: [
      "wat-kost-een-escort",
      "wat-kost-raamprostitutie",
      "eerste-keer-escort",
    ],
    sections: [
      {
        id: "legaliteit",
        title: "Is prostitutie legaal in Nederland?",
        content: `Het korte antwoord is: ja, prostitutie is legaal in Nederland. Maar er zijn belangrijke nuances en voorwaarden.

**Sinds 2000 legaal.** Op 1 oktober 2000 werd het bordeelverbod in Nederland opgeheven. Sindsdien is prostitutie een erkend beroep. Sekswerkers kunnen zich inschrijven bij de Kamer van Koophandel en zijn belastingplichtig, net als andere zelfstandigen.

**Voorwaarden voor legaliteit.** Prostitutie is legaal onder de volgende voorwaarden: de sekswerker is minimaal 18 jaar oud (21 jaar in sommige gemeenten), werkt geheel vrijwillig en zonder dwang, heeft een geldig verblijfsrecht in Nederland, en werkt vanuit een vergunde locatie of als zelfstandige.

**Illegale vormen.** Niet alle vormen van prostitutie zijn legaal. Mensenhandel, dwangprostitutie en het aanbieden van seksuele diensten door minderjarigen zijn zware misdrijven. Straatprostitutie is in de meeste gemeenten verboden, tenzij er een aangewezen tippelzone is.

**De Wet regulering sekswerk.** De Nederlandse overheid werkt aan verdere regulering via de Wet regulering sekswerk (Wrs). Deze wet beoogt de positie van sekswerkers te versterken en misstanden tegen te gaan. De exacte invulling hiervan is nog in ontwikkeling.`,
      },
      {
        id: "vergunningen",
        title: "Vergunningen en gemeentelijk beleid",
        content: `Hoewel prostitutie landelijk legaal is, bepalen gemeenten grotendeels het lokale beleid. Dit leidt tot aanzienlijke verschillen per stad.

**Gemeentelijke vergunningen.** Seksbedrijven zoals bordelen, privéhuizen en clubs hebben een vergunning nodig van de gemeente. De eisen voor deze vergunning variëren per gemeente. Sommige gemeenten geven actief vergunningen uit, terwijl andere een restrictief beleid voeren.

**Nulbeleid.** Sommige gemeenten hanteren een zogenaamd "nulbeleid", waarbij geen nieuwe vergunningen voor seksbedrijven worden afgegeven. Dit betekent niet dat prostitutie in die gemeente illegaal is, maar wel dat er geen vergunde locaties zijn.

**Escorts en thuiswerkers.** Zelfstandige escorts en thuiswerkende sekswerkers vallen in een grijs gebied. In sommige gemeenten is hier geen specifiek beleid voor, terwijl andere gemeenten een registratie- of meldingsplicht hanteren.

**Amsterdam.** Amsterdam heeft het meest uitgebreide systeem, met vergunningen voor raamprostitutie op De Wallen en in andere gebieden, vergunde bordelen en privéhuizen. De stad heeft de afgelopen jaren het aantal ramen verminderd als onderdeel van Project 1012.

**Rotterdam, Den Haag, Utrecht.** Deze steden hebben elk hun eigen vergunningensysteem. Rotterdam heeft een actief beleid met vergunde zones. Den Haag en Utrecht hanteren een gematigd beleid met een beperkt aantal vergunningen.`,
      },
      {
        id: "rechten-sekswerkers",
        title: "Rechten van sekswerkers",
        content: `Sekswerkers in Nederland hebben dezelfde rechten als andere werkenden. Toch is de praktijk niet altijd zo eenvoudig.

**Arbeidsrechten.** Sekswerkers die in loondienst werken (bijvoorbeeld bij een vergund bordeel) hebben recht op een arbeidscontract, minimumloon, vakantiegeld en andere arbeidsvoorwaarden. In de praktijk werken de meeste sekswerkers als zelfstandige.

**Fiscale verplichtingen.** Als zelfstandige zijn sekswerkers verplicht om inkomstenbelasting en btw af te dragen. Ze kunnen zich inschrijven bij de KvK en hebben recht op dezelfde zakelijke aftrekposten als andere zzp'ers.

**Recht op veiligheid.** Sekswerkers hebben recht op een veilige werkplek. Exploitanten van vergunde bedrijven zijn verplicht om te zorgen voor een veilige werkomgeving, inclusief een alarmknop, goede hygiëne en bescherming tegen agressie.

**Gezondheidszorg.** Sekswerkers hebben toegang tot gratis en anonieme soa-tests via de GGD. Sommige steden bieden aanvullende gezondheidsvoorzieningen specifiek voor sekswerkers.

**Bescherming tegen uitbuiting.** De politie en hulporganisaties werken samen om mensenhandel en uitbuiting te bestrijden. Sekswerkers kunnen misstanden melden bij de politie, het Coördinatiecentrum tegen Mensenhandel (CoMensha) of hulporganisaties zoals Soa Aids Nederland en PROUD (de vakbond voor sekswerkers).

**Recht op privacy.** Sekswerkers hebben recht op privacy, net als iedereen. Het is niet toegestaan om zonder toestemming foto's of video's te maken of persoonlijke informatie te delen.`,
      },
      {
        id: "regels-klant",
        title: "Wat mag wel en niet als klant",
        content: `Als klant heb je ook verantwoordelijkheden. Het is belangrijk om te weten wat de regels zijn.

**Wat mag wel.** Het is legaal om gebruik te maken van diensten van een meerderjarige sekswerker die vrijwillig en zelfstandig werkt. Je mag advertenties bekijken en contact opnemen voor een boeking. Je mag vergunde locaties bezoeken.

**Wat mag niet.** Het is verboden om seksuele diensten af te nemen van iemand die minderjarig is. Het is strafbaar om gebruik te maken van diensten waarvan je weet of redelijkerwijs kunt vermoeden dat er sprake is van dwang of mensenhandel. Straatprostitutie buiten aangewezen zones is verboden.

**Strafbaarheid klant.** In bepaalde gevallen kan de klant strafbaar zijn. Dit geldt met name bij het afnemen van diensten van minderjarigen of bij het bewust gebruikmaken van slachtoffers van mensenhandel. De strafmaat hiervoor is aanzienlijk.

**Respecteer de regels van de locatie.** Iedere vergunde locatie heeft huisregels. Houd je hieraan. Ga weg als je wordt gevraagd te vertrekken. Gebruik altijd bescherming.

**Onthoud: consent is alles.** Alles wat je doet moet met wederzijdse toestemming zijn. Een sekswerker heeft altijd het recht om een klant of specifieke handelingen te weigeren, ongeacht betaling. Respecteer dit.

**Bij twijfel, meld het.** Als je het vermoeden hebt dat iemand wordt gedwongen of uitgebuit, neem dan contact op met de politie (0900-8844) of Meld Misdaad Anoniem (0800-7000).`,
      },
    ],
  },
  {
    slug: "wat-kost-raamprostitutie",
    title: "Wat Kost Raamprostitutie? Prijzen Per Stad",
    metaTitle:
      "Wat Kost Raamprostitutie? Prijzen & Locaties Per Stad | Eroplein",
    metaDescription:
      "Wat kost een bezoek aan de ramen? Bekijk actuele prijzen per stad, van De Wallen in Amsterdam tot Den Haag. Plus locaties en etiquette tips.",
    excerpt:
      "Een praktisch overzicht van de kosten van raamprostitutie in Nederland, inclusief locaties per stad en etiquette.",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-08",
    readingTime: 7,
    relatedCategory: "ramen",
    relatedCategoryLabel: "Ramen",
    relatedGuides: [
      "wat-kost-een-escort",
      "regels-prostitutie-nederland",
      "eerste-keer-escort",
    ],
    sections: [
      {
        id: "prijzen-per-stad",
        title: "Gemiddelde prijzen per stad",
        content: `De prijzen bij raamprostitutie zijn over het algemeen lager en meer gestandaardiseerd dan bij escorts. Hier is een overzicht per stad.

**Amsterdam (De Wallen).** De bekendste locatie van Nederland. Standaardprijzen liggen rond €50 tot €100 voor een korte sessie van 15 tot 20 minuten. In het weekend en 's avonds laat kunnen de prijzen iets hoger liggen. De Wallen is het duurst vanwege de internationale bekendheid en hoge huurprijzen.

**Rotterdam (Katendrecht).** Na de sluiting van de Keileweg heeft Rotterdam een kleiner raamgebied. Prijzen liggen hier rond €40 tot €80 per sessie.

**Den Haag (Doubletstraat/Geleenstraat).** Den Haag heeft meerdere kleine raamgebieden. De prijzen zijn vergelijkbaar met Rotterdam, rond €40 tot €80 per sessie.

**Utrecht (Zandpad/Hardebollenstraat).** Utrecht heeft een compact raamgebied nabij het stadscentrum. Prijzen liggen rond €40 tot €70 per sessie.

**Groningen (Nieuwstad).** In het noorden van het land vind je een kleinschalig raamgebied. Prijzen zijn hier vaak iets lager, rond €30 tot €60 per sessie.

**Overige steden.** Kleinere raamgebieden bestaan ook in steden als Alkmaar, Deventer en Nijmegen. Prijzen liggen hier doorgaans tussen €30 en €60.

Let op: prijzen worden individueel bepaald door de sekswerker en kunnen variëren. Bovenstaande bedragen zijn indicatief.`,
      },
      {
        id: "wat-is-inbegrepen",
        title: "Wat is inbegrepen in de prijs",
        content: `Het is goed om te weten wat je kunt verwachten voor het standaardtarief bij raamprostitutie.

**Het standaardtarief.** Het basistarief bij de ramen dekt doorgaans een korte sessie van 15 tot 20 minuten. Dit omvat standaard seksueel contact met bescherming. De exacte diensten worden vooraf besproken.

**Bescherming is standaard.** Condoomgebruik is verplicht en niet onderhandelbaar. Dit is een absolute regel die altijd geldt. Accepteer dit zonder discussie.

**Wat niet is inbegrepen.** Sommige specifieke diensten of een langere sessie kosten extra. Dit wordt vooraf besproken. Het is gebruikelijk om hierover open en direct te communiceren voordat je naar binnen gaat.

**Onderhandelen.** De prijs wordt doorgaans door de sekswerker vastgesteld. Uitgebreid onderhandelen over de prijs wordt niet gewaardeerd. Je kunt vragen naar het tarief en de diensten, maar respecteer de genoemde prijs.

**Betaling.** Betaling vindt altijd contant en vooraf plaats. Zorg dat je het juiste bedrag bij je hebt, bij voorkeur in kleine coupures. Pinnen is niet mogelijk.`,
      },
      {
        id: "locaties",
        title: "Locaties van raamprostitutiegebieden",
        content: `Nederland heeft verschillende raamprostitutiegebieden, elk met hun eigen karakter. Hier is een overzicht van de belangrijkste locaties.

**Amsterdam - De Wallen.** Het grootste en bekendste raamgebied ter wereld. Gelegen in het historische centrum, rond de Oudezijds Achterburgwal en Oudezijds Voorburgwal. Honderden ramen verspreid over meerdere steegjes en straten. Druk bezocht door toeristen, vooral in het weekend.

**Amsterdam - Singelgebied.** Een kleiner, rustiger raamgebied nabij het Singel. Minder toeristisch dan De Wallen en daardoor wat rustiger.

**Den Haag - Doubletstraat.** Het voornaamste raamgebied van Den Haag, gelegen nabij het Centrum. Een relatief compact gebied met een tiental ramen.

**Den Haag - Geleenstraat.** Een tweede, kleiner raamgebied in Den Haag. Rustiger en minder bekend dan de Doubletstraat.

**Utrecht - Zandpad/Hardebollenstraat.** Gelegen aan de rand van het centrum. De gemeente Utrecht heeft plannen om het gebied te herstructureren. Controleer de actuele situatie voor een bezoek.

**Rotterdam - Katendrecht.** Na diverse sluitingen heeft Rotterdam een beperkt raamgebied. Het aantal ramen is de afgelopen jaren afgenomen.

**Groningen - Nieuwstad.** Een klein raamgebied in het centrum van Groningen. Compact en relatief rustig.

**Andere steden.** Alkmaar (Achterdam), Deventer en enkele andere steden hebben kleinschalige raamgebieden. De omvang en beschikbaarheid kunnen variëren.`,
      },
      {
        id: "etiquette-ramen",
        title: "Etiquette bij de ramen",
        content: `Een bezoek aan de ramen verloopt het prettigst als je je aan de ongeschreven regels houdt.

**Niet staren of fotograferen.** Loop niet met een camera of telefoon langs de ramen. Fotograferen is verboden en wordt zeer slecht ontvangen. Dit geldt ook voor het filmen met een telefoon. In Amsterdam wordt dit actief gehandhaafd.

**Respecteer een gesloten gordijn.** Een dicht gordijn betekent dat de kamer bezet is. Klop niet aan en probeer niet naar binnen te kijken.

**Wees direct maar beleefd.** Als je interesse hebt, kun je naar de deur lopen en vragen naar de prijs en diensten. Wees beleefd en duidelijk. Heb je geen interesse, loop dan gewoon door zonder te staren.

**Ga niet in groepen.** Bezoek de ramen alleen of met maximaal één vriend. Groepen die langs de ramen lopen worden als intimiderend en respectloos ervaren.

**Alcohol en drugs.** Ga niet zwaar onder invloed naar de ramen. Dit is onprettig voor de sekswerker en vergroot de kans op conflicten.

**Respecteer de buurt.** Raamgebieden liggen in woonwijken. Maak geen lawaai, gooi geen afval op straat en gedraag je zoals je dat in elke andere buurt zou doen.

**Na afloop.** Verlaat de kamer op tijd en bedank de sekswerker. Houd het kort en vriendelijk.`,
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(slugs: string[]): Guide[] {
  return slugs
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is Guide => g !== undefined);
}
