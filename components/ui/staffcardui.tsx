'use client';

import { Mail, Phone, MapPin, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import tanvir from "../../public/Images/dashboard/Tanvir.png";

interface StaffCardProps {
  name: string;
  title: string;
  specialties: string[];
  email: string;
  phone: string;
  address: string;
  image: string;
}

export default function StaffCard({
  name,
  title,
  specialties,
  email,
  phone,
  address,
  image,
}: StaffCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 sm:p-5 grid grid-rows-[auto_1fr] gap-3">
      {/* 🔹 Header Section */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 mb-2 sm:mb-3">
        {/* Avatar */}
        <Image
          src={tanvir}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
        />

        {/* Name & Title */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{title}</p>
        </div>

        {/* Menu Button */}
        <button className="justify-self-end text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* 🔹 Divider */}
      <div className="border-t border-gray-100"></div>

      {/* 🔹 Details Section */}
      <div className="pt-2 grid gap-2 sm:gap-3 text-sm">
        {/* Specialties */}
        <div className="grid grid-cols-[auto_1fr] items-start">
          <p className="font-semibold text-gray-700 mr-1">Specialties:</p>
          <p className="font-medium text-[#d946ef] truncate sm:whitespace-normal">
            {specialties.join(", ")}
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-1 text-gray-600">
          <div className="flex items-center">
            <Mail size={16} className="mr-2 text-gray-400 flex-shrink-0" />
            <span className="truncate">{email}</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-gray-400 flex-shrink-0" />
            <span>{phone}</span>
          </div>
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 text-gray-400 flex-shrink-0 mt-[2px]" />
            <span className="text-gray-600 break-words">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
