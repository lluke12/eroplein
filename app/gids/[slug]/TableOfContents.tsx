"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <div className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <List className="w-4 h-4 text-fuchsia-400" />
            <h3 className="text-sm font-semibold text-white">Inhoudsopgave</h3>
          </div>
          <nav>
            <ol className="space-y-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`flex items-start gap-3 text-sm transition-colors ${
                      activeId === section.id
                        ? "text-fuchsia-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    <span
                      className={`font-medium mt-px ${
                        activeId === section.id
                          ? "text-fuchsia-400"
                          : "text-gray-600"
                      }`}
                    >
                      {i + 1}.
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </aside>
  );
}
