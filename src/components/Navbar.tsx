"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Company", href: "/company" },
    { name: "Insights", href: "/blog" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 fixed w-full top-0 left-0 z-[100]">
      <div className="mx-auto container flex items-center justify-between relative">
        <Link href="/" className="z-[110]">
          <h1 className="text-black font-black text-xl tracking-tighter font-mono uppercase">
            Orion Forge
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-gray-200 mx-2" />
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-black"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 bg-black text-white text-sm font-bold hover:bg-gray-800 transition-all rounded-sm"
          >
            OUR TEAM
          </Link>
        </nav>

        <button
          className="md:hidden z-100 p-2 relative w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-3" : "top-1"
            }`}
          />
          <span
            className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-3"
            }`}
          />
          <span
            className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          />
        </button>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden fixed top-0 right-0 h-screen w-full bg-white
            z-80 flex flex-col items-center justify-center gap-8
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black font-mono hover:text-gray-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black font-mono hover:text-gray-800 transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all rounded-sm"
          >
            OUR TEAM
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
