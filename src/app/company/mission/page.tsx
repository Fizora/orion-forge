import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import {
  FaRocket,
  FaSatellite,
  FaMoon,
  FaGlobe,
  FaBullseye,
  FaEye,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Our Mission & Vision",
  description:
    "Orion Forge's mission is to democratize space access through reliable propulsion and orbital infrastructure.",
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-lienar-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaRocket className="w-4 h-4" />
                <span className="tracking-wide">WHY WE EXIST</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                OUR MISSION<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                To build the technology that makes space accessible,
                sustainable, and useful for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black font-mono text-gray-900 mb-4">
              We are Orion Forge
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that the future of humanity lies beyond Earth — not as
              an escape, but as an expansion. Our mission is to{" "}
              <span className="font-semibold text-red-600">
                lower the cost of access to space
              </span>
              by an order of magnitude through intelligent engineering, reusable
              technologies, and a relentless focus on reliability.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Today, we're focused on three pillars:{" "}
              <strong>green electric propulsion</strong>,
              <strong> autonomous orbital logistics</strong>, and{" "}
              <strong>lunar resource utilization</strong>. Tomorrow, the solar
              system.
            </p>
          </div>
        </section>

        {/* Key objectives */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <FaSatellite className="w-10 h-10 text-red-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Democratize Access
                </h3>
                <p className="text-gray-600">
                  Provide affordable rideshare and dedicated launch for small
                  satellites.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <FaMoon className="w-10 h-10 text-red-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enable Lunar Economy
                </h3>
                <p className="text-gray-600">
                  Deploy infrastructure for water extraction and in-situ
                  resource utilization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <FaGlobe className="w-10 h-10 text-red-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Connectivity
                </h3>
                <p className="text-gray-600">
                  Complete the AETHER constellation for IoT everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & strategy */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <FaEye className="w-10 h-10 text-red-500 mb-4" />
            <h2 className="text-3xl font-black font-mono text-gray-900 mb-4">
              Our Vision for 2030
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              By the end of the decade, Orion Forge will have deployed over 500
              satellites, enabled three commercial lunar missions, and
              established the first privately-owned orbital depot for propellant
              storage. We will have helped at least a dozen scientific
              institutions fly their payloads at a fraction of today's costs.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <span className="text-3xl font-black text-red-600">500+</span>
                <span className="text-gray-600 ml-1">satellites</span>
              </div>
              <div>
                <span className="text-3xl font-black text-red-600">3</span>
                <span className="text-gray-600 ml-1">lunar missions</span>
              </div>
              <div>
                <span className="text-3xl font-black text-red-600">90%</span>
                <span className="text-gray-600 ml-1">propellant reuse</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
