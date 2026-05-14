// app/our-team/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaRocket,
  FaMicrochip,
  FaGlobe,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Our Team – The People Behind the Mission",
  description:
    "Meet the engineers, scientists, and visionaries building the future of space infrastructure. Propulsion, avionics, mission design – we are Orion Forge.",
};

// Data tim (fiktif namun realistis)
const leadershipTeam = [
  {
    name: "Dr. Elena Voss",
    role: "Chief Engineer & Co-Founder",
    bio: "Former propulsion lead at Blue Origin. PhD in plasma physics from MIT. Leads all technical strategy and hardware development.",
    expertise: "Electric Propulsion, Systems Engineering",
    icon: <FaRocket />,
    initials: "EV",
  },
  {
    name: "Marcus Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-SpaceX guidance, navigation & control. MSc in robotics from Stanford. Architect of our autonomous rendezvous software.",
    expertise: "GNC, Computer Vision, AI",
    icon: <FaMicrochip />,
    initials: "MC",
  },
  {
    name: "Sofia Kowalski",
    role: "Mission Design Director",
    bio: "Previously at NASA JPL working on Mars landers. Leads trajectory analysis and mission planning for lunar and deep space.",
    expertise: "Orbital Mechanics, Mission Analysis",
    icon: <FaGlobe />,
    initials: "SK",
  },
];

const engineeringTeam = [
  {
    name: "Dr. James Okonkwo",
    role: "Senior Propulsion Engineer",
    bio: "Developed the NOVA Hall-effect thruster. PhD in electric propulsion from University of Michigan.",
    expertise: "Plasma Physics, Thruster Design",
    initials: "JO",
  },
  {
    name: "Priya Mehta",
    role: "Avionics Lead",
    bio: "Formerly at Rocket Lab, designed flight computers for Electron. Leads our C&DH systems.",
    expertise: "Embedded Systems, FPGA",
    initials: "PM",
  },
  {
    name: "Lars Hendrickson",
    role: "Structural Analyst",
    bio: "Specializes in lightweight composites for space applications. MS from Delft.",
    expertise: "FEA, Composites, Thermal",
    initials: "LH",
  },
  {
    name: "Yuki Tanaka",
    role: "Software Architect",
    bio: "Built the ground control software for AETHER-1. Expert in real-time distributed systems.",
    expertise: "Rust, Go, Distributed Systems",
    initials: "YT",
  },
  {
    name: "Isabella Rossi",
    role: "Mission Integrator",
    bio: "Coordinates payload integration and launch logistics. Previously at Arianespace.",
    expertise: "Project Management, Launch Ops",
    initials: "IR",
  },
  {
    name: "David O'Malley",
    role: "Test & Verification Lead",
    bio: "Oversees all environmental testing: TVAC, vibration, radiation. Ensures flight readiness.",
    expertise: "Test Engineering, Quality",
    initials: "DO",
  },
];

export default function OurTeam() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen pt-20">
        {/* Hero Section - Light mode */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl -z-10 opacity-30" />

          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaUsers className="w-4 h-4" />
                <span className="tracking-wide">HUMANS OF ORION FORGE</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                THE TEAM<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                We are engineers, scientists, and dreamers. Together, we build
                the technology that takes humanity further.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              LEADERSHIP
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2" />
            <p className="text-gray-500 mt-4 max-w-2xl">
              The visionaries who set our course and ensure we stay true to our
              mission.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 border border-red-200">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-red-600 text-sm">{person.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {person.bio}
                </p>
                <p className="text-xs text-gray-400 font-mono">
                  <span className="text-red-500">Expertise:</span>{" "}
                  {person.expertise}
                </p>
                <div className="flex gap-3 mt-4 pt-3 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FaTwitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Team Grid */}
        <section className="container mx-auto px-6 py-12 md:py-20 bg-gray-50">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              ENGINEERING
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2" />
            <p className="text-gray-500 mt-4 max-w-2xl">
              The builders, testers, and problem‑solvers who make the impossible
              fly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringTeam.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{person.name}</h3>
                    <p className="text-red-600 text-xs">{person.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {person.bio}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                    {person.expertise.split(",")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Careers */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <FaChartLine className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-black font-mono text-gray-900">
              JOIN THE FORGE
            </h2>
            <p className="text-gray-600 mt-3">
              We’re always looking for exceptional engineers, scientists, and
              operators. Help us build the next era of space exploration.
            </p>
            <div className="mt-8">
              <a
                href="/company/career"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition"
              >
                View Open Positions
                <FaRocket size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
