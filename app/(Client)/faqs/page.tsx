"use client";
import Accordion from "@/components/Features/FAQ/Accordion";
import Heading from "@/components/Reusable/Heading";
import Hero from "@/components/Reusable/Hero";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const accordionData = [
  {
    title: "How do I book an appointment?",
    content:
      "You can book directly through our website using the booking calendar, or call us at +1 (234) 567-890.",
  },
  {
    title: "Can I reschedule or cancel my appointment?",
    content: "This is the content for Accordion Header 2.",
  },
  {
    title: "What services do you offer?",
    content: "This is the content for Accordion Header 3.",
  },
  {
    title: "Are your products safe and hygienic?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "Do you accept walk-ins?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "How long does a typical manicure or pedicure take?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "Can I request a specific nail technician?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "Do you offer bridal or special occasion packages?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "What payment methods do you accept?",
    content: "This is the content for Accordion Header",
  },
  {
    title: "Is there parking available?",
    content: "This is the content for Accordion Header",
  },
];

export default function FAQPage() {
  const router = useRouter();
  return (
    <div>
      <Hero
        bg="/Images/blogs/blog-hero.jpg"
        title="Frequently asked questions"
        subtitle="Home/FAQ,s"
      />

      <section className="max-w-4xl mx-auto px-4 my-16">
        <Accordion items={accordionData} />
      </section>

      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 my-16">
          {/* CTA */}
          <div className="bg-[#228573] grid place-items-center text-center p-12 rounded-2xl mt-12 relative">
            <div className="[&_div]:space-y-4">
              <Heading
                title={[{ text: "Still Have Questions?", color: "#fff" }]}
                subtitle="If your question isn’t listed here, feel free to contact us directly. Our friendly team is always happy to help!"
                subtitleColor="#fff"
                isWidth="true"
              />
            </div>

            <button onClick={() => router.push("/contact")} className="flex mt-9 items-center gap-2 bg-white text-sm xl:text-base text-[#070707] pl-5 pr-1.5 py-1.5 rounded-full shadow-[1px_2px_0px_0px_#e376b9] active:translate-y-[1px] active:shadow-none cursor-pointer">
              Send a message{" "}
              <span className="h-[36px] w-[36px] bg-[#ECEFF3] p-2.5 rounded-full flex items-center justify-center">
                <ChevronRight size={16} className="text-[#228573]" />
              </span>
            </button>

            {/* decorated stars */}
            <Image
              src="/star.svg"
              alt="star"
              width={80}
              height={80}
              className="absolute top-0 left-0"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={80}
              height={80}
              className="absolute top-0 right-0"
            />

            <Image
              src="/star.svg"
              alt="star"
              width={80}
              height={80}
              className="absolute bottom-12 right-12"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={80}
              height={80}
              className="absolute bottom-12 left-12"
            />
          </div>
        </div>

        {/* decorated star */}
        <Image
          src="/star.svg"
          alt="star"
          width={200}
          height={200}
          className="absolute -z-10 top-0 right-0"
        />
      </section>
    </div>
  );
}
