import { Search, MapPin, ChevronDown } from "lucide-react";
import type { City } from "@/lib/types";

interface SearchBarProps {
  cities: City[];
}

export function SearchBar({ cities }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Zoek een bedrijf, categorie of dienst..."
            className="w-full pl-12 pr-4 py-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white placeholder-gray-500 text-base focus:outline-none search-glow transition-all"
          />
        </div>
        <div className="relative sm:w-48">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <select className="w-full pl-12 pr-10 py-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-gray-400 text-base focus:outline-none search-glow appearance-none cursor-pointer transition-all">
            <option>Alle steden</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-xl font-medium hover:brightness-110 shadow-lg shadow-fuchsia-500/20 transition-all active:scale-95">
          Zoeken
        </button>
      </div>
    </div>
  );
}
