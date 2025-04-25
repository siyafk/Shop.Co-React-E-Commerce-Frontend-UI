import React, { useContext, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const Navbar = () => {
  const { search, setSearch } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger - visible only on mobile */}
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
          
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-wide">
            <Link to="/">SHOP.CO</Link>
          </h1>
        </div>

        {/* Desktop Nav Links - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-sm lg:text-base">
          <li className="hover:text-black transition">
            <Link to="/shop" className="px-1 py-2">Shop</Link>
          </li>
          <li className="hover:text-black transition cursor-pointer px-1 py-2">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="hover:text-black transition cursor-pointer px-1 py-2">
            <Link to="/deals">Deals</Link>
          </li>
          <li className="hover:text-black transition cursor-pointer px-1 py-2">
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Search Bar - hidden on mobile, visible from medium screens */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-6 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-sm placeholder:text-gray-500 transition-all duration-200"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>

        {/* Icons - Cart and Profile */}
        <div className="flex items-center gap-4 sm:gap-5 text-gray-700">
          <Link 
            to="/cart" 
            className="p-1 hover:text-black transition"
            aria-label="Shopping Cart"
          >
            <CiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link 
            to="/profile" 
            className="p-1 hover:text-black transition"
            aria-label="User Profile"
          >
            <FaRegUserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu - appears below navbar when toggled */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white text-sm placeholder:text-gray-500"
              />
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </div>
          <ul className="flex flex-col divide-y divide-gray-100">
            <li>
              <Link 
                to="/shop" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                to="/categories" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                onClick={toggleMenu}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link 
                to="/deals" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                onClick={toggleMenu}
              >
                Deals
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;