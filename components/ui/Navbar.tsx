"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/steden", label: "Steden" },
  { href: "/categorieen", label: "Categorieën" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/reviews", label: "Reviews" },
  { href: "/vergelijk", label: "Vergelijk" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="relative z-50 w-full px-6 py-5 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-white">
            ero<span className="text-fuchsia-400">plein</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/schrijf-review"
            className="hidden md:block px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors active:scale-95"
          >
            Schrijf Review
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111114] border-b border-white/[0.06] px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/[0.06] mt-3 space-y-2">
            <Link
              href="/schrijf-review"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-3 rounded-xl bg-fuchsia-500 text-white text-sm font-medium"
            >
              Schrijf Review
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
