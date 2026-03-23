import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nieuws",
  description:
    "Het laatste nieuws en updates over de erotische scene in Nederland. Tips, guides en trending onderwerpen.",
};

export default function NieuwsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Nieuws" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Laatste updates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Nieuws &{" "}
              <span className="text-fuchsia-400">
                artikelen
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Het laatste nieuws, tips en guides over de scene in Nederland.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-12 text-center">
            <p className="text-gray-400 mb-4">
              Binnenkort verschijnen hier de eerste artikelen.
            </p>
            <Link
              href="/"
              className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium transition-colors"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
