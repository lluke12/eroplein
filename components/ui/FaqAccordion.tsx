"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqQuestion } from "@/lib/faq-data";

interface FaqAccordionProps {
  questions: FaqQuestion[];
}

export function FaqAccordion({ questions }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="divide-y divide-white/[0.06]">
      {questions.map((q) => {
        const isOpen = openId === q.id;
        return (
          <div key={q.id}>
            <button
              onClick={() => toggle(q.id)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${q.id}`}
            >
              <span className="text-[15px] font-medium text-white group-hover:text-fuchsia-300 transition-colors leading-relaxed">
                {q.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 mt-1 shrink-0 text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-fuchsia-400" : ""
                }`}
              />
            </button>
            <div
              id={`faq-answer-${q.id}`}
              role="region"
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
  );
}
