import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal, Star } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { CityCard } from "@/components/ui/CityCard";
import {
  getCities,
  getCityBySlug,
  getCategories,
  getCategoryBySlug,
  getNearbyCities,
} from "@/lib/data";
import {
  getPlaceholderBusinessByCityAndCategory,
  getPlaceholderBusinessesByCategory,
  getBusinessCountByCity,
} from "@/lib/placeholder-data";

interface CategoriePageProps {
  params: Promise<{ stad: string; categorie: string }>;
}

export async function generateStaticParams() {
  const cities = getCities();
  const categories = getCategories();

  return cities.flatMap((city) =>
    categories.map((cat) => ({
      stad: city.slug,
      categorie: cat.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: CategoriePageProps): Promise<Metadata> {
  const { stad, categorie } = await params;
  const city = getCityBySlug(stad);
  const category = getCategoryBySlug(categorie);
  if (!city || !category) return {};

  return {
    title: `${category.name} ${city.name} - Reviews & Ervaringen`,
    description: `Beste ${category.name.toLowerCase()} in ${city.name}. Vergelijk beoordelingen, lees eerlijke reviews en vind de beste ${category.name.toLowerCase()} bij jou in de buurt.`,
    alternates: { canonical: `https://eroplein.com/${city.slug}/${category.slug}` },
  };
}

export default async function CategoriePage({ params }: CategoriePageProps) {
  const { stad, categorie } = await params;
  const city = getCityBySlug(stad);
  const category = getCategoryBySlug(categorie);

  if (!city || !category) notFound();

  const nearbyCities = getNearbyCities(city.slug, 4);
  const businesses = getPlaceholderBusinessByCityAndCategory(
    city.slug,
    category.slug
  );
  const allCategoryBusinesses = getPlaceholderBusinessesByCategory(
    category.slug
  );
  const otherCityBusinesses = allCategoryBusinesses.filter(
    (b) => b.city_slug !== city.slug
  );

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Steden", href: "/steden" },
              { label: city.name, href: `/${city.slug}` },
              { label: category.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.name}, {city.province}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              {category.name} in{" "}
              <span className="text-fuchsia-400">{city.name}</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-white/50">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </div>
            <button className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-sm text-fuchsia-400">
              Alle
            </button>
            <button className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/40 hover:text-white/60 transition-colors">
              Geverifieerd
            </button>
            <button className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/40 hover:text-white/60 transition-colors">
              Best beoordeeld
            </button>
            <button className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/40 hover:text-white/60 transition-colors">
              Meest reviews
            </button>
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-400">
              <span>{businesses.length} resultaten</span>
            </div>
          </div>

          {/* Listings */}
          <section className="mb-20">
            {businesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses
                  .sort(
                    (a, b) =>
                      b.average_rating - a.average_rating ||
                      b.review_count - a.review_count
                  )
                  .map((biz) => (
                    <BusinessCard key={biz.id} business={biz} />
                  ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.03] flex items-center justify-center">
                  <Star className="w-8 h-8 text-white/10" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Nog geen {category.name.toLowerCase()} in {city.name}
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Wees de eerste die een {category.name.toLowerCase()} toevoegt
                  in {city.name} en help anderen de juiste keuze te maken.
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

          {/* Same category in other cities */}
          {otherCityBusinesses.length > 0 && (
            <section className="mb-20">
              <h2 className="text-xl font-semibold text-white mb-6">
                {category.name} in andere steden
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherCityBusinesses.slice(0, 3).map((biz) => (
                  <BusinessCard key={biz.id} business={biz} />
                ))}
              </div>
            </section>
          )}

          {/* Other categories in this city */}
          <section className="mb-20">
            <h2 className="text-xl font-semibold text-white mb-6">
              Andere categorieën in {city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {getCategories()
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${city.slug}/${cat.slug}`}
                    className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>
          </section>

          {/* Same category in nearby cities */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-white mb-6">
                {category.name} in de buurt
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyCities.map((nearCity) => (
                  <Link
                    key={nearCity.slug}
                    href={`/${nearCity.slug}/${category.slug}`}
                    className="rounded-2xl p-5 group cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                  >
                    <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {nearCity.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {category.name} in {nearCity.name}
                    </p>
                  </Link>
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
