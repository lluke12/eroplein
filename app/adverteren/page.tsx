import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  Check,
  Star,
  TrendingUp,
  Eye,
  MessageSquare,
  Shield,
  BarChart3,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adverteren",
  description:
    "Vergroot je zichtbaarheid op Eroplein. Ontdek onze advertentiemogelijkheden voor escorts, clubs en andere erotische bedrijven.",
  alternates: { canonical: "/adverteren" },
  openGraph: {
    title: "Adverteren op Eroplein",
    description:
      "Bereik duizenden bezoekers per maand. Ontdek onze advertentiepakketten voor erotische bedrijven.",
    url: "/adverteren",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverteren",
    description:
      "Vergroot je zichtbaarheid op Eroplein. Ontdek onze advertentiemogelijkheden voor escorts, clubs en andere erotische bedrijven.",
  },
};

const stats = [
  { value: "2.847", label: "Bedrijven", icon: Shield },
  { value: "18.3K", label: "Reviews", icon: MessageSquare },
  { value: "125K", label: "Maandelijkse bezoekers", icon: Eye },
  { value: "42", label: "Steden", icon: TrendingUp },
];

const tiers = [
  {
    name: "Basis",
    price: "49",
    period: "per maand",
    description: "Voor bedrijven die hun vermelding willen claimen en beheren.",
    features: [
      "Bedrijfspagina claimen",
      "Openingstijden en contactinfo beheren",
      "Reageren op reviews",
      "Basisstatistieken",
      "Vermelding in stadspagina",
    ],
    cta: "Start met Basis",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "129",
    period: "per maand",
    description:
      "Meer zichtbaarheid en tools om je bedrijf te laten groeien.",
    features: [
      "Alles van Basis",
      "Uitgelichte vermelding in categorie",
      "Foto&apos;s en video&apos;s toevoegen",
      "Geavanceerde statistieken",
      "Prioriteit in zoekresultaten",
      "Maandelijks prestatierapport",
      "Geverifieerd badge",
    ],
    cta: "Kies Premium",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "249",
    period: "per maand",
    description:
      "Maximale exposure voor bedrijven die het verschil willen maken.",
    features: [
      "Alles van Premium",
      "Homepage uitgelicht",
      "Bannerpositie in je stad",
      "Speciale aanbiedingen plaatsen",
      "A/B testing voor je profiel",
      "Persoonlijke accountmanager",
      "API-toegang voor integraties",
      "Onbeperkte foto&apos;s",
    ],
    cta: "Kies Pro",
    highlighted: false,
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Meer zichtbaarheid",
    description:
      "Word gevonden door duizenden potentiele klanten die actief zoeken naar jouw diensten.",
  },
  {
    icon: Star,
    title: "Reputatiebeheer",
    description:
      "Reageer op reviews, laat je beste kant zien en bouw vertrouwen op bij nieuwe bezoekers.",
  },
  {
    icon: BarChart3,
    title: "Inzicht in prestaties",
    description:
      "Bekijk hoeveel mensen je profiel bekijken, waar ze vandaan komen en hoe je scoort.",
  },
  {
    icon: Zap,
    title: "Direct resultaat",
    description:
      "Je uitgebreide profiel is direct zichtbaar. Geen wachttijden, geen verborgen kosten.",
  },
];

export default function AdverterenPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Adverteren" }]} />

          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Voor bedrijven
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Laat je bedrijf{" "}
              <span className="text-fuchsia-400">groeien</span>
            </h1>
            <p className="text-lg text-gray-400">
              Bereik duizenden potentiele klanten die actief op zoek zijn naar
              jouw diensten. Kies het pakket dat bij je past.
            </p>
          </div>

          {/* Stats */}
          <section className="mb-20 border-y border-white/[0.06] py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-6 md:p-8 ${
                    tier.highlighted
                      ? "border-2 border-fuchsia-500/40 bg-fuchsia-500/[0.04]"
                      : "border border-white/[0.06] bg-white/[0.02]"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="text-xs font-medium text-fuchsia-400 tracking-widest uppercase mb-4">
                      Meest gekozen
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      &euro;{tier.price}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <Check className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center w-full py-3 rounded-full text-sm font-medium transition-colors ${
                      tier.highlighted
                        ? "bg-fuchsia-500 text-white hover:bg-fuchsia-600"
                        : "border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Alle prijzen zijn exclusief BTW. Jaarlijkse betaling geeft 2
              maanden gratis.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Waarom adverteren op Eroplein?
            </h2>
            <p className="text-gray-400 mb-10 text-center max-w-xl mx-auto">
              Ontdek wat Eroplein voor jouw bedrijf kan betekenen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex gap-5"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Klaar om te beginnen?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Neem contact op met ons advertentieteam. We helpen je graag het
              juiste pakket te kiezen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:adverteren@eroplein.com"
                className="px-8 py-3 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
              >
                Mail adverteren@eroplein.com
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all"
              >
                Contactformulier
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
