'use client';

import { useState } from "react";
import GalleryCardui from "../ui/gallerycardui";
import AddGalleryButton from "../GalleryCard/AddGalleryButton";

const categories = [
  "All",
  "Manicures",
  "Pedicures",
  "Gel Nails",
  "Nail Extensions",
  "Nail Art & Design",
];

const galleryItems = [
  {
    title: "Classic french manicure",
    subtitle: "Timeless elegance",
    image: "/gallery1.jpg",
  },
  {
    title: "Classic french manicure",
    subtitle: "Timeless elegance",
    image: "/gallery1.jpg",
  },
  {
    title: "Classic french manicure",
    subtitle: "Timeless elegance",
    image: "/gallery1.jpg",
  },
  {
    title: "Classic french manicure",
    subtitle: "Timeless elegance",
    image: "/gallery1.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Gallery</h1>
        <AddGalleryButton />
      </div>

      {/* Container */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "bg-[#228573] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <GalleryCardui key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
