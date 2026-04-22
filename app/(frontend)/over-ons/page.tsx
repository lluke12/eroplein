import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Shield, Eye, Users, Heart, Star, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Eroplein — onafhankelijk reviewplatform sekswerk Nederland",
  description:
    "Wie zijn we, wat doen we en hoe modereren we reviews. Eroplein is het onafhankelijke Nederlandse reviewplatform voor escorts, parenclubs, massage en meer.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over Eroplein",
    description:
      "Onafhankelijk Nederlands reviewplatform voor erotische diensten. Onze missie, werkwijze en moderatie.",
    url: "/over-ons",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Eroplein",
    description:
      "Onafhankelijk reviewplatform voor erotische diensten in Nederland.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Onafhankelijkheid",
    description:
      "Wij zijn niet verbonden aan enig bedrijf in de branche. Onze reviews worden geschreven door echte bezoekers, niet door adverteerders.",
  },
  {
    icon: Eye,
    title: "Transparantie",
    description:
      "Elke review doorloopt een verificatieproces. We publiceren zowel positieve als negatieve ervaringen, zonder censuur.",
  },
  {
    icon: Users,
    title: "Privacy",
    description:
      "Anonimiteit staat voorop. Reviewers kunnen hun ervaring delen zonder persoonlijke gegevens prijs te geven.",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "We geloven in een respectvolle benadering van de erotische branche. Alle content wordt gemodereerd op respectvol taalgebruik.",
  },
];

const stats = [
  { value: "2.847", label: "Bedrijven" },
  { value: "18.3K", label: "Reviews" },
  { value: "42", label: "Steden" },
  { value: "2024", label: "Opgericht" },
];

const team = [
  {
    initials: "MV",
    name: "Mark V.",
    role: "Oprichter & Hoofdredacteur",
    description:
      "Verantwoordelijk voor de visie en kwaliteit van het platform.",
  },
  {
    initials: "SB",
    name: "Sophie B.",
    role: "Community Manager",
    description:
      "Beheert de community, modereert reviews en onderhoudt contact met gebruikers.",
  },
  {
    initials: "JK",
    name: "Joost K.",
    role: "Technisch Directeur",
    description:
      "Ontwikkelt en onderhoudt het platform en zorgt voor veiligheid en snelheid.",
  },
  {
    initials: "LR",
    name: "Lisa R.",
    role: "Content & SEO",
    description:
      "Schrijft artikelen, gidsen en zorgt voor de vindbaarheid van het platform.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Over ons" }]} />

          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Over Eroplein
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Het onafhankelijke{" "}
              <span className="text-fuchsia-400">reviewplatform</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Eroplein is het grootste onafhankelijke platform voor eerlijke
              reviews en ervaringen over erotische diensten in Nederland. Van
              escorts en clubs tot massage en meer, in 42+ steden.
            </p>
          </div>

          {/* What is Eroplein */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Wat is Eroplein?
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Eroplein is opgericht met een duidelijk doel: consumenten
                    helpen een weloverwogen keuze te maken op het gebied van
                    erotische diensten in Nederland. We bieden een platform waar
                    echte bezoekers hun ervaringen kunnen delen, zodat anderen
                    weten wat ze kunnen verwachten.
                  </p>
                  <p>
                    Anders dan veel andere platforms zijn wij volledig
                    onafhankelijk. Bedrijven kunnen niet betalen voor betere
                    reviews of het verwijderen van negatieve ervaringen. Elke
                    review telt en elke stem wordt gehoord.
                  </p>
                  <p>
                    Met meer dan 2.800 bedrijven verspreid over 42 Nederlandse
                    steden en 8 categorieeen bieden we het meest complete
                    overzicht van de erotische branche in Nederland.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Zo werkt het
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-sm font-semibold text-fuchsia-400">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Zoek een bedrijf of stad
                      </h4>
                      <p className="text-sm text-gray-400">
                        Gebruik de zoekfunctie of blader door steden en
                        categorieen om bedrijven te vinden.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-sm font-semibold text-fuchsia-400">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Lees reviews en vergelijk
                      </h4>
                      <p className="text-sm text-gray-400">
                        Bekijk beoordelingen, lees ervaringen en vergelijk
                        bedrijven op score, prijs en locatie.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-sm font-semibold text-fuchsia-400">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Deel jouw ervaring
                      </h4>
                      <p className="text-sm text-gray-400">
                        Na je bezoek kun je anoniem een review achterlaten en
                        anderen helpen bij hun keuze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-20 border-y border-white/[0.06] py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-2">
              Onze waarden
            </h2>
            <p className="text-gray-400 mb-8">
              De principes die ons platform vormgeven.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-2">Ons team</h2>
            <p className="text-gray-400 mb-8">
              De mensen achter Eroplein.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-lg font-bold text-fuchsia-400">
                    {member.initials}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-fuchsia-400/70 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Vragen of opmerkingen?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Neem gerust contact met ons op. We staan klaar om je te helpen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
              >
                Neem contact op
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all"
              >
                Bekijk de FAQ
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
