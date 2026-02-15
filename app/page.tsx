import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SearchBar } from "@/components/ui/SearchBar";
import { CityCard } from "@/components/ui/CityCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCities, getCities, getCategories } from "@/lib/data";
import {
  placeholderReviews,
  placeholderArticles,
  placeholderBusinesses,
  formatTimeAgo,
} from "@/lib/placeholder-data";

export default function HomePage() {
  const featuredCities = getFeaturedCities();
  const allCities = getCities();
  const categories = getCategories();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] font-bold tracking-tight mb-6">
              <span className="text-white">Echte </span>
              <span className="text-fuchsia-400">ervaringen</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-white">eerlijke </span>
              <span className="text-fuchsia-400">reviews</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
              Lees ervaringen van echte bezoekers en deel jouw verhaal.
              Escorts, clubs, massage en meer in 42+ steden.
            </p>

            {/* Search Bar */}
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
                2.847
              </div>
              <div className="text-sm text-gray-500 mt-1">Bedrijven</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                18.3K
              </div>
              <div className="text-sm text-gray-500 mt-1">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                42
              </div>
              <div className="text-sm text-gray-500 mt-1">Steden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fuchsia-400">
                4.8
              </div>
              <div className="text-sm text-gray-500 mt-1">Gem. Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="relative z-10 py-20 md:py-28">
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
              <CityCard key={city.slug} city={city} />
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
            highlight="categorie&euml;n"
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
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

              {/* Featured Article */}
              <Link
                href={`/nieuws/${placeholderArticles[0].slug}`}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer mb-6 block"
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
                      <span className="text-xs text-gray-500">
                        {placeholderArticles[0].published_at}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-fuchsia-300 transition-colors leading-snug">
                      {placeholderArticles[0].title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
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
                        <p className="text-xs text-gray-500">
                          {placeholderArticles[0].reading_time} min leestijd
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Small News Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {placeholderArticles.slice(1).map((article) => (
                  <Link
                    key={article.id}
                    href={`/nieuws/${article.slug}`}
                    className="glass-card rounded-2xl p-5 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-400">
                        {article.tags[1] || article.tags[0]}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.published_at}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
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
                {placeholderReviews.slice(0, 4).map((review) => {
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
                className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/10 text-sm font-medium text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all group"
              >
                Bekijk alle reviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
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
                  Voeg Bedrijf Toe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
