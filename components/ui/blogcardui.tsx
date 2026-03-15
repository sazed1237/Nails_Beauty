'use client';

import { MoreVertical } from "lucide-react";
import Image from "next/image";
import hand from "../../public/Images/dashboard/hand.jpg";
import tanvir from "../../public/Images/dashboard/Tanvir.png";

interface BlogCardProps {
  author: string;
  title: string;
  description: string;
  image: string;
  avatar: string;
}

export default function BlogCard({
  author,
  title,
  description,
  image,
  avatar,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl  border-gray-200  transition-all overflow-hidden flex flex-col">
      {/*  Image Section (slightly smaller height ratio) */}
      <div className="relative w-full aspect-[2.5/1.5]">
        <Image
          src={hand}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
        />
      </div>

      {/*  Content Section (reduced padding, tighter layout) */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        {/* Author Row */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Image
              src={tanvir}
              alt={author}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <p className="text-[11px] sm:text-xs text-gray-600">
              By <span className="text-[#008060] font-medium">{author}</span>
            </p>
          </div>
          <button className="text-[#070707] hover:text-[#070707]">
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
