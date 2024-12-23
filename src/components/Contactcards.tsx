import React from 'react'

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto lg:w-[985px] lg:h-[403px]">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-blue-500 mb-4">
            <i className="fas fa-phone text-4xl"></i>
          </div>
          <p className="text-gray-700 text-sm">
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
        <div className="flex flex-col items-center text-center p-6 bg-blue-900 text-white rounded-lg shadow-md">
          <div className="text-blue-300 mb-4">
            <i className="fas fa-map-marker-alt text-4xl"></i>
          </div>
          <p className="text-sm">
            georgia.young@example.com
            <br />
            georgia.young@ple.com
          </p>
          <p className="font-medium mt-2">Get Support</p>
          <button className="mt-4 px-6 py-2 border border-blue-300 text-blue-300 font-semibold rounded hover:bg-blue-300 hover:text-blue-900 transition">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-blue-500 mb-4">
            <i className="fas fa-envelope text-4xl"></i>
          </div>
          <p className="text-gray-700 text-sm">
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
