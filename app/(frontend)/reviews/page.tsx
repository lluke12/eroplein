import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, ArrowRight, Shield, MessageSquare, TrendingUp, Building2 } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StarRating } from "@/components/ui/StarRating";
import {
  placeholderBusinesses,
  placeholderReviews,
  getPlaceholderReviewsByBusiness,
  formatTimeAgo,
} from "@/lib/placeholder-data";
import { getCityBySlug } from "@/lib/data";
import { ReviewsContent } from "./ReviewsContent";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
} from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Reviews — ervaringen per bedrijf op Eroplein",
  description:
    "Alle reviews op Eroplein: eerlijke ervaringen van bezoekers over escorts, parenclubs, erotische massage en meer per bedrijf. Gesorteerd op meest reviews en hoogste score.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews — ervaringen per bedrijf op Eroplein",
    description:
      "Alle reviews op Eroplein: eerlijke ervaringen per bedrijf, geverifieerd en gemodereerd.",
    url: "/reviews",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews — ervaringen per bedrijf op Eroplein",
    description:
      "Alle reviews op Eroplein: eerlijke ervaringen per bedrijf.",
  },
};

export default function ReviewsPage() {
  const businessesWithReviews = placeholderBusinesses
    .map((biz) => ({
      business: biz,
      reviews: getPlaceholderReviewsByBusiness(biz.id).sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
      city: getCityBySlug(biz.city_slug),
    }))
    .filter((b) => b.reviews.length > 0)
    .sort((a, b) => b.reviews.length - a.reviews.length);

  const totalReviews = placeholderReviews.length;
  const totalBusinesses = businessesWithReviews.length;
  const avgRating = placeholderReviews.reduce((s, r) => s + r.rating, 0) / totalReviews;

  // Serialize reviews with timeAgo for client component
  const serialized = businessesWithReviews.map(({ business, reviews, city }) => ({
    business,
    city: city ? { name: city.name, slug: city.slug } : null,
    reviews: reviews.map((r) => ({ ...r, timeAgo: formatTimeAgo(r.created_at) })),
  }));

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Reviews" }]} />

          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Community
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Reviews per{" "}
              <span className="text-fuchsia-400">bedrijf</span>
            </h1>
            <p className="text-lg text-gray-400">
              Alle {totalReviews} reviews op Eroplein, gegroepeerd per bedrijf
              en gesorteerd op activiteit. Elke review wordt handmatig
              gemodereerd voor publicatie.
            </p>
          </div>

          <section className="mb-10 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                Reviews zijn de ruggengraat van Eroplein. Bezoekers beschrijven
                wat ze meegemaakt hebben: de sfeer bij aankomst, de
                communicatie, de dame of heer, de prijs-kwaliteit en eventuele
                verrassingen. Bedrijven kunnen reageren op reviews om
                opmerkingen te erkennen of te corrigeren.
              </p>
              <p>
                We hanteren strikte moderatie: geen grensoverschrijdende taal,
                geen persoonlijke aanvallen, geen nep-reviews. Inhoudelijke
                klachten over bedrijven worden gepubliceerd als ze redelijk en
                respectvol geformuleerd zijn.
              </p>
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-fuchsia-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{totalReviews}</div>
                <div className="text-xs text-gray-400">Reviews</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{totalBusinesses}</div>
                <div className="text-xs text-gray-400">Bedrijven</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{avgRating.toFixed(1)}</div>
                <div className="text-xs text-gray-400">Gem. score</div>
              </div>
            </div>
          </div>

          {/* Client component with expandable reviews */}
          <ReviewsContent data={serialized} />

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Deel jouw ervaring
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Schrijf een review en help anderen de juiste keuze te maken.
            </p>
            <Link
              href="/schrijf-review"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium transition-colors"
            >
              Schrijf een Review
            </Link>
          </div>
        </div>
      </main>

      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ])}
        id="ld-breadcrumb"
      />
      <JsonLd
        data={collectionPageSchema({
          name: "Reviews op Eroplein",
          description: `${totalReviews} reviews over ${totalBusinesses} bedrijven met gemiddelde score ${avgRating.toFixed(1)}/5.`,
          url: "/reviews",
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Reviews", url: "/reviews" },
          ],
        })}
        id="ld-collection"
      />

      <Footer />
    </>
  );
}
