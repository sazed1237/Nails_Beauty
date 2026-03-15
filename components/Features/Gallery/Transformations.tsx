"use client";
import Heading from "@/components/Reusable/Heading";
import { ChevronRight } from "lucide-react";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const Transformations = () => {
  const transformations = [
    {
      id: 3,
      before: {
        imageUrl: "/Images/gallery/gallery-image5.jpg",
      },
      after: {
        imageUrl: "/Images/gallery/gallery-image6.jpg",
      },
      title: "Minimalist to Artistic Design",
      description: "From subtle beauty to bold artistic expression",
      category: "Nail Art Design",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        <div className="flex justify-center mb-12 text-center">
          <Heading
            title={[
              { text: "Transformations ", color: "#228573" },
              { text: "you’ll love ", color: "#E376B9" },
            ]}
            subtitle="Every nail session brings a touch of renewal. Our before-and-after transformations not only enhance beauty but also boost confidence."
            isWidth="true"
          />
        </div>
        <div className="space-y-20">
          {transformations.map((transformation, index) => (
            <div
              key={transformation.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              <div className="w-full max-w-[1320px] mx-auto h-[30vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]">
                <div className="relative group h-full">
                  <div className="absolute -inset-1 "></div>
                  <div className="relative  rounded-3xl p-1 sm:p-2 h-full">
                    <ReactBeforeSliderComponent
                      firstImage={transformation.before}
                      secondImage={transformation.after}
                      className="rounded-3xl overflow-hidden w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 bg-[#228573] text-sm xl:text-base text-white pl-5 pr-1.5 py-1.5 rounded-full shadow-[1px_2px_0px_0px_#e376b9] active:translate-y-[1px] active:shadow-none cursor-pointer">
          Book appointment{" "}
          <span className="h-[36px] w-[36px] bg-white p-2.5 rounded-full flex items-center justify-center">
            <ChevronRight size={16} className="text-[#228573]" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Transformations;
