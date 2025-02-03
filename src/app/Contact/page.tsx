"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Contactcards from "@/components/Contactcards";
import Contact2 from "@/components/Contact2";
import SecondaryNavbar from "@/components/Navbar";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <div>
      <SecondaryNavbar />
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4 md:px-8 lg:flex lg:items-center lg:justify-between lg:leading-[50px]">
          {/* Left Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h3 className="uppercase text-black text-sm font-semibold mb-2 lg:w-[108px] lg:h-[24px] lg:text-[16px] lg:leading-[24px] lg:mb-5">
              Contact Us
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 lg:w-[378px] lg:h-[160px] lg:text-[58px] lg:leading-[80px] lg:mt-5">
              Get in touch today!
            </h1>
            <p className="text-gray-600 text-sm md:text-base mb-6 lg:w-[370px] lg:h-[60px] lg:text-[20px] lg:leading-[30px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="lg:mb-16 lg:w-[242px] lg:h-[38px] lg:text-[24px] lg:leading-[32px] ">
              <p className="font-semibold text-black lg:mb-2">
                Phone: <span className="text-black">+451 215 215</span>
              </p>
              <p className="font-semibold text-black">
                Fax: <span className="text-black">+451 215 215</span>
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 lg:w-[242px] lg:h-[50px] lg:gap-5">
              <Link href="#" className="text-gray-600 hover:text-gray-900 lg:w-[30px] lg:h-[25px] lg:text-3xl">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 lg:w-[30px] lg:h-[25px] lg:text-3xl">
                <ImFacebook />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 lg:w-[30px] lg:h-[25px] lg:text-3xl">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 lg:w-[30px] lg:h-[25px] lg:text-3xl">
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <Image
              src="/contactheroimg.png" // Place your image in the public folder and update the name accordingly
              alt="Family Shopping"
              width={500}
              height={500}
              className="rounded-xl mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <Contactcards />
        </div>
      </div>
      <div>
        <Contact2 />
      </div>
    </div>
  );
};

export default Contactpage;
