import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import {
  FaSitemap,
  FaUsers,
  FaMicrochip,
  FaCogs,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Organizational Structure",
  description:
    "Learn about Orion Forge's leadership and departmental structure.",
};

export default function StructurePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaSitemap className="w-4 h-4" />
                <span className="tracking-wide">ORGANIZATION</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                STRUCTURE<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                Flat, agile, and mission-focused. Here's how we're organized.
              </p>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Propulsion",
                desc: "Electric and chemical thrusters, fuel systems, test stands.",
              },
              {
                icon: FaMicrochip,
                title: "Avionics & Software",
                desc: "Flight computers, GNC, ground software, AI.",
              },
              {
                icon: FaCogs,
                title: "Mission Design",
                desc: "Trajectory analysis, constellation planning, lunar landing.",
              },
              {
                icon: FaChartBar,
                title: "Business Development",
                desc: "Customer relations, government affairs, strategy.",
              },
            ].map((dept, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
              >
                <dept.icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {dept.title}
                </h3>
                <p className="text-gray-600">{dept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership team */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black font-mono text-gray-900 mb-8">
              Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Elena Voss",
                  title: "Chief Executive Officer",
                  bg: "Aerospace engineering, ex-NASA",
                },
                {
                  name: "Marcus Chen",
                  title: "CTO, Propulsion",
                  bg: "PhD in plasma physics, ex-SpaceX",
                },
                {
                  name: "Sofia Kowalski",
                  title: "VP of Mission Design",
                  bg: "Former JPL trajectory analyst",
                },
                {
                  name: "David Park",
                  title: "Head of Avionics",
                  bg: "20 years in embedded systems",
                },
                {
                  name: "Rachel Omondi",
                  title: "CFO",
                  bg: "Investment banking, space sector",
                },
                {
                  name: "James Wu",
                  title: "VP of Engineering",
                  bg: "Product development, scaling teams",
                },
              ].map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-gray-200"
                >
                  <h4 className="font-bold text-gray-900">{leader.name}</h4>
                  <p className="text-red-600 text-sm font-mono">
                    {leader.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{leader.bg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-mono text-gray-900 mb-4">
              Governance & Advisory
            </h2>
            <p className="text-gray-700">
              Orion Forge operates under a board of directors with
              representatives from key investors and independent industry
              experts. Our advisory board includes former astronauts, satellite
              operators, and aerospace executives.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                ISO 9001:2025 certified
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                ITAR compliant
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Female-led engineering
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
