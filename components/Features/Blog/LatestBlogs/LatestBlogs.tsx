import Hero from "@/components/Reusable/Hero";
import BlogThumbnail, { BlogListItem } from "../BlogThumbnail/BlogThumbnail";
import Heading from "@/components/Reusable/Heading";



export const blogList = [
  {
    image: "/Images/blogs/1.jpg",
    title: "The ultimate wedding day guide",
    subTitle:
      "From elegant French tips to custom nail art, find out how to choose ...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/2.jpg",
    title: "Which is right for you?",
    subTitle:
      "Both gel and acrylic nails offer stunning looks, but they differ in ...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
  {
    image: "/Images/blogs/3.jpg",
    title: "Top nail art trends you’ll love in 2025",
    subTitle:
      "From minimalist lines to bold 3D designs, explore this year’s hottest...Read More",
    createdAt: "Sep 20, 2025, 1:07 Pm ET",
    auther: {
      name: "Jacob Jones",
      image: "/Images/blogs/auther.jpg",
    },
  },
];

export default function LatestBlogs() {
  return (
    <div>
      <Hero
        bg="/Images/blogs/blog-hero.jpg"
        title="Nail care tips & beauty insights"
        subtitle="Home/Blog"
      />

      <section className="max-w-[1320px] mx-auto px-4 xl:px-0 my-16">
        <Heading
          title={[{ text: "The " }, { text: "Latests", color: "#228573" }]}
        />

        <div className="grid xl:grid-cols-[3fr_2fr] gap-12  mt-12">
          <BlogThumbnail
            image="/Images/blogs/blog-thumbnail.jpg"
            title="5 Essential nail care tips for everyday"
            subTitle="
          Healthy nails start with small daily habits. Discover simple routines
          that keep your nails strong, shiny, and beautiful all year
          round...Read More
        "
            createdAt="Sep 22, 2025, 1:07 Pm ET"
            auther={{
              name: "Jacob Jones",
              image: "/Images/blogs/auther.jpg",
            }}
          />

          <div className="">
            {blogList.map((item, index) => (
              <BlogListItem key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
