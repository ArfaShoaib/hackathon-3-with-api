"use client";

import { useState } from "react";

interface AddToCartProps {
  product: {
    productId: string;
    title: string;
    price: number;
    image: string;
  };
}

const AddToCartButton: React.FC<AddToCartProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product), // Ensure this matches the API schema
      });
  
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
    setLoading(false);
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={handleAddToCart}
      disabled={loading}
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
