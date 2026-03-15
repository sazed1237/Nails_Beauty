"use client";

import Heading from "@/components/Reusable/Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, useState } from "react";
import BlogCategoryFilter from "../BlogCategoryFilter/BlogCategoryFilter";
import BlogThumbnail from "../BlogThumbnail/BlogThumbnail";

const _categoriesData = [
  {
    image: "/Images/blogs/grid-img01.png",
    title: "How to keep your nails healthy appointments",
    subTitle:
      "Proper care at home is just as important as salon treatments. Here’s how to protect your nail...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/grid-img02.jpg",
    title: "Why a spa pedicure is more than just relaxation",
    subTitle:
      "A pedicure isn’t only about beauty—it also improves circulation, relieves stress, and promotes....Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/grid-img04.jpg",
    title: "Common nail care mistakes to avoid",
    subTitle:
      "Biting, over-filing, skipping cuticle oil—are you guilty of these nail care mistakes? Learn how to...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/grid-img05.png",
    title: "Eco-friendly nail products: beauty with purpose",
    subTitle:
      "At Lumi, we believe in sustainable beauty. Discover why eco-friendly products matter and how they...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/grid-img05.png",
    title: "Seasonal nail: Fresh looks for every occasion",
    subTitle:
      "Winter sparkle, spring florals, summer neons, autumn tones explore seasonal nail inspirations to...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/grid-img06.jpg",
    title: "A day in the life of a nail technician",
    subTitle:
      "Curious about what goes on behind the scenes at a salon? Step into the world of our nail artis...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
];

export default function BlogCategories() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e?.target?.value);
  };

  const filteredCatogories = _categoriesData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.trim().toLowerCase()),
  );

  return (
    <section className="max-w-[1320px] mx-auto px-4 xl:px-0 my-16">
      <Heading
        title={[
          { text: "Browse by " },
          { text: "categories", color: "#228573" },
        ]}
      />
      <BlogCategoryFilter
        searchInputValue={searchInput}
        onSearchInputChange={handleSearchInputChange}
      />

      <div className="gap-6 grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCatogories.map((item, index) => (
          <BlogThumbnail key={index} {...item} />
        ))}
      </div>

      <div className="grid place-items-center py-12">
        <Pagination />
      </div>
    </section>
  );
}

export const Pagination = () => {
  return (
    <div className="flex gap-2">
      <button>
        <ChevronLeft color="#228573" />
      </button>

      <button className="cursor-pointer rounded-full bg-[#228573] w-7 h-7 text-white border border-[#228573] place-items-center grid text-sm font-medium">
        1
      </button>
      <button className="cursor-pointer rounded-full bg-white w-7 h-7 text-[#228573] border border-[#DFE1E7] place-items-center grid text-sm font-medium">
        2
      </button>
      <button className="cursor-pointer rounded-full bg-white w-7 h-7 text-[#228573] border border-[#DFE1E7] place-items-center grid text-sm font-medium">
        3
      </button>
      <button className="cursor-pointer rounded-full bg-white w-7 h-7 text-[#228573] border border-[#DFE1E7] place-items-center grid text-sm font-medium">
        4
      </button>

      <button>
        <ChevronRight color="#228573" />
      </button>
    </div>
  );
};
