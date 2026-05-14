"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaSatellite,
  FaMoon,
  FaRobot,
  FaRocket,
  FaUserAstronaut,
} from "react-icons/fa";
import { LuTelescope } from "react-icons/lu";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
  status: string;
  launchDate: string;
}

export function ProjectFilter({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter berdasarkan kategori
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset halaman ke 1 saat kategori berubah
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Ikon kategori (warna abu-abu/merah sesuai light mode)
  const getCategoryIcon = (cat: string) => {
    const iconClass =
      "text-gray-600 group-hover:text-red-500 transition-colors";
    switch (cat) {
      case "Satellite Constellation":
        return <FaSatellite className={iconClass} />;
      case "Lunar Mission":
        return <FaMoon className={iconClass} />;
      case "Orbital Infrastructure":
        return <FaRobot className={iconClass} />;
      case "Propulsion Technology":
        return <FaRocket className={iconClass} />;
      case "Space Telescope":
        return <LuTelescope className={iconClass} />;
      case "Human Spaceflight":
        return <FaUserAstronaut className={iconClass} />;
      default:
        return <FaSatellite className={iconClass} />;
    }
  };

  // Warna status (light mode: background abu-abu muda, teks abu-abu gelap)
  const statusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Prototype":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Testing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Design Phase":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  // Render nomor halaman
  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-start items-center gap-2 mt-12">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
        >
          Prev
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 text-sm rounded-md transition ${
              currentPage === num
                ? "bg-red-600 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {/* Filter tabs - light mode */}
      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-1.5 text-sm font-mono rounded-full transition-all duration-200 ${
              activeCategory === cat
                ? "bg-red-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid proyek tanpa gambar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {paginatedProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex flex-col gap-3">
                {/* Header dengan ikon dan kategori */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${statusColor(
                      project.status,
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Judul */}
                <h3 className="text-xl font-bold font-mono text-gray-900 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tahun dan tombol */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-mono">
                    Est. {project.launchDate}
                  </span>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors group/link"
                  >
                    Brief
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pesan jika tidak ada proyek */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No space missions found in this category.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && renderPagination()}
    </div>
  );
}
