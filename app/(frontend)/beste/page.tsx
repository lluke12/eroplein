import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getPublishedLandingPages } from "@/lib/landing-pages-data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Beste van Nederland — rankinglijsten per stad & categorie",
  description:
    "De best beoordeelde bedrijven per stad en categorie op Eroplein: beste escortbureaus, parenclubs, massage en meer in Amsterdam, Rotterdam, Utrecht en de rest van Nederland.",
  alternates: { canonical: "/beste" },
  openGraph: {
    title: "Beste van Nederland — Eroplein rankings",
    description:
      "De best beoordeelde bedrijven per stad en categorie. Vergelijkingen, top-10 lijsten, reviews.",
    url: "/beste",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste van Nederland — Eroplein rankings",
    description:
      "De best beoordeelde bedrijven per stad en categorie op Eroplein.",
  },
};

export default function BesteOverviewPage() {
  const pages = getPublishedLandingPages();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Beste", url: "/beste" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Beste" }]} />

          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-fuchsia-400" />
              </div>
              <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase">
                Rankings
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Beste van{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400">
              Gefilterde ranglijsten per stad en categorie, gebaseerd op echte
              reviews. Perfect voor wie snel de beste opties wil zien zonder
              alle bedrijfspagina's door te spitten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/beste/${page.slug}`}
                className="group rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all"
              >
                <Trophy className="w-5 h-5 text-fuchsia-400/60 mb-4" />
                <h2 className="text-lg font-semibold text-white group-hover:text-fuchsia-300 transition-colors mb-2 leading-snug">
                  {page.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {page.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-fuchsia-400 font-medium">
                  Bekijk ranglijst
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: "Beste van Nederland — Eroplein",
          description:
            "Gefilterde ranglijsten per stad en categorie op basis van Eroplein-reviews.",
          url: "/beste",
          breadcrumbs,
        })}
        id="ld-collection"
      />
      <JsonLd
        data={itemListSchema(
          pages.map((p) => ({
            name: p.title,
            url: `/beste/${p.slug}`,
            description: p.metaDescription,
          })),
          "Eroplein rankings"
        )}
        id="ld-itemlist"
      />

      <Footer />
    </>
  );
}
