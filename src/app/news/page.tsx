import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NewsList, NewsItem } from "@/components/NewsList";
import { Metadata } from "next";
import { FaNewspaper, FaGlobe, FaCalendarAlt, FaRocket } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | News & Updates",
  description:
    "Latest news, mission updates, press releases, and technology breakthroughs from Orion Forge.",
};

// Data berita statis (bisa diganti dengan CMS nanti)
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "AETHER-1 Constellation Reaches 95% Global Coverage",
    date: "2025-03-15",
    category: "Mission Update",
    description:
      "The AETHER-1 satellite network now provides IoT connectivity across 95% of Earth's surface, enabling remote asset tracking and environmental monitoring.",
    slug: "aether-1-global-coverage",
  },
  {
    id: 2,
    title: "Orion Forge Awarded Contract for Lunar ISRU Demonstrator",
    date: "2025-03-10",
    category: "Press Release",
    description:
      "NASA selects Orion Forge to develop an in-situ resource utilization (ISRU) system for extracting water ice at the lunar south pole.",
    slug: "lunar-isru-contract",
  },
  {
    id: 3,
    title: "Successful Hot-Fire Test of NOVA Hall-Effect Thruster",
    date: "2025-03-05",
    category: "Technology",
    description:
      "The NOVA propulsion system achieved 3,200 seconds Isp during a 500-hour endurance test, validating deep-space readiness.",
    slug: "nova-thruster-test",
  },
  {
    id: 4,
    title: "Orion Forge Opens R&D Facility in Seattle",
    date: "2025-02-28",
    category: "Company",
    description:
      "New 50,000 sq ft facility will focus on advanced avionics and autonomous rendezvous technologies.",
    slug: "seattle-rd-facility",
  },
  {
    id: 5,
    title: "STARLIGHT Observatory Passes Critical Design Review",
    date: "2025-02-20",
    category: "Mission Update",
    description:
      "The space telescope's optical bench and coronagraph instrument are approved for manufacturing.",
    slug: "starlight-cdr",
  },
  {
    id: 6,
    title: "Partnership with SpaceX for Polaris Crew Module Launch",
    date: "2025-02-14",
    category: "Press Release",
    description:
      "SpaceX will provide launch services for the first uncrewed orbital test of the Polaris capsule in 2027.",
    slug: "polaris-spacex-partnership",
  },
  {
    id: 7,
    title: "AI-Based Collision Avoidance System for Satellite Constellations",
    date: "2025-02-07",
    category: "Technology",
    description:
      "Machine learning algorithms reduce conjunction alerts by 80% while improving maneuver efficiency.",
    slug: "ai-collision-avoidance",
  },
  {
    id: 8,
    title: "Orion Forge Named One of Fast Company's Most Innovative Companies",
    date: "2025-01-30",
    category: "Company",
    description:
      "Recognition for developing low-cost lunar infrastructure and green propulsion systems.",
    slug: "fast-company-innovative",
  },
  {
    id: 9,
    title: "Artemis Horizon Lander Completes Thermal Vacuum Testing",
    date: "2025-01-22",
    category: "Mission Update",
    description:
      "The lander survived extreme lunar night conditions, proving its thermal control system.",
    slug: "artemis-horizon-thermal-test",
  },
  {
    id: 10,
    title:
      "Orion Forge to Present at International Astronautical Congress 2025",
    date: "2025-01-15",
    category: "Event",
    description:
      "Chief Engineer Dr. Elena Voss will keynote on 'Commercial Lunar Infrastructure: The Next Decade'.",
    slug: "iac-2025-keynote",
  },
];

// Kategori unik untuk filter (opsional)
const categories = [
  "All",
  "Mission Update",
  "Press Release",
  "Technology",
  "Company",
  "Event",
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section - Light Mode */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 right-10 w-56 h-56 bg-red-100 rounded-full blur-3xl -z-10 opacity-50" />

          <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaNewspaper className="w-4 h-4" />
                <span className="tracking-wide">LATEST UPDATES</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                NEWS<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                Mission milestones, press releases, technology breakthroughs —
                follow our journey to expand human presence in space.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-red-500" />
                  <span>12 Active Missions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-red-500" />
                  <span>Est. 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRocket className="text-red-500" />
                  <span>3 Launches in 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News List with Filter & Pagination */}
        <NewsList newsItems={newsData} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
