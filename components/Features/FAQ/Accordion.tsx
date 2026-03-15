"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <section className="space-y-4">
      {items.map((item, index) => (
        <details
          open={true}
          aria-open={openIndex == index}
          key={index}
          className="cursor-pointer border rounded-lg p-4 border-[#ECEFF3] bg-white [&[aria-open='true']]:bg-[#F6F8FA] transition-colors"
          onClick={(e) => {
            e.preventDefault(); // prevent default <details> toggle
            setOpenIndex(openIndex === index ? null : index);
          }}
        >
          <summary className="cursor-pointer font-medium flex justify-between items-center instrument-font text-2xl text-[#1D1F2C]">
            {item.title}
            <span
              className={`size-5 transform transition-transform text-current/40 duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown />
            </span>
          </summary>
          <div
            className="duration-300 grid grid-rows-[0fr] [&[aria-hidden='false']]:grid-rows-[1fr]"
            style={{ transitionProperty: "grid-template-rows" }}
            role="region"
            aria-labelledby="panel1-title"
            aria-hidden={!(openIndex == index)}
          >
            <div className="overflow-hidden text-base text-[#4A4C56] mt-1">
              <p>{item.content}</p>
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}
