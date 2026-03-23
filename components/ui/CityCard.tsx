import Link from "next/link";
import { MapPin, Star, Building2 } from "lucide-react";
import type { City } from "@/lib/types";

interface CityCardProps {
  city: City;
  businessCount?: number;
  reviewCount?: number;
}

export function CityCard({ city, businessCount = 0, reviewCount }: CityCardProps) {
  return (
    <Link
      href={`/${city.slug}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
    >
      {/* Top color accent */}
      <div className="h-24 bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-pink-900/40 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111114] to-transparent" />
        {city.featured && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded text-[10px] font-medium text-fuchsia-300">
            Populair
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 -mt-4 relative">
        <h3 className="text-white font-semibold text-base group-hover:text-fuchsia-300 transition-colors">
          {city.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-gray-500" />
          <span className="text-white/40 text-xs">{city.province}</span>
        </div>

        {businessCount > 0 && (
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-1">
              <Building2 className="w-3 h-3 text-fuchsia-400/60" />
              <span className="text-xs text-white/40">{businessCount}</span>
            </div>
            {reviewCount !== undefined && reviewCount > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-fuchsia-400/60" />
                <span className="text-xs text-white/40">{reviewCount} reviews</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
