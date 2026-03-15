import BadgeIcon from "@/components/icons/BadgeIcon";
import HandIcon from "@/components/icons/HandIcon";
import HeadphoneIcon from "@/components/icons/HeadphoneIcon";
import LeafIcon from "@/components/icons/LeafIcon";
import Heading from "@/components/Reusable/Heading";
import React from "react";
import Image from "next/image";

const coreValues = [
  {
    title: "Professionalism",
    icon: <BadgeIcon />,
    description: "Every service is delivered with skill and care.",
  },
  {
    title: "Hygiene & safety",
    icon: <HandIcon />,
    description: "We maintain the highest standards of cleanliness. ",
  },
  {
    title: "Customer care",
    icon: <HeadphoneIcon />,
    description: "Your comfort and satisfaction are our top priority.",
  },
  {
    title: "Sustainability",
    icon: <LeafIcon />,
    description: "We use eco-friendly products whenever possible. ",
  },
];

const OurCoreValues = () => {
  return (
    <div className="py-16 md:py-20 lg:py-35 bg-[#228573] relative">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        <div className="lg:mb-12 mb-8 text-center">
          <Heading title={[{ text: "Our Core Values ", color: "#fff" }]} />
          <p className="text-center text-[#DEEDEA] md:w-[32ch] mx-auto mt-4">
            Our salon is built on values that ensure every client feels cared
            for, safe, and satisfied.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-[32px]">
              <p className="p-3 bg-[#F9FBFB] rounded-full w-fit mb-9">
                {value?.icon}
              </p>
              <div>
                <h3 className="text-2xl instrument-font mb-4">
                  {value?.title}
                </h3>
                <p className="text-sm text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%]">
                  {value?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* decoration */}
      <Image src="/star.svg" alt="decoration" width={200} height={200} className="absolute bottom-0 left-0 hidden md:block" />
      <Image src="/star.svg" alt="decoration" width={200} height={200} className="absolute top-0 right-0 hidden md:block" />
      <Image src="/star.svg" alt="decoration" width={200} height={200} className="absolute top-0 left-1/4 hidden md:block" />
    </div>
  );
};

export default OurCoreValues;
