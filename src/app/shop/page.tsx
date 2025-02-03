
import React from "react";
import ProductList from "@/components/ProductList";
import SecondaryNavbar from "@/components/Navbar";
import { getAllProducts } from "@/sanity/lib/data";

const ProductPage = async () => {
  const products = await getAllProducts() || []; // Fetch data in the server component

  return (
    <div className="min-h-screen bg-gray-50">
      <SecondaryNavbar />
      <ProductList products={products} /> {/* Pass data to the client component */}
      
    </div>
  );
};

export default ProductPage;
