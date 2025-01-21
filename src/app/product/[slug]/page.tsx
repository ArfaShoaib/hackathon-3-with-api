import { getAllProductsbyID } from "@/sanity/lib/data";
import React from "react";
import Image from "next/image";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SecondaryNavbar from "@/components/Navbar";


const SProductpage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const product = await getAllProductsbyID(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Product not found
          </h2>
          <Link
            href="/product"
            className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
          >
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const calculateDiscountedPrice = (
    originalPrice: number,
    discount?: number
  ) => {
    if (!discount) return originalPrice;
    return originalPrice - (originalPrice * discount) / 100;
  };

  return (
    <div>
      <SecondaryNavbar />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="container mx-auto mb-6">
        <Link
          href="/product"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image Section */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={product.productImageUrl}
                  alt={product.title}
                  fill
                  quality={100}
                  className="object-contain" // Use object-contain to avoid cropping
                  priority
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <p className="text-gray-500 text-[20px]">
                  {product.description}
                </p>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                {product.discountPercentage ? (
                  <>
                    <span className="text-3xl font-bold text-green-600">
                      $
                      {calculateDiscountedPrice(
                        product.price,
                        product.discountPercentage
                      ).toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SProductpage;
