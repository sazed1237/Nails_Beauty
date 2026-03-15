"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";

const services = [
  { label: "Classic Manicure - $25", value: "classic_manicure" },
  { label: "Gel Manicure - $35", value: "gel_manicure" },
  { label: "Spa Pedicure - $40", value: "spa_pedicure" },
];

const times = [
  "9:30 AM",
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "1:30 PM",
  "2:30 PM",
  "3:30 PM",
  "4:30 PM",
  "5:30 PM",
  "6:30 PM",
];
const ScheduleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // handle booking logic here
    console.log(data);
  };

  const pathname = usePathname();
  return (
    <div className="max-w-[1320px] mx-auto px-4 xl:px-0 flex justify-between lg:flex-row flex-col gap-12">
      <div className="lg:w-[536px] w-full">
        <div className="mb-12">
          <Heading
            title={[{ text: "Schedule appointment", color: pathname === "/schedule-booking" ? "#000" : "#fff" }]}
            subtitle="Schedule your nail care appointment online. Simply choose your preferred date, time, and service for a personalized salon experience."
            subtitleColor={pathname === "/schedule-booking" ? "#4A4C56" : "#BAD9D4"}
          />
        </div>
        <div className={`flex items-center justify-between mb-12  ${pathname === "/schedule-booking" ? "text-[#4A4C56]" : "text-[#BAD9D4]"}`}>
          <div>
            <h3 className={`text-xl ${pathname === "/schedule-booking" ? "text-black" : "text-white"}`}>Operating Hours</h3>
            <p className="">Monday - Friday: 9am - 7pm</p>
          </div>
          <div>
            <h3 className={`text-xl ${pathname === "/schedule-booking" ? "text-black" : "text-white"}`}>Session Duration</h3>
            <p className="">60, 75, or 90 minutes</p>
          </div>
        </div>
        <div className={`space-y-4  ${pathname === "/schedule-booking" ? "text-[#4A4C56]" : "text-[#BAD9D4]"}`}>
          <h2 className={`text-xl ${pathname === "/schedule-booking" ? "text-black" : "text-white"}`}>Need help or have questions?</h2>
          <p className="flex gap-2 items-center ">
            <span>
              <CiLocationOn className="text-2xl" />
            </span>{" "}
            1234 Street Name, City, Country
          </p>
          <p className="flex gap-2 items-center ">
            <span>
              <BsTelephone className="text-2xl" />
            </span>{" "}
            1(123) 456-7890
          </p>
          <p className="flex gap-2 items-center ">
            <span>
              <CiMail className="text-2xl" />
            </span>{" "}
            info@luminail.com
          </p>
        </div>
      </div>

      {/* Form for booking a session */}
      <div className={`bg-[#F8FAFB] p-6 rounded-[48px] lg:w-[648px] w-full flex items-center justify-center ${pathname === "/schedule-booking" ? "bg-[#F8FAFB]" : ""}`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#1D1F2C] mb-1">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Samantha Lee"
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">Name is required</span>
              )}
            </div>
            <div>
              <label className="block text-[#1D1F2C] mb-1">Phone number</label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="(123) 456-7890"
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">Phone is required</span>
              )}
            </div>
            <div>
              <label className="block text-[#1D1F2C] mb-1">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="info@company.com"
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">Email is required</span>
              )}
            </div>
            <div>
              <label className="block text-[#1D1F2C] mb-1">Service</label>
              <select
                {...register("service", { required: true })}
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select service
                </option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="text-red-500 text-xs">
                  Service is required
                </span>
              )}
            </div>
            <div className="relative">
              <label className="block text-[#1D1F2C] mb-1">
                Preferred date
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
              />
              {/* <CiCalendar className="absolute right-4 top-9 text-xl text-gray-400 pointer-events-none" /> */}
              {errors.date && (
                <span className="text-red-500 text-xs">Date is required</span>
              )}
            </div>
            <div className="relative">
              <label className="block text-[#1D1F2C] mb-1">
                Preferred time
              </label>
              <select
                {...register("time", { required: true })}
                className="w-full rounded-full border border-[#E5E5E5] px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select time
                </option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {/* <CiClock2 className="absolute right-4 top-9 text-xl text-gray-400 pointer-events-none" /> */}
              {errors.time && (
                <span className="text-red-500 text-xs">Time is required</span>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[#1D1F2C] mb-1">
              Additional Note (Optional)
            </label>
            <textarea
              {...register("note")}
              rows={3}
              placeholder="Type your message"
              className="w-full rounded-2xl border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573] bg-[#F9F9F9] resize-none"
            />
          </div>
          <button
            type="submit"
            className=" w-fit flex items-center gap-2 bg-[#228573] text-sm xl:text-base text-white pl-5 pr-1.5 py-1.5 rounded-full shadow-[1px_2px_0px_0px_#e376b9] active:translate-y-[1px] active:shadow-none cursor-pointer"
          >
            Book appointment{" "}
            <span className="h-[36px] w-[36px] bg-white p-2.5 rounded-full flex items-center justify-center">
              <ChevronRight size={16} className="text-[#228573]" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
