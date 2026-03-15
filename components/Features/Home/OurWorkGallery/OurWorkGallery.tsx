"use client";
import React, { useState } from "react";

interface GalleryImage {
  image: string;
  title: string;
  subtitle: string;
  span: string;
}

interface TitlePart {
  text: string;
  color: string;
}

interface HeadingProps {
  title: TitlePart[];
  subtitle: string;
}

const galleryImages: GalleryImage[] = [
    {image: "/Images/gallery/gallery-image.jpg", title: "Classic french manicure", subtitle: "Timeless elegance", span: "row-span-2"},
    {image: "/Images/gallery/gallery-image2.png", title: "Classic gel nails", subtitle: "Modern elegance", span: "row-span-3"},
    {image: "/Images/gallery/gallery-image3.jpg", title: "Nail art & design", subtitle: "Timeless elegance", span: "row-span-2"},
    {image: "/Images/gallery/gallery-image4.jpg", title: "Acrylic nail extensions", subtitle: "Modern elegance", span: "row-span-3"},
    {image: "/Images/gallery/gallery-image5.jpg", title: "Minimalist nail art", subtitle: "Timeless elegance", span: "row-span-2"},
    {image: "/Images/gallery/gallery-image6.jpg", title: "Custom nail art design", subtitle: "Modern elegance", span: "row-span-2"},
]

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => (
  <div className="mb-12 lg:mb-16">
    <h2 className="text-3xl lg:text-5xl font-bold mb-4">
      {title.map((item, i) => (
        <span key={i} style={{ color: item.color }}>{item.text}</span>
      ))}
    </h2>
    <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const OurWorkGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        <div className="text-center">
          <Heading
            title={[
              { text: "Our Work ", color: "#228573" },
              { text: "Gallery", color: "#E376B9" },
            ]}
            subtitle="Browse through our stunning collection of nail art and treatments. Each design is crafted with precision and creativity."
          />
        </div>

        {/* Masonry Gallery Grid - 3 Random Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-[100px] ${item.span}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
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
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
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
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition-colors"
                aria-label="Next"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryImages[selectedImage].image}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {galleryImages[selectedImage].subtitle}
                  </p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWorkGallery;