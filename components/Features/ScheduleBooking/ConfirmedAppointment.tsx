import Hero from "@/components/Reusable/Hero";
import Image from "next/image";
import Heading from "@/components/Reusable/Heading";
import { ChevronRight } from "lucide-react";
import { IoCalendarOutline, IoCloseOutline } from "react-icons/io5";

const ConfirmedAppointment = () => {
  return (
    <section className="relative px-4 xl:px-0">
      <Hero bg="/Images/booking/hero.png" title="Book your session" subtitle="Home/Booking" />
      <div className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-10">
              <Image
                src="/Images/booking/confirmed.svg"
                width={140}
                height={140}
                alt="confirmed appointment"
              />
            </div>
            <div className="flex justify-center text-center">
              <Heading
                title={[
                  { text: "Your appointment is confirmed!", color: "#000" },
                ]}
                subtitle="Your appointment has been confirmed. Thank you for choosing us."
                subtitleColor="#777980"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#F8FAFB] max-w-3xl w-full mx-auto rounded-3xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl instrument-font mb-6">
              Booking summary
            </h2>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex justify-between border-b border-[#ECEFF3] pb-4">
                <span className="text-[#777980] font-medium">Name:</span>
                <span className="font-medium">Samantha Lee</span>
              </div>

              {/* Phone */}
              <div className="flex justify-between border-b border-[#ECEFF3] pb-4">
                <span className="text-[#777980] font-medium">Phone:</span>
                <span className="font-medium">(123) 456–7890</span>
              </div>

              {/* Email */}
              <div className="flex justify-between border-b border-[#ECEFF3] pb-4">
                <span className="text-[#777980] font-medium">Email:</span>
                <span className="font-medium">info@company.com</span>
              </div>

              {/* Services */}
              <div className="flex justify-between border-b border-[#ECEFF3] pb-4">
                <span className="text-[#777980] font-medium">Services:</span>
                <span className="font-medium">Classic Manicure – $25</span>
              </div>

              {/* Date */}
              <div className="flex justify-between border-b border-[#ECEFF3] pb-4">
                <span className="text-[#777980] font-medium">Date:</span>
                <span className="font-medium">Sunday, September 21, 2025</span>
              </div>

              {/* Time */}
              <div className="flex justify-between">
                <span className="text-[#777980] font-medium">Time:</span>
                <span className="font-medium">9:30 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-center text-center">
            <Heading
              title="Modify or cancel your appointment"
              subtitle="Need to make changes? No problem! You can reschedule or cancel your appointment up to 24 hours in advance."
              subtitleColor="#777980"
              isWidth="true"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8 ">
            <button className="flex items-center gap-2 bg-[#228573] text-sm xl:text-base text-white pl-5 pr-1.5 py-1.5 rounded-full shadow-[1px_2px_0px_0px_#e376b9] active:translate-y-[1px] active:shadow-none cursor-pointer">
            <IoCalendarOutline size={16} />
              Reschedule Appointmentt{" "}
              <span className="h-[36px] w-[36px] bg-white p-2.5 rounded-full flex items-center justify-center">
                <ChevronRight size={16} className="text-[#228573]" />
              </span>
            </button>
            <button className="flex items-center gap-2 border border-[#228573] text-sm xl:text-base text-red-500 pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#228573] hover:text-white transition duration-300 cursor-pointer">
            <IoCloseOutline size={16} />
              Cancel Appointment{" "}
              <span className="h-[36px] w-[36px] bg-[#eceff3] p-2.5 rounded-full flex items-center justify-center">
                <ChevronRight size={16} className="text-[#228573]" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* decoration */}
      <Image src='/star.svg' alt="decoration" width={200} height={200} className="absolute bottom-20 right-0 hidden md:block" />
    </section>
  );
};

export default ConfirmedAppointment;
