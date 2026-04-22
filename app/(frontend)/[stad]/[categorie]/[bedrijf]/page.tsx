import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Star,
  Phone,
  Globe,
  Shield,
  Clock,
  ThumbsUp,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { StarRating } from "@/components/ui/StarRating";
import {
  JsonLd,
  breadcrumbListSchema,
  localBusinessSchema,
  faqPageSchema,
} from "@/components/ui/JsonLd";
import { getCityBySlug, getCategoryBySlug, provinceSlug } from "@/lib/data";
import {
  placeholderBusinesses,
  getPlaceholderBusinessBySlug,
  getPlaceholderReviewsByBusiness,
  getPlaceholderBusinessesByCity,
  formatTimeAgo,
} from "@/lib/placeholder-data";

interface BedrijfPageProps {
  params: Promise<{ stad: string; categorie: string; bedrijf: string }>;
}

export async function generateStaticParams() {
  return placeholderBusinesses.map((b) => ({
    stad: b.city_slug,
    categorie: b.primary_category,
    bedrijf: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: BedrijfPageProps): Promise<Metadata> {
  const { stad, bedrijf } = await params;
  const city = getCityBySlug(stad);
  const business = getPlaceholderBusinessBySlug(bedrijf);

  if (!city || !business) return {};

  const reviewText =
    business.review_count > 0
      ? `${business.review_count} reviews · ${business.average_rating.toFixed(1)}/5`
      : "ervaringen & info";

  const title = `${business.name} ${city.name} — ${reviewText}`;
  const description = business.review_count > 0
    ? `${business.short_description} Lees ${business.review_count} eerlijke reviews over ${business.name} in ${city.name} met gemiddelde score ${business.average_rating.toFixed(1)}/5.`
    : `${business.short_description} Informatie, openingstijden en contactgegevens van ${business.name} in ${city.name}.`;
  const url = `/${city.slug}/${business.primary_category}/${business.slug}`;
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
      images: business.image_url
        ? [{ url: business.image_url, width: 1200, height: 630, alt: `${business.name} in ${city.name}` }]
        : [{ url: `/cities/${city.slug}.jpg`, width: 1200, height: 630, alt: `${business.name} in ${city.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: business.image_url ? [business.image_url] : [`/cities/${city.slug}.jpg`],
    },
  };
}

export default async function BedrijfPage({ params }: BedrijfPageProps) {
  const { stad, categorie, bedrijf } = await params;
  const city = getCityBySlug(stad);
  const category = getCategoryBySlug(categorie);
  const business = getPlaceholderBusinessBySlug(bedrijf);

  if (!city || !category || !business) notFound();

  const similarBusinesses = getPlaceholderBusinessesByCity(city.slug)
    .filter(
      (b) =>
        b.id !== business.id &&
        b.category_slugs.some((c) => business.category_slugs.includes(c))
    )
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: city.province, url: `/provincie/${provinceSlug(city.province)}` },
    { name: city.name, url: `/${city.slug}` },
    { name: category.name, url: `/${city.slug}/${category.slug}` },
    {
      name: business.name,
      url: `/${city.slug}/${category.slug}/${business.slug}`,
    },
  ];

  const businessFaqItems = [
    {
      question: `Waar is ${business.name} gevestigd?`,
      answer: `${business.name} is gevestigd op ${business.address}${business.postal_code ? `, ${business.postal_code}` : ""} in ${city.name}, ${city.province}.`,
    },
    {
      question: `Wat kost een bezoek bij ${business.name}?`,
      answer: `${business.name} valt in prijsklasse ${"€".repeat(business.price_range)} (${business.price_range === 1 ? "budget" : business.price_range === 2 ? "gemiddeld" : business.price_range === 3 ? "bovengemiddeld" : "luxe"}). Voor exacte tarieven en aanbiedingen bel je rechtstreeks of bezoek je de website.`,
    },
    {
      question: `Moet ik reserveren bij ${business.name}?`,
      answer: `Reservering wordt aanbevolen, zeker in het weekend. Veel ${category.name.toLowerCase()}-locaties in ${city.name} werken zowel op afspraak als walk-in. Bel ${business.phone || "het bedrijf"} voor beschikbaarheid.`,
    },
    {
      question: `Is ${business.name} geverifieerd?`,
      answer: business.is_verified
        ? `Ja. ${business.name} is door het Eroplein-team geverifieerd op vergunning en KVK-registratie. Bedrijven met status 'Geverifieerd' werken binnen het Nederlandse wettelijke kader voor sekswerk.`
        : `${business.name} staat op Eroplein maar is nog niet volledig geverifieerd. Check zelf of een vergunning aanwezig is voordat je boekt.`,
    },
  ];

  const reviews = getPlaceholderReviewsByBusiness(business.id);
  const avgRating = business.average_rating;

  // Rating distribution (placeholder)
  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: city.name, href: `/${city.slug}` },
              {
                label: category.name,
                href: `/${city.slug}/${category.slug}`,
              },
              { label: business.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400">
                    {category.name}
                  </span>
                  {business.is_verified && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-medium text-emerald-400">
                      <Shield className="w-3 h-3" />
                      Geverifieerd
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-3">
                  {business.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {business.address}, {city.name}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400" />
                    <span className="text-fuchsia-400 font-semibold">
                      {avgRating.toFixed(1)}
                    </span>
                    <span>({business.review_count} reviews)</span>
                  </div>
                  <div className="text-sm">
                    {"€".repeat(business.price_range)}
                    <span className="text-gray-500">
                      {"€".repeat(4 - business.price_range)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
                {business.image_url ? (
                  <Image
                    src={business.image_url}
                    alt={`${business.name} — ${category.name.toLowerCase()} in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-pink-900/40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114]/60 to-transparent" />
              </div>

              {/* Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Over {business.name}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {business.description}
                </p>
              </section>

              {/* Reviews Section */}
              <section>
                <div className="flex items-end justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    Reviews ({business.review_count})
                  </h2>
                  <Link
                    href="/schrijf-review"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium hover:brightness-110 transition-all"
                  >
                    Schrijf review
                  </Link>
                </div>

                {/* Rating Overview */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left">
                      <div className="text-5xl font-bold text-fuchsia-400 mb-2">
                        {avgRating.toFixed(1)}
                      </div>
                      <StarRating rating={Math.round(avgRating)} size="md" />
                      <p className="text-sm text-gray-400 mt-2">
                        Gebaseerd op {business.review_count} reviews
                      </p>
                    </div>
                    <div className="space-y-2">
                      {ratingDistribution.map((item) => (
                        <div
                          key={item.stars}
                          className="flex items-center gap-3"
                        >
                          <span className="text-sm text-gray-400 w-3">
                            {item.stars}
                          </span>
                          <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
                          <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-fuchsia-500 hover:bg-fuchsia-600 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 w-10 text-right">
                            {item.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      timeAgo={formatTimeAgo(review.created_at)}
                    />
                  ))}
                </div>

                {reviews.length === 0 && (
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
                    <p className="text-gray-400 mb-4">
                      Nog geen reviews voor {business.name}.
                    </p>
                    <Link
                      href="/schrijf-review"
                      className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium transition-colors"
                    >
                      Wees de eerste om een review te schrijven
                    </Link>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Contact Card */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-5">
                    Contactgegevens
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/80">
                          {business.address}
                        </p>
                        <p className="text-xs text-gray-400">
                          {business.postal_code} {city.name}
                        </p>
                      </div>
                    </div>
                    {business.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <a
                          href={`tel:${business.phone}`}
                          className="text-sm text-white/80 hover:text-fuchsia-400 transition-colors"
                        >
                          {business.phone}
                        </a>
                      </div>
                    )}
                    {business.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/80 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                        >
                          Website bezoeken
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-5">
                    Statistieken
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400" />
                        <span className="text-sm font-semibold text-fuchsia-400">
                          {avgRating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Reviews</span>
                      <span className="text-sm text-white/80">
                        {business.review_count}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Prijsklasse</span>
                      <span className="text-sm text-white/80">
                        {"€".repeat(business.price_range)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Status</span>
                      <span className="text-sm text-white/80">
                        {business.is_verified ? "Geverifieerd" : "Niet geverifieerd"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                  <p className="text-sm text-gray-400 mb-4">
                    Is dit jouw bedrijf?
                  </p>
                  <Link
                    href="/claim"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-fuchsia-500/30 text-sm font-medium text-fuchsia-400 hover:bg-fuchsia-500/10 transition-all"
                  >
                    Claim deze pagina
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="max-w-3xl mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Veelgestelde vragen over {business.name}
            </h2>
            <div className="space-y-3">
              {businessFaqItems.map((item, idx) => (
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

          {/* Similar businesses */}
          {similarBusinesses.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Vergelijkbare {category.name.toLowerCase()} in {city.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarBusinesses.map((biz) => (
                  <BusinessCard key={biz.id} business={biz} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Schema */}
      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={localBusinessSchema({
          name: business.name,
          description: business.description || business.short_description,
          url: `/${city.slug}/${category.slug}/${business.slug}`,
          image: business.image_url,
          address: {
            street: business.address,
            locality: city.name,
            postalCode: business.postal_code,
            region: city.province,
          },
          phone: business.phone,
          priceRange: "€".repeat(business.price_range),
          ...(business.review_count > 0 && {
            aggregateRating: {
              ratingValue: business.average_rating,
              reviewCount: business.review_count,
            },
          }),
          ...(reviews.length > 0 && {
            reviews: reviews.slice(0, 5).map((r) => ({
              author: r.user_display_name,
              reviewRating: r.rating,
              datePublished: r.created_at,
              reviewBody: r.content,
            })),
          }),
        })}
        id="ld-localbusiness"
      />
      <JsonLd
        data={faqPageSchema(
          businessFaqItems.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))
        )}
        id="ld-faq"
      />

      <Footer />
    </>
  );
}
