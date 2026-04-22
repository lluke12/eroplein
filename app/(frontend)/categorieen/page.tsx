import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getCategories } from "@/lib/data";
import { getBusinessCountByCategory } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Categorieen — alle typen erotische diensten in Nederland",
  description:
    "Alle 8 categorieen op Eroplein: escorts, parenclubs, erotische massage, seksclubs, privehuizen, stripclubs, saunaclubs en raamprostitutie. Per categorie filter je op stad en lees je reviews.",
  alternates: { canonical: "/categorieen" },
  openGraph: {
    title: "Categorieen — alle typen erotische diensten in Nederland",
    description:
      "Alle 8 categorieen op Eroplein: escorts, parenclubs, massage, seksclubs, privehuizen en meer.",
    url: "/categorieen",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Categorieen — alle typen erotische diensten in Nederland",
    description:
      "Alle 8 categorieen op Eroplein: escorts, parenclubs, massage en meer.",
  },
};

export default function CategorieenPage() {
  const categories = getCategories();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Categorieen", url: "/categorieen" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Categorieen" }]} />

          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Blader door
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Alle{" "}
              <span className="text-fuchsia-400">categorieen</span> op Eroplein
            </h1>
            <p className="text-lg text-gray-400">
              Acht categorieen dekken de complete breedte van de Nederlandse
              erotische branche. Per categorie lees je reviews, vergelijk je
              prijzen en vind je bedrijven in jouw stad.
            </p>
          </div>

          {/* SEO intro */}
          <section className="mb-16 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                Eroplein deelt de erotische branche op in acht duidelijke
                categorieen om het zoeken simpel te houden. Wil je gezelschap bij
                jou thuis of in een hotel? Dan zoek je in escorts. Ben je op zoek
                naar een huiselijke setting met meerdere dames op een adres?
                Kies privehuizen. Voor intieme fysieke ontspanning is erotische
                massage de juiste ingang; voor een avond uit met je partner
                bezoek je een parenclub.
              </p>
              <p>
                Elke categoriepagina geeft uitleg over de essentie: wat
                onderscheidt een seksclub van een parenclub, wat bedoelen we
                met FKK-stijl bij saunaclubs, en waarom is body-to-body iets
                anders dan tantra. We beschrijven prijsranges, etiquette en de
                juridische context per type. Vervolgens zie je alle bedrijven
                gesorteerd op reviewscore en kun je filteren per stad.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const count = getBusinessCountByCategory(cat.slug);
              return (
                <div key={cat.slug} className="flex flex-col">
                  <CategoryCard category={cat} listingCount={count} />
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed px-2">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Category index links for deep indexing */}
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Snelzoeken per categorie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categorieen/${cat.slug}`}
                  className="flex items-center justify-between p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all group"
                >
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {cat.singular || cat.name} in Nederland
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {getBusinessCountByCategory(cat.slug)} bedrijven in heel NL
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: "Alle categorieen op Eroplein",
          description:
            "Acht categorieen: escorts, parenclubs, erotische massage, seksclubs, privehuizen, stripclubs, saunaclubs en raamprostitutie.",
          url: "/categorieen",
          breadcrumbs,
        })}
        id="ld-collection"
      />
      <JsonLd
        data={itemListSchema(
          categories.map((c) => ({
            name: c.name,
            url: `/categorieen/${c.slug}`,
            description: c.description,
          })),
          "Eroplein categorieen"
        )}
        id="ld-itemlist"
      />

      <Footer />
    </>
  );
}
