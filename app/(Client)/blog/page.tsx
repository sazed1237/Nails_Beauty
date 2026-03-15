import BlogCategories from "@/components/Features/Blog/BlogCategories/BlogCategories";
import LatestBlogs from "@/components/Features/Blog/LatestBlogs/LatestBlogs";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div>
      <LatestBlogs />
      <div className="relative">
        <BlogCategories />

        {/* decorated star */}
        <Image
          src="/star.svg"
          alt="star"
          width={200}
          height={200}
          className="absolute hidden lg:block -z-10 top-0 right-0"
        />
      </div>
    </div>
  );
}
