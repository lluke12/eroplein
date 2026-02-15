import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-8xl md:text-9xl font-bold text-fuchsia-400 mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto mb-10">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-full font-medium transition-colors active:scale-95"
          >
            Terug naar home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
