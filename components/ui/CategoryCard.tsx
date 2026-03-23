import Link from "next/link";
import {
  Crown,
  Home,
  Sparkles,
  Heart,
  DoorOpen,
  ShoppingBag,
  Music,
  Flame,
} from "lucide-react";
import type { Category } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  crown: Crown,
  home: Home,
  sparkles: Sparkles,
  heart: Heart,
  "door-open": DoorOpen,
  "shopping-bag": ShoppingBag,
  music: Music,
  flame: Flame,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  fuchsia: {
    bg: "bg-fuchsia-500/10",
    text: "text-fuchsia-400",
    border: "group-hover:border-fuchsia-500/30",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    border: "group-hover:border-pink-500/30",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "group-hover:border-purple-500/30",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "group-hover:border-rose-500/30",
  },
};

interface CategoryCardProps {
  category: Category;
  citySlug?: string;
  listingCount?: number;
}

export function CategoryCard({
  category,
  citySlug,
  listingCount,
}: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Sparkles;
  const colors = colorMap[category.color] || colorMap.fuchsia;
  const href = citySlug
    ? `/${citySlug}/${category.slug}`
    : `/categorieen/${category.slug}`;

  return (
    <Link
      href={href}
      className={`rounded-2xl p-5 text-center group cursor-pointer block border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all ${colors.border}`}
    >
      <div
        className={`w-12 h-12 mx-auto mb-3 rounded-xl ${colors.bg} flex items-center justify-center`}
      >
        <Icon className={`w-5 h-5 ${colors.text}`} />
      </div>
      <h3 className="text-sm font-semibold text-white mb-0.5">
        {category.name}
      </h3>
      {listingCount !== undefined && (
        <p className="text-xs text-gray-500">{listingCount} listings</p>
      )}
    </Link>
  );
}
