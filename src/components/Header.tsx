'use client'

import React from 'react';
import Link from 'next/link';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
   <div className='w-[1440px] h-[64px] bg-white flex items-center justify-between '>
    <div className='flex items-center justify-between'>
      <h3 className='font-brandName justify-between text-dark-50 font-[700] text-2xl h-[58px] w-[187px] ml-[38px] mt-5 mr-20 '>Bandage</h3></div>
       <ul className='flex items-center gap-[15px] w-[361px] h-[25px] mt-1 mr-50 ml-72 '>
       <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-700"
        href="">Home</Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-black font-bold"
        href="">Shop</Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-700"
        href="">About</Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-700"
        href="">Blog</Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-700"
        href="">Contact</Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-700"
        href="">Pages</Link>
         <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-blue-400 font-bold hover:text-gray-700"
        href=""> <AiOutlineUser /></Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-blue-400 font-bold hover:text-gray-700"
        href="">Register / Login</Link>
       <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-blue-400 font-bold hover:text-gray-700"
        href=""><AiOutlineShoppingCart /></Link>
        <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-blue-400 font-bold hover:text-gray-700"
        href=""><AiOutlineShoppingCart /></Link>
         <Link className="w-[58px] h-[24px] text-bold font-brandName text-sm text-[700] text-blue-400 font-bold hover:text-gray-700"
        href=""> <CiHeart/></Link>
        
       
       
    </ul>
   </div>
  )
}

export default Header