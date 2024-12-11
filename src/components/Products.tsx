"use client";

import { useState } from "react";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Image from "next/image";

type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  discountPrice: number;
  rating: number;
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<BsFillStarFill key={i} className="text-yellow-500" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<BsStarHalf key={i} className="text-yellow-500" />);
    } else {
      stars.push(<BsStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: "/image5.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/image6.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 4,
    },
    {
      id: 3,
      image: "/image7.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 5,
    },
    {
      id: 4,
      image: "/image8.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
    {
      id: 4,
      image: "/image12.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
    {
      id: 4,
      image: "/image13.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
    {
      id: 4,
      image: "/image14.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
    {
      id: 4,
      image: "/image15.png",
      title: "Graphic Design",
      category: "English Department",
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:mt-[750px] sm:mt-[1870px] md:mt-[1900px] xs:mt-[1800px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Featured Products
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-center mb-4">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-gray-600 text-center mb-12 px-4">
          Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer max-w-[300px] mx-auto"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative w-full h-[300px] md:h-[427px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  quality={95}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-base md:text-lg font-semibold">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex justify-center items-center mt-2 mb-2">
                  {renderStars(product.rating)}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-base md:text-lg font-bold text-gray-500">
                    ${product.discountPrice}
                  </span>
                  <span className="line-through text-sm font-bold text-green-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="relative w-full h-[300px] md:h-[400px] mb-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-500 mb-2">{selectedProduct.category}</p>
              <div className="flex justify-center items-center mb-2">
                {renderStars(selectedProduct.rating)}
              </div>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-lg font-bold text-green-600">
                  ${selectedProduct.discountPrice}
                </span>
                <span className="line-through text-gray-500">
                  ${selectedProduct.price}
                </span>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
