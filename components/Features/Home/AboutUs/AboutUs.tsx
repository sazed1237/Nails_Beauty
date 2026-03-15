"use client";
import Heading from "@/components/Reusable/Heading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AboutUs = () => {
  const router = useRouter();
  const statistics = [
    {
      value: "7 Years",
      label: "Years Experience"
    },
    {
      value: "2000+",
      label: "Happy Clients"
    },
    {
      value: "50+",
      label: "Services Offered"
    },
    {
      value: "4.9",
      label: "Average Rating"
    }
  ];

  return (
    <div className="py-25">
      
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16 items-center relative overflow-hidden xl:overflow-visible">
      <Image
        src="/star.svg"
        alt="About Us"
        width={200}
        height={200}
        className="absolute -top-17 -left-25"
      />
      <Image
        src="/star.svg"
        alt="About Us"
        width={200}
        height={200}
        className="absolute bottom-28 -right-10"
      />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/Images/about-us/image.jpg"
            alt="About Us"
            width={500}
            height={440}
            className="lg:w-[167px] lg:h-[340px] xl:w-[267px] xl:h-[440px] object-cover object-center lg:rounded-[1000px] "
          />
          <Image
            src="/Images/about-us/image3.jpg"
            alt="About Us"
            width={1000}
            height={489}
            className="lg:w-[244px] lg:h-[389px] xl:w-[344px] xl:h-[489px] object-cover object-center lg:rounded-[1000px]  "
          />
        </div>
        <div>
          <div className="mb-8">
            <Heading 
              title={[
                { text: "Elevating ", color: "#000000" },
                { text: "nail care", color: "#228573" },
                { text: " since 2025" }
              ]}
              subtitle="At Lumi, we believe every detail matters. From elegant manicures to relaxing spa treatments, our expert nail technicians provide a professional, hygienic, and relaxing experience. Step into our salon and step out with confidence."
            />
          </div>
          <button onClick={() => router.push("/about-us")} className="border border-[#228573] text-black font-medium text-sm xl:text-base px-5 py-2 rounded-full hover:bg-[#228573] hover:text-white duration-300 ease-in-out cursor-pointer">
            About Us
          </button>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 mt-12">
            {statistics.map((stat, index) => (
              <div key={index}>
                <h1 className="instrument-font text-[#228573] text-3xl md:text-4xl xl:text-5xl leading-[100%] mb-3">
                  {stat.value}
                </h1>
                <p className="text-xs xl:text-base text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
