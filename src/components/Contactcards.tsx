import React from 'react'
import { IoCallOutline,IoLocationSharp} from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";



const Contactcards = () => {
  return (
    <div>
       <section className="min-h-screen py-12 px-4 md:px-8 lg:w-[1050px] lg:h-[841px]">
      <div className="text-center mb-12">
        <h4 className="uppercase text-gray-500 text-sm font-semibold mb-2">
          Visit our office
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          We help small businesses <br /> with big ideas
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl hover:text-white mx-autolg:w-[985px] lg:h-[403px] lg:mt-20">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 border hover:text-white border-gray-200 rounded-lg shadow-sm xs:hover:bg-blue-900">
          <div className="text-blue-500 mb-4 lg:mt-10">
          <IoCallOutline className='lg:w-[72px] lg:h-[72px]' />

          </div>
          <p className="text-gray-900 text-sm">
            georgia.young@example.com
            <br />
            georgia.young@ple.com
          </p>
          <p className="text-gray-900 font-medium mt-2">Get Support</p>
          <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 hover:text-white text-white rounded-lg shadow-md hover:bg-blue-900">
          <div className="text-blue-500 mb-4 lg:mt-10">
          <IoLocationSharp className='lg:w-[72px] lg:h-[72px]' />

          </div>
          <p className="text-gray-900 text-sm ">
            georgia.young@example.com
            <br />
            georgia.young@ple.com
          </p>
          <p className="text-gray-900 font-medium mt-2">Get Support</p>
          <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-300 hover:text-blue-900 transition">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border hover:text-white border-gray-200 rounded-lg shadow-sm hover:bg-blue-900">
          <div className="text-blue-500 mb-4 lg:mt-10">
          <BsEnvelopeFill className='lg:w-[72px] lg:h-[72px]' />

          </div>
          <p className="text-gray-900 text-sm ">
            georgia.young@example.com
            <br />
            georgia.young@ple.com
          </p>
          <p className="text-gray-900 font-medium mt-2">Get Support</p>
          <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contactcards
