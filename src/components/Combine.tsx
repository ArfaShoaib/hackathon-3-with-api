"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Dresses } from "@/sanity/lib/data";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
interface ProductListProps {
  
}

const FashionPage: React.FC<ProductListProps> = ({  }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);
  const [dresses, setDresses] = useState<Dresses[]>([]);
  const [tag] = useState<string>("Womens Fashion");

  useEffect(() => {
    const fetchDresses = async () => {
      const query = `*[_type == "dress"]{
        _id,
        "slug": slug.current,
        "productImageUrl": productImage.asset->url, 
        title,
        tags,
        price,
        discountPercentage,
        size,
        color
      }`;
      const data = await client.fetch(query);
      setDresses(data);
    };

    fetchDresses();
  }, [tag]);

  if (!dresses) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-white">
      {/* Editor's Pick Section */}
      <div className="w-full flex justify-center py-2 bg-[#FAFAFA]">
        <div className="w-full max-w-[1050px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-10">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-Montserrat font-semibold text-2xl leading-8">
              EDITOR'S PICK
            </h3>
            <p className="w-full max-w-[347px] h-auto font-Montserrat font-normal text-sm leading-5 text-[#737373] text-center">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="w-full h-auto flex flex-col lg:flex-row gap-8 overflow-hidden">
            <div className="relative w-full lg:w-[510px] h-[500px]">
              <Image
                src="/image.png"
                alt="men"
                fill
                quality={95}
                className="object-cover rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-12 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-lg leading-6 hover:bg-gray-100">
                MEN
              </button>
            </div>

            <div className="relative w-full lg:w-[240px] h-[500px]">
              <Image
                src="/image2.png"
                alt="women"
                fill
                quality={95}
                className="object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-4 py-2 flex items-center justify-center gap-2 bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-lg leading-6 text-[#252B42]">
                  WOMEN
                </h2>
              </button>
            </div>

            <div className="w-full lg:w-[240px] h-auto flex flex-col gap-8">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/image3.png"
                  alt="accessories"
                  fill
                  quality={95}
                  className="object-cover"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-4 py-2 flex items-center justify-center gap-2 bg-white shadow-md">
                  <h2 className="font-Montserrat font-bold text-lg leading-6 text-[#252B42]">
                    ACCESSORIES
                  </h2>
                </button>
              </div>

              <div className="relative w-full h-[242px]">
                <Image
                  src="/image4.png"
                  alt="kids"
                  fill
                  quality={95}
                  className="object-cover"
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

      {/* Featured Dresses Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
            Featured Dresses
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center"
            data-aos="zoom-out"
          >
            {dresses && dresses.length > 0 ? (
              dresses.map((dress) => (
                <Link href={`/shop/${dress.slug}`} key={dress._id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] transform transition-transform hover:scale-105">
                    <div className="relative w-full h-[220px] sm:h-[240px] md:h-[280px]">
                      <Image
                        src={dress.productImageUrl}
                        alt={dress.title}
                        fill
                        quality={95}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4 text-center">
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">
                        {dress.title}
                      </h4>
                      <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-black">
                        {dress.description}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">
                        Color: {dress.color}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">
                        Sizes:{" "}
                        {dress.size
                          ? dress.size.join(", ")
                          : "No sizes available"}
                      </p>
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-gray-500">
                          $
                          {dress.discountPercentage
                            ? dress.discountPercentage
                            : dress.price}
                        </span>
                        {dress.discountPercentage && (
                          <span className="text-xs sm:text-sm font-bold text-gray-600 line-through">
                            ${dress.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No dresses available</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FashionPage;
