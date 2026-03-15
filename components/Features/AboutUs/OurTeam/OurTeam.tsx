import Heading from "@/components/Reusable/Heading";
import Image from "next/image";
import React from "react";
// image import removed as it's not used in this component
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

interface Team {
  name: string;
  image: string;
  role: string;
  socials: {
    platform: string;
    url: string;
    label: string;
  }[];
}

const team = [
  {
    name: "Sarah Chen",
    image: "/Images/about-us/team.jpg",
    role: "Lead Nail Artist",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      { platform: "twitter", url: "https://www.twitter.com", label: "Twitter" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Marcus Rodriguez",
    image: "/Images/about-us/team3.jpg",
    role: "Senior Nail Technician",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      { platform: "twitter", url: "https://www.twitter.com", label: "Twitter" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Emily Rodriguez",
    image: "/Images/about-us/team2.jpg",
    role: "Creative Nail Designer",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      { platform: "twitter", url: "https://www.twitter.com", label: "Twitter" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Emma Thompson",
    image: "/Images/about-us/team3.jpg",
    role: "Spa & Wellness Expert",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      { platform: "twitter", url: "https://www.twitter.com", label: "Twitter" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com",
        label: "LinkedIn",
      },
    ],
  },
];

const OurTeam = () => {
  return (
    <div className="py-16 md:py-20 lg:py-35">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end mb-12">
          <div>
            <Heading
              title={[
                { text: "Meat Our ", color: "#000" },
                { text: "Team", color: "#228573" },
              ]}
              subtitle="Our talented team of certified professionals is dedicated to making your nail dreams a reality."
              subtitleColor="#4A4C56"
              isWidth="true"
            />
          </div>
          <button className="w-fit border border-[#228573] text-[#228573] font-medium text-sm xl:text-base pl-5 pr-1.5 py-1.5 rounded-full flex justify-between items-center gap-2 tracking-[-0.08px] cursor-pointer hover:bg-[#228573] hover:text-white transition-all duration-300 group">
            See all{" "}
            <span className="bg-[#F6F8FA] p-2.5 rounded-full group-hover:text-[#228573] transition-all duration-300">
              <IoIosArrowForward size={16} />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team?.map((item: Team, index: number) => (
            <div
              key={index}
              className="bg-[#e376b9] p-6 h-[400px] relative overflow-hidden rounded-[138px] group "
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:opacity-0 transition-all duration-500"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-0 transition-all duration-500" />

              <div className="absolute bottom-7 left-0 right-0 flex flex-col justify-center items-center text-white">
                {/* socials */}
                <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {item.socials.map((social, index) => (
                    <a
                      key={`${social.platform}-${index}`}
                      className="border rounded-full p-2"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.platform === "facebook" && (
                        <FaFacebookF size={20} />
                      )}
                      {social.platform === "instagram" && (
                        <FaInstagram size={20} />
                      )}
                      {social.platform === "twitter" && <FaTwitter size={20} />}
                      {social.platform === "linkedin" && (
                        <FaLinkedin size={20} />
                      )}
                    </a>
                  ))}
                </div>
                <h3 className="text-[2rem] instrument-font leading-[130%] ">
                  {item.name}
                </h3>
                <p className="font-medium tracking-[0.08px] leading-[160%]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
