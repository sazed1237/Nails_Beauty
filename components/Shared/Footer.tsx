import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#228573] text-white pt-12 pb-6 relative">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo & Description */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {/* Replace below with your SVG logo */}
            <div>
              <img
                src="/logo-white.svg"
                alt="LUMI Logo"
                className="h-12 mb-4"
              />
            </div>
            <p className="text-base leading-relaxed text-[#BAD9D4]">
              We are dedicated to helping you achieve beautiful, healthy nails
              with the perfect balance of expert care and personalized
              treatments.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 border rounded-full p-2 "
              >
                <FaFacebookF className="w-8 h-8" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-80 border rounded-full p-2"
              >
                <FaLinkedinIn className="w-8 h-8" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="hover:opacity-80 border rounded-full p-2"
              >
                <FaXTwitter className="w-8 h-8" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 border rounded-full p-2"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:w-1/6">
            <h3 className="font-semibold text-lg mb-8 leading-[130%]">
              Quick Links
            </h3>
            <ul className="space-y-5 text-[#BAD9D4]">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ,s
                </a>
              </li>
            </ul>
          </div>
          {/* Open Hours */}
          <div className="md:w-1/6">
            <h3 className="font-semibold text-lg mb-8 leading-[130%]">
              Open Hours
            </h3>
            <ul className="space-y-2 text-[#BAD9D4]">
              <li className="leading-[160%]">
                Monday - Friday
                <br />
                9:00 AM - 7:00 PM
              </li>
              <li>
                Saturday
                <br />
                10:00 AM - 5:00 PM
              </li>
              <li>Sunday - Closed</li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="md:w-1/4">
            <h3 className="font-semibold text-lg mb-8 leading-[130%]">
              Contact Information
            </h3>
            <ul className="space-y-5 text-[#BAD9D4]">
              <li className="flex items-center gap-2">
                <FaLocationDot className="w-5 h-5" />
                1234 Street Name, City, Country
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="w-5 h-5" />
                (123) 456–7890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                info@luminail.com
              </li>
              <li className="flex items-center gap-2">
                <FaRegClock className="w-5 h-5" />
                Monday - Friday: 9am - 7pm
              </li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/20 mt-10 mb-8"></div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm gap-2 text-[#BAD9D4]">
          <span>© 2025 luminailsbeauty. All rights reserved.</span>
          <div className="flex gap-6 ">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      {/* decoration */}
      <Image
        src="/star.svg"
        alt="decoration"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 hidden md:block"
      />
      <Image
        src="/star.svg"
        alt="decoration"
        width={200}
        height={200}
        className="absolute bottom-10 right-0 hidden md:block"
      />
    </footer>
  );
};

export default Footer;
