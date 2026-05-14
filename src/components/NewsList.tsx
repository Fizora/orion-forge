"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaTag,
  FaRocket,
  FaMicrochip,
  FaBuilding,
  FaBullhorn,
} from "react-icons/fa";

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  slug: string;
}

export function NewsList({
  newsItems,
  categories,
}: {
  newsItems: NewsItem[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter berdasarkan kategori
  const filteredNews =
    activeCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset halaman saat ganti kategori
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Ikon kategori (light mode)
  const getCategoryIcon = (cat: string) => {
    const iconClass =
      "text-gray-500 group-hover:text-red-500 transition-colors";
    switch (cat) {
      case "Mission Update":
        return <FaRocket className={iconClass} />;
      case "Technology":
        return <FaMicrochip className={iconClass} />;
      case "Company":
        return <FaBuilding className={iconClass} />;
      case "Press Release":
        return <FaBullhorn className={iconClass} />;
      default:
        return <FaTag className={iconClass} />;
    }
  };

  // Format tanggal ke "March 15, 2025"
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Render pagination
  const renderPagination = () => {
    if (totalPages <= 1) return null;

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
      {/* Filter tabs */}
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

      {/* Grid berita */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {paginatedNews.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex flex-col gap-3">
                {/* Header: kategori & tanggal */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div>

                {/* Judul */}
                <h3 className="text-xl font-bold font-mono text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Tombol baca selengkapnya */}
                <div className="flex items-center justify-end mt-2 pt-2 border-t border-gray-100">
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors group/link"
                  >
                    Read More
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredNews.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No news articles found in this category.
        </div>
      )}

      {renderPagination()}
    </div>
  );
}
