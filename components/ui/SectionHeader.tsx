import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  href?: string;
  linkText?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  highlight,
  href,
  linkText,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`${
        centered ? "text-center mb-12" : "flex items-end justify-between mb-10"
      }`}
    >
      <div>
        <span className="text-xs font-medium text-fuchsia-400/70 tracking-widest uppercase mb-2 block">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          {title}{" "}
          <span className="text-fuchsia-400">{highlight}</span>
        </h2>
      </div>
      {href && linkText && !centered && (
        <Link
          href={href}
          className="hidden md:flex items-center gap-2 text-sm text-white/40 hover:text-fuchsia-400 transition-colors group"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
