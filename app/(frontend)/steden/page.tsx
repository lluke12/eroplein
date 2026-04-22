import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CityCard } from "@/components/ui/CityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getCities, provinceSlug } from "@/lib/data";
import { getBusinessCountByCity } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "48 Nederlandse steden — escorts, clubs & massage per stad",
  description:
    "Zoek erotische bedrijven in 48 Nederlandse steden: Amsterdam, Rotterdam, Utrecht, Den Haag, Eindhoven, Groningen en meer. Per stad reviews, prijzen en openingstijden.",
  alternates: { canonical: "/steden" },
  openGraph: {
    title: "Alle steden op Eroplein",
    description:
      "48 Nederlandse steden met escorts, clubs, massage en meer. Lees reviews en vergelijk per stad.",
    url: "/steden",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alle steden op Eroplein",
    description:
      "48 Nederlandse steden met escorts, clubs, massage en meer. Lees reviews en vergelijk per stad.",
  },
};

export default function StedenPage() {
  const cities = getCities();

  const byProvince = cities.reduce<Record<string, typeof cities>>(
    (acc, city) => {
      if (!acc[city.province]) acc[city.province] = [];
      acc[city.province].push(city);
      return acc;
    },
    {}
  );

  const provinces = Object.keys(byProvince).sort();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Steden", url: "/steden" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Steden" }]} />

          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Alle locaties
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Steden in{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400">
              {cities.length} Nederlandse steden, gesorteerd per provincie.
              Elke stad heeft een eigen overzicht met escorts, parenclubs,
              erotische massage en meer, inclusief reviews en prijsindicatie.
            </p>
          </div>

          {/* SEO intro */}
          <section className="mb-16 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                Van wereldbekende uitgaansgebieden in Amsterdam en Rotterdam tot
                intieme regionale clubs in Maastricht en Groningen: Eroplein
                dekt {cities.length} Nederlandse steden. Per stad zie je welke
                categorieen er actief zijn, hoeveel reviews er zijn geschreven
                en welke bedrijven op dit moment het hoogst scoren bij
                bezoekers.
              </p>
              <p>
                Grote steden hebben een breed aanbod in alle acht categorieen;
                middelgrote steden hebben meestal 2-4 actieve categorieen; kleinere
                plaatsen concentreren zich op 1-2 specialisaties (vaak
                escortbureaus en erotische massage). Klik een stad aan voor
                gedetailleerd overzicht of een complete stadsgids bij featured
                steden.
              </p>
            </div>
          </section>

          {/* Featured Cities */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Populaire steden
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cities
                .filter((c) => c.featured)
                .map((city) => (
                  <CityCard
                    key={city.slug}
                    city={city}
                    businessCount={getBusinessCountByCity(city.slug)}
                  />
                ))}
            </div>
          </div>

          {/* All cities by province */}
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Alle steden per provincie
            </h2>
            {provinces.map((province) => (
              <div key={province}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                  <Link
                    href={`/provincie/${provinceSlug(province)}`}
                    className="text-lg font-semibold text-white hover:text-fuchsia-300 transition-colors"
                  >
                    {province}
                  </Link>
                  <span className="text-sm font-normal text-gray-400">
                    {byProvince[province].length} steden
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {byProvince[province]
                    .sort((a, b) => b.population - a.population)
                    .map((city) => (
                      <CityCard
                        key={city.slug}
                        city={city}
                        businessCount={getBusinessCountByCity(city.slug)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: "Alle steden op Eroplein",
          description: `Overzicht van ${cities.length} Nederlandse steden met escorts, parenclubs, massage en andere erotische diensten.`,
          url: "/steden",
          breadcrumbs,
        })}
        id="ld-collection"
      />
      <JsonLd
        data={itemListSchema(
          cities.map((c) => ({
            name: c.name,
            url: `/${c.slug}`,
            description: `${c.province}, ${c.population.toLocaleString("nl-NL")} inwoners`,
          })),
          "Nederlandse steden"
        )}
        id="ld-itemlist"
      />

      <Footer />
    </>
  );
}
