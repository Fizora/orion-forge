import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaRocket,
  FaNewspaper,
  FaArrowRight,
  FaStar,
  FaSatellite,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Careers", href: "/company/career" },
    { name: "Press", href: "/news" },
  ];

  const missionLinks = [
    { name: "AETHER-1", href: "/projects/aether-1" },
    { name: "Artemis Horizon", href: "/projects/artemis-horizon" },
    { name: "NOVA Propulsion", href: "/projects/nova" },
    { name: "STARLIGHT", href: "/projects/starlight" },
  ];

  const techLinks = [
    { name: "Hall-Effect Thrusters", href: "/technology/thrusters" },
    { name: "Autonomous Rendezvous", href: "/technology/avionics" },
    { name: "Lunar ISRU", href: "/technology/isru" },
    { name: "Orbital Logistics", href: "/technology/logistics" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-black font-mono tracking-tighter">
                ORION
                <span className="text-red-500 group-hover:text-red-400 transition">
                  {" "}
                  FORGE
                </span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the infrastructure, propulsion, and intelligence for
              humanity’s multi‑planet future.
            </p>
            {/* Decorative mini stats */}
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-1">
                <FaSatellite className="text-gray-600 text-xs" />
                <span className="text-xs text-gray-500">12 missions</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-gray-600 text-xs" />
                <span className="text-xs text-gray-500">45+ engineers</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://twitter.com/orionforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/orionforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/orionforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://youtube.com/orionforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Missions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Active Missions
            </h3>
            <ul className="space-y-2">
              {missionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <FaRocket
                      size={10}
                      className="text-gray-600 group-hover:text-red-400 transition"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect & Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Connect
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest mission updates and tech deep-dives.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
                <FaArrowRight size={12} />
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              No spam. Unsubscribe anytime.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <a
                href="mailto:hello@orionforge.com"
                className="text-gray-400 hover:text-red-400 text-sm flex items-center gap-2 transition"
              >
                hello@orionforge.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with gradient border */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
          <div className="font-mono tracking-tight">
            © {currentYear} Orion Forge. All rights reserved.
          </div>
        </div>
      </div>

      {/* Decorative background noise (optional subtle grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-5" />
    </footer>
  );
};

export default Footer;
