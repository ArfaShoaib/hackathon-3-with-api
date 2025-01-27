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

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const calculateDiscountedPrice = (
    price: number,
    discountPercentage?: number
  ) => {
    if (!discountPercentage) return price;
    return price - (price * discountPercentage) / 100;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center" data-aos="fade-down">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <Card
              className="group relative transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                data-aos="fade-left"
                data-aos-delay={index * 100 + 200}
              >
                <Heart className="h-5 w-5 text-red-500" />
              </Button>

              {/* Product Image */}
              <div
                className="relative aspect-square overflow-hidden rounded-t-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 100}
              >
                <Image
                  src={product.productImageUrl || '/fallback-image.png'} // Default image URL for missing images
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge
                    className="absolute top-2 left-2 bg-green-500"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 300}
                  >
                    New
                  </Badge>
                )}
                {product.discountPercentage && (
                  <Badge
                    className="absolute top-2 left-16 bg-red-500"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 400}
                  >
                    -{product.discountPercentage}%
                  </Badge>
                )}
              </div>

              <CardHeader className="p-4" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                <CardTitle className="text-lg font-semibold line-clamp-1">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 pt-0" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2">
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
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 500}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0" data-aos="fade-up" data-aos-delay={index * 100 + 400}>
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