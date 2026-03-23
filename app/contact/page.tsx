import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Mail, Building2, HelpCircle, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Eroplein. Vragen over het platform, adverteren of je bedrijfspagina? We helpen je graag.",
  openGraph: {
    title: "Contact | Eroplein",
    description:
      "Neem contact op met Eroplein voor vragen, feedback of samenwerkingen.",
  },
  alternates: {
    canonical: "https://eroplein.com/contact",
  },
};

const contactOptions = [
  {
    icon: Mail,
    title: "Algemene vragen",
    description: "Voor vragen over het platform, je account of reviews.",
    email: "info@eroplein.com",
    response: "Binnen 24 uur",
  },
  {
    icon: Building2,
    title: "Voor bedrijven",
    description:
      "Wil je adverteren, je bedrijf claimen of heb je vragen over je vermelding?",
    email: "adverteren@eroplein.com",
    response: "Binnen 12 uur",
  },
];

const faqLinks = [
  { label: "Hoe schrijf ik een review?", href: "/faq" },
  { label: "Hoe claim ik mijn bedrijf?", href: "/claim" },
  { label: "Wat zijn de advertentiemogelijkheden?", href: "/adverteren" },
  { label: "Hoe wordt mijn privacy beschermd?", href: "/privacy" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-medium text-fuchsia-400/80 tracking-widest uppercase mb-3 block">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-50 mb-4">
              Neem{" "}
              <span className="text-fuchsia-400">contact</span> op
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Heb je een vraag, opmerking of wil je samenwerken? Vul het
              formulier in of stuur ons direct een e-mail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                <h2 className="text-lg font-semibold text-white mb-6">
                  Stuur ons een bericht
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Naam
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Je naam"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="je@email.nl"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Onderwerp
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111114]">
                        Selecteer een onderwerp
                      </option>
                      <option value="algemeen" className="bg-[#111114]">
                        Algemene vraag
                      </option>
                      <option value="review" className="bg-[#111114]">
                        Vraag over een review
                      </option>
                      <option value="bedrijf" className="bg-[#111114]">
                        Mijn bedrijf claimen
                      </option>
                      <option value="adverteren" className="bg-[#111114]">
                        Adverteren
                      </option>
                      <option value="klacht" className="bg-[#111114]">
                        Klacht of melding
                      </option>
                      <option value="anders" className="bg-[#111114]">
                        Anders
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Schrijf je bericht hier..."
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-full bg-fuchsia-500 text-white text-sm font-medium hover:bg-fuchsia-600 transition-colors"
                  >
                    Verstuur bericht
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Options */}
              {contactOptions.map((option) => (
                <div
                  key={option.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4">
                    <option.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {option.description}
                  </p>
                  <a
                    href={`mailto:${option.email}`}
                    className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                  >
                    {option.email}
                  </a>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    Reactietijd: {option.response}
                  </div>
                </div>
              ))}

              {/* FAQ Links */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-4">
                  Veelgestelde vragen
                </h3>
                <ul className="space-y-2">
                  {faqLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between text-sm text-gray-400 hover:text-fuchsia-400 transition-colors group py-1"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
