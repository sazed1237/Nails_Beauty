"use client";
import Heading from "@/components/Reusable/Heading";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials = [
  {
    text: "Absolutely love this place! The staff are so friendly, and my manicure always lasts longer than anywhere else I’ve been.",
    name: "Sophia Reed",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I booked a bridal nail package, and it was perfect. My nails looked stunning for my big day.",
    name: "Hannah Lewis",
    role: "Bride-to-be",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "I’ve tried many salons, but this one is the best! The technicians really listen to what I want.",
    name: "Michael Brown",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The pedicure was so relaxing, and the salon feels super clean and professional. Highly recommend!",
    name: "Emily Johnson",
    role: "Teacher",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Great service, beautiful designs, and the booking process is really easy online.",
    name: "Olivia Chen",
    role: "Compliance Officer",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    text: "From the moment I walked in, I felt pampered. The spa pedicure was pure heaven!",
    name: "Rachel Carter",
    role: "Nurse",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  const router = useRouter();
  return (
    <section className="bg-white py-20 px-6 md:px-10 xl:px-0">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center flex justify-center mb-12">
          <Heading
            title={[
              { text: "What our ", color: "#000" },
              { text: "Customers say", color: "#2C8B7B" },
            ]}
            subtitle="At our Nail Studio, your satisfaction is our top priority. We take pride in delivering flawless nail care and pampering experiences."
            subtitleColor="#4A4C56"
            isWidth="true"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t: Testimonial, i: number) => {
            return (
              <div
                key={i}
                className={`bg-white rounded-[28px] p-7 shadow-[14px_14px_32px_rgba(34,133,115,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300
                ${i % 3 === 1 ? " lg:translate-y-17" : ""}`}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFC107] text-2xl" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#222] text-lg leading-relaxed mb-6">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-semibold text-[#222]">
                      {t.name}
                    </p>
                    <p className="text-base text-[#A1A1AA]">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10 lg:mt-28">
          <button onClick={() => router.push("/testimonials")} className="border border-[#2C8B7B] text-[#2C8B7B] font-semibold px-6 py-2.5 rounded-full transition-all hover:bg-[#2C8B7B] hover:text-white cursor-pointer">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
