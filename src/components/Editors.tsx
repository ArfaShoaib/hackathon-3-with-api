'use client'
import Image from "next/image";

const Editor = () => {
  return (
    <div className="mx-auto w-full flex justify-center py-2 absolute top-[850px] bg-[#FAFAFA] lg:mb-10">
      <div className="w-full max-w-[1050px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-2xl leading-8">
            EDITOR&#39;S PICK
          </h3>
          <p className="w-full max-w-[347px] h-auto font-Montserrat font-normal text-sm leading-5 text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {/* Images Section */}
        <div className="w-full h-auto flex flex-col lg:flex-row gap-8 overflow-hidden">
          {/* Men Image */}
          <div className="relative w-full lg:w-[510px] h-[500px]">
            <Image
              src='/image.png'
              alt="men"
              width={510}
              height={500}
              quality={95}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-12 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-lg leading-6 hover:bg-gray-100">
              MEN
            </button>
          </div>
          {/* Women Image */}
          <div className="relative w-full lg:w-[240px] h-[500px]">
            <Image
              src='/image2.png'
              alt="women"
              width={240}
              height={500}
              quality={95}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-4 py-2 flex items-center justify-center gap-2 bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-lg leading-6 text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>
          {/* Accessories and Kids */}
          <div className="w-full lg:w-[240px] h-auto flex flex-col gap-8">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src='/image3.png'
                alt="div1"
                width={240}
                height={242}
                quality={95}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-4 py-2 flex items-center justify-center gap-2 bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-lg leading-6 text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>
            {/* Kids Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src='/image4.png'
                width={240}
                height={242}
                alt="div2"
                quality={95}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-4 py-2 flex items-center justify-center gap-2 bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-lg leading-6 text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;