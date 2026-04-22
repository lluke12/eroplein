import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getPublishedGuides } from "@/lib/guides-data";

export const revalidate = 3600; // ISR — elk uur check op nieuwe publicaties

export const metadata: Metadata = {
  title: "Gidsen — alles over escorts, clubs & massage in Nederland",
  description:
    "Praktische gidsen over de Nederlandse erotische branche: prijzen, wetgeving, etiquette, verschillen tussen categorieen en tips voor beginners. Geschreven door experts.",
  alternates: { canonical: "/gids" },
  openGraph: {
    title: "Gidsen op Eroplein",
    description:
      "Alles wat je wilt weten over escorts, parenclubs, raamprostitutie en meer: prijzen, regels, etiquette.",
    url: "/gids",
    type: "website",
    locale: "nl_NL",
    siteName: "Eroplein",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gidsen op Eroplein",
    description:
      "Alles wat je wilt weten over escorts, parenclubs, raamprostitutie en meer.",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GidsOverviewPage() {
  const guides = getPublishedGuides();
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Gids", url: "/gids" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Gids" }]} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-fuchsia-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Gidsen & informatie
              </h1>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              {guides.length} diepgaande gidsen over de Nederlandse erotische
              branche. Van wat een escort kost tot wat je kunt verwachten bij
              een eerste parenclub-bezoek. Geschreven om vragen eerlijk en
              zonder taboe te beantwoorden.
            </p>
          </div>

          {/* SEO intro */}
          <section className="mb-12">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                Deze gidsen zijn bedoeld als objectieve ingang: geen
                verkoopverhaal, geen tut-tutten, wel feiten en context. We
                gebruiken echte prijsranges uit de markt, verwijzen naar
                relevante wet- en regelgeving, en leggen concepten uit zonder
                ze mooier te maken dan ze zijn. Als bezoeker weet je wat je
                kunt verwachten. Als sekswerker of bedrijf weet je wat jouw
                klant verwacht.
              </p>
            </div>
          </section>

          {/* Guide cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/gids/${guide.slug}`}
                className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-6 group block hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {guide.relatedCategoryLabel && (
                    <span className="px-2.5 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-xs font-medium text-fuchsia-400">
                      {guide.relatedCategoryLabel}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readingTime} min
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors leading-snug">
                  {guide.title}
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {guide.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Bijgewerkt {formatDate(guide.updatedAt)}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-fuchsia-400 font-medium">
                    Lees meer
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: "Gidsen & informatie",
          description:
            "Praktische gidsen over escorts, parenclubs, raamprostitutie en meer in Nederland.",
          url: "/gids",
          breadcrumbs,
        })}
        id="ld-collection"
      />
      <JsonLd
        data={itemListSchema(
          guides.map((g) => ({
            name: g.title,
            url: `/gids/${g.slug}`,
            description: g.excerpt,
          })),
          "Eroplein gidsen"
        )}
        id="ld-itemlist"
      />

      <Footer />
    </>
  );
}
