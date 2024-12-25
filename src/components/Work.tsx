import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section - Text */}
      <div className="bg-[#2A7CC7] text-white flex flex-col justify-center items-center lg:items-start lg:h-[820px] lg:w-1/2 px-8 py-12 lg:py-24">
        <h1 className="text-sm font-medium uppercase tracking-wider">
          Work With Us
        </h1>
        <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
          Now Let&apos;s grow Yours
        </h2>
        <p className="text-base mt-4 text-center lg:text-left">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th.
        </p>
        <button className="mt-6 py-2 px-6 b text-white font-semibold rounded-lg border border-white hover:bg-gray-200 lg:w-[132px] lg:h-[52px]">
          Button
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 lg:h-[840px]">
        <Image
          src="/hero2.png"
          alt="Main girl"
          height={636}
          width={490}
          quality={95}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Work;
