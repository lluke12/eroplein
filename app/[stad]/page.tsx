import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CityCard } from "@/components/ui/CityCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  getCities,
  getCityBySlug,
  getCategories,
  getNearbyCities,
} from "@/lib/data";

interface StadPageProps {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return getCities().map((city) => ({ stad: city.slug }));
}

export async function generateMetadata({
  params,
}: StadPageProps): Promise<Metadata> {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  if (!city) return {};

  return {
    title: `${city.name} - Escorts, Clubs & Meer`,
    description: `Ontdek de beste erotische bedrijven in ${city.name}. Lees eerlijke ervaringen over escorts, clubs, massage en meer in ${city.name}, ${city.province}.`,
  };
}

export default async function StadPage({ params }: StadPageProps) {
  const { stad } = await params;
  const city = getCityBySlug(stad);
  if (!city) notFound();

  const categories = getCategories();
  const nearbyCities = getNearbyCities(city.slug, 6);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Steden", href: "/steden" },
              { label: city.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-16">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              {city.province}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              {city.name}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Ontdek escorts, clubs, massage salons en meer in {city.name}. Lees
              eerlijke ervaringen van echte bezoekers.
            </p>
          </div>

          {/* Categories in this city */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Categorieën in{" "}
                <span className="text-fuchsia-400">{city.name}</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  category={cat}
                  citySlug={city.slug}
                />
              ))}
            </div>
          </section>

          {/* Placeholder for businesses - will be populated from Supabase */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                Populaire bedrijven
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-12 text-center">
              <p className="text-gray-500 mb-4">
                Nog geen bedrijven gevonden in {city.name}.
              </p>
              <Link
                href="/claim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium hover:brightness-110 transition-all"
              >
                Voeg je bedrijf toe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">
                Steden in de buurt
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {nearbyCities.map((nearCity) => (
                  <CityCard key={nearCity.slug} city={nearCity} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
