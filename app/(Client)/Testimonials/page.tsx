import Testimonials from "@/components/Features/Testimonials/Testimonials";
import Hero from "@/components/Reusable/Hero";
import React from "react";

export default function TestimonialsPage() {
  return (
    <div>
      <Hero
        bg="/Images/services/1.jpg"
        title="What our clients say"
        subtitle="Home/Testimonial"
      />
      <Testimonials />
    </div>
  );
}
