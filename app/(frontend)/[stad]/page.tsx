import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Building2,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  BookOpen,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { CityCard } from "@/components/ui/CityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
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
  getNearbyCities,
  provinceSlug,
} from "@/lib/data";
import {
  getPlaceholderBusinessesByCity,
  getPlaceholderReviewsByBusiness,
  getBusinessCountByCity,
  formatTimeAgo,
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
  const hasContent = bizCount > 0;

  const title = hasContent
    ? `Escort, parenclub & massage ${city.name} — ${bizCount} reviews`
    : `Erotische diensten in ${city.name}, ${city.province}`;

  const description = hasContent
    ? `${bizCount} escorts, parenclubs, erotische massage en seksclubs in ${city.name}. Lees echte reviews en vergelijk beoordelingen, prijzen en sfeer per bedrijf.`
    : `Overzicht van erotische diensten in ${city.name}, ${city.province}. Escorts, clubs en massage met reviews zodra bedrijven zich hebben aangemeld.`;

  return {
    title,
    description,
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `/${city.slug}`,
      type: "website",
      locale: "nl_NL",
      images: [{ url: `/cities/${city.slug}.jpg`, width: 1200, height: 630, alt: `${city.name} stadsaanzicht` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/cities/${city.slug}.jpg`],
    },
    // Non-featured cities without businesses: noindex
    robots:
      !hasContent && !city.featured
        ? { index: false, follow: true }
        : { index: true, follow: true },
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

  const faqItems = [
    {
      question: `Welke erotische diensten zijn er in ${city.name}?`,
      answer: `In ${city.name} vind je een breed aanbod: escorts en escortbureaus, parenclubs en seksclubs, erotische massagesalons, privehuizen en in sommige gevallen raamprostitutie. Op deze pagina zie je alle bedrijven per categorie met reviews, prijsindicatie en openingstijden.`,
    },
    {
      question: `Wat kost een bezoek aan een sekswerker in ${city.name}?`,
      answer: `Prijzen varieren per categorie: escorts in ${city.name} liggen tussen 150 en 300 euro per uur, een privehuis kost 50-80 euro voor 30 minuten, een erotische massage vanaf 80 euro en een clubavond 30-100 euro entree. Filter op prijsrange voor specifieke opties.`,
    },
    {
      question: `Zijn de bedrijven in ${city.name} legaal?`,
      answer: `Ja. Alle bedrijven op Eroplein in ${city.name} werken binnen de Nederlandse wet en beschikken over een gemeentelijke vergunning of zijn ingeschreven als zelfstandige onder de Wet regulering sekswerk. Geverifieerde bedrijven herken je aan het shield-badge.`,
    },
    {
      question: `Hoe kies ik het beste bedrijf in ${city.name}?`,
      answer: `Gebruik reviews als leidraad: bedrijven met meerdere gedetailleerde beoordelingen (geen generieke eenregelaars) en een gemiddelde boven 4.0 zijn doorgaans betrouwbaar. Check of het bedrijf geverifieerd is, of fotos echt lijken, en bel eventueel vooraf voor aanvullende vragen.`,
    },
    {
      question: `Zijn er ook erotische diensten in de buurt van ${city.name}?`,
      answer: `Ja. Onderaan deze pagina vind je ${city.name}'s buurtsteden met eigen aanbod. ${nearbyCities.length > 0 ? `Populaire buren zijn ${nearbyCities.slice(0, 3).map((c) => c.name).join(", ")}.` : ""}`,
    },
  ];

  const activeCategories = categories.filter(
    (cat) => businesses.filter((b) => b.category_slugs.includes(cat.slug)).length > 0
  );

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Steden", url: "/steden" },
    {
      name: city.province,
      url: `/provincie/${provinceSlug(city.province)}`,
    },
    { name: city.name, url: `/${city.slug}` },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Steden", href: "/steden" },
              { label: city.province, href: `/provincie/${provinceSlug(city.province)}` },
              { label: city.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.province}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Escort, parenclub & massage in{" "}
              <span className="text-fuchsia-400">{city.name}</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {businesses.length > 0
                ? `${businesses.length} vergunde bedrijven in ${city.name} met echte bezoekersreviews. Vergelijk escorts, parenclubs, erotische massagesalons en meer op basis van beoordeling, prijs en sfeer.`
                : `${city.name} staat op Eroplein genoteerd met ${city.population.toLocaleString("nl-NL")} inwoners in ${city.province}. Bedrijven kunnen zich hier aanmelden; op dit moment worden nog bedrijven verzameld.`}
            </p>
            {city.featured && (
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href={`/${city.slug}/gids`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-sm font-medium text-fuchsia-300 hover:bg-fuchsia-500/20 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Complete stadsgids {city.name}
                </Link>
              </div>
            )}
          </div>

          {/* SEO intro copy */}
          <section className="mb-16 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                {city.name} is met {city.population.toLocaleString("nl-NL")} inwoners een van de grotere
                plaatsen in {city.province} en heeft een eigen aanbod aan legale
                erotische dienstverlening. Van gerenommeerde escortbureaus en
                knusse privehuizen tot bekende parenclubs: op Eroplein vind je alles
                overzichtelijk per categorie. Elk bedrijf op deze pagina is
                geverifieerd op vergunning of KVK-registratie, zodat je met
                vertrouwen kunt kiezen.
              </p>
              <p>
                Reviews zijn de kern van ons platform. Bezoekers delen wat ze
                werkelijk hebben meegemaakt — de sfeer, het personeel, de prijs-kwaliteit, en eventuele verrassingen. Filter op hoogst beoordeeld
                om direct de top-opties in {city.name} te zien, of kies voor sortering
                op afstand als je snel dichtbij wilt vinden. Bij sommige bedrijven
                zie je al reacties van eigenaren — een teken dat ze klantervaring
                serieus nemen.
              </p>
            </div>
          </section>

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
                    <div className="text-2xl font-bold text-white">{activeCategories.length}</div>
                    <div className="text-xs text-gray-400">Categorieen</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories in this city */}
          {activeCategories.length > 0 && (
            <section className="mb-20">
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Categorieen in{" "}
                  <span className="text-fuchsia-400">{city.name}</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {activeCategories.map((cat) => {
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
          )}

          {/* Popular Businesses */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Best beoordeelde bedrijven in {city.name}
              </h2>
              {businesses.length > 6 && activeCategories[0] && (
                <Link
                  href={`/${city.slug}/${activeCategories[0].slug}`}
                  className="flex items-center gap-1 text-sm text-fuchsia-400 hover:text-fuchsia-300"
                >
                  Bekijk alles <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {businesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses
                  .slice()
                  .sort((a, b) => b.average_rating - a.average_rating)
                  .slice(0, 6)
                  .map((biz) => (
                    <BusinessCard key={biz.id} business={biz} />
                  ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
                <p className="text-gray-400 mb-4">
                  Nog geen bedrijven aangemeld in {city.name}.
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
                <h2 className="text-2xl md:text-3xl font-bold text-white">
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

          {/* FAQ */}
          <section className="mb-20 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Veelgestelde vragen over {city.name}
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
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Steden in de buurt van {city.name}
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

      {/* Schema */}
      <JsonLd
        data={breadcrumbListSchema(breadcrumbs)}
        id="ld-breadcrumb"
      />
      <JsonLd
        data={collectionPageSchema({
          name: `Erotische diensten in ${city.name}`,
          description: `Vergelijk ${businesses.length} bedrijven in ${city.name} op basis van echte reviews, prijs en sfeer.`,
          url: `/${city.slug}`,
          breadcrumbs,
        })}
        id="ld-collection"
      />
      {businesses.length > 0 && (
        <JsonLd
          data={itemListSchema(
            businesses.slice(0, 10).map((b) => ({
              name: b.name,
              url: `/${b.city_slug}/${b.primary_category}/${b.slug}`,
              description: b.short_description,
              image: b.image_url,
            })),
            `Bedrijven in ${city.name}`
          )}
          id="ld-itemlist"
        />
      )}
      <JsonLd
        data={faqPageSchema(
          faqItems.map((f) => ({ question: f.question, answer: f.answer }))
        )}
        id="ld-faq"
      />

      <Footer />
    </>
  );
}
