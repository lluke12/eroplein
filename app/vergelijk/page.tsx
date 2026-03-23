import type { Metadata } from "next";
import Link from "next/link";
import { Star, MapPin, MessageSquare, Shield, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StarRating } from "@/components/ui/StarRating";
import {
  placeholderBusinesses,
  getPlaceholderReviewsByBusiness,
} from "@/lib/placeholder-data";
import { getCityBySlug, getCategoryBySlug } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vergelijk Bedrijven",
  description:
    "Vergelijk erotische bedrijven naast elkaar. Bekijk scores, reviews, prijzen en meer om de beste keuze te maken.",
};

function PriceIndicator({ range }: { range: number }) {
  return (
    <span className="text-sm">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className={i < range ? "text-fuchsia-400" : "text-white/10"}>
          €
        </span>
      ))}
    </span>
  );
}

export default function VergelijkPage() {
  // Show top businesses for comparison
  const compareBusinesses = [...placeholderBusinesses]
    .sort((a, b) => b.review_count - a.review_count)
    .slice(0, 6);

  // Pre-built comparisons
  const comparisons = [
    {
      title: "Beste clubs in Amsterdam vs Rotterdam",
      ids: ["1", "9"],
    },
    {
      title: "Top massage: Amsterdam vs Utrecht",
      ids: ["7", "12"],
    },
    {
      title: "Escorts vergelijken: Amsterdam vs Rotterdam",
      ids: ["5", "10"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Vergelijk" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Vergelijk
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Bedrijven{" "}
              <span className="text-fuchsia-400">vergelijken</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Zet bedrijven naast elkaar en maak de beste keuze op basis van
              scores, reviews en prijs.
            </p>
          </div>

          {/* Pre-built comparisons */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
              Populaire vergelijkingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons.map((comp) => {
                const businesses = comp.ids
                  .map((id) => placeholderBusinesses.find((b) => b.id === id))
                  .filter(Boolean);

                return (
                  <div
                    key={comp.title}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                  >
                    <h3 className="text-base font-semibold text-white mb-4">
                      {comp.title}
                    </h3>
                    <div className="space-y-3">
                      {businesses.map((biz) => {
                        if (!biz) return null;
                        const city = getCityBySlug(biz.city_slug);
                        return (
                          <div
                            key={biz.id}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <p className="text-sm font-medium text-white">
                                {biz.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {city?.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
                              <span className="text-sm font-semibold text-fuchsia-400">
                                {biz.average_rating.toFixed(1)}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06] text-center">
                      <span className="text-xs text-fuchsia-400">
                        Bekijk volledige vergelijking
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Full comparison table */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
              Top bedrijven vergelijken
            </h2>

            {/* Desktop table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 pr-6 w-64">
                      Bedrijf
                    </th>
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                      Score
                    </th>
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                      Reviews
                    </th>
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                      Prijs
                    </th>
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                      Categorie
                    </th>
                    <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                      Status
                    </th>
                    <th className="pb-4 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {compareBusinesses.map((biz) => {
                    const city = getCityBySlug(biz.city_slug);
                    const cat = getCategoryBySlug(biz.primary_category);
                    const reviewCount = getPlaceholderReviewsByBusiness(biz.id).length;

                    return (
                      <tr
                        key={biz.id}
                        className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-5 pr-6">
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {biz.name}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3 text-gray-600" />
                              <span className="text-xs text-gray-500">
                                {city?.name}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-4">
                          <div className="flex items-center gap-2">
                            <StarRating rating={biz.average_rating} />
                            <span className="text-sm font-semibold text-white">
                              {biz.average_rating.toFixed(1)}
                            </span>
                          </div>
                        </td>
                        <td className="py-5 px-4">
                          <span className="text-sm text-white/60">
                            {biz.review_count}
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          <PriceIndicator range={biz.price_range} />
                        </td>
                        <td className="py-5 px-4">
                          <span className="px-2.5 py-1 rounded-full text-xs bg-white/[0.05] text-white/50">
                            {cat?.name}
                          </span>
                        </td>
                        <td className="py-5 px-4">
                          {biz.is_verified ? (
                            <span className="flex items-center gap-1 text-xs text-fuchsia-400">
                              <Shield className="w-3.5 h-3.5" />
                              Geverifieerd
                            </span>
                          ) : (
                            <span className="text-xs text-gray-600">
                              Niet geverifieerd
                            </span>
                          )}
                        </td>
                        <td className="py-5 px-4">
                          <Link
                            href={`/${biz.city_slug}/${biz.primary_category}/${biz.slug}`}
                            className="text-xs text-fuchsia-400 hover:text-fuchsia-300"
                          >
                            Bekijk
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-4">
              {compareBusinesses.map((biz) => {
                const city = getCityBySlug(biz.city_slug);
                const cat = getCategoryBySlug(biz.primary_category);

                return (
                  <Link
                    key={biz.id}
                    href={`/${biz.city_slug}/${biz.primary_category}/${biz.slug}`}
                    className="block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {biz.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-gray-600" />
                          <span className="text-xs text-gray-500">
                            {city?.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-fuchsia-500/10 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
                        <span className="text-sm font-semibold text-fuchsia-400">
                          {biz.average_rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{biz.review_count} reviews</span>
                      <PriceIndicator range={biz.price_range} />
                      <span>{cat?.name}</span>
                      {biz.is_verified && (
                        <span className="flex items-center gap-1 text-fuchsia-400">
                          <Shield className="w-3 h-3" />
                          Geverifieerd
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Compare by category */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">
              Vergelijk per categorie
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Escorts", slug: "escorts", count: placeholderBusinesses.filter(b => b.category_slugs.includes("escorts")).length },
                { name: "Clubs", slug: "clubs", count: placeholderBusinesses.filter(b => b.category_slugs.includes("clubs")).length },
                { name: "Massage", slug: "erotische-massage", count: placeholderBusinesses.filter(b => b.category_slugs.includes("erotische-massage")).length },
                { name: "Saunaclubs", slug: "saunaclubs", count: placeholderBusinesses.filter(b => b.category_slugs.includes("saunaclubs")).length },
              ].map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categorieen/${cat.slug}`}
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all group"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {cat.count} bedrijven
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-fuchsia-400 transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
