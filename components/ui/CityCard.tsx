import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import type { City } from "@/lib/types";

interface CityCardProps {
  city: City;
  businessCount?: number;
  reviewCount?: number;
}

export function CityCard({ city, businessCount = 0 }: CityCardProps) {
  return (
    <Link
      href={`/${city.slug}`}
      className="group relative h-44 rounded-2xl overflow-hidden cursor-pointer block border border-white/[0.06]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/50 via-purple-950/40 to-[#111114]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/60 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-fuchsia-500/[0.04] transition-opacity" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-base group-hover:text-fuchsia-300 transition-colors">
          {city.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-gray-500" />
          <span className="text-white/40 text-xs">{city.province}</span>
        </div>
        {businessCount > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <Building2 className="w-3 h-3 text-fuchsia-400/50" />
            <span className="text-xs text-white/30">{businessCount} bedrijven</span>
          </div>
        )}
      </div>

      {city.featured && (
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded text-[10px] font-medium text-fuchsia-300">
          Populair
        </span>
      )}
    </Link>
  );
}
