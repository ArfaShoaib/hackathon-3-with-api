'use client'

import React from 'react';
import Image from 'next/image';

const Neural = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col-reverse 2xl:flex-row justify-center items-center 2xl:items-start">
        {/* Right Side: Content */}
        <div className="w-full 2xl:w-1/2 px-5 2xl:px-10 mt-8 2xl:mt-10 text-center 2xl:text-left">
          <h5 className="text-gray-400 text-sm 2xl:text-base font-bold mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-2xl sm:text-3xl 2xl:text-4xl font-bold leading-tight mb-4">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base 2xl:text-lg leading-6 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-wrap gap-4 justify-center 2xl:justify-start">
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              BUY NOW
            </button>
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              READ MORE
            </button>
          </div>
        </div>

        {/* Left Side: Image */}
        <div className="w-full 2xl:w-1/2 flex justify-center 2xl:justify-start mb-6 2xl:mb-0">
          <div className="relative w-[90%] max-w-[400px] sm:max-w-[500px] 2xl:w-full 2xl:max-w-none">
            <Image
              src="/neural.png"
              alt="Asian"
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