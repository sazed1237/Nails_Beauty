import React from "react";

interface HighlightedText {
  text: string;
  color?: string;
}

interface HeadingProps {
  title: string | HighlightedText[];
  subtitle?: string;
  subtitleColor?: string;
  isWidth?: string;
}

const Heading = ({ title, subtitle, subtitleColor, isWidth }: HeadingProps) => {
  const renderTitle = () => {
    if (typeof title === "string") {
      return title;
    }

    return title.map((part, index) => (
      <span key={index} style={{ color: part.color || "#070707" }}>
        {part.text}
      </span>
    ));
  };

  return (
    <div>
      <h2 className="instrument-font text-2xl md:text-3xl xl:text-5xl leading-[100%] mb-4 ">
        {renderTitle()}
      </h2>
      <p
        className={`text-sm md:text-base font-medium tracking-[0.08px] leading-[160%]  ${
          isWidth ? "md:w-[50ch] " : ""
        }`}
        style={{ color: subtitleColor || "#4a4c56" }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
