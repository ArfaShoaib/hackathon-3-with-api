import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const TrialButton = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        Start your 14 days free trial
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 text-center max-w-xl">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Try it free now
      </button>
      <div className="mt-8 flex space-x-4">
        <Link href="#" passHref>
          <FaTwitter className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" />
        </Link>
        <Link href="#" passHref>
          <FaFacebook className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" />
        </Link>
        <Link href="#" passHref>
          <FaInstagram className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" />
        </Link>
        <Link href="#" passHref>
          <FaLinkedin className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default TrialButton;
