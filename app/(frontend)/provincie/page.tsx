import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Building2, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/components/ui/JsonLd";
import { getCities } from "@/lib/data";
import { getBusinessCountByCity } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Provincies — escorts, clubs & massage per regio in Nederland",
  description:
    "Vind escorts, parenclubs, erotische massage en meer per Nederlandse provincie. Overzicht van 12 provincies, 48 steden en 200+ bedrijven.",
  alternates: { canonical: "/provincie" },
  openGraph: {
    title: "Alle provincies op Eroplein",
    description:
      "Per provincie de beste bedrijven en reviews. Noord-Holland, Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en meer.",
    url: "/provincie",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alle provincies op Eroplein",
    description: "Per provincie de beste bedrijven en reviews in Nederland.",
  },
};

interface ProvinceInfo {
  name: string;
  slug: string;
  cityCount: number;
  businessCount: number;
  totalPopulation: number;
}

function getProvinceSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export default function ProvinciesPage() {
  const cities = getCities();

  // Groepeer steden per provincie en bereken stats
  const provinceMap = new Map<string, ProvinceInfo>();

  for (const city of cities) {
    const slug = getProvinceSlug(city.province);
    const existing = provinceMap.get(city.province);
    const businessCount = getBusinessCountByCity(city.slug);

    if (existing) {
      existing.cityCount += 1;
      existing.businessCount += businessCount;
      existing.totalPopulation += city.population;
    } else {
      provinceMap.set(city.province, {
        name: city.province,
        slug,
        cityCount: 1,
        businessCount: businessCount,
        totalPopulation: city.population,
      });
    }
  }

  const provinces = Array.from(provinceMap.values()).sort(
    (a, b) => b.businessCount - a.businessCount || b.cityCount - a.cityCount
  );

  const totalBusinesses = provinces.reduce((sum, p) => sum + p.businessCount, 0);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Provincies" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Per regio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Provincies in{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Ontdek het erotisch aanbod per provincie. {provinces.length} provincies,{" "}
              {cities.length} steden en {totalBusinesses}+ bedrijven door heel Nederland.
            </p>
          </div>

          {/* Province grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/provincie/${province.slug}`}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {province.name}
                    </h2>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      <span className="text-sm text-white/40">
                        {province.cityCount} {province.cityCount === 1 ? "stad" : "steden"}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-fuchsia-400 transition-colors mt-1" />
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-fuchsia-400/60" />
                    <span className="text-sm text-white/50">
                      {province.businessCount} bedrijven
                    </span>
                  </div>
                  <div className="text-sm text-white/30">
                    {(province.totalPopulation / 1000).toFixed(0)}k inwoners
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SEO tekst */}
          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Erotisch aanbod per Nederlandse provincie
            </h2>
            <div className="text-base text-gray-400 leading-relaxed space-y-4">
              <p>
                Nederland telt twaalf provincies, elk met een eigen karakter en
                aanbod op het gebied van sekswerk en erotische diensten. In
                Noord-Holland en Zuid-Holland ligt het zwaartepunt met
                Amsterdam, Rotterdam, Den Haag en Utrecht als grote centra. Hier
                vind je de meest diverse mix: raamprostitutie, luxe escortbureaus,
                bekende parenclubs en gerenommeerde massagesalons.
              </p>
              <p>
                Noord-Brabant is een uitgesproken clubregio met saunaclubs rond
                Eindhoven, Tilburg en de regio Kerkdriel. Limburg kent een
                Duits-georienteerde clubscene dicht bij de grens (Venlo,
                Maastricht). Gelderland en Overijssel bieden een rustiger
                aanbod met privehuizen en zelfstandige escorts, en in Friesland,
                Drenthe en Groningen zijn het vooral Leeuwarden en Groningen-stad
                waar het aanbod zich concentreert.
              </p>
              <p>
                Op elke provinciepagina vind je de aangesloten steden, het totaal
                aantal bedrijven en een overzicht per categorie. Klik door naar
                stad voor reviews en details.
              </p>
            </div>
          </div>
        </div>
      </main>

      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", url: "/" },
          { name: "Provincies", url: "/provincie" },
        ])}
        id="ld-breadcrumb"
      />
      <JsonLd
        data={collectionPageSchema({
          name: "Provincies op Eroplein",
          description:
            "Overzicht van alle Nederlandse provincies met erotische diensten en reviews.",
          url: "/provincie",
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Provincies", url: "/provincie" },
          ],
        })}
        id="ld-collection"
      />
      <JsonLd
        data={itemListSchema(
          provinces.map((p) => ({
            name: p.name,
            url: `/provincie/${p.slug}`,
            description: `${p.cityCount} steden met ${p.businessCount} bedrijven in ${p.name}.`,
          })),
          "Provincies Nederland"
        )}
        id="ld-itemlist"
      />

      <Footer />
    </>
  );
}
