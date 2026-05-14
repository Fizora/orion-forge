// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import {
  FaRocket,
  FaGlobe,
  FaUsers,
  FaTrophy,
  FaEye,
  FaBullseye,
  FaChartLine,
  FaCalendarAlt,
  FaStar,
  FaMicrochip,
  FaSatellite,
  FaMoon,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | About Us – Forging the Next Era of Space Exploration",
  description:
    "Orion Forge builds advanced spacecraft, satellite constellations, and lunar infrastructure. Meet our mission, values, and the team behind the technology.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl -z-10 opacity-30" />

          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaRocket className="w-4 h-4" />
                <span className="tracking-wide">SINCE 2022</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                FORGING THE<span className="text-red-600"> FRONTIER</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                We don’t just build spacecraft. We build the infrastructure,
                propulsion, and intelligence that make humanity a multi‑planet
                species.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction – Real story */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-4xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              Orion Forge was founded in a converted warehouse in Seattle’s Sodo
              district, where a handful of ex‑Blue Origin, SpaceX, and NASA
              engineers decided they could build faster, cheaper, and smarter.
              We didn’t wait for government contracts or venture capital – we
              built our first thruster with off‑the‑shelf parts and a lot of
              stubbornness.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Today, we’re a 45‑person team of propulsion physicists, guidance
              engineers, software architects, and mission designers. Our
              hardware flies on three continents, our software runs on two
              orbital platforms, and our lunar lander is scheduled for a 2026
              touchdown.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We remain independent, fiercely focused on{" "}
              <span className="text-red-600 font-semibold">
                in‑space manufacturing
              </span>
              ,
              <span className="text-red-600 font-semibold">
                {" "}
                green propulsion
              </span>
              , and
              <span className="text-red-600 font-semibold">
                {" "}
                orbital logistics
              </span>
              . No fluff. No legacy thinking. Just engineering that works.
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards – 2 column grid */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <FaEye className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold font-mono text-gray-900 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to space by delivering reliable,
                affordable propulsion and orbital infrastructure – enabling a
                new generation of scientific, commercial, and exploratory
                missions beyond LEO.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <FaBullseye className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold font-mono text-gray-900 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A sustainable human presence throughout the solar system,
                powered by technologies forged here on Earth and assembled in
                orbit. We see a future where space is as accessible as the open
                ocean.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline – key milestones */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              FROM GARAGE TO ORBIT
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                year: "2022",
                event:
                  "Founded in Seattle. First prototype Hall-effect thruster runs on a workbench.",
              },
              {
                year: "2023",
                event:
                  "Seed funding closed. Opened R&D lab with thermal vacuum chamber.",
              },
              {
                year: "2024",
                event:
                  "AETHER-1 satellites commissioned. First on-orbit demonstration.",
              },
              {
                year: "2025",
                event:
                  "NOVA propulsion system passes full qualification. Lunar lander CDR.",
              },
              {
                year: "2026",
                event:
                  "Artemis Horizon lander scheduled for lunar south pole mission.",
              },
              {
                year: "2027",
                event: "Planned orbital shipyard assembly demo.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-4 border-l-2 border-red-300 pl-6"
              >
                <div className="md:w-32">
                  <span className="text-red-600 font-mono font-bold">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700 flex-1">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values – 4 columns grid */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
                WHAT WE STAND FOR
              </h2>
              <div className="w-16 h-1 bg-red-500 mt-2"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: FaRocket,
                  title: "Radical Simplicity",
                  desc: "Complexity kills schedules. We obsess over elegant, minimal designs.",
                },
                {
                  icon: FaUsers,
                  title: "Bold Ownership",
                  desc: "Every engineer owns their component from CAD to launch.",
                },
                {
                  icon: FaStar,
                  title: "Radical Transparency",
                  desc: "Customers see our test data. Partners see our roadmap.",
                },
                {
                  icon: FaChartLine,
                  title: "Iterate Fast",
                  desc: "Hardware‑in‑the‑loop every week. Break things, fix them, fly.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <value.icon className="w-8 h-8 text-red-500 mb-3" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team teaser (without real photos) */}
        <section className="container mx-auto px-6 py-16 md:py-20">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              THE PEOPLE BEHIND THE FORGE
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We’re a lean crew of propulsion engineers, avionics hackers, and
              mission architects. Our backgrounds include NASA, SpaceX, Blue
              Origin, and cutting‑edge research labs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Voss",
                role: "Chief Engineer",
                icon: FaMicrochip,
                quote:
                  "Physics doesn't care about your deadlines. That's why we over‑engineer margins.",
              },
              {
                name: "Marcus Chen",
                role: "Propulsion Lead",
                icon: FaSatellite,
                quote:
                  "I've tested thrusters that ran for 2000 hours. Persistence beats brilliance.",
              },
              {
                name: "Sofia Kowalski",
                role: "Mission Design",
                icon: FaMoon,
                quote:
                  "Every mission is a puzzle. We solve it before it launches.",
              },
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group hover:shadow-md transition"
              >
                <person.icon className="w-10 h-10 text-gray-500 group-hover:text-red-500 transition-colors mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-red-600 text-sm font-mono mb-3">
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm italic">“{person.quote}”</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:text-left">
            <a
              href="/our-team"
              className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-800 transition"
            >
              Meet the full team →
            </a>
          </div>
        </section>

        {/* Final CTA / stats */}
        <section className="bg-linear-to-b from-white to-gray-50 py-16 border-t border-gray-100">
          <div className="container mx-auto px-6 text-left">
            <div className="max-w-3xl">
              <FaTrophy className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-3xl font-black font-mono text-gray-900">
                BUILT FOR THE VOID
              </h2>
              <p className="text-gray-600 text-lg mt-4">
                We’re not a PR company. We’re not a think tank. We’re a
                hard‑engineering company that delivers flight‑ready hardware and
                software. No smoke. No mirrors. Just thrust.
              </p>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <span className="text-3xl font-black text-red-600">12</span>
                  <span className="text-gray-600 ml-1">missions in dev</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-red-600">45+</span>
                  <span className="text-gray-600 ml-1">engineers</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-red-600">3</span>
                  <span className="text-gray-600 ml-1">continents</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
