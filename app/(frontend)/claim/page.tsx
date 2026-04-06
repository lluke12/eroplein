import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  Search,
  ShieldCheck,
  Settings,
  Star,
  MessageSquare,
  BarChart3,
  Image,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Claim je Bedrijf",
  description:
    "Claim je bedrijfspagina op Eroplein. Beheer je vermelding, reageer op reviews en vergroot je zichtbaarheid.",
  alternates: { canonical: "/claim" },
  openGraph: {
    title: "Claim je Bedrijf | Eroplein",
    description:
      "Neem de controle over je bedrijfspagina op Eroplein. Gratis te claimen.",
    url: "/claim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claim je Bedrijf",
    description:
      "Claim je bedrijfspagina op Eroplein. Beheer je vermelding, reageer op reviews en vergroot je zichtbaarheid.",
  },
};

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Zoek je bedrijf",
    description:
      "Gebruik de zoekfunctie hieronder om je bedrijf te vinden op Eroplein. Staat je bedrijf er nog niet bij? Dan kun je het gratis toevoegen.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    title: "Verifieer je identiteit",
    description:
      "Bewijs dat jij de eigenaar bent via e-mailverificatie, telefonische verificatie of door een document te uploaden. Dit proces duurt maximaal 48 uur.",
  },
  {
    icon: Settings,
    number: "3",
    title: "Beheer je pagina",
    description:
      "Na verificatie heb je volledige controle over je bedrijfspagina. Werk je gegevens bij, voeg foto's toe en reageer op reviews.",
  },
];

const benefits = [
  {
    icon: MessageSquare,
    title: "Reageer op reviews",
    description:
      "Laat bezoekers zien dat je hun feedback waardeert door te reageren op reviews.",
  },
  {
    icon: Image,
    title: "Foto's toevoegen",
    description:
      "Upload foto's van je bedrijf om een goede eerste indruk te maken.",
  },
  {
    icon: BarChart3,
    title: "Bekijk statistieken",
    description:
      "Zie hoeveel mensen je profiel bekijken en waar ze vandaan komen.",
  },
  {
    icon: Star,
    title: "Geverifieerd badge",
    description:
      "Geclaimde bedrijven krijgen een geverifieerd badge dat vertrouwen wekt.",
  },
  {
    icon: Settings,
    title: "Gegevens bijwerken",
    description:
      "Houd je openingstijden, contactgegevens en beschrijving up-to-date.",
  },
  {
    icon: CheckCircle,
    title: "Gratis te claimen",
    description:
      "Het claimen van je bedrijfspagina is volledig gratis. Geen verplichtingen.",
  },
];

export default function ClaimPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Claim je bedrijf" }]} />

          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Voor bedrijven
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Claim je{" "}
              <span className="text-fuchsia-400">bedrijfspagina</span>
            </h1>
            <p className="text-lg text-gray-400">
              Neem de controle over je vermelding op Eroplein. Reageer op
              reviews, voeg foto&apos;s toe en vergroot je zichtbaarheid. Gratis
              en binnen 48 uur geregeld.
            </p>
          </div>

          {/* Steps */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-sm font-bold text-fuchsia-400">
                      {step.number}
                    </div>
                    <step.icon className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Search / Claim Form */}
          <section className="mb-20">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-10 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                Zoek je bedrijf
              </h2>
              <p className="text-sm text-gray-400 mb-8 text-center">
                Voer je bedrijfsnaam in om te controleren of je al vermeld staat
                op Eroplein.
              </p>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="business-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    name="business-name"
                    placeholder="Bijv. Club Elegance"
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-city"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Stad
                  </label>
                  <input
                    type="text"
                    id="business-city"
                    name="business-city"
                    placeholder="Bijv. Amsterdam"
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Zakelijk e-mailadres
                  </label>
                  <input
                    type="email"
                    id="business-email"
                    name="business-email"
                    placeholder="info@jouwbedrijf.nl"
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="business-phone"
                    name="business-phone"
                    placeholder="+31 6 12345678"
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Toelichting (optioneel)
                  </label>
                  <textarea
                    id="business-message"
                    name="business-message"
                    rows={3}
                    placeholder="Eventuele extra informatie..."
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
                >
                  Bedrijf claimen
                </button>
              </form>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Voordelen van claimen
            </h2>
            <p className="text-gray-400 mb-10 text-center max-w-xl mx-auto">
              Ontdek wat je allemaal kunt doen met een geclaimde bedrijfspagina.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Adverteren CTA */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Wil je nog meer zichtbaarheid?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Bekijk onze advertentiemogelijkheden voor extra exposure, een
              uitgelichte vermelding en geavanceerde statistieken.
            </p>
            <Link
              href="/adverteren"
              className="inline-block px-8 py-3 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
            >
              Bekijk advertentiepakketten
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
