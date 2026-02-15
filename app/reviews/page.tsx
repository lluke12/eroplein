import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Recente Reviews",
  description:
    "Lees de meest recente reviews en ervaringen van echte bezoekers. Eerlijke beoordelingen over escorts, clubs, massage en meer.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Reviews" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Community
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Recente{" "}
              <span className="text-fuchsia-400">
                reviews
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Eerlijke ervaringen van echte bezoekers. Lees, deel en help de
              community.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-12 text-center">
            <p className="text-gray-500 mb-4">
              Binnenkort verschijnen hier de eerste reviews.
            </p>
            <Link
              href="/schrijf-review"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-medium hover:brightness-110 transition-all"
            >
              Schrijf de eerste review
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
