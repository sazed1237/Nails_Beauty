"use client";

import { useState } from "react";
import StaffCardui from "../ui/staffcardui";
import AddNewStaffMemberModal from "./AddNewStaffMemberModal";
import { Search, Filter } from "lucide-react";

const staffMembers = [
  {
    name: "Maria Garcia",
    title: "Senior Nail Technician",
    specialties: ["Gel", "Nail Art"],
    email: "info@luminail.com",
    phone: "(123) 456-7890",
    address: "1234 Street Name, City, Country",
    image: "/maria.jpg",
  },
  {
    name: "Hasan Mahmud",
    title: "Junior Nail Technician",
    specialties: ["Polish", "Manicure"],
    email: "info@luminail.com",
    phone: "(123) 456-7890",
    address: "1234 Street Name, City, Country",
    image: "/maria.jpg",
  },
  {
    name: "Razwanul Islam Tanvir",
    title: "Salon Manager",
    specialties: ["Operations", "Customer Experience"],
    email: "info@luminail.com",
    phone: "(123) 456-7890",
    address: "1234 Street Name, City, Country",
    image: "/maria.jpg",
  },
  {
    name: "Bob Francy",
    title: "Senior Nail Technician",
    specialties: ["Gel", "Nail Art"],
    email: "info@luminail.com",
    phone: "(123) 456-7890",
    address: "1234 Street Name, City, Country",
    image: "/maria.jpg",
  },
];

export default function Staff() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStaff = staffMembers.filter((staff) => {
    const search = searchTerm.toLowerCase();
    return (
      staff.name.toLowerCase().includes(search) ||
      staff.title.toLowerCase().includes(search) ||
      staff.specialties.join(", ").toLowerCase().includes(search)
    );
  });

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl text-heading font-semibold">Staff</h1>
        <AddNewStaffMemberModal />
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="text-lg font-semibold text-heading">Staff List</h2>

          {/* Search + Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center border border-gray-300 text-sm rounded-lg px-3 py-1.5 bg-white focus-within:border-[#008060] focus-within:ring-2 focus-within:ring-[#008060]/30 transition-all w-full sm:w-64">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none bg-transparent text-gray-700 placeholder-[#666D80] w-full"
              />
            </div>

            <button
              className="flex items-center border border-gray-300 text-sm rounded-lg px-3 py-1.5
                bg-white text-[#0D0D12] hover:bg-[#228573] hover:text-white
                focus:border-[#228573] focus:ring-2 focus:ring-[#228573]/30
                active:border-[#228573] active:ring-2 active:ring-[#228573]/30
                transition-all"
            >
              <Filter
                size={16}
                className="mr-2 transition-colors duration-200"
              />
              Filter
            </button>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((member, i) => (
              <StaffCardui key={i} {...member} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 italic">
              No staff members found matching “{searchTerm}”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
