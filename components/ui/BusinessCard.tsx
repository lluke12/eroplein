import Link from "next/link";
import { MapPin, Star, Heart } from "lucide-react";
import type { Business } from "@/lib/types";

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link
      href={`/${business.city_slug}/${business.primary_category}/${business.slug}`}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer block"
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/20 to-pink-900/30" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white/90">
            {business.primary_category}
          </span>
          {business.is_verified && (
            <span className="px-3 py-1 bg-fuchsia-500/20 backdrop-blur-md rounded-full text-xs font-medium text-fuchsia-300">
              Geverifieerd
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white/60 hover:text-fuchsia-400 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
              {business.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-sm text-gray-500">{business.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-fuchsia-500/10 rounded-lg">
            <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
            <span className="text-sm font-semibold text-fuchsia-400">
              {business.average_rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {business.short_description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            {"€".repeat(business.price_range)}
            <span className="text-gray-600">
              {"€".repeat(4 - business.price_range)}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {business.review_count} reviews
          </span>
        </div>
      </div>
    </Link>
  );
}
