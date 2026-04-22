import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, Trophy } from "lucide-react";
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
  getAllLandings,
  getLandingPageBySlug,
  getRelatedLandingPages,
} from "@/lib/landing-pages-data";
import {
  placeholderBusinesses,
  getPlaceholderBusinessByCityAndCategory,
  getPlaceholderBusinessesByCity,
  getPlaceholderBusinessesByCategory,
} from "@/lib/placeholder-data";

export const revalidate = 3600;

interface LandingProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLandings().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: LandingProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return { robots: { index: false, follow: false } };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/beste/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/beste/${page.slug}`,
      type: "article",
      locale: "nl_NL",
      publishedTime: page.publishedAt,
      modifiedTime: page.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

function getBusinessesForPage(page: ReturnType<typeof getLandingPageBySlug>) {
  if (!page) return [];
  switch (page.filterType) {
    case "city_category":
      if (page.citySlug && page.categorySlug) {
        return getPlaceholderBusinessByCityAndCategory(
          page.citySlug,
          page.categorySlug
        );
      }
      return [];
    case "city":
      return page.citySlug ? getPlaceholderBusinessesByCity(page.citySlug) : [];
    case "category":
      return page.categorySlug
        ? getPlaceholderBusinessesByCategory(page.categorySlug)
        : [];
    case "custom":
      if (page.customBusinessIds) {
        return placeholderBusinesses.filter((b) =>
          page.customBusinessIds!.includes(b.id)
        );
      }
      return [];
    default:
      return [];
  }
}

export default async function LandingPage({ params }: LandingProps) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) notFound();

  const businesses = getBusinessesForPage(page)
    .slice()
    .sort(
      (a, b) =>
        b.average_rating - a.average_rating ||
        b.review_count - a.review_count
    )
    .slice(0, 10);

  const related = getRelatedLandingPages(page.relatedLandings);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Beste", url: "/beste" },
    { name: page.title, url: `/beste/${page.slug}` },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[{ label: "Beste", href: "/beste" }, { label: page.title }]}
          />

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-fuchsia-400" />
              </div>
              <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase">
                Top reviews {new Date().getFullYear()}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {page.intro}
            </p>
          </div>

          {/* Businesses list */}
          {businesses.length > 0 && (
            <section className="mb-16">
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  De top {businesses.length}
                </h2>
                <span className="text-sm text-gray-400">
                  Gesorteerd op reviewscore
                </span>
              </div>
              <div className="space-y-4">
                {businesses.map((biz, i) => (
                  <div
                    key={biz.id}
                    className="grid grid-cols-[60px_1fr] gap-4 items-start"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-xl font-bold text-fuchsia-300">
                      #{i + 1}
                    </div>
                    <BusinessCard business={biz} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Content sections */}
          {page.sections.map((section, idx) => (
            <section key={idx} className="mb-12 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-400 leading-relaxed">{section.body}</p>
            </section>
          ))}

          {/* FAQ */}
          {page.faq.length > 0 && (
            <section className="mb-16 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Veelgestelde vragen
              </h2>
              <div className="space-y-3">
                {page.faq.map((item, idx) => (
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
          )}

          {/* Related landings */}
          {related.length > 0 && (
            <section className="border-t border-white/[0.06] pt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Gerelateerde vergelijkingen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/beste/${r.slug}`}
                    className="group rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all"
                  >
                    <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {r.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-3 text-sm text-fuchsia-400">
                      Bekijk ranglijst
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: page.title,
          description: page.metaDescription,
          url: `/beste/${page.slug}`,
          breadcrumbs,
        })}
        id="ld-collection"
      />
      {businesses.length > 0 && (
        <JsonLd
          data={itemListSchema(
            businesses.map((b) => ({
              name: b.name,
              url: `/${b.city_slug}/${b.primary_category}/${b.slug}`,
              description: b.short_description,
              image: b.image_url,
            })),
            page.title
          )}
          id="ld-itemlist"
        />
      )}
      {page.faq.length > 0 && (
        <JsonLd data={faqPageSchema(page.faq)} id="ld-faq" />
      )}

      <Footer />
    </>
  );
}
