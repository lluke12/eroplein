import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  placeholderArticles,
  getPlaceholderArticleBySlug,
} from "@/lib/placeholder-data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return placeholderArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPlaceholderArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getPlaceholderArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = placeholderArticles.filter((a) => a.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Nieuws", href: "/nieuws" },
              { label: article.title },
            ]}
          />

          {/* Article Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-pink-50 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-6 pb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-sm font-semibold">
                  {article.author_initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">
                    {article.author_name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {article.published_at}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {article.reading_time} min leestijd
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-fuchsia max-w-none mb-16 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-pink-50 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-pink-50 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-gray-400 [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white/90 [&_ol]:text-gray-400 [&_ol]:space-y-2 [&_ul]:text-gray-400 [&_ul]:space-y-2 [&_li]:leading-relaxed">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## "))
                return (
                  <h2 key={i}>{line.replace("## ", "")}</h2>
                );
              if (line.startsWith("### "))
                return (
                  <h3 key={i}>{line.replace("### ", "")}</h3>
                );
              if (line.startsWith("- "))
                return (
                  <p key={i} className="pl-4 border-l-2 border-fuchsia-500/30">
                    {line.replace("- ", "")}
                  </p>
                );
              if (line.match(/^\d+\. \*\*/))
                return (
                  <p key={i}>
                    <strong>{line.replace(/^\d+\. /, "")}</strong>
                  </p>
                );
              if (line.trim() === "") return null;
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* More Articles */}
          {otherArticles.length > 0 && (
            <section className="border-t border-white/[0.06] pt-12">
              <h2 className="text-2xl font-bold text-white mb-8">
                Meer artikelen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.map((other) => (
                  <Link
                    key={other.id}
                    href={`/nieuws/${other.slug}`}
                    className="glass-card rounded-2xl p-5 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-400">
                        {other.tags[0]}
                      </span>
                      <span className="text-xs text-gray-500">
                        {other.published_at}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {other.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/nieuws"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-fuchsia-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Terug naar nieuws
            </Link>
          </div>
        </div>
      </main>

      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            author: {
              "@type": "Person",
              name: article.author_name,
            },
            datePublished: article.published_at,
            publisher: {
              "@type": "Organization",
              name: "Eroplein",
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
