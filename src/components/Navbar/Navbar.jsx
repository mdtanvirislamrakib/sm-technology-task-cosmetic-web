import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion for animation
import { HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart, HiMenu, HiX, HiChevronDown } from 'react-icons/hi'; // React Icons for use icons
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu bar state
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false); // desktop blog dropdown state
  const [isOfferBarVisible, setIsOfferBarVisible] = useState(true); // Offer bar visibility state

  // Framer Motion mobile menu variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  // Framer Motion variants for blog dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95, originY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scaleY: 0.95, transition: { duration: 0.2 } }
  };

  // Framer Motion variants for offer bar
  const offerBarVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  return (
    // Navbar fixed positioning container
    <nav className="fixed top-0 w-full z-50">
      {/* Black Offer Bar */}
      <AnimatePresence>
        {isOfferBarVisible && (
          <motion.div
            className='bg-black w-full relative'
            variants={offerBarVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
          >
            {/* ফন্ট সাইজ responsive করার জন্য পরিবর্তিত লাইন */}
            <h2 className='text-xs sm:text-sm text-center font-semibold py-4 text-white'>
              30% OFF ALL ITEMS & FREE SHIPPING WITH CODE 'SPRING30" 1096 STORE CREDIT ON FIRST ORDER
            </h2>
            <button
              onClick={() => setIsOfferBarVisible(false)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close offer bar"
            >
              <HiX className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar Content Wrapper - This div will now take full width */}
      <div className="bg-white shadow-sm py-4 w-full"> {/* Changed here: removed container, added w-full */}
        {/* Inner Container for Navbar Content - This will keep content centered */}
        <div className="container mx-auto px-4 flex items-center justify-between roboto-font">
          {/* logo section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Velvet Glow Logo" className="h-8 w-8 object-contain" />
            <span className="text-pink-600 text-2xl font-semibold lg:block md:hidden block">Velvet Glow</span>
          </div>

          {/* desktop navbar */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-pink-600 transition duration-300 font-medium text-lg">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300 font-medium text-lg">Shop</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300 font-medium text-lg">Product</a>

            {/* blog nav and dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-pink-600 transition duration-300 flex items-center focus:outline-none font-medium text-lg">
                Blog
                <HiChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" style={{ transform: isBlogDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <AnimatePresence>
                {isBlogDropdownOpen && (
                  <motion.div
                    className="absolute bg-white shadow-lg rounded-md mt-2 w-40 z-10 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 text-lg hover:text-pink-600">Screen Care</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 text-lg hover:text-pink-600">Natural Beauty</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-150 text-lg hover:text-pink-600">Hair Care</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition duration-300 font-medium text-lg">Contact us</a>
          </div>

          {/* icons */}
          <div className="hidden md:flex items-center space-x-6">
            <HiOutlineSearch className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
            <HiOutlineShoppingCart className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
            <HiOutlineUser className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
          </div>

          {/* menu button for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none transition duration-300"
            >
              {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* toggle menu when the device is small/mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 py-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-4 px-4">
              <a href="#" className="text-pink-600 w-full text-center py-2 font-medium transition duration-150">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2 font-medium transition duration-150">Shop</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2 font-medium transition duration-150">Product</a>
              {/* Blog dropdown in mobile menu can be implemented here as a collapsible item if needed */}
              <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2 font-medium transition duration-150">Blog</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 w-full text-center py-2 font-medium transition duration-150">Contact us</a>
              <div className="flex items-center space-x-6 mt-4 pt-2 border-t border-gray-100 w-full justify-center">
                <HiOutlineSearch className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
                <HiOutlineShoppingCart className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
                <HiOutlineUser className="text-gray-700 hover:text-pink-600 text-2xl cursor-pointer transition duration-300" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;