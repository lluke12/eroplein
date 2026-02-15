import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-fuchsia-400 transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-fuchsia-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
