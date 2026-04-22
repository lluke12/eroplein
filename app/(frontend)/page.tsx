import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Star,
  Shield,
  Users,
  TrendingUp,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SearchBar } from "@/components/ui/SearchBar";
import { CityCard } from "@/components/ui/CityCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  JsonLd,
  websiteSchema,
  organizationSchema,
  faqPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getFeaturedCities, getCities, getCategories } from "@/lib/data";
import {
  placeholderReviews,
  placeholderArticles,
  placeholderBusinesses,
  formatTimeAgo,
  getTopRatedBusinesses,
  getRecentReviews,
  getBusinessCountByCity,
  getBusinessCountByCategory,
} from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title:
    "Eroplein — Reviews escorts, parenclubs & massage in Nederland",
  description:
    "Nederlands #1 reviewplatform voor escorts, parenclubs, erotische massage, seksclubs en privehuizen. Vergelijk 48 steden met echte bezoekersreviews.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Eroplein — Reviews escorts, parenclubs & massage in Nederland",
    description:
      "Eerlijke reviews en ervaringen over 200+ bedrijven in 48 Nederlandse steden. Vergelijk op beoordeling, prijs en sfeer.",
    url: "/",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Eroplein — Reviews escorts, parenclubs & massage in Nederland",
    description:
      "Eerlijke reviews en ervaringen over 200+ bedrijven in 48 Nederlandse steden.",
  },
};

const HOMEPAGE_FAQ = [
  {
    question: "Wat is Eroplein?",
    answer:
      "Eroplein is een onafhankelijk Nederlands reviewplatform voor de erotische branche. Je vindt er escorts, parenclubs, seksclubs, erotische massagesalons, privehuizen, stripclubs, seksshops en saunaclubs, overzichtelijk per stad. Bij elk bedrijf lees je echte reviews van bezoekers, zie je prijsindicatie en huisregels, en kun je zelf een ervaring delen.",
  },
  {
    question: "Zijn de reviews op Eroplein echt?",
    answer:
      "Ja. We hanteren strikte moderatie: elke review wordt handmatig gecontroleerd voor publicatie. We filteren copy-paste content, beledigende taal en overduidelijk valse claims. Reviewers behouden hun anonimiteit, maar moeten een verifieerbaar e-mailadres gebruiken. We leggen niet uit waarom een review wordt geweigerd, maar publiceren alleen wat de community-standaard haalt.",
  },
  {
    question: "Is een bezoek aan de bedrijven op Eroplein legaal?",
    answer:
      "Alle bedrijven in onze database opereren binnen de Nederlandse wet. Escortbureaus, seksclubs en privehuizen hebben een gemeentelijke vergunning; raamwerkers en zelfstandige escorts werken onder de Wet regulering sekswerk. Voor bezoekers vanaf 18 jaar is het gebruik van deze diensten legaal in Nederland. Eroplein vermeldt bij elk bedrijf of de vergunning is geverifieerd.",
  },
  {
    question: "Kan ik anoniem een review schrijven?",
    answer:
      "Ja. Je gebruikt een gebruikersnaam naar keuze (geen echte naam vereist) en alleen je e-mailadres voor verificatie. Dat e-mailadres publiceren we niet, delen we niet en gebruiken we niet voor marketing. Moderatoren zien het alleen ter voorkoming van spam of herhaaldelijke misbruik.",
  },
  {
    question: "In welke steden vind ik bedrijven op Eroplein?",
    answer:
      "We dekken 48 Nederlandse steden, van Amsterdam, Rotterdam, Utrecht en Den Haag tot kleinere plaatsen als Middelburg, Emmen en Leeuwarden. Iedere stad heeft een eigen hubpagina met alle geregistreerde bedrijven, een korte stadsgids en links naar naburige steden.",
  },
  {
    question: "Hoe voeg ik mijn bedrijf toe?",
    answer:
      "Op de pagina Adverteren of via een claimverzoek op je bedrijfspagina. Claimen is gratis en geeft je toegang tot het aanpassen van openingstijden, prijzen, foto's en reageren op reviews. Voor premium plaatsing (hogere positionering, extra foto's, contactformulier) hebben we een advertentiepakket.",
  },
];

const POPULAR_SEARCHES = [
  { label: "Escort Amsterdam", href: "/amsterdam/escorts" },
  { label: "Parenclub Amsterdam", href: "/amsterdam/clubs" },
  { label: "Erotische massage Rotterdam", href: "/rotterdam/erotische-massage" },
  { label: "Seksclub Utrecht", href: "/utrecht/clubs" },
  { label: "Privehuis Den Haag", href: "/den-haag/privehuizen" },
  { label: "Saunaclub Eindhoven", href: "/eindhoven/saunaclubs" },
  { label: "Escort Groningen", href: "/groningen/escorts" },
  { label: "Stripclub Amsterdam", href: "/amsterdam/stripclubs" },
  { label: "Raamprostitutie Amsterdam", href: "/amsterdam/ramen" },
  { label: "Parenclub Brabant", href: "/provincie/noord-brabant" },
  { label: "Escort Tilburg", href: "/tilburg/escorts" },
  { label: "Seksshop Amsterdam", href: "/amsterdam/seksshops" },
];

export default function HomePage() {
  const featuredCities = getFeaturedCities();
  const allCities = getCities();
  const categories = getCategories();
  const topBusinesses = getTopRatedBusinesses(6);
  const recentReviews = getRecentReviews(4);

  const citiesItemList = itemListSchema(
    featuredCities.map((c) => ({
      name: c.name,
      url: `/${c.slug}`,
      description: `Erotische diensten in ${c.name}, ${c.province}.`,
    })),
    "Populaire steden"
  );

  const categoriesItemList = itemListSchema(
    categories.map((c) => ({
      name: c.name,
      url: `/categorieen/${c.slug}`,
      description: c.description,
    })),
    "Categorieen"
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] font-bold tracking-tight mb-6">
              <span className="text-white">Reviews </span>
              <span className="text-fuchsia-400">escorts</span>
              <span className="text-white">, </span>
              <span className="text-fuchsia-400">parenclubs</span>
              <br />
              <span className="text-white">& massage in </span>
              <span className="text-fuchsia-400">Nederland</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
              Eerlijke ervaringen van echte bezoekers over escortbureaus,
              seksclubs, parenclubs, erotische massage, privehuizen en meer in
              48 Nederlandse steden.
            </p>

            <SearchBar cities={allCities} />

            {/* Quick Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categorieen/${cat.slug}`}
                  className="tag-pill px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-white/40 cursor-pointer hover:text-fuchsia-300"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {placeholderBusinesses.length}+
              </div>
              <div className="text-sm text-gray-400 mt-1">Bedrijven</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {allCities.length}
              </div>
              <div className="text-sm text-gray-400 mt-1">Steden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {categories.length}
              </div>
              <div className="text-sm text-gray-400 mt-1">Categorieen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fuchsia-400">
                100%
              </div>
              <div className="text-sm text-gray-400 mt-1">Geverifieerd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / SEO block */}
      <section className="relative z-10 py-16 md:py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            Het grootste Nederlandse reviewplatform voor de erotische branche
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
            <p>
              Eroplein is opgericht om klanten, sekswerkers en bedrijven samen
              te brengen in een transparante omgeving. Waar veel oudere
              platformen leunen op anonieme advertenties, draaien wij om echte
              reviews: bezoekers delen hun ervaring, bedrijven kunnen reageren,
              en toekomstige gasten maken een geinformeerde keuze. Elke review
              wordt gemodereerd voor publicatie, elk bedrijf wordt geverifieerd
              op geldigheid van vergunning of KVK-registratie.
            </p>
            <p>
              We dekken acht categorieen die samen de breedte van de Nederlandse
              erotische branche vormen: escorts en escortbureaus, privehuizen en
              relaxhuizen, parenclubs en seksclubs, erotische massagesalons,
              raamprostitutie, seksshops en erotiekwinkels, stripclubs en
              gentlemen's clubs, en FKK-stijl saunaclubs. Per stad filter je op
              categorie en prijsklasse, sorteer je op beoordeling of afstand, en
              lees je wat andere bezoekers daadwerkelijk beleefden.
            </p>
            <p>
              Nederland kent sinds 2000 een legaal kader voor sekswerk, verder
              aangescherpt door de Wet regulering sekswerk (WRS). Voor klanten
              betekent dit dat diensten via vergunde bedrijven of
              geregistreerde zelfstandigen legaal af te nemen zijn vanaf 18
              jaar. Eroplein moedigt aan om specifiek te kiezen voor vergunde
              locaties: je krijgt dan gegarandeerd veilige omstandigheden, en
              je draagt bij aan een gereguleerde branche waarin sekswerkers
              beter beschermd zijn.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Zo werkt het"
            title="In 3 stappen naar de"
            highlight="beste keuze"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center">
                <Search className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Zoek & vergelijk
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Zoek op stad of categorie en vergelijk bedrijven op basis van
                reviews, prijs en score.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Lees ervaringen
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Lees eerlijke reviews van echte bezoekers. Met voor- en nadelen,
                scores en foto's.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Kies met vertrouwen
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Maak een weloverwogen keuze op basis van de community.
                Geverifieerde bedrijven herken je aan het badge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Businesses */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Trending nu"
            title="Best beoordeelde"
            highlight="bedrijven"
            href="/reviews"
            linkText="Bekijk alle reviews"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBusinesses.map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="relative z-10 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Ontdek per stad"
            title="Populaire"
            highlight="steden"
            href="/steden"
            linkText="Bekijk alle steden"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredCities.map((city) => (
              <CityCard
                key={city.slug}
                city={city}
                businessCount={getBusinessCountByCity(city.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Blader door"
            title="Alle"
            highlight="categorieen"
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                listingCount={getBusinessCountByCategory(cat.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News + Reviews Split */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Latest News */}
            <div className="lg:col-span-7">
              <SectionHeader
                label="Laatste nieuws"
                title="Nieuws &"
                highlight="updates"
                href="/nieuws"
                linkText="Alle artikelen"
              />

              {placeholderArticles[0] && (
                <Link
                  href={`/nieuws/${placeholderArticles[0].slug}`}
                  className="rounded-2xl overflow-hidden group cursor-pointer mb-6 block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-pink-900/40" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400">
                          Trending
                        </span>
                        <span className="text-xs text-gray-400">
                          {placeholderArticles[0].published_at}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-fuchsia-300 transition-colors leading-snug">
                        {placeholderArticles[0].title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {placeholderArticles[0].excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-xs font-medium">
                          {placeholderArticles[0].author_initial}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/80">
                            {placeholderArticles[0].author_name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {placeholderArticles[0].reading_time} min leestijd
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Small News Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {placeholderArticles.slice(1).map((article) => (
                  <Link
                    key={article.id}
                    href={`/nieuws/${article.slug}`}
                    className="rounded-2xl p-5 group cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-400">
                        {article.tags[1] || article.tags[0]}
                      </span>
                      <span className="text-xs text-gray-400">
                        {article.published_at}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Recent Reviews */}
            <div className="lg:col-span-5">
              <SectionHeader
                label="Community"
                title="Recente"
                highlight="reviews"
              />
              <div className="space-y-4">
                {recentReviews.map((review) => {
                  const biz = placeholderBusinesses.find(
                    (b) => b.id === review.business_id
                  );
                  return (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      businessName={biz?.name}
                      timeAgo={formatTimeAgo(review.created_at)}
                    />
                  );
                })}
              </div>
              <Link
                href="/reviews"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/[0.06] text-sm font-medium text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all group"
              >
                Bekijk alle reviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular searches / quick links */}
      <section className="relative z-10 py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-6">
            Populaire zoekopdrachten op Eroplein
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all group"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Veelgestelde vragen
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Alles wat je wilt weten over Eroplein
            </h2>
          </div>
          <div className="space-y-4">
            {HOMEPAGE_FAQ.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 open:bg-white/[0.04] transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-fuchsia-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300"
            >
              Bekijk alle veelgestelde vragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-fuchsia-600" />
            <div className="relative px-8 py-14 md:px-16 md:py-16 text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Deel jouw ervaring
              </h2>
              <p className="text-base text-white/70 max-w-lg mx-auto mb-8">
                Schrijf een review en help anderen de juiste keuze te maken.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/schrijf-review"
                  className="px-8 py-4 bg-white text-fuchsia-600 rounded-full font-semibold text-base hover:bg-white/90 shadow-xl shadow-black/20 transition-all active:scale-95"
                >
                  Schrijf een Review
                </Link>
                <Link
                  href="/claim"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-all active:scale-95"
                >
                  Voeg bedrijf toe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <JsonLd data={websiteSchema()} id="ld-website" />
      <JsonLd data={organizationSchema()} id="ld-organization" />
      <JsonLd
        data={faqPageSchema(
          HOMEPAGE_FAQ.map((f) => ({ question: f.question, answer: f.answer }))
        )}
        id="ld-faq"
      />
      <JsonLd data={citiesItemList} id="ld-cities" />
      <JsonLd data={categoriesItemList} id="ld-categories" />

      <Footer />
    </>
  );
}
