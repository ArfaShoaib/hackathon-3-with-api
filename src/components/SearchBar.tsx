'use client';
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { Products } from "../sanity/lib/data";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Products[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const query = `*[_type == "product" && lower("${searchTerm}") in lower(tags[]->title)]{
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
      const products: Products[] = await client.fetch(query);
      setSearchResults(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-4 px-4">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 border border-gray-200 rounded-md px-3 py-2 bg-white shadow-sm"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="flex-1 text-sm outline-none placeholder-gray-500"
        />
        <button type="submit" className="text-gray-600 hover:text-blue-500">
          <CiSearch size={20} />
        </button>
      </form>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute bg-white shadow-md border border-gray-200 w-full mt-2 z-10 rounded-md max-w-lg">
          <ul className="max-h-60 overflow-y-auto">
            {searchResults.map((product) => (
              <li
                key={product._id}
                className="p-3 hover:bg-gray-100 transition flex items-center"
              >
                <Link
                  href={`/product/${product._id}`}
                  className="block text-gray-800 text-sm w-full"
                >
                  <div className="flex items-center space-x-2">
                    {product.productImageUrl ? (
                      <Image
                        src={product.productImageUrl}
                        alt={product.title}
                        width={40}
                        height={40}
                        className="object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-xs">No Image</span>
                      </div>
                    )}
                    <div className="flex-grow">
                      <h2 className="font-medium truncate">{product.title}</h2>
                      <span className="text-xs text-blue-600">
                        ${product.price ? product.price.toFixed(2) : "N/A"}
                      </span>
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
