import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import {
  FaChartLine,
  FaHandshake,
  FaLock,
  FaEnvelope,
  FaFileAlt,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Investment Opportunities",
  description:
    "Orion Forge is building the future of space infrastructure. Learn about our funding rounds and investor relations.",
};

export default function InvestmentPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaChartLine className="w-4 h-4" />
                <span className="tracking-wide">INVESTOR RELATIONS</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                INVEST<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                Join us in building the commercial space infrastructure of
                tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black font-mono text-gray-900 mb-4">
              Why Invest in Orion Forge
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The space economy is projected to reach $1.8 trillion by 2035.
              Orion Forge is positioned at the intersection of{" "}
              <strong>satellite communications</strong>,
              <strong> in-space manufacturing</strong>, and{" "}
              <strong>lunar resources</strong>. We've already demonstrated
              flight-proven technology and secured early customer commitments.
            </p>
          </div>
        </section>

        {/* Key metrics */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-red-600">$12M</div>
                <div className="text-gray-600 text-sm">Seed + Series A</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-600">45+</div>
                <div className="text-gray-600 text-sm">Team members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-600">3</div>
                <div className="text-gray-600 text-sm">Patents pending</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-600">2026</div>
                <div className="text-gray-600 text-sm">First lunar landing</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold font-mono text-gray-900 mb-2">
              Interested in investing?
            </h3>
            <p className="text-gray-600 mb-4">
              We are currently open to strategic investors and family offices.
              Please contact our investor relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:invest@orionforge.com"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                <FaEnvelope /> invest@orionforge.com
              </a>
              <a
                href="/investment-deck.pdf"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition"
              >
                <FaFileAlt /> Download Investor Deck
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              * This does not constitute an offer to sell securities. All
              investments involve risk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
