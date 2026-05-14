import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectFilter, Project } from "@/components/ProjectFilter";
import { Metadata } from "next";
import { FaRocket, FaGlobe, FaUsers, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Space Missions & Projects",
  description:
    "Explore our orbital projects: satellite constellations, lunar landers, and deep space exploration systems.",
};

// Data proyek (tanpa gambar)
const spaceProjects: Project[] = [
  {
    id: 1,
    title: "AETHER-1",
    category: "Satellite Constellation",
    description:
      "Low-Earth orbit satellite network for global IoT connectivity. 128 satellites launched, 95% coverage.",
    link: "/projects/aether-1",
    tags: ["LEO", "IoT", "Phased Array"],
    status: "Active",
    launchDate: "2024",
  },
  {
    id: 2,
    title: "Artemis Horizon",
    category: "Lunar Mission",
    description:
      "Autonomous lunar lander with drilling capabilities for water-ice extraction at Shackleton Crater.",
    link: "/projects/artemis-horizon",
    tags: ["Lunar", "ISRU", "Autonomous"],
    status: "In Development",
    launchDate: "2026",
  },
  {
    id: 3,
    title: "Orion Forge Shipyard",
    category: "Orbital Infrastructure",
    description:
      "Modular in-space assembly platform for constructing large structures like telescopes and fuel depots.",
    link: "/projects/shipyard",
    tags: ["On-Orbit Servicing", "Robotics", "Modular"],
    status: "Prototype",
    launchDate: "2027",
  },
  {
    id: 4,
    title: "NOVA Propulsion",
    category: "Propulsion Technology",
    description:
      "Hall-effect thruster using krypton, achieving 3,000 seconds Isp. Enables deep-space cubesat missions.",
    link: "/projects/nova",
    tags: ["Electric Propulsion", "Deep Space", "Cubesat"],
    status: "Testing",
    launchDate: "2025",
  },
  {
    id: 5,
    title: "STARLIGHT Observatory",
    category: "Space Telescope",
    description:
      "UV-visible space telescope for exoplanet spectroscopy. 1.5m primary mirror, optimized for habitable zone.",
    link: "/projects/starlight",
    tags: ["Exoplanet", "Spectroscopy", "L2 Orbit"],
    status: "Design Phase",
    launchDate: "2028",
  },
  {
    id: 6,
    title: "Polaris Crew Module",
    category: "Human Spaceflight",
    description:
      "Reusable crew capsule for commercial low-orbit tourism and station resupply. Seats up to 6 astronauts.",
    link: "/projects/polaris",
    tags: ["Human Rating", "Reusable", "Dragon-like"],
    status: "Development",
    launchDate: "2027",
  },
  {
    id: 7,
    title: "Helios Solar Array",
    category: "Satellite Constellation",
    description:
      "High-efficiency solar panels for geostationary satellites, 35% conversion rate.",
    link: "/projects/helios",
    tags: ["Solar", "GEO", "Energy"],
    status: "Testing",
    launchDate: "2025",
  },
  {
    id: 8,
    title: "Odyssey Crew Vehicle",
    category: "Human Spaceflight",
    description:
      "Next-generation crew vehicle for lunar orbital missions, supporting 4 astronauts.",
    link: "/projects/odyssey",
    tags: ["Crew", "Lunar Orbit", "Docking"],
    status: "Design Phase",
    launchDate: "2029",
  },
];

const categories = [
  "All",
  "Satellite Constellation",
  "Lunar Mission",
  "Orbital Infrastructure",
  "Propulsion Technology",
  "Space Telescope",
  "Human Spaceflight",
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section - Light Mode */}
        <section className="relative overflow-hidden">
          {/* Gradien halus latar belakang - tanpa custom blur */}
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 left-10 w-48 h-48 bg-red-100 rounded-full blur-3xl -z-10 opacity-50" />

          <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaRocket className="w-4 h-4" />
                <span className="tracking-wide">MISSION DATABASE</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                PROJECTS<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                From low Earth orbit to the lunar surface — explore the missions
                and technologies we’re forging to expand humanity’s reach among
                the stars.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-red-500" />
                  <span>12 Active Missions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-red-500" />
                  <span>45+ Engineers & Scientists</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-500" />
                  <span>Est. 2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client-side filter, grid, dan pagination */}
        <ProjectFilter projects={spaceProjects} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
