import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eroplein - Eerlijke Ervaringen & Reviews",
    template: "%s | Eroplein",
  },
  description:
    "Ontdek de beste plekken in Nederland. Lees eerlijke ervaringen en reviews van echte bezoekers. Escorts, clubs, massage en meer in 42+ steden.",
  keywords: [
    "ervaringen",
    "reviews",
    "escorts",
    "clubs",
    "erotische massage",
    "privehuizen",
    "nederland",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Eroplein",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0c0c0e] text-white min-h-screen overflow-x-hidden selection:bg-fuchsia-500/30 grain font-sans antialiased">
        {/* Subtle background glow */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[30%] -left-[20%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-fuchsia-900/15 blur-[180px]" />
          <div
            className="absolute top-[40%] -right-[15%] w-[35vw] h-[35vw] rounded-full bg-pink-900/10 blur-[160px]"
          />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
