import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BlogList, BlogPost } from "@/components/BlogList";
import { Metadata } from "next";
import { FaPenFancy, FaCalendarAlt, FaTags } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orion Forge | Blog",
  description:
    "Insights, stories, and technical deep-dives from the Orion Forge team on space technology, engineering, and innovation.",
};

// Data blog statis
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of In-Space Manufacturing",
    date: "2025-03-18",
    category: "Technology",
    description:
      "How microgravity enables production of high-value materials and components that can't be made on Earth.",
    slug: "future-in-space-manufacturing",
  },
  {
    id: 2,
    title: "Building a Culture of Safety in NewSpace",
    date: "2025-03-12",
    category: "Culture",
    description:
      "Lessons from traditional aerospace applied to agile commercial space operations.",
    slug: "safety-culture-newspace",
  },
  {
    id: 3,
    title: "Why We Chose Krypton for Our Hall-Effect Thrusters",
    date: "2025-03-05",
    category: "Engineering",
    description:
      "A technical comparison between xenon and krypton for electric propulsion systems.",
    slug: "krypton-hall-effect-thrusters",
  },
  {
    id: 4,
    title: "Autonomous Rendezvous: Algorithms and Challenges",
    date: "2025-02-27",
    category: "Engineering",
    description:
      "Exploring the computer vision and control systems that enable spacecraft to dock without human intervention.",
    slug: "autonomous-rendezvous-algorithms",
  },
  {
    id: 5,
    title: "The Economics of Lunar Water Extraction",
    date: "2025-02-20",
    category: "Business",
    description:
      "Analyzing the potential market for lunar-derived propellant and life support resources.",
    slug: "economics-lunar-water",
  },
  {
    id: 6,
    title: "From Apollo to Artemis: Lessons Learned",
    date: "2025-02-14",
    category: "History",
    description:
      "What modern lunar programs can learn from the successes and failures of the Apollo era.",
    slug: "apollo-to-artemis-lessons",
  },
  {
    id: 7,
    title: "Simulating Space Environments on Earth",
    date: "2025-02-07",
    category: "Technology",
    description:
      "How thermal vacuum chambers, vibration tables, and radiation facilities prepare hardware for orbit.",
    slug: "simulating-space-environments",
  },
  {
    id: 8,
    title: "Women in Space: Pioneers and Future Leaders",
    date: "2025-01-30",
    category: "Culture",
    description:
      "Celebrating contributions of women to space exploration and the path forward.",
    slug: "women-in-space-pioneers",
  },
];

const categories = [
  "All",
  "Technology",
  "Engineering",
  "Culture",
  "Business",
  "History",
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white -z-10" />
          <div className="absolute top-20 left-10 w-56 h-56 bg-red-100 rounded-full blur-3xl -z-10 opacity-40" />

          <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-sm font-mono text-red-600 mb-4">
                <FaPenFancy className="w-4 h-4" />
                <span className="tracking-wide">INSIGHTS & STORIES</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter leading-tight text-gray-900">
                BLOG<span className="text-red-600">.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-red-500 pl-6">
                Deep dives, engineering explainers, and perspectives from the
                frontier of space technology.
              </p>
            </div>
          </div>
        </section>

        {/* Blog List dengan filter & pagination */}
        <BlogList posts={blogPosts} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
