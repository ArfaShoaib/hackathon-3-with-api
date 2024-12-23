import React from 'react'

const Contact2 = () => {
  return (
    <div>
          <div className="bg-white flex flex-col items-center justify-center  p-4 lg:w-[1050px] lg:h-[348px] lg:ml-40">
      {/* Arrow */}
      <div className="text-blue-500 text-2xl mb-4">
        <i className="fas fa-arrow-down"></i>
      </div>

      {/* Subheading */}
      <p className="uppercase text-gray-500 text-sm font-semibold text-center mb-2">
        We can't wait to meet you
      </p>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
        Let’s Talk
      </h1>

      {/* Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold">
        Try it free now
      </button>
    </div>
    </div>
  )
}

export default Contact2
