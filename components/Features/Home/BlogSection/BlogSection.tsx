import Heading from '@/components/Reusable/Heading';
import Image from 'next/image';
import React from 'react';

const blogs = [
    {
        image: '/Images/blogs/1.jpg',
        title: 'Nail care tips you can do at home',
        desc: 'Healthy nails start with daily care. From moisturizing cuticles to avoiding harsh chemicals, here are 5...',
        author: {
            name: 'Jacob Jones',
            avatar: '/Images/blogs/1.jpg',
        },
        date: 'June 15, 2025, 1:07 PM ET',
    },
    {
        image: '/Images/blogs/2.jpg',
        title: 'Top nail art trends for 2025',
        desc: 'From minimalist designs to bold 3D art, here are the hottest nail art styles that everyone is trying this year...',
        author: {
            name: 'Jacob Jones',
            avatar: '/Images/blogs/2.jpg',
        },
        date: 'June 15, 2025, 1:07 PM ET',
    },
    {
        image: '/Images/blogs/3.jpg',
        title: 'Bridal nail care',
        desc: 'Your wedding day is special, and your nails deserve the spotlight too! Here’s how to prepare your nails...',
        author: {
            name: 'Jacob Jones',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date: 'June 15, 2025, 1:07 PM ET',
    },
];

const BlogSection = () => {
    return (
        <section className=" py-16 px-4 md:px-8 xl:px-0">
            <div className="max-w-[1320px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <Heading
                        title={[
                            {text:"What our ", color:"#000"},
                            {text:"Customers say", color:"#2C8B7B"},
                        ]}
                        subtitle='At our Nail Studio, your satisfaction is our top priority. We take pride in delivering flawless nail care and pampering experiences.'
                        subtitleColor='#4A4C56'
                        isWidth='true'
                        />
                    </div>
                    <div className="">
                        <a
                            href="#"
                            className="inline-block border border-[#2C8B7B] text-[#2C8B7B] px-6 py-2 rounded-full font-semibold hover:bg-[#2C8B7B] hover:text-white transition"
                        >
                            See all blog
                        </a>
                    </div>
                </div>
                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="bg-transparent rounded-[40px] flex flex-col h-full"
                        >
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={500}
                                height={324}
                                className="w-full h-[324px] object-cover rounded-[40px]"
                            />
                            <div className="mt-6 px-2 md:px-0 flex-1 flex flex-col">
                                <h3 className="instrument-font text-xl md:text-2xl font-medium text-black font mb-2">{blog.title}</h3>
                                <p className="text-[#A1A1AA] text-base mb-6 flex-1">{blog.desc}</p>
                                <div className="flex items-center gap-3 text-sm">
                                    <img
                                        src={blog.author.avatar}
                                        alt={blog.author.name}
                                        className="w-7 h-7 rounded-full border"
                                    />
                                    <span className="text-[#2C8B7B] font-semibold text-xs sm:text-base">{blog.author.name}</span>
                                    <span className="text-[#A1A1AA] text-xs sm:text-base">Published {blog.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;