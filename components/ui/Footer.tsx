import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <span className="text-lg font-bold tracking-tight text-white">
                ero<span className="text-fuchsia-400">plein</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Eerlijke ervaringen en reviews. Ontdek, beleef en deel.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Directory</h4>
            <ul className="space-y-3">
              <li><Link href="/steden" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Alle steden</Link></li>
              <li><Link href="/categorieen" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Categorie&euml;n</Link></li>
              <li><Link href="/steden" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Nieuw toegevoegd</Link></li>
              <li><Link href="/steden" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Meest beoordeeld</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3">
              <li><Link href="/reviews" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Recente reviews</Link></li>
              <li><Link href="/nieuws" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Nieuws</Link></li>
              <li><Link href="/schrijf-review" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Review schrijven</Link></li>
            </ul>
          </div>

          {/* Over ons */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Over Eroplein</h4>
            <ul className="space-y-3">
              <li><Link href="/over-ons" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Over ons</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Privacybeleid</Link></li>
              <li><Link href="/voorwaarden" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Voorwaarden</Link></li>
            </ul>
          </div>

          {/* Bedrijven */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Voor bedrijven</h4>
            <ul className="space-y-3">
              <li><Link href="/claim" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Claim je pagina</Link></li>
              <li><Link href="/adverteren" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">Adverteren</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.06] gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Eroplein. Alle rechten voorbehouden. 18+
          </p>
        </div>
      </div>
    </footer>
  );
}
