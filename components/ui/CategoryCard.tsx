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

const colorMap: Record<string, { bg: string; text: string }> = {
  fuchsia: {
    bg: "from-fuchsia-500/20 to-pink-500/10 group-hover:from-fuchsia-500/30 group-hover:to-pink-500/20",
    text: "text-fuchsia-400",
  },
  pink: {
    bg: "from-pink-500/20 to-rose-500/10 group-hover:from-pink-500/30 group-hover:to-rose-500/20",
    text: "text-pink-400",
  },
  purple: {
    bg: "from-purple-500/20 to-fuchsia-500/10 group-hover:from-purple-500/30 group-hover:to-fuchsia-500/20",
    text: "text-purple-400",
  },
  rose: {
    bg: "from-rose-500/20 to-pink-500/10 group-hover:from-rose-500/30 group-hover:to-pink-500/20",
    text: "text-rose-400",
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
      className="glass-card rounded-2xl p-6 text-center group cursor-pointer block"
    >
      <div
        className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center transition-all`}
      >
        <Icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      <h3 className="text-sm font-semibold text-white mb-1">
        {category.name}
      </h3>
      {listingCount !== undefined && (
        <p className="text-xs text-gray-500">{listingCount} listings</p>
      )}
    </Link>
  );
}
