"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, ArrowRight, Shield, ChevronDown, ThumbsUp, MessageCircle } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Business, Review } from "@/lib/types";

interface ReviewWithTime extends Review {
  timeAgo: string;
}

interface BusinessReviewGroup {
  business: Business;
  city: { name: string; slug: string } | null;
  reviews: ReviewWithTime[];
}

const gradients = [
  "from-fuchsia-400 to-pink-500",
  "from-purple-400 to-fuchsia-500",
  "from-rose-400 to-pink-500",
  "from-pink-400 to-fuchsia-500",
];

export function ReviewsContent({ data }: { data: BusinessReviewGroup[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggleBusiness(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="space-y-6">
      {data.map(({ business, city, reviews }) => {
        const isOpen = expanded[business.id] ?? true; // First load: open
        const visibleReviews = isOpen ? reviews : reviews.slice(0, 1);

        return (
          <div
            key={business.id}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
          >
            {/* Business header with image */}
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0">
                {business.image_url ? (
                  <Image
                    src={business.image_url}
                    alt={business.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/20 to-pink-900/30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111114]/80 hidden sm:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114]/80 to-transparent sm:hidden" />
              </div>

              {/* Info */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-bold text-white">
                      {business.name}
                    </h2>
                    {business.is_verified && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-[10px] text-fuchsia-400">
                        <Shield className="w-3 h-3" />
                        Geverifieerd
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {business.address}
                      {city ? `, ${city.name}` : ""}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400" />
                      <span className="text-fuchsia-400 font-semibold">
                        {business.average_rating.toFixed(1)}
                      </span>
                      ({business.review_count})
                    </span>
                    <span>
                      <span className="text-fuchsia-400">{"€".repeat(business.price_range)}</span>
                      <span className="text-gray-600">{"€".repeat(4 - business.price_range)}</span>
                    </span>
                  </div>
                </div>
                <Link
                  href={`/${business.city_slug}/${business.primary_category}/${business.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] text-xs font-medium text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all shrink-0"
                >
                  Bekijk bedrijf
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Reviews */}
            <div className="border-t border-white/[0.06]">
              <div className="divide-y divide-white/[0.04]">
                {visibleReviews.map((review) => {
                  const gradientIdx = review.user_initial.charCodeAt(0) % gradients.length;
                  return (
                    <div key={review.id} className="p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradients[gradientIdx]} flex-shrink-0 flex items-center justify-center text-xs font-semibold`}
                        >
                          {review.user_initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-white">
                              {review.user_display_name}
                            </span>
                            <span className="text-xs text-gray-500">{review.timeAgo}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <StarRating rating={review.rating} />
                          </div>
                          {review.title && (
                            <h4 className="text-sm font-medium text-white/90 mb-1">
                              {review.title}
                            </h4>
                          )}
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {review.content}
                          </p>
                          {(review.pros || review.cons) && (
                            <div className="flex flex-wrap gap-4 mt-3">
                              {review.pros && review.pros.length > 0 && (
                                <div className="flex flex-wrap gap-1.5">
                                  {review.pros.map((pro) => (
                                    <span
                                      key={pro}
                                      className="px-2 py-0.5 rounded text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                    >
                                      + {pro}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {review.cons && review.cons.length > 0 && (
                                <div className="flex flex-wrap gap-1.5">
                                  {review.cons.map((con) => (
                                    <span
                                      key={con}
                                      className="px-2 py-0.5 rounded text-xs bg-red-500/10 text-red-400 border border-red-500/20"
                                    >
                                      - {con}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          <div className="flex items-center gap-4 mt-3">
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <ThumbsUp className="w-3.5 h-3.5" />
                              {review.helpful_count} nuttig
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <MessageCircle className="w-3.5 h-3.5" />
                              {review.reply_count}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Expand/collapse */}
              {reviews.length > 1 && (
                <button
                  onClick={() => toggleBusiness(business.id)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 border-t border-white/[0.06] text-sm text-white/40 hover:text-fuchsia-400 transition-colors"
                >
                  {isOpen ? (
                    <>Minder tonen</>
                  ) : (
                    <>Toon alle {reviews.length} reviews</>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
