import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Heart, Shield } from "lucide-react";
import type { Business } from "@/lib/types";

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link
      href={`/${business.city_slug}/${business.primary_category}/${business.slug}`}
      className="rounded-2xl overflow-hidden group cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all"
    >
      <div className="relative h-52 overflow-hidden">
        {business.image_url ? (
          <Image
            src={business.image_url}
            alt={`${business.name} — ${business.short_description || "reviews en info"}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/20 to-pink-900/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/30 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {business.is_verified && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-fuchsia-300">
              <Shield className="w-3 h-3" />
              Geverifieerd
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
              {business.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm text-gray-400">{business.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-fuchsia-500/10 rounded-lg">
            <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
            <span className="text-sm font-semibold text-fuchsia-400">
              {business.average_rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {business.short_description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-fuchsia-400">
              {"€".repeat(business.price_range)}
            </span>
            <span className="text-gray-600">
              {"€".repeat(4 - business.price_range)}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            {business.review_count} reviews
          </span>
        </div>
      </div>
    </Link>
  );
}
