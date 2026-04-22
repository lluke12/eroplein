import Link from "next/link";
import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import type { City } from "@/lib/types";
import { CITY_IMAGES } from "@/lib/images";

interface CityCardProps {
  city: City;
  businessCount?: number;
  reviewCount?: number;
}

export function CityCard({ city, businessCount = 0 }: CityCardProps) {
  const imageUrl = CITY_IMAGES[city.slug];

  return (
    <Link
      href={`/${city.slug}`}
      className="group relative h-44 rounded-2xl overflow-hidden cursor-pointer block border border-white/[0.06]"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`${city.name} stadsaanzicht — escorts, parenclubs en massage reviews`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/50 via-purple-950/40 to-[#111114]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/50 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-fuchsia-500/[0.06] transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-base group-hover:text-fuchsia-300 transition-colors">
          {city.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-white/40" />
          <span className="text-white/50 text-xs">{city.province}</span>
        </div>
        {businessCount > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <Building2 className="w-3 h-3 text-fuchsia-400/60" />
            <span className="text-xs text-white/40">{businessCount} bedrijven</span>
          </div>
        )}
      </div>

      {city.featured && (
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded text-[10px] font-medium text-white/80">
          Populair
        </span>
      )}
    </Link>
  );
}
