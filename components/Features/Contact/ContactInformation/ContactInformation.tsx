"use client";

import Heading from "@/components/Reusable/Heading";
import {
  ChevronRight,
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideTwitter,
} from "lucide-react";
import { useForm } from "react-hook-form";

const contactDetails = [
  {
    type: "email",
    value: "info@luminail.com",
    label: "Email Us",
    icon: LucideMail,
  },
  {
    type: "phone",
    value: "(123) 456-7890",
    label: "Call Us",
    icon: LucidePhone,
  },
  {
    type: "address",
    value: "1234 Street Name, City, Country",
    label: "Visit Us",
    icon: LucideMapPin,
  },
];

const socials = [
  {
    type: "facebook",
    link: "https://facebook.com",
    icon: LucideFacebook,
  },
  { type: "linkedin", link: "https://facebook.com", icon: LucideLinkedin },
  { type: "x", link: "https://facebook.com", icon: LucideTwitter },
  { type: "instagram", link: "https://facebook.com", icon: LucideInstagram },
];

const services = [
  { label: "Classic Manicure - $25", value: "classic_manicure" },
  { label: "Gel Manicure - $35", value: "gel_manicure" },
  { label: "Spa Pedicure - $40", value: "spa_pedicure" },
];
export default function ContactInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // handle booking logic here
    console.log(data);
  };

  return (
    <section className="max-w-[1320px] mx-auto px-4 flex justify-center flex-wrap xl:px-0 my-16 xl:my-32 gap-12">
      {/* Left col */}
      <div className="flex-1 xl:max-w-md">
        <Heading
          title={[
            { text: "Contact ", color: "#2C8B7B" },
            { text: "information", color: "#000" },
          ]}
        />
        <div className="space-y-6 mt-6">
          {/* Contact information list */}
          {contactDetails.map(({ label, type, value, icon: Icon }) => (
            <div
              key={type}
              className="flex items-center gap-3 rounded-3xl p-4 border border-[#EFF1F1] bg-[#F8FAFB]"
            >
              <div className="rounded-full bg-[#2C8B7B] border border-[#2C8B7B] w-10 h-10 flex items-center justify-center">
                <Icon size={20} color="#fff" />
              </div>
              <div>
                <p className="font-medium text-xl">{label}</p>
                <p className="text-lg text-[#4A4C56]">{value}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, link, type }) => (
              <a
                key={type}
                target="_blank"
                href={link}
                className="rounded-full border border-[#2C8B7B] w-10 h-10 flex items-center justify-center hover:bg-[#2C8B7B]/20"
              >
                <Icon size={20} color="#2C8B7B" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right col */}
      {/* Form for booking a session */}
      <div className="p-6 rounded-3xl lg:w-[648px] w-full xl:flex-1 flex items-center justify-center border border-[#EFF1F1] bg-[#F8FAFB]">
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
    </section>
  );
}
