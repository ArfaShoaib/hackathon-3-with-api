'use client'

import React from 'react'
import { LuPhone } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";


const TopHeader = () => {
  return (
    <div className='xs:hidden w-full h-[46px] bg-[#252B42] flex justify-between items-center pl-[24px] pr-[24px]'>
      <div className='flex text-[#FFFFFF] items-center'>
        <LuPhone />
        <h6 className='font-[700] text-[14px] gap-[0.5] leading-[24px] '>(225) 555-0118</h6>

        <div className='w-[260px] h-[44px] gap-[5px] flex items-center ml-5'>
        <BiMessage className='w-[16px] h-[16px]'/>
        <h6 className='font-[700] text-[14px] gap-[0.5] leading-[24px]'>michelle.river@example.com</h6>
        </div>
      </div>
      <div>
        <h6 className='text-[#FFFFFF] font-[700] text-[14px] gap[0.5] leadig-[24px] space-x-0.5 '>Follow us and get a chance to win 80% off</h6>
      </div>

      <div className='flex'>
        <h6 className='text-[#FFFFFF] font-[700] text-[14px] gap-[0.5] leading-[24px] space-x-0.5'>Follow Us :</h6>

        <div className='flex items-center gap-3'>
         <IoLogoInstagram className='w-[18px] h-[18px] mr-2 text-[white] ml-3' />
         <IoLogoYoutube className='w-[18px] h-[18px] mr-2 text-[white]'/>
          <IoLogoFacebook className='w-[18px] h-[18px] mr-2 text-[white]'/>
          <CiTwitter className='w-[18px] h-[18px] mr-2 text-[white]'/>
        </div>
      </div>
    </div>
  )
}

export default TopHeader

