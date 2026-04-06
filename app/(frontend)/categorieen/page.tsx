import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Categorieën",
  description:
    "Blader door alle categorieën op Eroplein. Escorts, privéhuizen, clubs, erotische massage, ramen, seksshops, stripclubs en saunaclubs.",
  alternates: { canonical: "/categorieen" },
  openGraph: {
    title: "Categorieën",
    description:
      "Blader door alle categorieën op Eroplein. Escorts, privéhuizen, clubs, erotische massage, ramen, seksshops, stripclubs en saunaclubs.",
    url: "/categorieen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Categorieën",
    description:
      "Blader door alle categorieën op Eroplein. Escorts, privéhuizen, clubs, erotische massage, ramen, seksshops, stripclubs en saunaclubs.",
  },
};

export default function CategorieenPage() {
  const categories = getCategories();

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Categorieën" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Blader door
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Alle{" "}
              <span className="text-fuchsia-400">
                categorieën
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Van escorts tot saunaclubs — ontdek alle soorten bedrijven en lees
              eerlijke ervaringen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.slug} className="flex flex-col">
                <CategoryCard category={cat} />
                <p className="mt-3 text-sm text-gray-400 leading-relaxed px-2">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
