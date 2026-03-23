import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getFaqCategories, getMostAskedQuestions } from "@/lib/faq-data";
import { FaqOverviewClient } from "./FaqOverviewClient";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen (FAQ)",
  description:
    "Antwoorden op veelgestelde vragen over escorts, clubs, privehuizen, erotische massage, ramen, seksshops, stripclubs en saunaclubs in Nederland.",
  openGraph: {
    title: "Veelgestelde Vragen | Eroplein",
    description:
      "Alles wat je wilt weten over de erotische branche in Nederland. Van kosten en veiligheid tot etiquette en regelgeving.",
  },
};

export default function FaqPage() {
  const categories = getFaqCategories();
  const mostAsked = getMostAskedQuestions();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mostAsked.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Veelgestelde Vragen" }]} />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Veelgestelde{" "}
              <span className="text-fuchsia-400">Vragen</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Antwoorden op de meest gestelde vragen over de erotische branche
              in Nederland. Kies een categorie of zoek direct naar je vraag.
            </p>
          </div>

          <FaqOverviewClient
            categories={categories}
            mostAsked={mostAsked}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
