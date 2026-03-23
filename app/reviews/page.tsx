import type { Metadata } from "next";
import Link from "next/link";
import { Star, MapPin, ArrowRight, Shield } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  placeholderBusinesses,
  placeholderReviews,
  getPlaceholderReviewsByBusiness,
  formatTimeAgo,
} from "@/lib/placeholder-data";
import { getCityBySlug } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews per Bedrijf",
  description:
    "Lees reviews en ervaringen per bedrijf. Eerlijke beoordelingen over escorts, clubs, massage en meer in heel Nederland.",
};

export default function ReviewsPage() {
  // Group reviews by business, sorted by most reviews
  const businessesWithReviews = placeholderBusinesses
    .map((biz) => ({
      business: biz,
      reviews: getPlaceholderReviewsByBusiness(biz.id),
      city: getCityBySlug(biz.city_slug),
    }))
    .filter((b) => b.reviews.length > 0)
    .sort((a, b) => b.reviews.length - a.reviews.length);

  const totalReviews = placeholderReviews.length;
  const totalBusinesses = businessesWithReviews.length;

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Reviews" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Community
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Reviews per{" "}
              <span className="text-fuchsia-400">bedrijf</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {totalReviews} eerlijke reviews over {totalBusinesses} bedrijven.
              Lees ervaringen van echte bezoekers.
            </p>
          </div>

          {/* Business review sections */}
          <div className="space-y-12">
            {businessesWithReviews.map(({ business, reviews, city }) => (
              <section
                key={business.id}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
              >
                {/* Business header */}
                <div className="p-6 border-b border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-white">
                          {business.name}
                        </h2>
                        {business.is_verified && (
                          <span className="flex items-center gap-1 px-2 py-0.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs text-fuchsia-400">
                            <Shield className="w-3 h-3" />
                            Geverifieerd
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {business.address}{city ? `, ${city.name}` : ""}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
                          <span className="text-fuchsia-400 font-semibold">
                            {business.average_rating.toFixed(1)}
                          </span>
                          ({business.review_count} reviews)
                        </span>
                        <span>
                          {"€".repeat(business.price_range)}
                          <span className="text-gray-600">
                            {"€".repeat(4 - business.price_range)}
                          </span>
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/${business.city_slug}/${business.primary_category}/${business.slug}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.06] text-sm font-medium text-white/60 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all shrink-0"
                    >
                      Bekijk bedrijf
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Reviews for this business */}
                <div className="p-6 space-y-4">
                  {reviews
                    .sort(
                      (a, b) =>
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                    )
                    .map((review) => (
                      <ReviewCard
                        key={review.id}
                        review={review}
                        timeAgo={formatTimeAgo(review.created_at)}
                      />
                    ))}
                </div>
              </section>
            ))}
          </div>

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
      <Footer />
    </>
  );
}
