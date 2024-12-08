"use client";
import React from 'react';
import Image from 'next/image';

const Classic = () => {
  return (
    <div className="bg-[#23856D] py-24 px-4 md:px-0 lg:h-[790px] xs:h-[1003px] sm:h-[600px] sm:mb-5 ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center bg-[#23856D] rounded-lg overflow-hidden">
          {/* Left Side Text Content */}
          <div className="w-full md:w-1/2 p-6 space-y-6">
            <h4 className="text-white font-montserrat text-xl">SUMMER 2020</h4>
            <h1 className="text-white font-montserrat text-5xl font-bold leading-tight">
              Vita Classic Product
            </h1>
            <p className="text-white font-montserrat text-base max-w-md">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex items-center space-x-4">
              <h3 className="text-white font-montserrat text-2xl font-bold">$16.48</h3>
              <button className="bg-[#2DC071] text-white font-montserrat px-8 py-3 rounded-md flex items-center">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 p-6 xs:mt-3">
            <Image 
              src="/men.png" 
              alt="Product Image" 
              width={510} 
              height={600} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classic;