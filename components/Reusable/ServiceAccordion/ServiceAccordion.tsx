import styles from "./ServiceAccordion.module.css";

import {
  Category,
  Service,
} from "@/components/Features/Home/OurServices/types";
import { formatCurrency } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { ChevronDown, PlusIcon } from "lucide-react";
import React from "react";

export interface ServiceAccordionProps {
  category: Category;
  image: React.ComponentProps<"img">;
  isAnimating?: boolean;
  reverseImage?: boolean;
  heading?: React.ReactNode;
  varient?: "light" | "dark" | "light-on-pink" | "primary";
}

export function ServiceAccordion({
  category,
  isAnimating = false,
  image,
  reverseImage = false,
  heading,
  varient = "light",
}: ServiceAccordionProps) {
  const renderHeading = () => {
    if (typeof heading === "string") {
      return (
        <h2 className="instrument-font text-[var(--theme-heading,#fff)] text-2xl md:text-3xl xl:text-5xl leading-[100%]">
          {heading}
        </h2>
      );
    }

    return heading;
  };

  return (
    <div
      className={`flex flex-col gap-8 lg:gap-12 lg:justify-between items-center lg:items-start
        ${reverseImage ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Left Column - Service Content */}
      <div
        className={cn("space-y-6 xl:w-[65%] mt-[8%]", {
          [styles.accordionDarkText]: varient === "dark",
          [styles.accordionLightTextOnPink]: varient === "light-on-pink",
          [styles.accordionPrimaryText]: varient === "primary",
        })}
      >
        {renderHeading()}
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <Accordion data={category} />
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex justify-center lg:justify-end ">
        <div
          className={`w-[536px] max-w-md lg:max-w-lg rounded-full aspect-[1/1.3] overflow-hidden bg-gray-100 transition-opacity duration-300 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            {...image}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

interface AccordionItemProps extends React.ComponentProps<"div"> {
  data: Category;
}

export function Accordion({ data, className, ...props }: AccordionItemProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={
        {
          "--l-theme-heading": "var(--theme-heading, #fff)",
          "--l-theme-color": "var(--theme-color, #DEEDEA)",
          "--l-theme-border": "var(--theme-border, #319482)",
          "--l-theme-btn-text": "var(--theme-btn-text, #319482)",
          "--l-theme-btn-bg": "var(--theme-btn-bg, #DEEDEA)",
        } as React.CSSProperties
      }
      className={cn("w-full mx-auto text-[var(--l-theme-color)]", className)}
      {...props}
    >
      {data.services.map((service, index) => (
        <div
          key={index}
          className="border-b last:border-b-0 border-[var(--l-theme-border)]"
        >
          {/* Header */}
          <button
            style={{ color: "var(--l-theme-heading)" }}
            className="gap-2 hover:underline cursor-pointer py-4 flex w-full text-current justify-between items-center text-left font-medium"
            onClick={() => toggle(index)}
          >
            <h3 className="text-2xl instrument-font">{service.title}</h3>
            <hr className="flex-1 border-current/20 border border-dashed" />
            <span className="text-2xl instrument-font">
              {get_service_price(service)}
            </span>
            <ChevronDown
              className={`size-5 transform transition-transform text-current/40 duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Animated Content */}
          <div
            style={{ transition: "grid-template-rows 300ms" }}
            className={`grid ease-in-out *:overflow-hidden ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="mt-2 mb-6 grid gap-6">
              <div className="flex justify-between gap-3">
                <p className="text-currentleading-relaxed max-w-[580px]">
                  {data.description}
                </p>
                {service?.variations &&
                service?.variations?.length > 0 ? null : (
                  <Button>Book now</Button>
                )}
              </div>

              <div className="grid gap-0">
                {service?.variations &&
                  service?.variations.map((varient) => (
                    <div
                      className="group flex items-center justify-between gap-3"
                      key={varient.label}
                    >
                      <p className="group-hover:underline text-2xl instrument-font text-current mb-6 leading-relaxed max-w-[580px] flex items-center gap-1">
                        <PlusIcon className="size-3" /> {varient.label}
                      </p>

                      <div className="flex items-center gap-4">
                        <p className="group-hover:underline text-2xl instrument-font text-current leading-relaxed max-w-[580px]">
                          {formatCurrency(varient.price, { suffix: true })}
                        </p>
                        <Button>Book now</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function get_service_price(service: Service) {
  if (typeof service.price === "number") {
    return formatCurrency(service.price, { suffix: true });
  }

  const defaultVarient = service?.variations?.find((item) => item.is_defalut);
  if (typeof defaultVarient?.price === "number") {
    return formatCurrency(defaultVarient?.price, { suffix: true });
  }

  if (typeof service.price_from === "number") {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-base">Start From</span>
        <span>{formatCurrency(service.price_from, { suffix: true })}</span>
      </div>
    );
  }

  return null;
}

function Button({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className="border text-base text-nowrap font-medium cursor-pointer text-current px-6 h-10 box-content rounded-full transition-all duration-200
                  border-[var(--l-theme-text)] hover:bg-[var(--l-theme-btn-bg)] hover:border-[var(--l-theme-btn-bg)] hover:text-[var(--l-theme-btn-text)]"
      {...props}
    />
  );
}
