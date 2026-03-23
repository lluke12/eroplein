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
  const baseUrl = "https://eroplein.com";

  const schemaItems = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    ...items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  ];

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-fuchsia-400 transition-colors"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          }),
        }}
      />
    </>
  );
}
