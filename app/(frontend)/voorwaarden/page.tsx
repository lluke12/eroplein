import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Algemene voorwaarden Eroplein",
  description:
    "Regels voor het gebruik van Eroplein: contentbeleid, reviewmoderatie, aansprakelijkheid en verantwoordelijkheden van gebruikers en bedrijven.",
  alternates: { canonical: "/voorwaarden" },
  openGraph: {
    title: "Algemene voorwaarden Eroplein",
    description:
      "Regels, contentbeleid en verantwoordelijkheden bij gebruik van Eroplein.",
    url: "/voorwaarden",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algemene voorwaarden Eroplein",
    description:
      "Regels, contentbeleid en verantwoordelijkheden bij gebruik van Eroplein.",
  },
};

export default function VoorwaardenPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Algemene Voorwaarden" }]} />

          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Juridisch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Algemene{" "}
              <span className="text-fuchsia-400">Voorwaarden</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Laatst bijgewerkt: 1 maart 2026
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-10">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    1. Algemeen
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Deze algemene voorwaarden zijn van toepassing op elk gebruik
                    van de website eroplein.com (hierna &quot;de Website&quot;)
                    en de diensten die door Eroplein worden aangeboden. Door de
                    Website te bezoeken en/of te gebruiken, ga je akkoord met
                    deze voorwaarden. Indien je niet akkoord gaat, verzoeken wij
                    je de Website niet te gebruiken.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    2. Leeftijdsvereiste
                  </h2>
                  <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 mb-3">
                    <p className="text-sm text-fuchsia-300 font-medium">
                      Deze website is uitsluitend bedoeld voor personen van 18
                      jaar en ouder.
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Door gebruik te maken van de Website bevestig je dat je
                    minimaal 18 jaar oud bent. Eroplein behoudt zich het recht
                    voor om accounts te verwijderen en toegang te blokkeren
                    indien blijkt dat een gebruiker jonger is dan 18 jaar. Het
                    is de verantwoordelijkheid van ouders/voogden om minderjarigen
                    de toegang tot deze Website te ontzeggen.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    3. Gebruikersaccount
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Voor het plaatsen van reviews en het gebruik van bepaalde
                    functies is een account vereist. Je bent zelf
                    verantwoordelijk voor het geheimhouden van je
                    inloggegevens. Alle activiteiten die plaatsvinden onder jouw
                    account zijn voor jouw verantwoordelijkheid. Bij vermoeden
                    van ongeautoriseerd gebruik dien je ons onmiddellijk te
                    informeren.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    4. Reviews en content
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Bij het plaatsen van reviews en andere content op de Website
                    gelden de volgende regels:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                    <li>
                      Reviews moeten gebaseerd zijn op eigen, daadwerkelijke
                      ervaringen
                    </li>
                    <li>
                      Het plaatsen van valse, misleidende of nep-reviews is
                      verboden
                    </li>
                    <li>
                      Content mag geen persoonsgegevens van derden bevatten
                      (zoals volledige namen, adressen of telefoonnummers)
                    </li>
                    <li>
                      Discriminerende, bedreigende of haatdragende inhoud is
                      niet toegestaan
                    </li>
                    <li>
                      Content mag geen illegale activiteiten promoten of
                      beschrijven
                    </li>
                    <li>
                      Commerciele berichten of spam in reviews zijn verboden
                    </li>
                    <li>
                      Respectvol taalgebruik is vereist, ook bij negatieve
                      ervaringen
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 leading-relaxed mt-3">
                    Eroplein behoudt zich het recht voor om content te
                    verwijderen of te wijzigen die in strijd is met deze
                    voorwaarden, zonder voorafgaande kennisgeving.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    5. Intellectueel eigendom
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Alle content op de Website, inclusief maar niet beperkt tot
                    teksten, afbeeldingen, logo&apos;s, software en het ontwerp,
                    is eigendom van Eroplein of haar licentiegevers en wordt
                    beschermd door auteurs- en merkenrecht. Het is niet
                    toegestaan om content van de Website te kopieren,
                    verspreiden of anderszins te gebruiken zonder
                    uitdrukkelijke schriftelijke toestemming.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    6. Verantwoordelijkheden gebruiker
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Als gebruiker van de Website ben je verantwoordelijk voor:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                    <li>
                      Het naleven van alle toepasselijke wet- en regelgeving
                    </li>
                    <li>
                      De juistheid en eerlijkheid van door jou geplaatste
                      content
                    </li>
                    <li>Het beschermen van je eigen accountgegevens</li>
                    <li>
                      Het niet verstoren van de werking van de Website of
                      servers
                    </li>
                    <li>
                      Het niet proberen ongeautoriseerde toegang te verkrijgen
                      tot delen van de Website
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    7. Bedrijfsvermeldingen
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eroplein kan bedrijfsinformatie publiceren op basis van
                    openbaar beschikbare gegevens. Bedrijfseigenaren kunnen hun
                    vermelding claimen om deze te beheren en bij te werken.
                    Eroplein garandeert niet de volledigheid of juistheid van
                    bedrijfsinformatie. Het claimen van een bedrijf dat niet
                    van jou is, is verboden en kan leiden tot juridische stappen.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    8. Aansprakelijkheid
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eroplein is een platform en treedt niet op als tussenpersoon
                    of bemiddelaar. Wij zijn niet aansprakelijk voor de inhoud
                    van door gebruikers geplaatste reviews, de kwaliteit van
                    diensten van vermelde bedrijven, of eventuele schade die
                    voortvloeit uit het gebruik van de Website of het vertrouwen
                    op informatie op de Website. De Website wordt aangeboden
                    &quot;as is&quot; zonder enige garantie.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    9. Beeindiging
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eroplein behoudt zich het recht voor om accounts te
                    schorsen of te beeindigen bij schending van deze
                    voorwaarden, zonder voorafgaande waarschuwing of
                    restitutie. Na beeindiging blijven de bepalingen van deze
                    voorwaarden die naar hun aard bedoeld zijn om de
                    beeindiging te overleven, van kracht.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    10. Toepasselijk recht
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Op deze voorwaarden is Nederlands recht van toepassing.
                    Geschillen die voortvloeien uit of verband houden met deze
                    voorwaarden worden voorgelegd aan de bevoegde rechter in
                    Nederland.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    11. Wijzigingen
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eroplein behoudt zich het recht voor om deze voorwaarden
                    op elk moment te wijzigen. Wijzigingen worden op deze
                    pagina gepubliceerd. Voortgezet gebruik van de Website na
                    wijziging houdt aanvaarding van de gewijzigde voorwaarden
                    in.
                  </p>
                </section>

                <section className="pt-4 border-t border-white/[0.06]">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Heb je vragen over deze voorwaarden? Neem dan contact op
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
