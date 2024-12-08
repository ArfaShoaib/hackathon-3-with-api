'use client'

import { useState } from 'react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <footer className=" bg-white py-10 font-montserrat">
      <div className="max-w-screen-xl max-h-[542px] mx-auto  ">
        {/* Top Section */}
        <div className=" flex flex-row justify-between items-center bg-gray-100 px-5 h-[142px]">
          {/* Logo and Name */}
          <div>
            <h3 className="text-xl font-bold leading-8 text-gray-800 tracking-[0.1px]">
              Bandage
            </h3>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 ml-2 w-[112px] h-[24px]">
            <Link href="#" className="text-blue-600 text-xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-blue-600 text-xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-blue-600 text-xl">
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mb-10"></div>

        {/* Middle Section */}
        <div className="flex justify-between flex-wrap mb-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Company Info
            </h4>
            <ul className="list-none p-0 text-gray-600 leading-6 font-semibold">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Carrier</Link></li>
              <li><Link href="#">We are hiring</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Legal
            </h4>
            <ul className="list-none p-0 text-gray-600 leading-6 font-semibold">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Carrier</Link></li>
              <li><Link href="#">We are hiring</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Features
            </h4>
            <ul className="list-none p-0 text-gray-600 leading-6 font-semibold">
              <li><Link href="#">Business Marketing</Link></li>
              <li><Link href="#">User Analytics</Link></li>
              <li><Link href="#">Live Chat</Link></li>
              <li><Link href="#">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Resources
            </h4>
            <ul className="list-none p-0 text-gray-600 leading-6 font-semibold">
              <li><Link href="#">iOS & Android</Link></li>
              <li><Link href="#">Watch a Demo</Link></li>
              <li><Link href="#">Customers</Link></li>
              <li><Link href="#">API</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Get in Touch
            </h4>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 w-52 border border-gray-200 rounded-sm font-semibold"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 border-none rounded-md cursor-pointer w-32 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2 font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        {/* Bottom Section */}
       <div className='h-[74px]  ml-0 bg-gray-200'>
       <div className="lg:text-left text-gray-600 text-sm font-semibold  ">
          Made With Love By Finland All Right Reserved
        </div>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
