import { ThumbsUp, MessageCircle } from "lucide-react";
import { StarRating } from "./StarRating";
import type { Review } from "@/lib/types";

const gradients = [
  "from-fuchsia-400 to-pink-500",
  "from-purple-400 to-fuchsia-500",
  "from-rose-400 to-pink-500",
  "from-pink-400 to-fuchsia-500",
];

interface ReviewCardProps {
  review: Review;
  businessName?: string;
  timeAgo?: string;
}

export function ReviewCard({ review, businessName, timeAgo }: ReviewCardProps) {
  const gradientIdx =
    review.user_initial.charCodeAt(0) % gradients.length;

  return (
    <div className="glass-card rounded-2xl p-5 group cursor-pointer">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradients[gradientIdx]} flex-shrink-0 flex items-center justify-center text-sm font-semibold`}
        >
          {review.user_initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-white">
              {review.user_display_name}
            </span>
            {timeAgo && (
              <span className="text-xs text-gray-400">{timeAgo}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={review.rating} />
            {businessName && (
              <span className="text-xs text-gray-400 ml-1">
                {businessName}
              </span>
            )}
          </div>
          {review.title && (
            <h4 className="text-sm font-medium text-white/90 mb-1">
              {review.title}
            </h4>
          )}
          <p className="text-sm text-gray-400 leading-relaxed">
            &ldquo;{review.content}&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-3">
            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-fuchsia-400 transition-colors">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{review.helpful_count}</span>
            </button>
            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{review.reply_count}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
