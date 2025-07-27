import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/images/browse collection images/image1.png";
import image2 from "../../assets/images/browse collection images/image2.png";
import image3 from "../../assets/images/browse collection images/image3.png";
import image4 from "../../assets/images/browse collection images/image4.png";

const collectionData = [
  { id: 1, title: 'Oil Cleansers', image: image1, items: '5 Items' },
  { id: 2, title: 'Hand Cream', image: image2, items: '5 Items' },
  { id: 3, title: 'Toners Skin', image: image3, items: '5 Items' },
  { id: 4, title: 'Face Mask', image: image4, items: '5 Items' },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  hover: { scale: 1.1, transition: { type: 'spring', stiffness: 150, damping: 10 } },
};

const BrowseCollection = () => {
  return (
    <motion.div
      className="py-12 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center roboto-font">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0  mx-auto xl:max-w-4xl 2xl:max-w-5xl">
          {collectionData.map(item => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-[#AE5928] font-semibold">{item.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BrowseCollection;