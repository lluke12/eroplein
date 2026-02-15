import Link from "next/link";
import type { City } from "@/lib/types";

interface CityCardProps {
  city: City;
  businessCount?: number;
}

export function CityCard({ city, businessCount = 0 }: CityCardProps) {
  return (
    <Link
      href={`/${city.slug}`}
      className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-purple-900/30 to-pink-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-fuchsia-900/60 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-semibold text-base">{city.name}</h3>
        <p className="text-white/50 text-xs mt-0.5">
          {businessCount > 0
            ? `${businessCount} bedrijven`
            : city.province}
        </p>
      </div>
    </Link>
  );
}
