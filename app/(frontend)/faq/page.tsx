import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  JsonLd,
  breadcrumbListSchema,
  faqPageSchema,
  collectionPageSchema,
} from "@/components/ui/JsonLd";
import { getFaqCategories, getMostAskedQuestions } from "@/lib/faq-data";
import { FaqOverviewClient } from "./FaqOverviewClient";

export const metadata: Metadata = {
  title: "Veelgestelde vragen — alles over sekswerk in Nederland",
  description:
    "100+ antwoorden over escorts, parenclubs, raamprostitutie, erotische massage, privehuizen, seksshops en saunaclubs in Nederland. Kosten, veiligheid, wetgeving en etiquette.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Veelgestelde vragen op Eroplein",
    description:
      "Alles wat je wilt weten over de erotische branche in Nederland: kosten, veiligheid, etiquette, regelgeving.",
    url: "/faq",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veelgestelde vragen op Eroplein",
    description:
      "Alles wat je wilt weten over de erotische branche in Nederland.",
  },
};

export default function FaqPage() {
  const categories = getFaqCategories();
  const mostAsked = getMostAskedQuestions();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Veelgestelde vragen", url: "/faq" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbs)} id="ld-breadcrumb" />
      <JsonLd
        data={collectionPageSchema({
          name: "Veelgestelde vragen op Eroplein",
          description:
            "Antwoorden op de meest gestelde vragen over de erotische branche in Nederland.",
          url: "/faq",
          breadcrumbs,
        })}
        id="ld-collection"
      />
      <JsonLd
        data={faqPageSchema(
          mostAsked.map((q) => ({ question: q.question, answer: q.answer }))
        )}
        id="ld-faq"
      />

      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Veelgestelde vragen" }]} />

          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pink-50 mb-4">
              Veelgestelde{" "}
              <span className="text-fuchsia-400">vragen</span>
            </h1>
            <p className="text-lg text-gray-400">
              {mostAsked.length * categories.length}+ antwoorden over de
              Nederlandse erotische branche, onderverdeeld in 8 categorieen.
              Van kosten en veiligheid tot etiquette en regelgeving.
            </p>
          </div>

          <section className="mb-12 max-w-3xl">
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>
                Deze FAQ is samengesteld op basis van de vragen die via email,
                chat en reviews binnenkomen bij Eroplein. We proberen direct en
                eerlijk te antwoorden — geen marketingtaal, geen
                indekkingsgebazel. Mist er een vraag? Stuur hem in via het
                contactformulier en we voegen hem toe.
              </p>
            </div>
          </section>

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
