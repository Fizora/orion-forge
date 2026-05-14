import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaGlobe,
  FaClock,
  FaMapPin,
  FaDollarSign,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Careers – Join the Mission",
  description:
    "Join Orion Forge as an engineer, scientist, or mission specialist. We're building the future of space exploration. View open positions.",
};

// Data lowongan kerja
const openPositions = [
  {
    id: 1,
    title: "Senior Propulsion Engineer",
    department: "Engineering",
    location: "Seattle, WA (Hybrid)",
    type: "Full-time",
    posted: "2025-03-10",
    description:
      "Design, test, and qualify Hall-effect thrusters for orbital and lunar missions.",
  },
  {
    id: 2,
    title: "Guidance, Navigation & Control Engineer",
    department: "Avionics",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "2025-03-05",
    description:
      "Develop autonomous rendezvous algorithms for satellite servicing and docking.",
  },
  {
    id: 3,
    title: "Mission Systems Architect",
    department: "Mission Design",
    location: "Remote (US)",
    type: "Full-time",
    posted: "2025-03-01",
    description:
      "Lead end-to-end mission design for lunar landers and orbital infrastructure.",
  },
  {
    id: 4,
    title: "Software Engineer – Flight Software",
    department: "Software",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "2025-02-25",
    description: "Write high-assurance C++/Rust for on-orbit flight computers.",
  },
  {
    id: 5,
    title: "Thermal Systems Engineer",
    department: "Mechanical",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "2025-02-20",
    description:
      "Design passive and active thermal control for spacecraft in extreme environments.",
  },
  {
    id: 6,
    title: "Intern – Propulsion (Summer 2025)",
    department: "Internship",
    location: "Seattle, WA",
    type: "Internship",
    posted: "2025-02-15",
    description:
      "Support thruster testing and data analysis. Open to current undergrad/grad students.",
  },
];

// Nilai perusahaan
const values = [
  {
    icon: FaRocket,
    title: "Bold Engineering",
    desc: "We take calculated risks to push performance.",
  },
  {
    icon: FaUsers,
    title: "Radical Collaboration",
    desc: "Every voice matters – from intern to CTO.",
  },
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    desc: "Weekly tech talks, external training, and conference budgets.",
  },
  {
    icon: FaGlobe,
    title: "Mission-Driven",
    desc: "Your work directly enables lunar and deep-space exploration.",
  },
];

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />

          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaRocket className="w-4 h-4" />
                <span className="tracking-wide">JOIN THE MISSION</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                CAREERS<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                We're building spacecraft, satellites, and lunar infrastructure.
                If you want to work on things that actually fly, you belong
                here.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaMapPin className="text-red-500" />
                  <span>Seattle, WA + Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-500" />
                  <span>Full-time & Internships</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-red-500" />
                  <span>Global team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              HOW WE WORK
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <value.icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-mono text-gray-900">
              OPEN ROLES
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Currently {openPositions.length} positions available. We update
              this list weekly.
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaBriefcase size={12} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock size={12} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaDollarSign size={12} /> {job.posted}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {job.description}
                    </p>
                  </div>
                  <Link
                    href={`/company/career/${job.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition text-sm font-medium whitespace-nowrap"
                  >
                    Apply Now
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              Don't see the right role?{" "}
              <Link
                href="/company/career/speculative"
                className="text-red-600 hover:underline"
              >
                Send us your resume
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold font-mono text-gray-900">
                Ready to build the future?
              </h2>
              <p className="text-gray-600 mt-2">
                We can't wait to meet you. Apply now or reach out to our talent
                team.
              </p>
              <a
                href="mailto:careers@orionforge.com"
                className="inline-flex items-center gap-2 mt-4 text-red-600 font-medium hover:text-red-700"
              >
                careers@orionforge.com <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
