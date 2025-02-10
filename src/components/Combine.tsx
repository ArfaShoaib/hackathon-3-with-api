"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Dresses } from "@/sanity/lib/data";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart } from "lucide-react";
import AddToCartButton from "./AddToCart";

const FashionPage = ({}) => {
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
              EDITOR&apos;S PICK
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
            data-aos="zoom-out"
          >
            {dresses && dresses.length > 0 ? (
              dresses.map((dress, index) => (
                <Link
                  href={`/shop/${dress.slug}`}
                  key={dress._id}
                  className="contents"
                >
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden group relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Wishlist Button */}
                    <button
                      className="absolute top-2 right-2 z-10 bg-white/70 rounded-full p-2 hover:bg-white shadow-md"
                      title="Add to Wishlist"
                    >
                      <Heart className="h-5 w-5 text-red-500" />
                    </button>

                    {/* Product Badges */}
                    <div className="absolute top-2 left-2 flex gap-2 z-10">
                      {dress.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      {dress.discountPercentage && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -{dress.discountPercentage}%
                        </span>
                      )}
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={dress.productImageUrl}
                        alt={dress.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-4 text-center">
                      <h3 className="text-base font-semibold mb-2 line-clamp-2 min-h-[3rem]">
                        {dress.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-2 line-clamp-2 min-h-[2.5rem]">
                        {dress.description}
                      </p>

                      {/* Price */}
                      <div className="flex justify-center items-center gap-2 mb-2">
                        {dress.discountPercentage ? (
                          <>
                            <span className="text-lg font-bold text-green-600">
                              $
                              {(
                                dress.price *
                                (1 - dress.discountPercentage / 100)
                              ).toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                              ${dress.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold">
                            ${dress.price.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Additional Details */}
                      <div className="flex justify-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          Color: {dress.color}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          Sizes: {dress.size?.join(", ") || "N/A"}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      {/* <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button> */}
                      <AddToCartButton 
                        product={{
                          productId: dress._id,
                          title: dress.title,
                          price: dress.price,
                          image: dress.productImageUrl
                        }} 
                      />

                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No dresses available
              </div>
              
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FashionPage;
