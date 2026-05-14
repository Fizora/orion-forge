import Link from "next/link";

const Footer = () => {
  const serviceItems = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "SEO Optimization", href: "#" },
    { name: "Database Architecture", href: "#" },
  ];

  const companyItems = [
    { name: "About Us", href: "/company" },
    { name: "Our Projects", href: "/projects" },
    { name: "Latest News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Services */}
          <nav className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Expertise
            </h3>
            {serviceItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Column 2: Company */}
          <nav className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Company
            </h3>
            {companyItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Column 3: Contact/Newsletter (Optional) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Connect
            </h3>
            <p className="text-gray-400 text-sm">
              Have a project in mind? Let’s forge it together.
            </p>
            <a
              href="mailto:hello@orionforge.com"
              className="text-white underline underline-offset-4 hover:text-gray-300"
            >
              hello@orionforge.com
            </a>
          </div>
        </div>

        {/* Bottom Section: Brand Profile */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-gray-900">
          <div className="max-w-md">
            <h2 className="text-3xl font-black font-mono mb-4">ORION FORGE.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Orion Forge is a premier digital laboratory specializing in
              high-performance software engineering and conversion-centric
              design. We bridge the gap between complex backend architecture and
              seamless user experiences for global innovators.
            </p>
          </div>
          <div className="text-gray-600 text-xs font-mono uppercase tracking-tighter">
            &copy; {new Date().getFullYear()} Orion Forge. All rights reserved.
            Built for the future.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
