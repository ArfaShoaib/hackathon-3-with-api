import { getAllProductsbyID, getSProductsbyID } from "@/sanity/lib/data";
import React from "react";
import Image from "next/image";
import {  Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SecondaryNavbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCart";

export interface DynamicProduct {
  _id: string;
  title: string;
  slug: string;
  productImageUrl: string;
  description: string;
  price: number;
  discountPercentage?: number;
  tags: string[];
  isNew?: boolean;
  size?: string[];  // Optional, only for Dresses
  color?: string[]; // Optional, only for Dresses
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;


  // Fetching products based on the slug
  const generalProduct = await getAllProductsbyID(slug);
  const dressProduct = await getSProductsbyID(slug);

  // Determine which product is available (generalProduct or dressProduct)
  const availableProduct = generalProduct || dressProduct;

  // If no product is found, show a "Product not found" message
  if (!availableProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
          <Link href="/shop" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Ensure we're handling the case where the product is either a general product or a dress
  const isDress = 'size' in availableProduct && 'color' in availableProduct;

  return (
    <div>
      <SecondaryNavbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mb-6">
          <Link href="/shop" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <Image
                  src={availableProduct.productImageUrl || "/default-image.jpg"} // Fallback image
                  alt={availableProduct.title}
                  width={400}
                  height={400}
                  className="object-contain w-full"
                />
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{availableProduct.title}</h1>
                <p className="text-gray-500">{availableProduct.description}</p>
                <span className="text-2xl font-bold text-green-600">${availableProduct.price}</span>

                {/* Show size & color only for dresses */}
                {isDress && availableProduct.size && availableProduct.color && (
                  <div>
                    {Array.isArray(availableProduct.size) && availableProduct.size.length > 0 && (
                      <p><strong>Sizes:</strong> {availableProduct.size.join(", ")}</p>
                    )}
                    {Array.isArray(availableProduct.color) && availableProduct.color.length > 0 && (
                      <p><strong>Colors:</strong> {availableProduct.color.join(", ")}</p>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  
                    <div className="px-6 py-3 rounded-lg flex items-center">
                     <AddToCartButton product={availableProduct}  />
                     </div>
                  <button className="p-3 border border-gray-300 rounded-lg">
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

export default ProductPage;
