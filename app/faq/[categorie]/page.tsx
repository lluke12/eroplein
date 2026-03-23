import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getFaqCategories, getFaqCategoryBySlug } from "@/lib/faq-data";

interface FaqCategoryPageProps {
  params: Promise<{ categorie: string }>;
}

export async function generateStaticParams() {
  return getFaqCategories().map((cat) => ({ categorie: cat.slug }));
}

export async function generateMetadata({
  params,
}: FaqCategoryPageProps): Promise<Metadata> {
  const { categorie } = await params;
  const category = getFaqCategoryBySlug(categorie);
  if (!category) return {};

  return {
    title: `FAQ ${category.name} - Veelgestelde Vragen`,
    description: category.description,
    openGraph: {
      title: `Veelgestelde Vragen over ${category.name} | Eroplein`,
      description: category.description,
    },
  };
}

export default async function FaqCategoryPage({
  params,
}: FaqCategoryPageProps) {
  const { categorie } = await params;
  const category = getFaqCategoryBySlug(categorie);
  if (!category) notFound();

  const allCategories = getFaqCategories();
  const otherCategories = allCategories.filter(
    (c) => c.slug !== category.slug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.questions.map((q) => ({
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
          <Breadcrumbs
            items={[
              { label: "FAQ", href: "/faq" },
              { label: category.name },
            ]}
          />

          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              FAQ &mdash; {category.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Veelgestelde vragen over{" "}
              <span className="text-fuchsia-400">
                {category.name.toLowerCase()}
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* FAQ Accordion */}
          <section className="mb-16 max-w-3xl">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6">
              <FaqAccordion questions={category.questions} />
            </div>
          </section>

          {/* Related links */}
          <section className="mb-16 max-w-3xl">
            <h2 className="text-lg font-semibold text-white mb-4">
              Meer over {category.name.toLowerCase()}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/categorieen/${category.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 text-sm text-fuchsia-300 hover:bg-fuchsia-500/10 transition-all"
              >
                Bekijk {category.name.toLowerCase()} in Nederland
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Other FAQ categories */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">
              FAQ andere categorieën
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/faq/${cat.slug}`}
                  className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
