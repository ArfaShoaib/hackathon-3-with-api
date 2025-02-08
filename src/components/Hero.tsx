'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Herosection = () => {
    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out",
      });
    }, []);
  return (
    <div className="relative w-full h-[716px] mt-2">
      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="maingirl"
        height={716}
        width={1440}
        priority
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-[10%] lg:pl-[15%]">
        <div className="text-left max-w-2xl" data-aos="fade-up">
          <h5 className="font-montserrat font-bold text-base tracking-wider text-white mb-4">
            SUMMER 2020
          </h5>
          
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl tracking-wide text-white mb-6">
            NEW COLLECTION
          </h1>
          
          <p className="font-montserrat text-base md:text-xl text-white mb-8 max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <Link href="/shop">
          <button className="bg-[#2DC071] text-white font-montserrat py-3 px-8 rounded-md hover:bg-[#24a360] transition-colors">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Herosection