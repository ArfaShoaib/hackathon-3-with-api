'use client';
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import  {Products}  from "../sanity/lib/data";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{
      [x: string]: any;_id: string; title: string; slug: string
}> | []>([]);
  
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    const query = `*[_type == "product" && "${searchTerm}" in tags]{
      _id,
      title,
      description,
      "slug": slug.current,
      "productImageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew
    }`;

    try {
      const products:Products[] = await client.fetch(query);
            setSearchResults(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-4">
      <form onSubmit={handleSearch} className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by category..."
          className="flex-1 outline-none"
        />
        <button type="submit" className="text-gray-600 hover:text-blue-500">
          <CiSearch size={24} />
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="absolute bg-white shadow-md border border-gray-300 w-full mt-2 z-10 rounded-lg">
          <ul className="max-h-60 overflow-y-auto">
            {searchResults.map((product) => (
              <li key={product._id} className="p-4 hover:bg-gray-100 transition">
                <Link href={`/product/${product._id}`} className="block text-gray-800">
                  <div className="flex items-center">
                    {product.productImageUrl ? (
                      <Image src={product.productImageUrl} alt={product.title} width={64} height={64} className="object-cover rounded-md mr-4" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex items-center justify-center">
                        <span>No Image</span>
                      </div>
                    )}
                    <div className="flex-grow">
                      <h2 className="font-semibold">{product.title}</h2>
                      <span className="text-sm text-blue-600">${product.price ? product.price.toFixed(2) : 'Price not available'}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  };
  

export default SearchBar;