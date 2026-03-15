'use client';

import { MoreVertical } from "lucide-react";
import Image from "next/image";
import hand from "../../public/Images/dashboard/hand.jpg";

interface GalleryCardProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function GalleryCard({ title, subtitle, image }: GalleryCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden transition-all border border-gray-200">
      {/*  Full Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={hand}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          priority
        />

        {/*  Text Overlay (Semi-Transparent White) */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex items-start justify-between bg-white/60">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-700">{subtitle}</p>
          </div>
          <button className="text-[#070707] hover:text-[#070707]">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
