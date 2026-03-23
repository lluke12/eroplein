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
    default: "Eroplein - Reviews Erotische Diensten Nederland",
    template: "%s | Eroplein",
  },
  description:
    "Eerlijke reviews en ervaringen over escorts, clubs, massage en meer in 42+ Nederlandse steden. Vergelijk bedrijven, lees beoordelingen en maak de beste keuze.",
  keywords: [
    "escort reviews",
    "ervaringen",
    "erotische massage",
    "privéhuis",
    "parenclub",
    "stripclub",
    "saunaclub",
    "nederland",
    "beoordelingen",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Eroplein",
    title: "Eroplein - Reviews Erotische Diensten Nederland",
    description:
      "Eerlijke reviews en ervaringen over escorts, clubs, massage en meer in 42+ Nederlandse steden.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eroplein - Reviews Erotische Diensten Nederland",
    description:
      "Eerlijke reviews en ervaringen over escorts, clubs, massage en meer in 42+ Nederlandse steden.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://eroplein.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#111114] text-white min-h-screen overflow-x-hidden selection:bg-fuchsia-500/30 grain font-sans antialiased">
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
