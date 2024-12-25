import React from 'react';

const Section = () => {
  return (
    <div className="bg-white p-10 lg:mt-44">
     <div className="flex flex-col text-center">
  <div>
    <h1 className="text-2xl font-bold text-red-500 lg:text-start lg:ml-64">Problems trying</h1>
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start mt-4">
      <p className="text-4xl font-bold text-[#252B42] lg:w-[394px] lg:h-[96px] lg:font-semibold lg:text-[24px] lg:leading-[32px] lg:text-left">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </p>
      <p className="text-[#737373] lg:w-[545px] lg:h-[40px] lg:text-[14px] lg:leading-[20px] lg:text-right mt-4 lg:mt-0">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics.
      </p>
    </div>
  </div>
</div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 lg:mb-16">
            <div className="flex flex-col items-center justify-center rounded-md  p-4">
              <h1 className="text-6xl font-bold">15K</h1>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md p-4">
              <h1 className="text-6xl font-bold">150K</h1>
              <p className="text-gray-500 mt-2">Monthly Visitors</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md p-4">
              <h1 className="text-6xl font-bold">200+</h1>
              <p className="text-gray-500 mt-2">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md  p-4">
              <h1 className="text-6xl font-bold">5</h1>
              <p className="text-gray-500 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
     
  );
};

export default Section;
