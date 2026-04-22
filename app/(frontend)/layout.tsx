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

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eroplein.com"),
  title: {
    default:
      "Eroplein — Reviews escorts, parenclubs, massage & meer in Nederland",
    template: "%s | Eroplein",
  },
  description:
    "Eerlijke reviews en ervaringen over escorts, parenclubs, erotische massage, seksclubs en privéhuizen in 48 Nederlandse steden. Vergelijk bedrijven op basis van echte beoordelingen en maak de beste keuze.",
  keywords: [
    "escort reviews",
    "escort ervaringen",
    "parenclub reviews",
    "erotische massage",
    "privéhuis",
    "seksclub",
    "swingersclub",
    "stripclub",
    "saunaclub",
    "raamprostitutie",
    "seksshop",
    "sekswerk Nederland",
    "beste escort",
    "beoordelingen",
  ],
  applicationName: "Eroplein",
  authors: [{ name: "Eroplein" }],
  creator: "Eroplein",
  publisher: "Eroplein",
  category: "directory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Eroplein",
    url: "https://www.eroplein.com",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@eroplein",
    site: "@eroplein",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  ...(GSC_VERIFICATION && {
    verification: {
      google: GSC_VERIFICATION,
    },
  }),
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-NL" className={`${inter.variable} ${playfair.variable}`}>
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
