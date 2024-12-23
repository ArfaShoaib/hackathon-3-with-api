import React from 'react';

const Companysec = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
        Big Companies Are Here
      </h1>
      <div className="flex flex-col items-center sm:flex-row">
        <img
          src="/hooli.png"
          alt="Hooli Logo"
          className="w-24 h-24 sm:w-32 sm:h- 32 lg:w-40 lg:h-40"
        />
        <img
          src="/acme.png"
          alt="Acme Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
        />
      </div>
    </div>
  );
};

export default Companysec;