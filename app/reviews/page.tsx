import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, TrendingUp, ThumbsUp, Clock } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  placeholderBusinesses,
  placeholderReviews,
  getRecentReviews,
  formatTimeAgo,
} from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Recente Reviews",
  description:
    "Lees de meest recente reviews en ervaringen van echte bezoekers. Eerlijke beoordelingen over escorts, clubs, massage en meer.",
};

export default function ReviewsPage() {
  const reviews = getRecentReviews(20);
  const totalReviews = placeholderReviews.length;
  const avgRating =
    placeholderReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
  const topHelpful = [...placeholderReviews].sort(
    (a, b) => b.helpful_count - a.helpful_count
  )[0];

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
              Recente{" "}
              <span className="text-fuchsia-400">reviews</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Eerlijke ervaringen van echte bezoekers. Lees, deel en help de
              community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-fuchsia-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{totalReviews}</div>
                  <div className="text-xs text-gray-500">Totaal reviews</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{avgRating.toFixed(1)}</div>
                  <div className="text-xs text-gray-500">Gem. score</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {placeholderReviews.reduce((s, r) => s + r.helpful_count, 0)}
                  </div>
                  <div className="text-xs text-gray-500">Keer nuttig</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {placeholderBusinesses.length}
                  </div>
                  <div className="text-xs text-gray-500">Bedrijven beoordeeld</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-3 mb-8">
            <button className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-sm text-fuchsia-400">
              Nieuwste
            </button>
            <button className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/40 hover:text-white/60 transition-colors">
              Best beoordeeld
            </button>
            <button className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/40 hover:text-white/60 transition-colors">
              Meest nuttig
            </button>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-4">
              {reviews.map((review) => {
                const biz = placeholderBusinesses.find(
                  (b) => b.id === review.business_id
                );
                return (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    businessName={biz?.name}
                    timeAgo={formatTimeAgo(review.created_at)}
                  />
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Write review CTA */}
              <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Deel jouw ervaring
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Schrijf een review en help anderen de juiste keuze te maken.
                </p>
                <Link
                  href="/schrijf-review"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium transition-colors"
                >
                  Schrijf een Review
                </Link>
              </div>

              {/* Top businesses by reviews */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white mb-4">
                  Meest beoordeeld
                </h3>
                <div className="space-y-3">
                  {[...placeholderBusinesses]
                    .sort((a, b) => b.review_count - a.review_count)
                    .slice(0, 5)
                    .map((biz, i) => (
                      <Link
                        key={biz.id}
                        href={`/${biz.city_slug}/${biz.primary_category}/${biz.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <span className="text-sm font-medium text-white/20 w-5">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate group-hover:text-fuchsia-300 transition-colors">
                            {biz.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {biz.review_count} reviews
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <span className="text-fuchsia-400 font-medium">
                            {biz.average_rating.toFixed(1)}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Rating distribution */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-white mb-4">
                  Score verdeling
                </h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = placeholderReviews.filter(
                      (r) => r.rating === stars
                    ).length;
                    const pct =
                      totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                    return (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-xs text-white/50 w-3">
                          {stars}
                        </span>
                        <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-fuchsia-500/60 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-6 text-right">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
