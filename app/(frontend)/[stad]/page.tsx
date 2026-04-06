import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Star, Building2, MessageSquare, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { CityCard } from "@/components/ui/CityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  getCities,
  getCityBySlug,
  getCategories,
  getNearbyCities,
} from "@/lib/data";
import {
  getPlaceholderBusinessesByCity,
  getPlaceholderReviewsByBusiness,
  getBusinessCountByCity,
  getBusinessCountByCategory,
  formatTimeAgo,
  placeholderReviews,
} from "@/lib/placeholder-data";

interface StadPageProps {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return getCities().map((city) => ({ stad: city.slug }));
}

export async function generateMetadata({
  params,
}: StadPageProps): Promise<Metadata> {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  if (!city) return {};

  const bizCount = getPlaceholderBusinessesByCity(stad).length;
  const title = `Erotische diensten in ${city.name} - Reviews & beoordelingen`;
  const description = `Bekijk ${bizCount > 0 ? bizCount + "+ " : ""}escorts, clubs, massage en meer in ${city.name}. Lees eerlijke reviews en ervaringen van echte bezoekers in ${city.name}, ${city.province}.`;
  return {
    title,
    description,
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `/${city.slug}`,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function StadPage({ params }: StadPageProps) {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  if (!city) notFound();

  const categories = getCategories();
  const nearbyCities = getNearbyCities(city.slug, 6);
  const businesses = getPlaceholderBusinessesByCity(city.slug);
  const totalReviews = businesses.reduce((sum, b) => sum + b.review_count, 0);
  const avgRating =
    businesses.length > 0
      ? businesses.reduce((sum, b) => sum + b.average_rating, 0) / businesses.length
      : 0;

  // Get reviews for businesses in this city
  const cityReviews = businesses
    .flatMap((b) =>
      getPlaceholderReviewsByBusiness(b.id).map((r) => ({
        ...r,
        businessName: b.name,
      }))
    )
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Steden", href: "/steden" },
              { label: city.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.province}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Erotische diensten in{" "}
              <span className="text-fuchsia-400">{city.name}</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Ontdek {businesses.length > 0 ? `${businesses.length}+ ` : ""}escorts, clubs, massagesalons en meer in {city.name}, {city.province}. Lees
              eerlijke ervaringen van echte bezoekers en vergelijk beoordelingen.
            </p>
          </div>

          {/* City Stats */}
          {businesses.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{businesses.length}</div>
                    <div className="text-xs text-gray-400">Bedrijven</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{totalReviews}</div>
                    <div className="text-xs text-gray-400">Reviews</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{avgRating.toFixed(1)}</div>
                    <div className="text-xs text-gray-400">Gem. score</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{categories.length}</div>
                    <div className="text-xs text-gray-400">Categorieën</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories in this city */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Categorieën in{" "}
                <span className="text-fuchsia-400">{city.name}</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((cat) => {
                const count = businesses.filter((b) =>
                  b.category_slugs.includes(cat.slug)
                ).length;
                return (
                  <CategoryCard
                    key={cat.slug}
                    category={cat}
                    citySlug={city.slug}
                    listingCount={count}
                  />
                );
              })}
            </div>
          </section>

          {/* Popular Businesses */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Populaire bedrijven
              </h2>
              {businesses.length > 3 && (
                <Link
                  href={`/${city.slug}/escorts`}
                  className="flex items-center gap-1 text-sm text-fuchsia-400 hover:text-fuchsia-300"
                >
                  Bekijk alles <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {businesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses
                  .sort((a, b) => b.average_rating - a.average_rating)
                  .slice(0, 6)
                  .map((biz) => (
                    <BusinessCard key={biz.id} business={biz} />
                  ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
                <p className="text-gray-400 mb-4">
                  Nog geen bedrijven gevonden in {city.name}.
                </p>
                <Link
                  href="/claim"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium transition-all"
                >
                  Voeg je bedrijf toe
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </section>

          {/* Recent Reviews in this city */}
          {cityReviews.length > 0 && (
            <section className="mb-20">
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Recente reviews in {city.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cityReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    businessName={review.businessName}
                    timeAgo={formatTimeAgo(review.created_at)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">
                Steden in de buurt
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {nearbyCities.map((nearCity) => (
                  <CityCard
                    key={nearCity.slug}
                    city={nearCity}
                    businessCount={getBusinessCountByCity(nearCity.slug)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
