import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CityCard } from "@/components/ui/CityCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getCities, getCategories } from "@/lib/data";
import {
  getBusinessCountByCity,
  placeholderBusinesses,
} from "@/lib/placeholder-data";
import type { City } from "@/lib/types";

// ── Province definitions ────────────────────────────────────────────────

interface ProvinceDefinition {
  name: string;
  slug: string;
  neighbors: string[]; // slugs van aangrenzende provincies
  description: string;
}

const provinceDefinitions: ProvinceDefinition[] = [
  {
    name: "Noord-Holland",
    slug: "noord-holland",
    neighbors: ["zuid-holland", "utrecht", "flevoland"],
    description:
      "Noord-Holland is de thuisbasis van Amsterdam en omvat een breed scala aan erotische diensten. Van de wereldberoemde Wallen tot exclusieve clubs in Haarlem en Amstelveen.",
  },
  {
    name: "Zuid-Holland",
    slug: "zuid-holland",
    neighbors: ["noord-holland", "utrecht", "gelderland", "noord-brabant"],
    description:
      "Zuid-Holland biedt met Rotterdam, Den Haag en Leiden een divers aanbod. Van privéhuizen in de Randstad tot massagesalons aan de kust.",
  },
  {
    name: "Utrecht",
    slug: "utrecht",
    neighbors: ["noord-holland", "zuid-holland", "gelderland", "flevoland"],
    description:
      "De provincie Utrecht combineert stedelijk aanbod in Utrecht en Amersfoort met een centrale ligging die het makkelijk bereikbaar maakt vanuit heel Nederland.",
  },
  {
    name: "Noord-Brabant",
    slug: "noord-brabant",
    neighbors: ["zuid-holland", "gelderland", "limburg"],
    description:
      "Noord-Brabant staat bekend om zijn gezellige uitgaansleven. Eindhoven, Tilburg, Breda en Den Bosch bieden elk een eigen karakter met clubs, escorts en meer.",
  },
  {
    name: "Gelderland",
    slug: "gelderland",
    neighbors: ["overijssel", "flevoland", "utrecht", "zuid-holland", "noord-brabant", "limburg"],
    description:
      "Gelderland is de grootste provincie van Nederland met steden als Arnhem, Nijmegen en Apeldoorn. Een groeiend aanbod van erotische diensten in een ontspannen omgeving.",
  },
  {
    name: "Limburg",
    slug: "limburg",
    neighbors: ["noord-brabant", "gelderland"],
    description:
      "Limburg biedt met Maastricht, Venlo en Heerlen een uniek aanbod beïnvloed door de grensligging met België en Duitsland. Bekend om saunaclubs en wellness.",
  },
  {
    name: "Overijssel",
    slug: "overijssel",
    neighbors: ["drenthe", "gelderland", "flevoland", "friesland"],
    description:
      "Overijssel combineert de steden Enschede, Zwolle en Deventer met een rustige, oostelijke sfeer. Ontdek het lokale aanbod aan escorts en clubs.",
  },
  {
    name: "Friesland",
    slug: "friesland",
    neighbors: ["groningen", "drenthe", "overijssel", "flevoland"],
    description:
      "Friesland biedt met Leeuwarden als hoofdstad een bescheiden maar groeiend aanbod. De Friese gastvrijheid maakt het een unieke bestemming.",
  },
  {
    name: "Groningen",
    slug: "groningen",
    neighbors: ["friesland", "drenthe"],
    description:
      "Groningen is een bruisende studentenstad met een levendig nachtleven. Het erotisch aanbod groeit mee met de dynamische stadscultuur.",
  },
  {
    name: "Drenthe",
    slug: "drenthe",
    neighbors: ["groningen", "friesland", "overijssel"],
    description:
      "Drenthe biedt met Emmen een bescheiden aanbod in een rustige, landelijke omgeving. Ideaal voor wie discretie waardeert.",
  },
  {
    name: "Flevoland",
    slug: "flevoland",
    neighbors: ["noord-holland", "utrecht", "gelderland", "overijssel", "friesland"],
    description:
      "Flevoland is de jongste provincie met Almere als grootste stad. Het aanbod groeit snel dankzij de nabijheid van Amsterdam.",
  },
];

function getProvinceBySlug(slug: string): ProvinceDefinition | undefined {
  return provinceDefinitions.find((p) => p.slug === slug);
}

function getCitiesByProvince(provinceName: string): City[] {
  return getCities()
    .filter((c) => c.province === provinceName)
    .sort((a, b) => b.population - a.population);
}

// ── Static params ───────────────────────────────────────────────────────

export function generateStaticParams() {
  return provinceDefinitions.map((p) => ({ slug: p.slug }));
}

// ── Metadata ────────────────────────────────────────────────────────────

interface ProvinciePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProvinciePageProps): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) return {};

  const cities = getCitiesByProvince(province.name);
  const cityNames = cities.slice(0, 4).map((c) => c.name).join(", ");

  const url = `/provincie/${province.slug}`;
  const title = `${province.name} - Escorts, clubs & meer`;
  const description = `Ontdek het erotisch aanbod in ${province.name}. ${cities.length} steden waaronder ${cityNames}. Escorts, clubs, privéhuizen en meer.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────

export default async function ProvinciePage({ params }: ProvinciePageProps) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) notFound();

  const cities = getCitiesByProvince(province.name);
  const categories = getCategories();

  // Bereken totaal aantal bedrijven in deze provincie
  const totalBusinesses = cities.reduce(
    (sum, city) => sum + getBusinessCountByCity(city.slug),
    0
  );

  // Bereken bedrijven per categorie in deze provincie
  const citySlugSet = new Set(cities.map((c) => c.slug));
  const businessesInProvince = placeholderBusinesses.filter((b) =>
    citySlugSet.has(b.city_slug)
  );

  const categoryCounts = new Map<string, number>();
  for (const biz of businessesInProvince) {
    for (const catSlug of biz.category_slugs) {
      categoryCounts.set(catSlug, (categoryCounts.get(catSlug) || 0) + 1);
    }
  }

  // Sorteer categorieën op aantal bedrijven (alleen tonen als er bedrijven zijn)
  const popularCategories = categories
    .map((cat) => ({
      ...cat,
      count: categoryCounts.get(cat.slug) || 0,
    }))
    .sort((a, b) => b.count - a.count);

  const categoriesWithBusinesses = popularCategories.filter((c) => c.count > 0);

  // Buur-provincies
  const neighborProvinces = province.neighbors
    .map((nSlug) => getProvinceBySlug(nSlug))
    .filter(Boolean) as ProvinceDefinition[];

  // Totale populatie
  const totalPopulation = cities.reduce((sum, c) => sum + c.population, 0);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Provincies", href: "/provincie" },
              { label: province.name },
            ]}
          />

          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Provincie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              {province.name}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {province.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="text-2xl font-bold text-white">{cities.length}</div>
              <div className="text-sm text-white/40 mt-1">Steden</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="text-2xl font-bold text-white">{totalBusinesses}</div>
              <div className="text-sm text-white/40 mt-1">Bedrijven</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="text-2xl font-bold text-white">{categoriesWithBusinesses.length}</div>
              <div className="text-sm text-white/40 mt-1">Categorieën</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="text-2xl font-bold text-white">
                {(totalPopulation / 1000).toFixed(0)}k
              </div>
              <div className="text-sm text-white/40 mt-1">Inwoners</div>
            </div>
          </div>

          {/* Steden in deze provincie */}
          <section className="mb-16">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-xs font-medium text-fuchsia-400/70 tracking-widest uppercase mb-2 block">
                  Steden
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Steden in{" "}
                  <span className="text-fuchsia-400">{province.name}</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cities.map((city) => (
                <CityCard
                  key={city.slug}
                  city={city}
                  businessCount={getBusinessCountByCity(city.slug)}
                />
              ))}
            </div>
          </section>

          {/* Populaire categorieën */}
          {categoriesWithBusinesses.length > 0 && (
            <section className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium text-fuchsia-400/70 tracking-widest uppercase mb-2 block">
                  Categorieën
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Populair in{" "}
                  <span className="text-fuchsia-400">{province.name}</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {popularCategories.map((cat) => (
                  <CategoryCard
                    key={cat.slug}
                    category={cat}
                    listingCount={cat.count}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Aangrenzende provincies */}
          {neighborProvinces.length > 0 && (
            <section className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-medium text-fuchsia-400/70 tracking-widest uppercase mb-2 block">
                  In de buurt
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Aangrenzende{" "}
                  <span className="text-fuchsia-400">provincies</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborProvinces.map((neighbor) => {
                  const neighborCities = getCitiesByProvince(neighbor.name);
                  const neighborBusinesses = neighborCities.reduce(
                    (sum, c) => sum + getBusinessCountByCity(c.slug),
                    0
                  );

                  return (
                    <Link
                      key={neighbor.slug}
                      href={`/provincie/${neighbor.slug}`}
                      className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                            {neighbor.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-xs text-white/40 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {neighborCities.length} steden
                            </span>
                            <span className="text-xs text-white/40 flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {neighborBusinesses} bedrijven
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-fuchsia-400 transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Structured data (JSON-LD) */}
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: `Erotische bedrijven in ${province.name}`,
                description: province.description,
                url: `https://eroplein.com/provincie/${province.slug}`,
                isPartOf: {
                  "@type": "WebSite",
                  name: "Eroplein",
                  url: "https://eroplein.com",
                },
                about: {
                  "@type": "AdministrativeArea",
                  name: province.name,
                  containedInPlace: {
                    "@type": "Country",
                    name: "Nederland",
                  },
                },
                numberOfItems: totalBusinesses,
              }),
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
