'use client';

import { useState } from "react";
import BlogCardUi from "../ui/blogcardui";
import AddBlogButton from "../BlogCard/AddBlogButton";
import { Search, Filter } from "lucide-react";

const categories = [
  "All",
  "Manicures",
  "Pedicures",
  "Gel Nails",
  "Nail Extensions",
  "Nail Art & Design",
];

const blogs = [
  {
    author: "Jacob Jones",
    title: "How to keep your nails healthy appointments",
    description:
      "Proper care at home is just as important as salon treatments. Here’s how to protect your nail",
    image: "/blog1.jpg",
    avatar: "/author.jpg",
  },
  {
    author: "Jacob Jones",
    title: "Nail care tips for long-lasting polish",
    description:
      "Keep your nails looking fresh with these easy, practical aftercare tips.",
    image: "/blog1.jpg",
    avatar: "/author.jpg",
  },
  {
    author: "Jacob Jones",
    title: "Choosing the best manicure style for you",
    description:
      "Learn how to match your manicure with your personality and occasion.",
    image: "/blog1.jpg",
    avatar: "/author.jpg",
  },
  {
    author: "Jacob Jones",
    title: "Trendy nail art ideas for 2025",
    description:
      "Discover the most creative nail art trends that will dominate this year.",
    image: "/blog1.jpg",
    avatar: "/author.jpg",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter blogs by search text (and category if you add later)
  const filteredBlogs = blogs.filter((blog) => {
    const search = searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(search) ||
      blog.description.toLowerCase().includes(search) ||
      blog.author.toLowerCase().includes(search)
    );
  });

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Blogs</h1>
        <AddBlogButton />
      </div>

      {/* Container */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        {/* Top Filter Bar */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          {/* ✅ Interactive Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                  ${
                    activeCategory === cat
                      ? "bg-[#008060] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🔍 Search + Filter */}
          <div className="flex items-center gap-2">
            {/* Search Input with Icon */}
            <div className="flex items-center border border-gray-300 text-sm rounded-lg px-3 py-1.5 bg-white focus-within:border-[#008060] focus-within:ring-2 focus-within:ring-[#008060]/30 transition-all">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // 👈 updates searchTerm dynamically
                className="outline-none bg-transparent text-gray-700 placeholder-gray-500 w-full"
              />
            </div>

            {/* Filter Button with Icon */}
            <button
    className="
       flex items-center border border-gray-300 text-sm rounded-lg px-3 py-1.5
    bg-white text-gray-700 hover:bg-[#008060] hover:text-white
    focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/30
    active:border-[#008060] active:ring-2 active:ring-[#008060]/30
    transition-all
  "
  >
    <Filter size={16} className= "mr-2 transition-colors duration-200" />
    Filter
  </button>
          </div>
        </div>

        {/* Blog Cards (Filtered) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((item, i) => <BlogCardUi key={i} {...item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 italic">
              No blogs found matching “{searchTerm}”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
