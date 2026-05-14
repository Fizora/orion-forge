"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  // Tutup dropdown saat menu mobile ditutup
  useEffect(() => {
    if (!isOpen) {
      setCompanyDropdownOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
  ];

  const companySubItems = [
    { name: "Career", href: "/company/career" },
    { name: "Mission", href: "/company/mission" },
    { name: "Investment", href: "/company/investment" },
    { name: "Structure", href: "/company/structure" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 fixed w-full top-0 left-0 z-50">
      <div className="mx-auto container flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="z-100">
          <h1 className="text-black font-black text-xl tracking-tighter font-mono">
            ORION FORGE.
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Company Dropdown (Desktop) */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-black transition-colors"
              aria-expanded="false"
            >
              Company
              <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
              {companySubItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-4 w-px bg-gray-200" />
          <Link
            href="/about"
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            About
          </Link>
          <Link
            href="/our-team"
            className="px-5 py-2 bg-black text-white text-sm font-black hover:bg-red-600 hover:text-black transition-all rounded-sm"
          >
            OUR TEAM
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[110] p-2 relative w-8 h-8 focus:outline-none"
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

        {/* Mobile Menu (Fullscreen) */}
        <div
          className={`
            md:hidden fixed top-0 right-0 h-screen w-full bg-white
            z-80 flex flex-col justify-center gap-6 px-4
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

          {/* Company Section di Mobile (dengan toggle) */}
          <div className="text-center">
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="text-3xl font-black font-mono hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              Company
              <FaChevronDown
                className={`w-5 h-5 transition-transform ${
                  companyDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {companyDropdownOpen && (
              <div className="mt-4 flex flex-col gap-3">
                {companySubItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-mono text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black font-mono hover:text-gray-800 transition-colors"
          >
            About
          </Link>

          <Link
            href="/our-team"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-black text-white font-bold text-lg transition-all rounded-sm hover:bg-red-600 hover:text-black"
          >
            OUR TEAM
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
