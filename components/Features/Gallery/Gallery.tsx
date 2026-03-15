"use client";
import Hero from "@/components/Reusable/Hero";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

interface GalleryImage {
  image: string;
  title: string;
  subtitle: string;
  span: string;
  category: string;
}

interface TitlePart {
  text: string;
  color: string;
}

const galleryImages: GalleryImage[] = [
  {
    image: "/Images/gallery/gallery-image.jpg",
    title: "Classic french manicure",
    subtitle: "Timeless elegance",
    span: "row-span-2",
    category: "Manicures",
  },
  {
    image: "/Images/gallery/gallery-image2.png",
    title: "Classic gel nails",
    subtitle: "Modern elegance",
    span: "row-span-3",
    category: "Gel Nails",
  },
  {
    image: "/Images/gallery/gallery-image3.jpg",
    title: "Nail art & design",
    subtitle: "Timeless elegance",
    span: "row-span-2",
    category: "Nail Art & Design",
  },
  {
    image: "/Images/gallery/gallery-image4.jpg",
    title: "Acrylic nail extensions",
    subtitle: "Modern elegance",
    span: "row-span-3",
    category: "Nail Extensions",
  },
  {
    image: "/Images/gallery/gallery-image5.jpg",
    title: "Minimalist nail art",
    subtitle: "Timeless elegance",
    span: "row-span-2",
    category: "Nail Art & Design",
  },
  {
    image: "/Images/gallery/gallery-image6.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Nail Art & Design",
  },
  {
    image: "/Images/gallery/gallery-image7.png",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Nail Art & Design",
  },
  {
    image: "/Images/gallery/gallery-image8.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Nail Art & Design",
  },
  {
    image: "/Images/gallery/gallery-image9.png",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-1",
    category: "Nail Extensions",
  },
  {
    image: "/Images/gallery/gallery-image10.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Pedicures",
  },
  {
    image: "/Images/gallery/gallery-image11.png",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Nail Extensions",
  },
  {
    image: "/Images/gallery/gallery-image12.png",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-3",
    category: "Nail Extensions",
  },
  {
    image: "/Images/gallery/gallery-image13.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Pedicures",
  },
  {
    image: "/Images/gallery/gallery-image14.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-3",
    category: "Manicures",
  },
  {
    image: "/Images/gallery/gallery-image15.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-3",
    category: "Pedicures",
  },
  {
    image: "/Images/gallery/gallery-image16.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Manicures",
  },
  {
    image: "/Images/gallery/gallery-image17.png",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Manicures",
  },
  {
    image: "/Images/gallery/gallery-image18.jpg",
    title: "Custom nail art design",
    subtitle: "Modern elegance",
    span: "row-span-2",
    category: "Pedicures",
  },
];

const tabCategories = [
  "All",
  "Manicures",
  "Pedicures",
  "Gel Nails",
  "Nail Extensions",
  "Nail Art & Design",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  const filteredImages =
    activeTab === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeTab);

  return (
    <section>
      <Hero
        bg="/Images/gallery/hero.png"
        title="Our nail art & creations"
        subtitle="Home/Gallery"
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 xl:px-0 relative">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === category
                    ? "bg-[#228573] text-white border border-[#228573] shadow-[1px_2px_0px_0px_#e376b9] "
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="absolute -bottom-10  w-full h-[200px] bg-gradient-to-t from-white to-transparent z-20"></div>
          {/* Masonry Gallery Grid - 3 Random Sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
            {filteredImages.length > 0 ? (
              filteredImages.map((item, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer overflow-hidden rounded-[100px] ${item.span}`}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No images found
                </h3>
                <p className="text-gray-500">
                  There are no images in the "{activeTab}" category at the
                  moment.
                </p>
              </div>
            )}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <div className="relative max-w-5xl w-full">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <IoClose className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition-colors"
                  aria-label="Previous"
                >
                  <IoChevronBack className="w-10 h-10" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition-colors"
                  aria-label="Next"
                >
                  <IoChevronForward className="w-10 h-10" />
                </button>

                {/* Image Container */}
                <div
                  className="relative bg-black rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={filteredImages[selectedImage].image}
                    alt={filteredImages[selectedImage].title}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />

                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="text-gray-300">
                      {filteredImages[selectedImage].subtitle}
                    </p>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
