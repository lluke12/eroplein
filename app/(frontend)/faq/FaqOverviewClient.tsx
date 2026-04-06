"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Crown,
  Home,
  Sparkles,
  Heart,
  DoorOpen,
  ShoppingBag,
  Music,
  Flame,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import type { FaqCategory, FaqQuestion } from "@/lib/faq-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  crown: Crown,
  home: Home,
  sparkles: Sparkles,
  heart: Heart,
  "door-open": DoorOpen,
  "shopping-bag": ShoppingBag,
  music: Music,
  flame: Flame,
};

interface FaqOverviewClientProps {
  categories: FaqCategory[];
  mostAsked: (FaqQuestion & { categorySlug: string; categoryName: string })[];
}

export function FaqOverviewClient({
  categories,
  mostAsked,
}: FaqOverviewClientProps) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  // Search across all questions
  const searchResults = useMemo(() => {
    if (query.length < 2) return null;
    const lower = query.toLowerCase();
    return categories.flatMap((cat) =>
      cat.questions
        .filter(
          (q) =>
            q.question.toLowerCase().includes(lower) ||
            q.answer.toLowerCase().includes(lower)
        )
        .map((q) => ({
          ...q,
          categorySlug: cat.slug,
          categoryName: cat.name,
        }))
    );
  }, [query, categories]);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {/* Search */}
      <div className="relative mb-12 max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek een vraag..."
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-500/40 transition-colors"
        />
      </div>

      {/* Search results */}
      {searchResults !== null ? (
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-white mb-6">
            {searchResults.length > 0
              ? `${searchResults.length} ${searchResults.length === 1 ? "resultaat" : "resultaten"} gevonden`
              : "Geen resultaten gevonden"}
          </h2>
          {searchResults.length > 0 ? (
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 divide-y divide-white/[0.06]">
              {searchResults.map((q) => {
                const isOpen = openId === q.id;
                return (
                  <div key={q.id}>
                    <button
                      onClick={() => toggle(q.id)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className="text-xs text-fuchsia-400/60 mb-1 block">
                          {q.categoryName}
                        </span>
                        <span className="text-[15px] font-medium text-white group-hover:text-fuchsia-300 transition-colors leading-relaxed">
                          {q.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 mt-1 shrink-0 text-gray-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-fuchsia-400" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? "max-h-[800px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-400 leading-relaxed pr-8">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Probeer een andere zoekterm of bekijk de categorieën hieronder.
            </p>
          )}
        </section>
      ) : (
        <>
          {/* Category grid */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
              FAQ per categorie
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon];
                return (
                  <Link
                    key={cat.slug}
                    href={`/faq/${cat.slug}`}
                    className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-fuchsia-500/20 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-fuchsia-500/10 shrink-0">
                      {Icon && (
                        <Icon className="w-5 h-5 text-fuchsia-400/80" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition-colors mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {cat.questions.length} vragen
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Most asked questions */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
              Meest gestelde vragen
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 divide-y divide-white/[0.06]">
              {mostAsked.map((q) => {
                const isOpen = openId === q.id;
                return (
                  <div key={q.id}>
                    <button
                      onClick={() => toggle(q.id)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className="text-xs text-fuchsia-400/60 mb-1 block">
                          {q.categoryName}
                        </span>
                        <span className="text-[15px] font-medium text-white group-hover:text-fuchsia-300 transition-colors leading-relaxed">
                          {q.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 mt-1 shrink-0 text-gray-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-fuchsia-400" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? "max-h-[800px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-400 leading-relaxed pr-8">
                        {q.answer}
                      </p>
                      <Link
                        href={`/faq/${q.categorySlug}`}
                        className="inline-flex items-center gap-1 text-xs text-fuchsia-400/70 hover:text-fuchsia-400 transition-colors mt-3"
                      >
                        Alle vragen over {q.categoryName.toLowerCase()}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
}
