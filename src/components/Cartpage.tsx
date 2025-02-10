"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CartItem {
  productId: string;
  title: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (productId: string) => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setCartItems(cartItems.filter((item) => item.productId !== productId));
        alert("Item removed from cart");
      } else {
        alert("Failed to remove item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId} className="border p-4 mb-2 flex justify-between items-center">
              <div>
                <Image src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
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
