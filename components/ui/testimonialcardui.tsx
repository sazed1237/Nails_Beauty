import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    name: "Sophia Reed",
    title: "Marketing Manager",
    rating: 5,
    feedback:
      "Absolutely love this place! The staff are so friendly, and my manicure always lasts longer than anywhere else I’ve been.",
    image: "/sophia.jpg",
  },
  {
    name: "Sophia Reed",
    title: "Marketing Manager",
    rating: 5,
    feedback:
      "Absolutely love this place! The staff are so friendly, and my manicure always lasts longer than anywhere else I’ve been.",
    image: "/sophia.jpg",
  },
  {
    name: "Sophia Reed",
    title: "Marketing Manager",
    rating: 5,
    feedback:
      "Absolutely love this place! The staff are so friendly, and my manicure always lasts longer than anywhere else I’ve been.",
    image: "/sophia.jpg",
  },
  {
    name: "Sophia Reed",
    title: "Marketing Manager",
    rating: 5,
    feedback:
      "Absolutely love this place! The staff are so friendly, and my manicure always lasts longer than anywhere else I’ve been.",
    image: "/sophia.jpg",
  },
];

export default function TestimonialsPage() {
  return (
   <div className="p-8 min-h-screen shadow-none">



      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Testimonials</h1>
      </div>

      
        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
    
  );
}
