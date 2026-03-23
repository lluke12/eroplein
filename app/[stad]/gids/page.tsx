import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Car,
  CreditCard,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Map,
  List,
  HelpCircle,
  Building2,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { CityCard } from "@/components/ui/CityCard";
import { getCityBySlug, getCategories, getNearbyCities } from "@/lib/data";
import {
  getPlaceholderBusinessesByCity,
  getBusinessCountByCity,
} from "@/lib/placeholder-data";
import {
  getCityGuide,
  FEATURED_GUIDE_SLUGS,
} from "@/lib/city-guides-data";

interface GidsPageProps {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return FEATURED_GUIDE_SLUGS.map((slug) => ({ stad: slug }));
}

export async function generateMetadata({
  params,
}: GidsPageProps): Promise<Metadata> {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  const guide = getCityGuide(stad);
  if (!city || !guide) return {};

  const title = `${city.name} Erotische Gids - Alles Wat Je Moet Weten`;
  const description = `Complete gids voor erotisch uitgaan in ${city.name}. Bekende gebieden, categorieën, praktische tips en meer. Ontdek alles over ${city.name}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Eroplein`,
      description,
      type: "article",
      locale: "nl_NL",
      siteName: "Eroplein",
    },
    alternates: {
      canonical: `https://eroplein.com/${city.slug}/gids`,
    },
  };
}

// Table of contents sections
const tocItems = [
  { id: "introductie", label: "Introductie", icon: BookOpen },
  { id: "gebieden", label: "Bekende gebieden", icon: Map },
  { id: "categorieen", label: "Categorieën", icon: List },
  { id: "bedrijven", label: "Populaire bedrijven", icon: Building2 },
  { id: "praktisch", label: "Praktische info", icon: Car },
  { id: "tips", label: "Tips voor bezoekers", icon: Lightbulb },
  { id: "faq", label: "Veelgestelde vragen", icon: HelpCircle },
  { id: "steden", label: "Steden in de buurt", icon: Users },
];

export default async function GidsPage({ params }: GidsPageProps) {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  const guide = getCityGuide(stad);

  if (!city || !guide) notFound();

  const categories = getCategories();
  const businesses = getPlaceholderBusinessesByCity(city.slug);
  const nearbyCities = getNearbyCities(city.slug, 6);
  const topBusinesses = [...businesses]
    .sort((a, b) => b.average_rating - a.average_rating)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${city.name} Erotische Gids - Alles Wat Je Moet Weten`,
    description: `Complete gids voor erotisch uitgaan in ${city.name}. Bekende gebieden, categorieën, praktische tips en meer.`,
    author: {
      "@type": "Organization",
      name: "Eroplein",
      url: "https://eroplein.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Eroplein",
      url: "https://eroplein.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eroplein.com/${city.slug}/gids`,
    },
    datePublished: "2026-01-01",
    dateModified: "2026-03-23",
    about: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.province,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: city.name, href: `/${city.slug}` },
              { label: "Gids" },
            ]}
          />

          {/* Hero */}
          <header className="mb-16">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.province} -- Stadsgids
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              {city.name}{" "}
              <span className="text-fuchsia-400">Gids</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {guide.heroSubtitle}. Alles wat je moet weten over erotisch
              uitgaan in {city.name}.
            </p>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Inhoudsopgave"
            className="mb-16 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Inhoudsopgave
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tocItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-fuchsia-400 hover:bg-white/[0.04] transition-colors"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Introductie */}
          <section id="introductie" className="mb-20 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-fuchsia-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {guide.introTitle}
              </h2>
            </div>
            <div className="max-w-3xl space-y-4">
              <p className="text-gray-400 leading-relaxed">
                {guide.introText}
              </p>
              {guide.introText2 && (
                <p className="text-gray-400 leading-relaxed">
                  {guide.introText2}
                </p>
              )}
            </div>
          </section>

          {/* Bekende Gebieden */}
          <section id="gebieden" className="mb-20 scroll-mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Map className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Bekende gebieden in{" "}
                <span className="text-fuchsia-400">{city.name}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.bekendGebieden.map((area, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-fuchsia-400" />
                    <h3 className="text-base font-semibold text-white">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Categorieën */}
          <section id="categorieen" className="mb-20 scroll-mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <List className="w-5 h-5 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Categorieën in{" "}
                <span className="text-fuchsia-400">{city.name}</span>
              </h2>
            </div>

            {/* Category quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
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

            {/* Category descriptions */}
            <div className="space-y-4">
              {guide.categorieInfo.map((catInfo, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-white">
                      {catInfo.name}
                    </h3>
                    <Link
                      href={`/${city.slug}/${catInfo.slug}`}
                      className="flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      Bekijk listings
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {catInfo.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Populaire Bedrijven */}
          <section id="bedrijven" className="mb-20 scroll-mt-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-rose-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Populaire bedrijven in {city.name}
                </h2>
              </div>
              <Link
                href={`/${city.slug}`}
                className="hidden md:flex items-center gap-1 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                Bekijk alles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {topBusinesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topBusinesses.map((biz) => (
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

            <div className="mt-6 md:hidden text-center">
              <Link
                href={`/${city.slug}`}
                className="inline-flex items-center gap-1 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                Bekijk alle bedrijven in {city.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Praktische Informatie */}
          <section id="praktisch" className="mb-20 scroll-mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                <Car className="w-5 h-5 text-fuchsia-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Praktische informatie
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-fuchsia-400" />
                  <h3 className="text-sm font-semibold text-white">
                    Bereikbaarheid
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {guide.praktischeInfo.bereikbaarheid}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-semibold text-white">
                    Parkeren
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {guide.praktischeInfo.parkeren}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-pink-400" />
                  <h3 className="text-sm font-semibold text-white">
                    Openingstijden
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {guide.praktischeInfo.openingstijden}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-rose-400" />
                  <h3 className="text-sm font-semibold text-white">
                    Betalen
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {guide.praktischeInfo.betalen}
                </p>
              </div>
            </div>
          </section>

          {/* Tips voor Bezoekers */}
          <section id="tips" className="mb-20 scroll-mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tips voor bezoekers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guide.tips.map((tip, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-fuchsia-500/10 flex items-center justify-center text-xs font-semibold text-fuchsia-400">
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {guide.faq.length > 0 && (
            <section id="faq" className="mb-20 scroll-mt-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Veelgestelde vragen
                </h2>
              </div>
              <div className="space-y-4 max-w-3xl">
                {guide.faq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.question}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Steden in de Buurt */}
          {nearbyCities.length > 0 && (
            <section id="steden" className="mb-20 scroll-mt-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-rose-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Steden in de buurt
                </h2>
              </div>
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

          {/* CTA: Bekijk alle steden gidsen */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ontdek meer steden
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Eroplein heeft gidsen voor de grootste steden van Nederland.
              Bekijk het complete overzicht van alle steden.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/steden"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium transition-colors"
              >
                Alle steden bekijken
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${city.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] hover:bg-white/[0.05] text-white text-sm font-medium transition-colors"
              >
                Terug naar {city.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
