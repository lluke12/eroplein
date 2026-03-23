import Link from "next/link";
import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import type { City } from "@/lib/types";

const CITY_IMAGES: Record<string, string> = {
  amsterdam: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop",
  rotterdam: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=400&h=300&fit=crop",
  utrecht: "https://images.unsplash.com/photo-1644592013703-5e9b6f1af5cb?w=400&h=300&fit=crop",
  "den-haag": "https://images.unsplash.com/photo-1583859466882-f0097bf006e4?w=400&h=300&fit=crop",
  eindhoven: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  groningen: "https://images.unsplash.com/photo-1576634352785-b4b2b0b0b2b0?w=400&h=300&fit=crop",
  tilburg: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
  breda: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
  nijmegen: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&h=300&fit=crop",
  arnhem: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop",
  haarlem: "https://images.unsplash.com/photo-1512470876777-1795c509e1e1?w=400&h=300&fit=crop",
  maastricht: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f19a?w=400&h=300&fit=crop",
  leiden: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  delft: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=300&fit=crop",
};

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
      {/* Background image or gradient */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={city.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/50 via-purple-950/40 to-[#111114]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/50 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-fuchsia-500/[0.06] transition-opacity" />

      {/* Content */}
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
