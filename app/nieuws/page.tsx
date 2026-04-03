import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { placeholderArticles } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Nieuws",
  description:
    "Het laatste nieuws en updates over de erotische scene in Nederland. Tips, guides en trending onderwerpen.",
  alternates: { canonical: "/nieuws" },
  openGraph: {
    title: "Nieuws",
    description:
      "Het laatste nieuws en updates over de erotische scene in Nederland. Tips, guides en trending onderwerpen.",
    url: "/nieuws",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nieuws",
    description:
      "Het laatste nieuws en updates over de erotische scene in Nederland. Tips, guides en trending onderwerpen.",
  },
};

export default function NieuwsPage() {
  const featured = placeholderArticles[0];
  const rest = placeholderArticles.slice(1);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Nieuws" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Laatste updates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Nieuws &{" "}
              <span className="text-fuchsia-400">artikelen</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Het laatste nieuws, tips en guides over de scene in Nederland.
            </p>
          </div>

          {/* Featured article */}
          <Link
            href={`/nieuws/${featured.slug}`}
            className="block rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all mb-10 group"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-pink-900/40" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400">
                    Uitgelicht
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.published_at}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-xs font-medium">
                      {featured.author_initial}
                    </div>
                    <span className="text-sm text-white/70">{featured.author_name}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.reading_time} min
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/nieuws/${article.slug}`}
                className="block rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all group overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-pink-900/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.author_name}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.reading_time} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
