import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Star, Building2 } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BusinessCard } from "@/components/ui/BusinessCard";
import {
  getCategories,
  getCategoryBySlug,
  getCities,
  getCityBySlug,
} from "@/lib/data";
import {
  getPlaceholderBusinessesByCategory,
  getPlaceholderBusinessByCityAndCategory,
  getBusinessCountByCategory,
} from "@/lib/placeholder-data";

interface CategoryDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCategories().map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: CategoryDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} in Nederland`,
    description: `${category.description} Vind de beste ${category.name.toLowerCase()} in heel Nederland met eerlijke reviews en ervaringen.`,
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const allCities = getCities();
  const categoryBusinesses = getPlaceholderBusinessesByCategory(category.slug);
  const topBusinesses = [...categoryBusinesses]
    .sort((a, b) => b.average_rating - a.average_rating || b.review_count - a.review_count)
    .slice(0, 6);

  // Group cities by whether they have businesses
  const citiesWithBusinesses = allCities
    .map((city) => ({
      ...city,
      count: getPlaceholderBusinessByCityAndCategory(city.slug, category.slug).length,
    }))
    .sort((a, b) => b.count - a.count);

  const activeCities = citiesWithBusinesses.filter((c) => c.count > 0);
  const otherCities = citiesWithBusinesses.filter((c) => c.count === 0);
  const totalCount = getBusinessCountByCategory(category.slug);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Categorieën", href: "/categorieen" },
              { label: category.name },
            ]}
          />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Categorie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              {category.name} in{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-fuchsia-400/60" />
              <span className="text-sm text-white/60">{totalCount} bedrijven</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-fuchsia-400/60" />
              <span className="text-sm text-white/60">
                {categoryBusinesses.length > 0
                  ? (
                      categoryBusinesses.reduce((s, b) => s + b.average_rating, 0) /
                      categoryBusinesses.length
                    ).toFixed(1)
                  : "0"}{" "}
                gem. score
              </span>
            </div>
          </div>

          {/* Top businesses in this category */}
          {topBusinesses.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8">
                Best beoordeelde {category.name.toLowerCase()}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topBusinesses.map((biz) => (
                  <BusinessCard key={biz.id} business={biz} />
                ))}
              </div>
            </section>
          )}

          {/* Cities with this category - active first */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Kies een stad
            </h2>

            {activeCities.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-fuchsia-400/80 mb-4">
                  Steden met {category.name.toLowerCase()}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {activeCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}/${category.slug}`}
                      className="flex items-center justify-between p-4 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 hover:bg-fuchsia-500/10 transition-all group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                          {city.name}
                        </h4>
                        <p className="text-xs text-fuchsia-400/60 mt-0.5">
                          {city.count} {city.count === 1 ? "bedrijf" : "bedrijven"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-4">
                Alle steden
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                {otherCities
                  .sort((a, b) => b.population - a.population)
                  .map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}/${category.slug}`}
                      className="px-3 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-center text-xs text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          {/* Other categories */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">
              Andere categorieën
            </h2>
            <div className="flex flex-wrap gap-3">
              {getCategories()
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categorieen/${cat.slug}`}
                    className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
                  >
                    {cat.name}
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
