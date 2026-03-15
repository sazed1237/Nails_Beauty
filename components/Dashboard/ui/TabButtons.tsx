"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function TabButtons({
  initialActiveIndex = 0,
  tabs = [],
}: {
  tabs: string[];
  initialActiveIndex?: number;
}) {
  const [activeFilterIndex, setActiveFilterIndex] =
    React.useState(initialActiveIndex);
  const handleOnClick = (index: number | null) => {
    if (index === activeFilterIndex) return;

    setActiveFilterIndex(index === null ? 0 : index);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((text, index) => (
        <Button
          onClick={() => handleOnClick(index)}
          aria-pressed={index === activeFilterIndex}
          className="rounded-full shadow-none [&[aria-pressed='false']]:cursor-pointer
          [&[aria-pressed='true']]:bg-[#228573] [&[aria-pressed='true']]:text-white  [&[aria-pressed='true']]:border-[#228573]
          "
          variant="secondary"
          key={text}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}
