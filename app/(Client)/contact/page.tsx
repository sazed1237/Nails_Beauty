"use client";
import ContactInformation from "@/components/Features/Contact/ContactInformation/ContactInformation";
import Hero from "@/components/Reusable/Hero";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapBox = dynamic(
  () => import("@/components/Features/Contact/MapBox/MapBox"),
  { ssr: false },
);

export default function ContactPage() {
  return (
    <div>
      <Hero
        bg="/Images/contactUs/hero.jpg"
        title="Get in Touch"
        subtitle="Home/Contact"
      />
      <ContactInformation />
      <div className="relative">
        <MapBox />

        {/* decorated star */}
        <Image
          src="/star.svg"
          alt="star"
          width={180}
          height={180}
          className="absolute hidden lg:block -z-10 top-12 right-0"
        />
      </div>
    </div>
  );
}
