"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ChevronDown } from "lucide-react";
import type { City } from "@/lib/types";

interface SearchBarProps {
  cities: City[];
}

export function SearchBar({ cities }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const categories = [
    { label: "Escorts", slug: "escorts" },
    { label: "Privéhuizen", slug: "privehuizen" },
    { label: "Clubs", slug: "clubs" },
    { label: "Erotische Massage", slug: "erotische-massage" },
    { label: "Ramen", slug: "ramen" },
    { label: "Seksshops", slug: "seksshops" },
    { label: "Stripclubs", slug: "stripclubs" },
    { label: "Saunaclubs", slug: "saunaclubs" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleQueryChange(value: string) {
    setQuery(value);
    if (value.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const lower = value.toLowerCase();
    const matches: string[] = [];

    // Match cities
    cities.forEach((c) => {
      if (c.name.toLowerCase().includes(lower)) {
        matches.push(`stad:${c.slug}:${c.name}`);
      }
    });

    // Match categories
    categories.forEach((cat) => {
      if (cat.label.toLowerCase().includes(lower)) {
        matches.push(`cat:${cat.slug}:${cat.label}`);
      }
    });

    // Match city + category combos
    if (selectedCity) {
      const city = cities.find((c) => c.slug === selectedCity);
      if (city) {
        categories.forEach((cat) => {
          if (cat.label.toLowerCase().includes(lower)) {
            matches.push(`combo:${city.slug}/${cat.slug}:${cat.label} in ${city.name}`);
          }
        });
      }
    }

    setSuggestions(matches.slice(0, 6));
    setShowSuggestions(matches.length > 0);
  }

  function handleSearch() {
    if (selectedCity && !query) {
      router.push(`/${selectedCity}`);
    } else if (selectedCity && query) {
      // Try to match a category
      const cat = categories.find(
        (c) => c.label.toLowerCase().includes(query.toLowerCase())
      );
      if (cat) {
        router.push(`/${selectedCity}/${cat.slug}`);
      } else {
        router.push(`/${selectedCity}`);
      }
    } else if (query) {
      // Try city first
      const city = cities.find(
        (c) => c.name.toLowerCase().includes(query.toLowerCase())
      );
      if (city) {
        router.push(`/${city.slug}`);
      } else {
        // Try category
        const cat = categories.find(
          (c) => c.label.toLowerCase().includes(query.toLowerCase())
        );
        if (cat) {
          router.push(`/categorieen/${cat.slug}`);
        }
      }
    }
  }

  function handleSuggestionClick(suggestion: string) {
    const [type, slug] = suggestion.split(":");
    setShowSuggestions(false);
    setQuery("");

    if (type === "stad") {
      router.push(`/${slug}`);
    } else if (type === "cat") {
      if (selectedCity) {
        router.push(`/${selectedCity}/${slug}`);
      } else {
        router.push(`/categorieen/${slug}`);
      }
    } else if (type === "combo") {
      router.push(`/${slug}`);
    }
  }

  return (
    <div className="relative max-w-2xl mx-auto" ref={wrapperRef}>
      <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Zoek een stad, categorie of bedrijf..."
            className="w-full pl-12 pr-4 py-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white placeholder-gray-500 text-base focus:outline-none search-glow transition-all"
          />

          {/* Suggestions dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/[0.08] bg-[#18181b] shadow-2xl shadow-black/50 overflow-hidden z-50">
              {suggestions.map((s) => {
                const [type, , label] = s.split(":");
                return (
                  <button
                    key={s}
                    onClick={() => handleSuggestionClick(s)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/[0.05] transition-colors"
                  >
                    {type === "stad" ? (
                      <MapPin className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                    ) : (
                      <Search className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    )}
                    <span className="text-sm text-white">{label}</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {type === "stad" ? "Stad" : type === "cat" ? "Categorie" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="relative sm:w-48">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full pl-12 pr-10 py-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-gray-400 text-base focus:outline-none search-glow appearance-none cursor-pointer transition-all"
          >
            <option value="">Alle steden</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <button
          onClick={handleSearch}
          className="px-8 py-4 bg-fuchsia-500 text-white rounded-xl font-medium hover:bg-fuchsia-600 transition-colors active:scale-95"
        >
          Zoeken
        </button>
      </div>
    </div>
  );
}
