'use client'
import { useState } from "react";
import Image from "next/image";
import { TbTruckDelivery, TbPackage, TbHeart } from "react-icons/tb";

export default function EditorPick() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index:any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:ml-20 md:mr-20 ">
      <div className="relative group lg:w-[510px] lg-h[500px]">
        <Image
          src="/image.png"
          alt="Men"
          width={500}
          height={700}
          className="rounded-lg "
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 text-center text-gray-800 group-hover:bg-gray-100">
          <span className="font-bold">MEN</span>
        </div>
      </div>
      <div className="relative group lg:w-[350px] lg-h[500px] lg:ml-72 lg:mt-24">
        <Image
          src="/image2.png"
          alt="Women"
          width={500}
          height={700}
          className="rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 text-center text-gray-800 group-hover:bg-gray-100">
          <span className="font-bold">WOMEN</span>
        </div>
      </div>
      <div className=" md:flex md:flex-row md:gap-5 md:w-[655px]  ">
      <div className="md:flex md:flex-row md:gap-5 md:w-[655px]  relative group md:h-[400px] ">
        <Image
          src="/image3.png"
          alt="Accessories"
          width={500}
          height={700}
          className="rounded-lg "
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 text-center text-gray-800 group-hover:bg-gray-100">
          <span className="font-bold">ACCESSORIES</span>
        </div>
      </div>
      <div className="relative group md:w-[655px]">
        <Image
          src="/image4.png"
          alt="Kids"
          width={500}
          height={700}
          className="rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 text-center text-gray-800 group-hover:bg-gray-100">
          <span className="font-bold">KIDS</span>
        </div>
        </div>
      </div>
     
    </div>
);
}
