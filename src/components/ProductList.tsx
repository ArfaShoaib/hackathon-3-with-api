"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Products } from "../sanity/lib/data";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  products: Products[];
}

const calculateDiscountedPrice = (
  price: number,
  discountPercentage?: number
) => {
  if (!discountPercentage) return price;
  return price - (price * discountPercentage) / 100;
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center" data-aos="fade-down">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            href={`/shop/${product.slug}`}
            key={product._id}
            className="contents"
          >
            <Card
              className="flex flex-col h-full group relative transition-all duration-300 hover:shadow-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Add to Wishlist"
              >
                <Heart className="h-5 w-5 text-red-500" />
              </Button>

              {/* Product Image Container */}
              <div className="relative aspect-square w-full">
                <Image
                  src={product.productImageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isNew && <Badge className="bg-green-500">New</Badge>}
                  {product.discountPercentage && (
                    <Badge className="bg-red-500">
                      -{product.discountPercentage}%
                    </Badge>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <CardHeader className="px-4 pt-4 pb-2 flex-grow">
                <CardTitle className="text-lg font-semibold text-center line-clamp-2 h-12">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-4 pb-2 text-center flex-grow">
                <p className="text-sm text-gray-600 line-clamp-2 mb-2 min-h-[2.5rem]">
                  {product.description}
                </p>

                <div className="flex justify-center items-center gap-2 mb-2">
                  {product.discountPercentage ? (
                    <>
                      <span className="text-xl font-bold text-green-600">
                        $
                        {calculateDiscountedPrice(
                          product.price,
                          product.discountPercentage
                        ).toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                {product.tags?.length > 0 && (
                  <div className="flex justify-center flex-wrap gap-1 mt-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
