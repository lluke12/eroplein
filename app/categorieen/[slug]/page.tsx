import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CityCard } from "@/components/ui/CityCard";
import { getCategories, getCategoryBySlug, getFeaturedCities } from "@/lib/data";

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

  const featuredCities = getFeaturedCities();

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

          <div className="mb-16">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Categorie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              {category.name} in{" "}
              <span className="text-fuchsia-400">
                Nederland
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Cities with this category */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Kies een stad
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/${category.slug}`}
                  className="glass-card rounded-2xl p-5 group cursor-pointer block text-center"
                >
                  <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.name}
                  </p>
                </Link>
              ))}
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
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
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
