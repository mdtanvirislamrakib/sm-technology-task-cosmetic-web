import React from 'react';
import { motion } from 'framer-motion';

// Product images imports
import lipStickImage from "../../assets/images/popular_products/lipstick.png";
import lipBlamImage from "../../assets/images/popular_products/lipBlam.png";
import blushImage from "../../assets/images/popular_products/blush.png";
import eyeShadowImage from "../../assets/images/popular_products/eyeShadow.png";
import mushkaraImage from "../../assets/images/popular_products/muskara.png";
import foundationImage from "../../assets/images/popular_products/foundation.png";
import jelImage from "../../assets/images/popular_products/jel.png";
import creamImage from "../../assets/images/popular_products/cream.png";

// Product data array
const products = [
  { name: "Lipstick", brand: "Better Wood and Home", price: 120, image: lipStickImage, sale: true },
  { name: "Lip Balm", brand: "Better Wood and Home", price: 120, image: lipBlamImage },
  { name: "Blush", brand: "Better Wood and Home", price: 120, image: blushImage, sale: true },
  { name: "Eye Shadow", brand: "Better Wood and Home", price: 120, image: eyeShadowImage },
  { name: "Mascara", brand: "Better Wood and Home", price: 120, image: mushkaraImage, sale: true },
  { name: "Foundation", brand: "Better Wood and Home", price: 120, image: foundationImage },
  { name: "Jel", brand: "Better Wood and Home", price: 120, image: jelImage },
  { name: "Cream", brand: "Better Wood and Home", price: 120, image: creamImage },
];

// Framer Motion animation variants for product cards
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};


const PopularProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      {/* Section title with responsive text sizing */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">Our Popular Products</h2>
      
      {/* Responsive grid for product cards: 1 column on small, 2 on sm, 3 on md, 4 on lg screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
          >
            {/* Sale badge displayed conditionally */}
            {product.sale && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                50%
              </span>
            )}
            
            {/* Product image container with fixed height and centering */}
            <div className="h-64 flex justify-center items-center bg-gray-50 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Product information section */}
            <div className="p-4 text-left">
              <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              
              {/* Price */}
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-red-500">Price: ${product.price}</p>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;