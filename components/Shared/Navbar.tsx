"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ,s", href: "/faqs" },
    { name: "Blog", href: "/blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${
        pathname === "/" ? "fixed" : "sticky"
      } fixed  top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled || pathname !== "/" ? "bg-white shadow-sm" : "bg-white/72"
      }`}
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 xl:px-0 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="LUMI Logo" width={147} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-base font-medium leading-[160%] transition-colors duration-200 ${
                isActiveLink(link.href)
                  ? "text-[#228573] font-medium "
                  : "text-black hover:text-[#228573]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <span className="p-3 rounded-full bg-[#F2FBF8] text-[#228573] cursor-pointer">
              <Phone size={16} />
            </span>
            <Link
              href="/contact"
              className={`border border-[#228573] px-5 py-2 rounded-full font-medium transition duration-300 ${
                isActiveLink("/contact")
                  ? "bg-[#228573] text-white"
                  : "text-[#228573] hover:bg-green-500/20 hover:text-[#228573]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-green-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="LUMI Logo" width={147} height={40} />
          </Link>
          <button onClick={toggleMenu} className="p-2">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={toggleMenu}
              className={`font-medium transition-colors duration-200 ${
                isActiveLink(link.href)
                  ? "text-[#228573] border-l-4 border-[#228573] pl-3"
                  : "text-black hover:text-[#228573]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3 pt-4 border-t">
            <button className="p-3 rounded-full bg-green-50 text-[#228573] cursor-pointer">
              <Phone size={16} />
            </button>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={`w-full border text-center border-[#228573] p-3 rounded-full transition ${
                isActiveLink("/contact")
                  ? "bg-[#228573] text-white"
                  : "text-[#228573] hover:bg-[#228573] hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/20 backdrop-blur-lg z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
