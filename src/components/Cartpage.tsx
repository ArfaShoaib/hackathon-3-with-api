"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

interface CartItem {
  productId: string;
  title: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/cart");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("📌 Fetched cart items:", data);
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError("Failed to load cart items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the item from local state
      setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
      
      // Show success message (optional)
      toast?.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing item:', error);
      toast?.error('Failed to remove item');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId} className="border p-4 mb-2 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={64} 
                  height={64} 
                  className="object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => handleDelete(item.productId)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
