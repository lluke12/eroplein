import Link from "next/link";
import { LogIn } from "lucide-react";

export function Navbar() {
  return (
    <nav className="relative z-50 w-full px-6 py-5 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-white">
            ero<span className="text-fuchsia-400">plein</span>
          </span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5">
          <Link
            href="/"
            className="px-5 py-2 bg-white/10 text-white rounded-full text-sm font-medium transition-all"
          >
            Home
          </Link>
          <Link
            href="/steden"
            className="nav-link px-5 py-2 text-white/50 hover:text-white rounded-full text-sm font-medium transition-colors"
          >
            Steden
          </Link>
          <Link
            href="/categorieen"
            className="nav-link px-5 py-2 text-white/50 hover:text-white rounded-full text-sm font-medium transition-colors"
          >
            Categorie&euml;n
          </Link>
          <Link
            href="/nieuws"
            className="nav-link px-5 py-2 text-white/50 hover:text-white rounded-full text-sm font-medium transition-colors"
          >
            Nieuws
          </Link>
          <Link
            href="/reviews"
            className="nav-link px-5 py-2 text-white/50 hover:text-white rounded-full text-sm font-medium transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/vergelijk"
            className="nav-link px-5 py-2 text-white/50 hover:text-white rounded-full text-sm font-medium transition-colors"
          >
            Vergelijk
          </Link>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all">
            <LogIn className="w-4 h-4" />
            Login
          </button>
          <Link
            href="/schrijf-review"
            className="px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors active:scale-95"
          >
            Schrijf Review
          </Link>
        </div>
      </div>
    </nav>
  );
}
