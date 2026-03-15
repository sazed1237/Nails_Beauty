"use client";

import {
  ServiceAccordion,
  ServiceAccordionProps,
} from "@/components/Reusable/ServiceAccordion/ServiceAccordion";
import Image from "next/image";
import servicesData from "@/data/services.json";

interface ServiceAccordianTheme {
  varient: ServiceAccordionProps["varient"];
  bg: string;
  starStyles?: React.CSSProperties[];
}

const themes: ServiceAccordianTheme[] = [
  {
    varient: "dark",
    bg: "#F9FBFB",
    starStyles: [
      { top: 0, left: 0 },
      { bottom: 0, right: 0 },
    ],
  },
  {
    varient: "light",
    bg: "#228573",
  },
  {
    varient: "dark",
    bg: "#F9FBFB",
    starStyles: [
      { top: 0, left: 0 },
      { bottom: 0, right: 0 },
    ],
  },
  {
    varient: "light-on-pink",
    bg: "#E376B9",
    starStyles: [
      { top: 0, left: 0 },
      { bottom: 0, right: 0 },
    ],
  },
  {
    varient: "primary",
    bg: "#F9FBFB",
    starStyles: [
      { top: 0, left: 0 },
      { bottom: 0, right: 0 },
    ],
  },
  {
    varient: "light",
    bg: "#228573",
  },
];

const AllServiceAccordianList = () => {
  return (
    <>
      {servicesData.categories.map((category, index) => {
        const currentTheme = themes[index % themes.length];
        return (
          <div
            key={category.tabName}
            style={{ backgroundColor: currentTheme.bg }}
            className="relative py-16 md:py-20 lg:py-24 bg-[#F9FBFB]"
          >
            {currentTheme?.starStyles?.length &&
              currentTheme.starStyles.map((style) => (
                <Image
                  src="/star.svg"
                  alt="star background"
                  width={200}
                  height={200}
                  style={style}
                  className="absolute"
                />
              ))}

            <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
              <ServiceAccordion
                reverseImage={index % 2 == 1}
                heading={category.tabName}
                varient={currentTheme.varient}
                image={{
                  src: category.imageSrc,
                  alt: category.tabName,
                }}
                category={category}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllServiceAccordianList;
