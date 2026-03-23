import Link from "next/link";
import { MapPin, Star, Building2 } from "lucide-react";
import type { City } from "@/lib/types";

const cityIcons: Record<string, string> = {
  amsterdam: "🏛",
  rotterdam: "🌉",
  utrecht: "⛪",
  "den-haag": "🏰",
  eindhoven: "💡",
  groningen: "🎓",
  tilburg: "🎪",
  almere: "🏗",
  breda: "🍺",
  nijmegen: "🏟",
  arnhem: "🌳",
  haarlem: "🌷",
  enschede: "⚽",
  haarlemmermeer: "✈️",
  amersfoort: "🗼",
  zaanstad: "🏭",
  apeldoorn: "🦁",
  "s-hertogenbosch": "🐉",
  zwolle: "⭐",
  leiden: "📚",
  maastricht: "🧀",
  dordrecht: "⚓",
  zoetermeer: "🏊",
  leeuwarden: "🐄",
  ede: "🌲",
  emmen: "🐘",
  westland: "🌶",
  delft: "🏺",
  deventer: "📖",
  venlo: "🛒",
  "sittard-geleen": "⛏",
  helmond: "🔧",
  oss: "🎭",
  hilversum: "📺",
  heerlen: "⛰",
  amstelveen: "🏡",
  roosendaal: "🌹",
  gouda: "🕯",
  vlaardingen: "🐟",
  "alphen-aan-den-rijn": "🚣",
  schiedam: "🥃",
  hoorn: "⛵",
};

interface CityCardProps {
  city: City;
  businessCount?: number;
  reviewCount?: number;
}

export function CityCard({ city, businessCount = 0, reviewCount }: CityCardProps) {
  const icon = cityIcons[city.slug] || "📍";

  return (
    <Link
      href={`/${city.slug}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
    >
      {/* Top section with icon */}
      <div className="h-20 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/20 to-pink-900/30 relative flex items-center justify-center">
        <span className="text-3xl opacity-80 group-hover:scale-110 transition-transform">
          {icon}
        </span>
        {city.featured && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded text-[10px] font-medium text-fuchsia-300">
            Populair
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
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
