import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Star, Building2, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BusinessCard } from "@/components/ui/BusinessCard";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
  faqPageSchema,
} from "@/components/ui/JsonLd";
import {
  getCategories,
  getCategoryBySlug,
  getCities,
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

  const singular = category.singular || category.name;
  const count = getBusinessCountByCategory(category.slug);

  const title = `${singular} Nederland — ${count} adressen met reviews`;
  const description = `${singular} in Nederland: ${count} bedrijven in 48 steden met echte bezoekersreviews. Vergelijk prijzen, sfeer en beoordelingen per locatie.`;
  const url = `/categorieen/${category.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "nl_NL",
    },
    twitter: { card: "summary_large_image", title, description },
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
    .sort(
      (a, b) =>
        b.average_rating - a.average_rating || b.review_count - a.review_count
    )
    .slice(0, 6);

  const citiesWithBusinesses = allCities
    .map((city) => ({
      ...city,
      count: getPlaceholderBusinessByCityAndCategory(city.slug, category.slug).length,
    }))
    .sort((a, b) => b.count - a.count);

  const activeCities = citiesWithBusinesses.filter((c) => c.count > 0);
  const otherCities = citiesWithBusinesses.filter((c) => c.count === 0);
  const totalCount = getBusinessCountByCategory(category.slug);

  const singular = category.singular || category.name;
  const faqItems = (category.faq_questions || []).map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Categorieen", url: "/categorieen" },
    { name: category.name, url: `/categorieen/${category.slug}` },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Categorieen", href: "/categorieen" },
              { label: category.name },
            ]}
          />

          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Categorie
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              {singular} in{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400">
              {category.description}
            </p>
          </div>

          {/* SEO intro copy */}
          {category.intro_copy && (
            <section className="mb-16 max-w-3xl">
              <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
                <p>{category.intro_copy}</p>
              </div>
            </section>
          )}

          {/* Stats */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-fuchsia-400/60" />
              <span className="text-sm text-white/60">
                {totalCount} bedrijven
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-fuchsia-400/60" />
              <span className="text-sm text-white/60">
                {categoryBusinesses.length > 0
                  ? (
                      categoryBusinesses.reduce(
                        (s, b) => s + b.average_rating,
                        0
                      ) / categoryBusinesses.length
                    ).toFixed(1)
                  : "0"}{" "}
                gem. score
              </span>
            </div>
          </div>

          {/* Top businesses in this category */}
          {topBusinesses.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Best beoordeelde {category.name.toLowerCase()} van Nederland
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topBusinesses.map((biz) => (
                  <BusinessCard key={biz.id} business={biz} />
                ))}
              </div>
            </section>
          )}

          {/* Cities with this category */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Kies een stad voor {category.name.toLowerCase()}
            </h2>

            {activeCities.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-fuchsia-400/80 mb-4">
                  Steden met aanbod
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
                          {singular} {city.name}
                        </h4>
                        <p className="text-xs text-fuchsia-400/60 mt-0.5">
                          {city.count}{" "}
                          {city.count === 1 ? "bedrijf" : "bedrijven"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-4">
                Overige steden (voeg zelf bedrijven toe)
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

          {/* Long intro content */}
          {category.long_intro && (
            <section className="mb-20 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Over {category.name.toLowerCase()} in Nederland
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
                {category.long_intro.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {faqItems.length > 0 && (
            <section className="mb-20 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Veelgestelde vragen over {category.name.toLowerCase()}
              </h2>
              <div className="space-y-3">
                {faqItems.map((item, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 open:bg-white/[0.04] transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-base font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-fuchsia-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/faq/${category.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300"
                >
                  Meer veelgestelde vragen over {category.name.toLowerCase()}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          )}

          {/* Other categories */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Andere categorieen op Eroplein
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

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: `${singular} in Nederland`,
          description: category.description,
          url: `/categorieen/${category.slug}`,
          breadcrumbs,
        })}
        id="ld-collection"
      />
      {topBusinesses.length > 0 && (
        <JsonLd
          data={itemListSchema(
            topBusinesses.map((b) => ({
              name: b.name,
              url: `/${b.city_slug}/${b.primary_category}/${b.slug}`,
              description: b.short_description,
              image: b.image_url,
            })),
            `Top ${category.name} Nederland`
          )}
          id="ld-itemlist"
        />
      )}
      {faqItems.length > 0 && (
        <JsonLd data={faqPageSchema(faqItems)} id="ld-faq" />
      )}

      <Footer />
    </>
  );
}
