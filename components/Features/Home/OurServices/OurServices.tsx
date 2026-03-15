"use client";
import { ServiceAccordion } from "@/components/Reusable/ServiceAccordion/ServiceAccordion";
import Heading from "@/components/Reusable/Heading";
import servicesData from "@/data/services.json";
import { useState } from "react";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedService, setDisplayedService] = useState(0);

  // Handle tab change with animation
  const handleTabChange = (newTab: number) => {
    if (newTab === activeTab || isAnimating) return;

    setIsAnimating(true);
    setActiveTab(newTab);

    // Simple fade transition
    setTimeout(() => {
      setDisplayedService(newTab);
      setIsAnimating(false);
    }, 200);
  };

  const currentService = servicesData.categories[displayedService];

  return (
    <div className="py-16 md:py-20 lg:py-24 bg-[#228573]">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <Heading
            title={[
              { text: "Our ", color: "#fff" },
              { text: "Services", color: "#ffffff" },
            ]}
            subtitle="From your everyday nail care routine to those extra-special occasions when you want to shine, we've got you fully covered."
            subtitleColor="#DEEDEA"
          />
        </div>

        <ServiceAccordion
          heading={
            <div className="flex flex-wrap gap-3  mb-8">
              {servicesData.categories.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`px-4 h-10 box-content rounded-full text-base font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === index
                      ? "bg-[#F5F5F5] text-black border border-[#DEEDEA] shadow-[1px_2px_0px_0px_#e376b9] "
                      : "bg-transparent border border-[#DEEDEA] text-[#fff] hover:bg-[#DEEDEA] hover:text-[#2F706E]"
                  }`}
                >
                  {service.tabName}
                </button>
              ))}
            </div>
          }
          image={{ src: currentService.imageSrc, alt: currentService.tabName }}
          category={currentService}
          isAnimating={isAnimating}
        />
      </div>
    </div>
  );
};

export default OurServices;
