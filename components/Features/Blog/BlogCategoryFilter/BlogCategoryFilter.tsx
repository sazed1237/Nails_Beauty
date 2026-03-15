"use client";
import { ChangeEventHandler, useState } from "react";

interface BlogCategoryFilterProps {
  searchInputValue: string;
  onSearchInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function BlogCategoryFilter({
  onSearchInputChange,
  searchInputValue,
}: BlogCategoryFilterProps) {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const handleOnFilterPress = (index: number | null) => {
    setActiveFilterIndex(index === null ? 0 : index);
  };

  const _filter_btns = [
    "All",
    "Manicures",
    "Pedicures",
    "Gel Neils",
    "Nail Extensions",
    "Salon News & Updates",
  ];

  return (
    <div className="mt-9 flex flex-wrap gap-3">
      {_filter_btns.map((val, index) => (
        <button
          key={val}
          aria-pressed={index === activeFilterIndex}
          onClick={() => handleOnFilterPress(index)}
          className="w-fit flex items-center gap-2 border text-sm xl:text-base px-5 py-1.5 rounded-full active:translate-y-[1px] active:shadow-none cursor-pointer
          text-[#4A4C56] border-[#DFE1E7]
          [&[aria-pressed='true']]:bg-[#228573] [&[aria-pressed='true']]:text-white  [&[aria-pressed='true']]:border-[#228573] [&[aria-pressed='true']]:shadow-[1px_2px_0px_0px_#e376b9]
          "
        >
          {val}
        </button>
      ))}

      <div className="ml-auto flex-1 xl:flex-none basis-[100%] xl:basis-auto">
        <input
          value={searchInputValue}
          onChange={onSearchInputChange}
          type="text"
          placeholder="Search here...."
          className="w-full max-w-2xs rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573]"
        />
      </div>
    </div>
  );
}
