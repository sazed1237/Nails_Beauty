import Heading from "@/components/Reusable/Heading";
import Image from "next/image";
const statistics = [
  {
    value: "7 Years",
    label: "Years Experience",
  },
  {
    value: "2000+",
    label: "Happy Clients",
  },
  {
    value: "50+",
    label: "Services Offered",
  },
  {
    value: "4.9",
    label: "Average Rating",
  },
];

const WelcomeSection = () => {
  return (
    <div className="py-16 md:py-20 lg:py-35">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0 flex flex-col lg:flex-row lg:gap-18 gap-10 items-center">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <Heading
              title={[
                { text: "Welcome to ", color: "#228573" },
                { text: "Lumi nails beauty", color: "#000" },
              ]}
            />
          </div>
          <p className="text-sm lg:text-base text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%] mb-4">
            At Lumi, we believe that nail care is more than just beauty – it’s
            self-care. Our mission is to provide a relaxing, hygienic, and
            professional environment where you can enjoy high-quality manicures,
            pedicures, nail art, and spa treatments. With a passion for detail
            and creativity, we ensure every client leaves feeling pampered and
            confident.
          </p>
          <p className="text-sm lg:text-base text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%]">
            Our salon is more than just a place to get your nails done – it’s a
            community built on trust, care, and creativity. From the moment you
            walk in, you’ll be welcomed into a warm and friendly atmosphere
            where your comfort matters most. Every detail, from hygiene to
            design, is handled with precision, so you can sit back, relax, and
            let us transform your nails into a true work of art.
          </p>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 mt-8">
            {statistics.map((stat, index) => (
              <div key={index}>
                <h1 className="instrument-font text-[#228573] text-3xl md:text-4xl xl:text-[2.5rem] leading-[100%] mb-3">
                  {stat.value}
                </h1>
                <p className="text-xs xl:text-sm text-[#4a4c56] font-medium tracking-[0.08px] leading-[160%]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src="/Images/about-us/welcome.jpg"
            alt="Welcome"
            width={1000}
            height={1000}
            className="w-full h-[310px] md:h-[460px] lg:h-[520px] xl:h-[620px] object-cover rounded-[48px] scale-x-[-1]"
          />
          <div className="absolute bottom-4 left-4 right-4 md:right-8 md:left-8 lg:right-4 lg:left-4 rounded-[32px] p-4 md:p-6 bg-white">
            <p className="text-center font-semibold text-sm md:text-base lg:text-lg xl:text-xl leading-[150%]">
              "At Lumi, we're shaping a new era of nail care—where artistry
              meets self-care and sustainability, inspiring confidence and
              unforgettable experiences."
            </p>
            <p className="text-center mt-2 md:mt-4 text-sm md:text-base">
              Lumi, <span className="text-[#228573]">Founder of Lumi nails beauty</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
