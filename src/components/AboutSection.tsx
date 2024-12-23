import { useState } from 'react';

const Section = () => {
  const [showText, setShowText] = useState(false);
  const handleHover = () => {
    setShowText(true);
  };
  const handleMouseOut = () => {
    setShowText(false);
  };
  return (
    <div className="bg-white p-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500">Problems trying</h1>
        <h1 className="text-4xl font-bold text-black">
          Met minim Mollie non desert
        </h1>
        <h1 className="text-4xl font-bold text-black">
          Alamo est sit cliquey dolor do
        </h1>
        <h1 className="text-4xl font-bold text-black">met sent.</h1>
        {showText && (
          <p className="text-gray-500 mt-4">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <div
          className="flex flex-col items-center justify-center rounded-md shadow-md p-4"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          <h1 className="text-6xl font-bold">15K</h1>
          <p className="text-gray-500 mt-2">Happy Customers</p>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-md shadow-md p-4"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          <h1 className="text-6xl font-bold">150K</h1>
          <p className="text-gray-500 mt-2">Monthly Visitors</p>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-md shadow-md p-4"
          onMouseEnter={handleHover}
          onMouseOut={handleMouseOut}
        >
          <h1 className="text-6xl font-bold">200+</h1>
          <p className="text-gray-500 mt-2">Projects Completed</p>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-md shadow-md p-4"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          <h1 className="text-6xl font-bold">5</h1>
          <p className="text-gray-500 mt-2">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Section;