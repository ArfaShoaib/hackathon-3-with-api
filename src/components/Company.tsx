import Image from 'next/image';
import React from 'react';

const Companysec = () => {
  return (
    <div className="container mx-auto px-4 bg-[#FAFAFA] lg:h-[479px]">
      <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl lg:mt-14">
        Big Companies Are Here
      </h1>
      <p className='lg:text-[14px] lg:leading-[20px] text-[#737373] lg:text-center lg:mt-10 lg:ml-[365px] lg:w-[397px] lg:h-[40px]'>Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>
      <div className="flex flex-col items-center sm:flex-row lg:mt-20 lg:ml-20">
        <Image
          src="/hooli.png"
          alt="Hooli Logo"
          width={153}
          height={34}
          className="w-24 h-24 sm:w-32 sm:h- 32 lg:w-40 lg:h-14"
        />
        <Image
          src="/lyft.png"
          alt="Acme Logo"
          width={146}
          height={59}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-14"
        />
         <Image
          src="/lyft2.png"
          alt="Acme Logo"
          width={152}
          height={75}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-16"
        />
         <Image
          src="/stripe.png"
          alt="Acme Logo"
          width={151}
          height={42}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-14"
        />
         <Image
          src="/aws.png"
          alt="Acme Logo"
          width={151}
          height={62}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-14"
        />
         <Image
          src="/aws2.png"
          alt="Acme Logo"
          width={151}
          height={72}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-14"
        />
      </div>
    </div>
  );
};

export default Companysec;