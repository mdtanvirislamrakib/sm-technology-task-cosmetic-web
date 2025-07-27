import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart, HiMenu, HiX } from 'react-icons/hi'; // React Icons 
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toogle

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* লোগো সেকশন */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Velvet Glow Logo" className="h-8 w-8" /> 
          <span className="text-pink-600 text-2xl font-semibold">Velvet Glow</span>
        </div>

        {/* desktop navbar*/}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300">Shop</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300">Product</a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-pink-600 transition duration-300 flex items-center">
              Blog
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* ড্রপডাউন মেনু (ঐচ্ছিক, আপনার ছবিতে এটি খোলা নেই কিন্তু ব্লগের জন্য সাধারণত থাকে) */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 z-10">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog Item 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog Item 2</a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300">Contact us</a>
        </div>

        {/* আইকন সেকশন (ডেস্কটপ) */}
        <div className="hidden md:flex items-center space-x-6">
          <HiOutlineSearch className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
          <HiOutlineShoppingCart className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
          <HiOutlineUser className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
        </div>

        {/* মোবাইল মেনু বাটন */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-pink-600 focus:outline-none">
            {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* মোবাইল মেনু (টগল করা যাবে) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 py-2`}>
        <div className="flex flex-col items-center space-y-4 px-4">
          <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2">Shop</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2">Product</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2">Blog</a>
          <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2">Contact us</a>
          <div className="flex items-center space-x-6 mt-4 pt-2 border-t border-gray-100 w-full justify-center">
            <HiOutlineSearch className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
            <HiOutlineShoppingCart className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
            <HiOutlineUser className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;