import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'iPhone 11 pro',
      specs: '256GB, Navy Blue',
      quantity: 2,
      price: 900,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Samsung galaxy Note 10',
      specs: '256GB, Navy Blue',
      quantity: 2,
      price: 900,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Canon EOS M50',
      specs: 'Onyx Black',
      quantity: 1,
      price: 1199,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'MacBook Pro',
      specs: '1TB, Graphite',
      quantity: 1,
      price: 1799,
      image: '/api/placeholder/80/80'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <button className="text-gray-600 flex items-center gap-2">
            ← Continue shopping
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Shopping cart</h2>
            <p className="text-gray-600 mb-4">You have {cartItems.length} items in your cart</p>
            
            <div className="flex justify-end mb-4">
              <select className="border p-2 rounded">
                <option>Sort by: price</option>
              </select>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{item.specs}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-8 text-center">{item.quantity}</span>
                        <span className="w-24 text-right">${item.price}</span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="lg:w-96">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Card details</h2>
                  <img 
                    src="/api/placeholder/40/40" 
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                <div className="flex gap-2 mb-6">
                  <img src="/api/placeholder/40/24" alt="Mastercard" className="h-6" />
                  <img src="/api/placeholder/40/24" alt="Visa" className="h-6" />
                  <img src="/api/placeholder/40/24" alt="Amex" className="h-6" />
                  <img src="/api/placeholder/40/24" alt="PayPal" className="h-6" />
                </div>

                <div className="space-y-4">
                  <Input 
                    placeholder="Cardholder's Name"
                    className="bg-blue-500 border-blue-400 text-white placeholder-blue-200"
                  />
                  <Input 
                    placeholder="Card Number"
                    className="bg-blue-500 border-blue-400 text-white placeholder-blue-200"
                  />
                  <div className="flex gap-4">
                    <Input 
                      placeholder="Expiration"
                      className="bg-blue-500 border-blue-400 text-white placeholder-blue-200"
                    />
                    <Input 
                      placeholder="CVV"
                      className="bg-blue-500 border-blue-400 text-white placeholder-blue-200"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total(incl. taxes)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-400 hover:bg-blue-300 text-white py-3 rounded mt-6 flex items-center justify-center gap-2">
                  <span>${total.toFixed(2)}</span>
                  <span>CHECKOUT →</span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;