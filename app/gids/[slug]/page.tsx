import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ChevronRight,
  ArrowRight,
  List,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { guides, getGuideBySlug, getRelatedGuides } from "@/lib/guides-data";
import { TableOfContents } from "./TableOfContents";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      locale: "nl_NL",
      siteName: "Eroplein",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    alternates: {
      canonical: `https://eroplein.com/gids/${guide.slug}`,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.trim() === "") return null;

    // Bold text within paragraphs
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    return (
      <p key={i} className="text-gray-400 leading-relaxed mb-4">
        {rendered}
      </p>
    );
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide.relatedGuides);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: "Eroplein",
    },
    publisher: {
      "@type": "Organization",
      name: "Eroplein",
      url: "https://eroplein.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eroplein.com/gids/${guide.slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Gids", href: "/gids" },
                { label: guide.title },
              ]}
            />
          </div>

          <div className="flex gap-12">
            {/* Main content */}
            <div className="max-w-4xl flex-1 min-w-0">
              {/* Header */}
              <div className="mb-10">
                {guide.relatedCategoryLabel && (
                  <span className="inline-block px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400 mb-6">
                    {guide.relatedCategoryLabel}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                  {guide.title}
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {guide.excerpt}
                </p>
                <div className="flex items-center gap-6 pb-8 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {formatDate(guide.updatedAt)}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {guide.readingTime} min leestijd
                  </div>
                </div>
              </div>

              {/* Mobile table of contents */}
              <div className="lg:hidden mb-10">
                <div className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <List className="w-4 h-4 text-fuchsia-400" />
                    <h3 className="text-sm font-semibold text-white">
                      Inhoudsopgave
                    </h3>
                  </div>
                  <nav>
                    <ol className="space-y-2">
                      {guide.sections.map((section, i) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="flex items-start gap-3 text-sm text-gray-400 hover:text-fuchsia-400 transition-colors"
                          >
                            <span className="text-gray-600 font-medium mt-px">
                              {i + 1}.
                            </span>
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </div>

              {/* Content sections */}
              <div className="mb-16">
                {guide.sections.map((section) => (
                  <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    {renderContent(section.content)}
                  </section>
                ))}
              </div>

              {/* CTA */}
              {guide.relatedCategory && (
                <div className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-8 mb-16">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {guide.relatedCategoryLabel} vinden bij jou in de buurt
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Bekijk onze directory met eerlijke reviews en ervaringen van
                    echte bezoekers in meer dan 42 steden.
                  </p>
                  <Link
                    href={`/categorieen/${guide.relatedCategory}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-500 text-white text-sm font-medium rounded-full hover:bg-fuchsia-600 transition-colors"
                  >
                    Bekijk {guide.relatedCategoryLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Related guides */}
              {relatedGuides.length > 0 && (
                <section className="border-t border-white/[0.06] pt-12">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Gerelateerde gidsen
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {relatedGuides.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/gids/${related.slug}`}
                        className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-5 group block"
                      >
                        {related.relatedCategoryLabel && (
                          <span className="inline-block px-2.5 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400 mb-3">
                            {related.relatedCategoryLabel}
                          </span>
                        )}
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-1 mt-4 text-sm text-fuchsia-400 font-medium">
                          Lees meer
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Back link */}
              <div className="mt-12">
                <Link
                  href="/gids"
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-fuchsia-400 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Terug naar alle gidsen
                </Link>
              </div>
            </div>

            {/* Desktop sidebar table of contents */}
            <TableOfContents sections={guide.sections} />
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Footer />
    </>
  );
}
