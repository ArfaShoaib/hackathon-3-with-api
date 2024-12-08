'use client'

import { useState } from 'react';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Image from 'next/image';

type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  discountPrice: number;
  rating: number;
};

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: '/image5.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      rating: 4.5,
    },
    {
      id: 2,
      image: '/image6.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      rating: 4,
    },
    {
      id: 3,
      image: '/image7.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      rating: 5,
    },
    {
      id: 4,
      image: '/image8.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      rating: 3.5,
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto py-16 lg:ml-20">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <h3 className="text-xl font-medium text-center mb-4">BESTSELLER PRODUCTS</h3>
      <p className="text-gray-600 text-center mb-12">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-[238px] h-[615px]"
            onClick={() => handleProductClick(product)}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover w-[239px] h-[427px]"
            />
            <div className="p-10 text-center">
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-gray-500">{product.category}</p>
             
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.discountPrice}</span>
                <span className="line-through text-gray-500">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
            <p className="text-gray-500">{selectedProduct.category}</p>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              width={500}
              height={500}
              className="object-cover mt-4"
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">${selectedProduct.discountPrice}</span>
              <span className="line-through text-gray-500">${selectedProduct.price}</span>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts; 