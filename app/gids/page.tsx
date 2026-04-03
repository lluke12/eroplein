import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { guides } from "@/lib/guides-data";

export const metadata: Metadata = {
  title: "Gidsen & Informatie | Eroplein",
  description:
    "Praktische gidsen over escorts, parenclubs, raamprostitutie en meer. Prijzen, regels, etiquette en tips voor beginners in Nederland.",
  alternates: { canonical: "/gids" },
  openGraph: {
    title: "Gidsen & Informatie | Eroplein",
    description:
      "Praktische gidsen over escorts, parenclubs, raamprostitutie en meer. Prijzen, regels, etiquette en tips voor beginners.",
    url: "/gids",
    type: "website",
    locale: "nl_NL",
    siteName: "Eroplein",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gidsen & Informatie | Eroplein",
    description:
      "Praktische gidsen over escorts, parenclubs, raamprostitutie en meer. Prijzen, regels, etiquette en tips voor beginners in Nederland.",
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
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Gidsen
              </h1>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Praktische informatie en gidsen over de erotische industrie in
              Nederland. Van prijzen en regels tot etiquette en tips voor
              beginners.
            </p>
          </div>

          {/* Guide cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/gids/${guide.slug}`}
                className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-6 group block"
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Gidsen & Informatie",
            description:
              "Praktische gidsen over escorts, parenclubs, raamprostitutie en meer in Nederland.",
            url: "https://eroplein.com/gids",
            publisher: {
              "@type": "Organization",
              name: "Eroplein",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: guides.map((guide, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://eroplein.com/gids/${guide.slug}`,
                name: guide.title,
              })),
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
