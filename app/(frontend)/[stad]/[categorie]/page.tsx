import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  SlidersHorizontal,
  Star,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { CityCard } from "@/components/ui/CityCard";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
  faqPageSchema,
} from "@/components/ui/JsonLd";
import {
  getCities,
  getCityBySlug,
  getCategories,
  getCategoryBySlug,
  getNearbyCities,
  formatCategoryTitle,
  formatCategoryDescription,
  provinceSlug,
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

  const businesses = getPlaceholderBusinessByCityAndCategory(
    city.slug,
    category.slug
  );
  const count = businesses.length;
  const hasContent = count > 0;

  const title = formatCategoryTitle(category, city.name, count);
  const description = formatCategoryDescription(category, city.name, count);
  const url = `/${city.slug}/${category.slug}`;

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
      images: [{ url: `/cities/${city.slug}.jpg`, width: 1200, height: 630, alt: `${category.name} in ${city.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/cities/${city.slug}.jpg`],
    },
    // Pages without any listings: noindex to prevent thin-content penalty
    robots: hasContent
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function CategoriePage({ params }: CategoriePageProps) {
  const { stad, categorie } = await params;
  const city = getCityBySlug(stad);
  const category = getCategoryBySlug(categorie);

  if (!city || !category) notFound();

  const nearbyCities = getNearbyCities(city.slug, 6);
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

  const sortedBusinesses = businesses
    .slice()
    .sort(
      (a, b) =>
        b.average_rating - a.average_rating ||
        b.review_count - a.review_count
    );

  const searchTerm = category.search_term || category.name.toLowerCase();
  const singular = category.singular || category.name;
  const introCopy =
    category.intro_copy ||
    `${category.description} Op deze pagina zie je alle ${category.name.toLowerCase()} in ${city.name}.`;

  const faqBase = category.faq_questions || [];
  const cityFaqItems = [
    {
      q: `Hoeveel ${searchTerm}-opties zijn er in ${city.name}?`,
      a:
        businesses.length > 0
          ? `Op Eroplein vind je op dit moment ${businesses.length} ${category.name.toLowerCase()} in ${city.name}, gesorteerd op reviewscore. Het aanbod breidt uit zodra nieuwe bedrijven zich aanmelden.`
          : `Voor ${city.name} staan momenteel geen ${category.name.toLowerCase()} op Eroplein. Check naburige steden of voeg zelf een bedrijf toe.`,
    },
    {
      q: `Wat is de beste ${singular.toLowerCase()} in ${city.name}?`,
      a: `De best beoordeelde ${category.name.toLowerCase()} in ${city.name} wordt bepaald door het gemiddelde van alle reviews en het aantal beoordelingen. Sorteer op 'Best beoordeeld' bovenaan deze pagina voor de actuele ranking.`,
    },
    ...faqBase.map((f) => ({ q: f.q, a: f.a })),
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Steden", url: "/steden" },
    { name: city.province, url: `/provincie/${provinceSlug(city.province)}` },
    { name: city.name, url: `/${city.slug}` },
    { name: category.name, url: `/${city.slug}/${category.slug}` },
  ];

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              {singular}{" "}
              <span className="text-fuchsia-400">{city.name}</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {businesses.length > 0
                ? `${businesses.length} ${category.name.toLowerCase()} in ${city.name} met echte bezoekersreviews. Vergelijk op beoordeling, prijs en sfeer.`
                : category.description}
            </p>
          </div>

          {/* Intro SEO copy */}
          <section className="mb-12 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>{introCopy}</p>
              {category.long_intro && (
                <p>
                  {category.long_intro.split("\n\n")[0]}
                </p>
              )}
            </div>
          </section>

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
            {sortedBusinesses.length > 0 ? (
              <>
                <h2 className="sr-only">
                  {businesses.length} {category.name.toLowerCase()} in {city.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedBusinesses.map((biz) => (
                    <BusinessCard key={biz.id} business={biz} />
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.03] flex items-center justify-center">
                  <Star className="w-8 h-8 text-white/10" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Nog geen {category.name.toLowerCase()} in {city.name}
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Op dit moment staan er geen {category.name.toLowerCase()} in
                  onze database voor {city.name}. Check{" "}
                  {nearbyCities.length > 0
                    ? `naburige steden als ${nearbyCities.slice(0, 2).map((c) => c.name).join(" of ")}`
                    : "andere steden"}
                  , of meld zelf een bedrijf aan.
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

          {/* Lange intro tekst */}
          {category.long_intro && (
            <section className="mb-20 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Over {category.name.toLowerCase()} in {city.name}
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
                {category.long_intro.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {/* Same category in nearby cities */}
          {nearbyCities.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {category.name} in de buurt van {city.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {nearbyCities.map((nearCity) => (
                  <Link
                    key={nearCity.slug}
                    href={`/${nearCity.slug}/${category.slug}`}
                    className="rounded-2xl p-5 group cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-fuchsia-400" />
                      <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                        {nearCity.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400">
                      {category.name} in {nearCity.name}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Other categories in this city */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Andere categorieen in {city.name}
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
                    {cat.name} in {city.name}
                  </Link>
                ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Veelgestelde vragen over {category.name.toLowerCase()} in {city.name}
            </h2>
            <div className="space-y-3">
              {cityFaqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 open:bg-white/[0.04] transition-colors"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-base font-semibold text-white pr-4">
                      {item.q}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-fuchsia-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Schema */}
      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: `${category.name} in ${city.name}`,
          description: formatCategoryDescription(
            category,
            city.name,
            businesses.length
          ),
          url: `/${city.slug}/${category.slug}`,
          breadcrumbs,
        })}
        id="ld-collection"
      />
      {sortedBusinesses.length > 0 && (
        <JsonLd
          data={itemListSchema(
            sortedBusinesses.map((b) => ({
              name: b.name,
              url: `/${b.city_slug}/${b.primary_category}/${b.slug}`,
              description: b.short_description,
              image: b.image_url,
            })),
            `${category.name} in ${city.name}`
          )}
          id="ld-itemlist"
        />
      )}
      <JsonLd
        data={faqPageSchema(
          cityFaqItems.map((f) => ({ question: f.q, answer: f.a }))
        )}
        id="ld-faq"
      />

      <Footer />
    </>
  );
}
