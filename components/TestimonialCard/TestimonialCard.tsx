'use client';

import { MoreVertical, Star } from "lucide-react";
import Image from "next/image";
import tanvir from "../../public/Images/dashboard/Tanvir.png";

interface TestimonialCardProps {
    name: string;
    title: string;
    rating: number;
    feedback: string;
    image: string;
}

export default function TestimonialCard({
    name,
    title,
    rating,
    feedback,
    image,
}: TestimonialCardProps) {
    return (
        <div
            className="
    bg-white
    border border-gray-200 
    rounded-2xl 
    shadow-sm hover:shadow-md 
    transition-all 
    p-3 sm:p-5 lg:p-6
    grid 
    grid-rows-[auto_auto_1fr] 
    gap-2 sm:gap-3 md:gap-4
    w-full
  "
        >
            {/*  Header Section */}
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                {/* Avatar */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                    <Image
                        src={tanvir}
                        alt={name}
                        fill
                        className="rounded-full object-cover"
                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                        priority
                    />
                </div>

                {/* Name + Title */}
                <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-gray-900 text-[12px] sm:text-base">
                        {name}
                    </h3>
                    <p className="text-xs sm:text-[12px] text-gray-500">{title}</p>
                </div>

                {/* Menu Button */}
                <button className="justify-self-end text-[#070707] hover:text-[#070707]">
                    <MoreVertical size={18} />
                </button>
            </div>

            {/*  Rating Section */}
            <div className="flex items-center flex-wrap gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star
                        key={i}
                        size={24}
                        className="text-[#fbbf24] fill-[#fbbf24]"
                    />
                ))}
            </div>

            {/*  Feedback Section */}
            <p
                className="
   text-[14px] sm:text-sm md:text-base lg:text-[14px]
text-[#070707] 
leading-relaxed sm:leading-normal md:leading-relaxed 
line-clamp-3 sm:line-clamp-4 md:line-clamp-5 
tracking-wide
                "
            >
                “{feedback}”
            </p>

        </div>
    );
}
