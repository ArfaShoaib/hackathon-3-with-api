'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartItem {
  _id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      if (data.success) {
        setCartItems(data.cartItems);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="border p-4 my-2 flex justify-between items-center">
            <Image src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              {item.size && <p>Size: {item.size}</p>}
              {item.color && <p>Color: {item.color}</p>}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
