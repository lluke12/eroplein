import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CityCard } from "@/components/ui/CityCard";
import {
  getCities,
  getCityBySlug,
  getCategories,
  getCategoryBySlug,
  getNearbyCities,
} from "@/lib/data";

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
    title: `${category.name} in ${city.name}`,
    description: `Beste ${category.name.toLowerCase()} in ${city.name}. ${category.description} Lees ervaringen en reviews.`,
  };
}

export default async function CategoriePage({ params }: CategoriePageProps) {
  const { stad, categorie } = await params;
  const city = getCityBySlug(stad);
  const category = getCategoryBySlug(categorie);

  if (!city || !category) notFound();

  const nearbyCities = getNearbyCities(city.slug, 4);

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
          <div className="mb-16">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.name}, {city.province}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              {category.name} in{" "}
              <span className="text-fuchsia-400">
                {city.name}
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Listings placeholder */}
          <section className="mb-20">
            <div className="glass-card rounded-2xl p-12 text-center">
              <p className="text-gray-500 mb-4">
                Nog geen {category.name.toLowerCase()} gevonden in {city.name}.
              </p>
              <Link
                href="/claim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium hover:brightness-110 transition-all"
              >
                Voeg je bedrijf toe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* SEO: Other categories in this city */}
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
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
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
                    className="glass-card rounded-2xl p-5 group cursor-pointer block"
                  >
                    <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {nearCity.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
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
