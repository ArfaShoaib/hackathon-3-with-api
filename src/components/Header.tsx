"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/About" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/Contact" },
    { name: "Pages", href: "/pages" },
    { name: "Team", href: "/Team" }
  ];

  return (
    <header>
      {/* Main Navigation Bar */}
      <div className="w-full h-16 bg-white flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <h3 className="font-bold text-2xl text-[#252B42]">Bandage</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="flex items-center text-blue-500 hover:text-blue-600">
            <AiOutlineUser className="mr-1" />
            <span>Login / Register</span>
          </Link>
          <Link href="/search" className="text-gray-600 hover:text-blue-500">
            <CiSearch size={24} />
          </Link>
          <Link href="/Cart" className="text-gray-600 hover:text-blue-500">
            <AiOutlineShoppingCart size={24} />
          </Link>
          <Link href="/wishlist" className="text-gray-600 hover:text-blue-500">
            <CiHeart size={24} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-800 z-50"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center space-y-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl text-gray-800 hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Icons */}
            <div className="flex flex-col items-center space-y-4">
              <Link 
                href="/login" 
                className="flex items-center text-blue-500 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <AiOutlineUser className="mr-2" size={24} />
                <span>Login / Register</span>
              </Link>
              <div className="flex space-x-4">
                <Link href="/search" className="text-gray-600 hover:text-blue-500">
                  <CiSearch size={24} />
                </Link>
                <Link href="/cart" className="text-gray-600 hover:text-blue-500">
                  <AiOutlineShoppingCart size={24} />
                </Link>
                <Link href="/wishlist" className="text-gray-600 hover:text-blue-500">
                  <CiHeart size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;