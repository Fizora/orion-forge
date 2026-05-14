"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  slug: string;
}

export function BlogList({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter berdasarkan kategori
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset halaman saat ganti kategori
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Format tanggal
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
      <div className="w-full md:w-1/2">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Daftar blog (flex-col, rata kiri) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8"
          >
            {paginatedPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ x: 4 }}
                className="group border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex flex-col gap-2">
                  {/* Kategori & tanggal */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                      <FaTag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Judul */}
                  <h2 className="text-2xl font-bold font-mono text-gray-900 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  {/* Tombol baca */}
                  <div className="mt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors group/link"
                    >
                      Read Article
                      <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No blog posts found in this category.
          </div>
        )}

        {renderPagination()}
      </div>
    </div>
  );
}
