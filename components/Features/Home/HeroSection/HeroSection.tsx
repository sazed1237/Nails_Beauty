import React from "react";
import bg from "@/public/hero.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-[1320px] mx-auto h-screen flex items-end px-4 xl:px-0 pb-18">
        <div>
          <h1 className="instrument-font text-[44px] xl:text-[72px] leading-[104%]">
            Pamper your nails, <br /> Enhance your beauty
          </h1>
          <p className="text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%]">
            Discover luxury nail care services designed to make you look <br className="hidden xl:block" />{" "}
            and feel your best.{" "}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2 bg-[#228573] text-sm xl:text-base text-white pl-5 pr-1.5 py-1.5 rounded-full shadow-[1px_2px_0px_0px_#e376b9] active:translate-y-[1px] active:shadow-none cursor-pointer">
              Book appointment{" "}
              <span className="h-[36px] w-[36px] bg-white p-2.5 rounded-full flex items-center justify-center">
                <ChevronRight
                  size={16}
                  className="text-[#228573]"
                />
              </span>
            </button>
            <button className="flex items-center gap-2 border border-[#228573] text-sm xl:text-base text-white lg:text-[#228573] pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#228573] hover:text-white transition duration-300 cursor-pointer">
              View Services{" "}
              <span className="h-[36px] w-[36px] bg-white p-2.5 rounded-full flex items-center justify-center">
                <ChevronRight size={16} className="text-[#228573]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
