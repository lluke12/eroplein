import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees hoe Eroplein omgaat met je persoonsgegevens. Ons privacybeleid conform de AVG/GDPR.",
  openGraph: {
    title: "Privacybeleid | Eroplein",
    description:
      "Hoe Eroplein omgaat met persoonsgegevens, cookies en je rechten onder de AVG.",
  },
  alternates: {
    canonical: "https://eroplein.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Privacybeleid" }]} />

          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Juridisch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Privacy<span className="text-fuchsia-400">beleid</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Laatst bijgewerkt: 1 maart 2026
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-10">
              <div className="prose-dark space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    1. Inleiding
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eroplein (hierna &quot;wij&quot;, &quot;ons&quot; of
                    &quot;Eroplein&quot;), gevestigd te Nederland, is
                    verantwoordelijk voor de verwerking van persoonsgegevens
                    zoals weergegeven in dit privacybeleid. Wij respecteren de
                    privacy van alle bezoekers van onze website en dragen er zorg
                    voor dat de persoonlijke informatie die je ons verschaft
                    vertrouwelijk wordt behandeld.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    2. Welke gegevens verzamelen wij?
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Wij kunnen de volgende persoonsgegevens verwerken:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                    <li>
                      E-mailadres (bij het aanmaken van een account of
                      contactformulier)
                    </li>
                    <li>
                      Gebruikersnaam of schermnaam (bij het plaatsen van
                      reviews)
                    </li>
                    <li>IP-adres en browsergegevens (automatisch verzameld)</li>
                    <li>
                      Cookies en vergelijkbare technologieen (zie sectie 6)
                    </li>
                    <li>
                      Eventuele aanvullende informatie die je vrijwillig
                      verstrekt via formulieren
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    3. Doeleinden van gegevensverwerking
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Wij verwerken je persoonsgegevens voor de volgende
                    doeleinden:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                    <li>
                      Het aanbieden en verbeteren van onze diensten en website
                    </li>
                    <li>Het verwerken en publiceren van reviews</li>
                    <li>
                      Het afhandelen van contactverzoeken en klantenservice
                    </li>
                    <li>Het voorkomen van fraude en misbruik</li>
                    <li>
                      Het voldoen aan wettelijke verplichtingen
                    </li>
                    <li>
                      Het versturen van service-gerelateerde communicatie (geen
                      marketing zonder toestemming)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    4. Rechtsgrond voor verwerking
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Wij verwerken persoonsgegevens op basis van de volgende
                    rechtsgronden conform de Algemene Verordening
                    Gegevensbescherming (AVG/GDPR): toestemming van de
                    betrokkene, uitvoering van een overeenkomst, wettelijke
                    verplichting, en/of gerechtvaardigd belang (zoals het
                    verbeteren van onze dienstverlening en het voorkomen van
                    fraude).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    5. Bewaartermijn
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Wij bewaren je persoonsgegevens niet langer dan strikt nodig
                    is om de doelen te realiseren waarvoor je gegevens worden
                    verzameld. Accountgegevens worden bewaard zolang je account
                    actief is. Reviews blijven gepubliceerd zolang ze voldoen aan
                    onze voorwaarden, ook na verwijdering van een account (in
                    geanonimiseerde vorm). Contactgegevens worden maximaal 12
                    maanden na afhandeling bewaard.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    6. Cookies
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Eroplein maakt gebruik van cookies en vergelijkbare
                    technologieen. Een cookie is een klein tekstbestand dat bij
                    je bezoek aan onze website wordt opgeslagen op je apparaat.
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h4 className="text-sm font-medium text-white mb-1">
                        Functionele cookies
                      </h4>
                      <p className="text-xs text-gray-400">
                        Noodzakelijk voor het functioneren van de website, zoals
                        sessie-informatie en voorkeuren.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h4 className="text-sm font-medium text-white mb-1">
                        Analytische cookies
                      </h4>
                      <p className="text-xs text-gray-400">
                        Helpen ons inzicht te krijgen in het gebruik van de
                        website, zodat we deze kunnen verbeteren. Deze gegevens
                        worden geanonimiseerd verwerkt.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h4 className="text-sm font-medium text-white mb-1">
                        Marketing cookies
                      </h4>
                      <p className="text-xs text-gray-400">
                        Worden alleen geplaatst met je uitdrukkelijke
                        toestemming. Hiermee kunnen we relevante content tonen.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mt-3">
                    Je kunt cookies blokkeren of verwijderen via je
                    browserinstellingen. Houd er rekening mee dat dit de werking
                    van de website kan beinvloeden.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    7. Delen met derden
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Wij verkopen je gegevens nooit aan derden. Wij kunnen
                    gegevens delen met vertrouwde dienstverleners die ons helpen
                    bij het exploiteren van onze website (zoals hostingproviders
                    en analysediensten), mits zij zich houden aan passende
                    beveiligingsmaatregelen en verwerkersovereenkomsten. Daarnaast
                    kunnen wij gegevens verstrekken als wij hiertoe wettelijk
                    verplicht zijn.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    8. Beveiliging
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Wij nemen passende technische en organisatorische
                    maatregelen om je persoonsgegevens te beschermen tegen
                    ongeautoriseerde toegang, verlies of misbruik. Onze website
                    maakt gebruik van SSL-encryptie en wij volgen de
                    gangbare beveiligingsstandaarden.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    9. Jouw rechten (AVG)
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Op grond van de Algemene Verordening Gegevensbescherming
                    (AVG) heb je de volgende rechten:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                    <li>
                      <strong className="text-gray-300">Recht op inzage:</strong>{" "}
                      je mag opvragen welke gegevens wij van je verwerken
                    </li>
                    <li>
                      <strong className="text-gray-300">
                        Recht op rectificatie:
                      </strong>{" "}
                      je kunt onjuiste gegevens laten corrigeren
                    </li>
                    <li>
                      <strong className="text-gray-300">
                        Recht op verwijdering:
                      </strong>{" "}
                      je kunt verzoeken om verwijdering van je gegevens
                    </li>
                    <li>
                      <strong className="text-gray-300">
                        Recht op beperking:
                      </strong>{" "}
                      je kunt verzoeken om beperking van de verwerking
                    </li>
                    <li>
                      <strong className="text-gray-300">
                        Recht op overdraagbaarheid:
                      </strong>{" "}
                      je kunt je gegevens in een gangbaar formaat ontvangen
                    </li>
                    <li>
                      <strong className="text-gray-300">
                        Recht van bezwaar:
                      </strong>{" "}
                      je kunt bezwaar maken tegen de verwerking van je gegevens
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 leading-relaxed mt-3">
                    Je kunt een verzoek indienen via{" "}
                    <a
                      href="mailto:info@eroplein.com"
                      className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      info@eroplein.com
                    </a>
                    . Wij reageren binnen 30 dagen op je verzoek.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    10. Autoriteit Persoonsgegevens
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Mocht je een klacht hebben over de verwerking van je
                    persoonsgegevens, dan kun je contact met ons opnemen. Je
                    hebt ook het recht om een klacht in te dienen bij de
                    Autoriteit Persoonsgegevens (AP), de Nederlandse
                    toezichthoudende autoriteit op het gebied van
                    privacybescherming.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    11. Wijzigingen
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Wij behouden ons het recht voor om dit privacybeleid te
                    wijzigen. Wijzigingen worden op deze pagina gepubliceerd met
                    een bijgewerkte datum. Wij raden je aan om dit beleid
                    regelmatig te raadplegen.
                  </p>
                </section>

                <section className="pt-4 border-t border-white/[0.06]">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Heb je vragen over dit privacybeleid? Neem dan contact op
                    via{" "}
                    <a
                      href="mailto:info@eroplein.com"
                      className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      info@eroplein.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
