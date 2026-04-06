"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  Star,
  Search,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";

const guidelines = [
  {
    icon: CheckCircle,
    title: "Wees eerlijk",
    description: "Beschrijf je werkelijke ervaring, zowel positief als negatief.",
    color: "text-green-400",
  },
  {
    icon: CheckCircle,
    title: "Wees specifiek",
    description:
      "Vermeld details over de sfeer, service, hygiene en prijs-kwaliteitverhouding.",
    color: "text-green-400",
  },
  {
    icon: CheckCircle,
    title: "Wees respectvol",
    description:
      "Gebruik nette taal, ook bij negatieve ervaringen. Geen beledigingen.",
    color: "text-green-400",
  },
  {
    icon: X,
    title: "Geen persoonsgegevens",
    description:
      "Deel nooit volledige namen, telefoonnummers of adressen van medewerkers.",
    color: "text-red-400",
  },
  {
    icon: X,
    title: "Geen nep-reviews",
    description:
      "Schrijf alleen over bedrijven die je daadwerkelijk hebt bezocht.",
    color: "text-red-400",
  },
  {
    icon: X,
    title: "Geen spam of reclame",
    description: "Reviews mogen geen commerciele berichten of links bevatten.",
    color: "text-red-400",
  },
];

const ratingLabels = ["Sfeer", "Service", "Hygiene", "Prijs/kwaliteit"];

function StarInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-300">{label}</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(star)}
            className="p-0.5"
          >
            <Star
              className={`w-5 h-5 transition-colors ${
                star <= (hover || value)
                  ? "text-fuchsia-400 fill-fuchsia-400"
                  : "text-white/15"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SchrijfReviewPage() {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [overallRating, setOverallRating] = useState(0);
  const [overallHover, setOverallHover] = useState(0);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Review schrijven" }]} />

          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Community
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Schrijf een{" "}
              <span className="text-fuchsia-400">review</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Deel je ervaring en help anderen de juiste keuze te maken. Alle
              reviews worden anoniem gepubliceerd.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Review Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                <form className="space-y-8">
                  {/* Step 1: Search Business */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-7 h-7 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-xs font-bold text-fuchsia-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-white">
                        Zoek het bedrijf
                      </h2>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Zoek op bedrijfsnaam of stad..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Kun je het bedrijf niet vinden?{" "}
                      <Link
                        href="/claim"
                        className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                      >
                        Voeg het toe
                      </Link>
                    </p>
                  </div>

                  {/* Step 2: Overall Rating */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-7 h-7 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-xs font-bold text-fuchsia-400">
                        2
                      </div>
                      <h2 className="text-lg font-semibold text-white">
                        Algemene beoordeling
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setOverallHover(star)}
                            onMouseLeave={() => setOverallHover(0)}
                            onClick={() => setOverallRating(star)}
                            className="p-1"
                          >
                            <Star
                              className={`w-7 h-7 transition-colors ${
                                star <= (overallHover || overallRating)
                                  ? "text-fuchsia-400 fill-fuchsia-400"
                                  : "text-white/15"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {overallRating > 0 && (
                        <span className="text-sm text-gray-400">
                          {overallRating}/5
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Step 3: Detailed Ratings */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-7 h-7 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-xs font-bold text-fuchsia-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-white">
                        Gedetailleerde score
                      </h2>
                    </div>
                    <div className="space-y-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      {ratingLabels.map((label) => (
                        <StarInput
                          key={label}
                          label={label}
                          value={ratings[label] || 0}
                          onChange={(v) =>
                            setRatings((prev) => ({ ...prev, [label]: v }))
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Review Text */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-7 h-7 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-xs font-bold text-fuchsia-400">
                        4
                      </div>
                      <h2 className="text-lg font-semibold text-white">
                        Je ervaring
                      </h2>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Titel van je review
                        </label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Bijv. Goede ervaring, aanrader!"
                          className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="review"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Je review
                        </label>
                        <textarea
                          id="review"
                          rows={6}
                          placeholder="Beschrijf je ervaring zo gedetailleerd mogelijk..."
                          className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Minimaal 50 tekens
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <ThumbsUp className="w-4 h-4 text-green-400" />
                            Pluspunten
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Wat vond je goed?"
                            className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <ThumbsDown className="w-4 h-4 text-red-400" />
                            Minpunten
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Wat kon beter?"
                            className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="visit-date"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Datum van bezoek
                        </label>
                        <input
                          type="month"
                          id="visit-date"
                          className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="flex items-start gap-3 mb-6">
                      <AlertCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Door een review te plaatsen ga je akkoord met onze{" "}
                        <Link
                          href="/voorwaarden"
                          className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                        >
                          algemene voorwaarden
                        </Link>{" "}
                        en{" "}
                        <Link
                          href="/privacy"
                          className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                        >
                          privacybeleid
                        </Link>
                        . Reviews worden gemodereerd voor publicatie.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-full py-3.5 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
                    >
                      Review plaatsen
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar: Guidelines */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white mb-5">
                  Richtlijnen voor reviews
                </h3>
                <div className="space-y-4">
                  {guidelines.map((guideline) => (
                    <div
                      key={guideline.title}
                      className="flex gap-3"
                    >
                      <guideline.icon
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${guideline.color}`}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-white mb-0.5">
                          {guideline.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {guideline.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white mb-3">
                  Waarom reviews schrijven?
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">-</span>
                    Help anderen een goede keuze te maken
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">-</span>
                    Stimuleer bedrijven om hun kwaliteit te verbeteren
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">-</span>
                    Draag bij aan een transparante branche
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">-</span>
                    Bouw reputatie op als betrouwbare reviewer
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white mb-3">
                  Hulp nodig?
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Heb je vragen over het schrijven van reviews of het gebruik
                  van het platform?
                </p>
                <Link
                  href="/faq"
                  className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  Bekijk de FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
