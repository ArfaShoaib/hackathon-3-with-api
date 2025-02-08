'use client';
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";
import { X, Menu } from "lucide-react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/About" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/Contact" },
    { name: "Pages", href: "/pages" },
    { name: "Team", href: "/Team" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
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

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="flex items-center text-blue-500 hover:text-blue-600">
            <AiOutlineUser className="mr-1" />
            <span>Login / Register</span>
          </Link>
          <button onClick={toggleSearchBar} className="text-gray-600 hover:text-blue-500">
            <CiSearch size={24} />
          </button>
          <Link href="/Cart" className="text-gray-600 hover:text-blue-500">
            <AiOutlineShoppingCart size={24} />
          </Link>
          <Link href="/wishlist" className="text-gray-600 hover:text-blue-500">
            <CiHeart size={24} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-blue-500 text-lg"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="flex items-center text-blue-500 hover:text-blue-600"
              onClick={toggleMenu}
            >
              <AiOutlineUser className="mr-2" size={24} />
              <span>Login / Register</span>
            </Link>

            <div className="flex space-x-4">
              <button onClick={toggleSearchBar} className="text-gray-600 hover:text-blue-500">
                <CiSearch size={24} />
              </button>
              <Link href="/cart" className="text-gray-600 hover:text-blue-500">
                <AiOutlineShoppingCart size={24} />
              </Link>
              <Link href="/wishlist" className="text-gray-600 hover:text-blue-500">
                <CiHeart size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && <SearchBar />}
    </header>
  );
};

export default Header;
