import HeroSection from "@/components/Features/Home/HeroSection/HeroSection";
import AboutUs from "@/components/Features/Home/AboutUs/AboutUs";
import OurServices from "@/components/Features/Home/OurServices/OurServices";
import OurWorkGallery from "@/components/Features/Home/OurWorkGallery/OurWorkGallery";
import BookSession from "@/components/Features/Home/BookSession/BookSession";
import BlogSection from "@/components/Features/Home/BlogSection/BlogSection";
import Testimonials from "@/components/Features/Home/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurWorkGallery />
      <BookSession />
      <Testimonials />
      <BlogSection />
    </div>
  );
}
