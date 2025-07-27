import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from "../../assets/images/heroImage.png";
import { VscQuote } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 15, mass: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Quote Box Animation Variants
  const quoteBoxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 12, delay: 0.7 } },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay: 1.5
      }
    }
  };

  return (
    <motion.div
      className='relative flex items-center overflow-hidden pt-10 md:pt-16 lg:pt-20 banner-bg-color bg-gray-200/5'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      <div className='container mx-auto px-4 xl:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-5 z-10'>
        {/* Left Side: Text Content */}
        <div className='lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left pt-10 lg:pt-0'>

          {/* Pink Circles/Shapes */}
          <motion.div
            className='inline-flex items-center relative pr-4'
            variants={itemVariants}
          >
            {/* Overlapping Pink Circular Shapes for "New Spring 2025 Collections" */}
            <div className="relative -left-2 top-0">
              <div className="absolute -top-1 -left-1 w-10 h-10 bg-[#FFC7CF] rounded-full opacity-80"></div>
              <div className="absolute -top-1 left-2 w-10 h-10 bg-[#CE4E61] rounded-full opacity-80"></div>
              <div className="w-5 h-5 rounded-full z-10"></div>
            </div>
            <span className='text-xl font-semibold text-gray-800 tracking-wider ml-2 z-10 maven-font'>
              New Spring 2025 Collections
            </span>
          </motion.div>

          {/* banner title */}
          <motion.h1
            className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mt-6 mb-6 md:mb-8 maven-font'
            variants={itemVariants}
          >
            Fashion That<br />
            Feels As Good As It <span className='text-[#CE4E61] inline-block transform -rotate-[4.65deg] ml-2'>Looks</span>
          </motion.h1>

          {/* banner subtitle */}
          <motion.p
            className='text-gray-600 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-lg lg:max-w-xl mx-auto lg:mx-0 montserrat-font'
            variants={itemVariants}
            style={{ lineHeight: '1.6' }}
          >
            Streetwear-inspired and flavor-packed, every drop celebrates individuality, freedom, and effortless style—where comfort meets cultural edge.
          </motion.p>

          {/* Get started button add */}
          <motion.button
            className='bg-[#CE4E61] hover:bg-[#B43C4F] text-white font-bold py-3 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#CE4E61] focus:ring-opacity-75 flex items-center justify-center gap-3 mx-auto lg:mx-0 cursor-pointer montserrat-font'
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(206, 78, 97, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='text-xl'>Get Started</span>
            <GoArrowUpRight size={25} />
          </motion.button>
        </div>

        {/* Right Side: Image and Quote*/}
        <div className='lg:w-1/2 relative flex flex-col items-center lg:flex-row lg:items-start lg:justify-end pt-10 lg:py-0'>

          {/* Image section */}
          <motion.div
            className='relative w-full max-w-[400px] md:max-w-[480px] lg:max-w-[450px] xl:max-w-[600px] h-auto flex-shrink-0 banner-image-bg bg-contain bg-no-repeat bg-center'
            variants={imageVariants}
          >
            <img
              src={HeroImage}
              alt="Fashion Model holding serum bottle"
              className='w-full h-auto object-contain'
            />
          </motion.div>

          {/* Quote Box*/}
          <motion.div
            className='absolute p-5 md:p-6 text-sm md:text-base lg:text-gray-900 bg-white lg:bg-transparent rounded-4xl lg:shadow-none shadow-sm max-w-[200px] md:max-w-[250px] lg:max-w-[250px] lg:mr-5 z-20 lg:-right-[80px] xl:-right-[100px] lg:top-0 lg:bottom-auto bottom-0 -right-10 md:-right-20 roboto-font'

            variants={quoteBoxVariants}
            animate={["visible", "float"]}
          >
            <VscQuote className='w-8 h-8 text-[#CE4E61] mb-2 transform -rotate-12 origin-top-left' />

            <p className='italic text-xs font-semibold leading-relaxed text-gray-700'>
              "I love that it's made with gentle ingredients – no irritation at all, even on my sensitive skin."
            </p>
            <div className='flex items-center mt-3'>
              <div className="w-8 h-0.5 bg-gray-900 mr-2"></div>
              <p className='text-gray-600 font-semibold text-sm'>
                Afia Jaman
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;