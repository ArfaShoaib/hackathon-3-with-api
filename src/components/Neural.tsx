'use client'

import React from 'react';
import Image from 'next/image';

const Neural = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start xs:mt-14 lg:text-justify">
        {/* Right Side: Content */}
        <div className="w-full px-5 lg:px-10 mt-8 lg:mt-0 lg:text-center lg:w-[573px] flex flex-col justify-between lg:justify-center items-center h-full">
  <h5 className="text-gray-400 text-sm lg:text-base lg:font-bold mb-3 lg:mr-60 lg:mt-28 lg:text-justify">
    SUMMER 2020
  </h5>
  <h2 className="lg:text-[#252B42] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 xs:mt-7 xs:text-center xs:w-[303px] xs:h-[140px] xs:font-bold xs:tracking-[2px] xs:text-[40px] xs:leading-[50px] lg:text-center lg:w-[375px] lg:h-[100px] lg:ml-14">
    Part of the Neural Universe
  </h2>
  <h4 className="lg:text-[#737373] text-sm sm:text-base lg:text-lg leading-6 mb-6 xs:mt-7 xs:text-[20px] xs:leading-[30px] xs:tracking-[2px] lg:text-justify">
    We know how large objects will act, <br />
    but things on a small scale.
  </h4>
  <div className="flex flex-wrap gap-4 xs:justify-center lg:justify-center xs:flex-col xs:items-center xs:mt-7">
    <button className="lg:bg-[#2DC071] lg:bg-none text-white px-6 py-3 rounded-md hover:bg-green-600 xs:w-[156px] xs:bg-[#23A6F0] transition-colors">
      BUY NOW
    </button>
    <button className="lg:bg-white lg:border-green-600 lg:text-green-600 px-6 py-3 rounded-md lg:hover:bg-green-600 xs:w-[156px] xs:bg-white border-2 border-[#23A6F0] xs:text-[#23A6F0] transition-colors xs:mb-10">
      READ MORE
    </button>
  </div>
</div>

        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <div className="relative w-[90%] max-w-[400px] sm:max-w-[500px] lg:w-full lg:max-w-none">
            <Image
              src="/neural.png"
              alt="Neural Universe"
              width={725}
              height={774}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Neural;
