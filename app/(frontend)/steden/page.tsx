import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CityCard } from "@/components/ui/CityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getCities } from "@/lib/data";
import { getBusinessCountByCity, placeholderReviews, placeholderBusinesses } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Alle Steden",
  description:
    "Ontdek erotische bedrijven in 42+ Nederlandse steden. Van Amsterdam tot Maastricht — vind escorts, clubs, massage en meer bij jou in de buurt.",
  alternates: { canonical: "/steden" },
  openGraph: {
    title: "Alle Steden",
    description:
      "Ontdek erotische bedrijven in 42+ Nederlandse steden. Van Amsterdam tot Maastricht — vind escorts, clubs, massage en meer bij jou in de buurt.",
    url: "/steden",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alle Steden",
    description:
      "Ontdek erotische bedrijven in 42+ Nederlandse steden. Van Amsterdam tot Maastricht — vind escorts, clubs, massage en meer bij jou in de buurt.",
  },
};

export default function StedenPage() {
  const cities = getCities();

  // Groepeer per provincie
  const byProvince = cities.reduce<Record<string, typeof cities>>(
    (acc, city) => {
      if (!acc[city.province]) acc[city.province] = [];
      acc[city.province].push(city);
      return acc;
    },
    {}
  );

  const provinces = Object.keys(byProvince).sort();

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Steden" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Alle locaties
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Steden in{" "}
              <span className="text-fuchsia-400">Nederland</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Ontdek bedrijven en lees ervaringen in {cities.length}+ steden
              door heel Nederland.
            </p>
          </div>

          {/* Featured Cities */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
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
            {provinces.map((province) => (
              <div key={province}>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                  {province}
                  <span className="text-sm font-normal text-gray-400">
                    {byProvince[province].length} steden
                  </span>
                </h2>
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
      <Footer />
    </>
  );
}
