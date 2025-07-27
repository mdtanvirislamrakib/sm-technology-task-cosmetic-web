import React from 'react';
import HeroImage from "../../assets/images/heroImage.png"
import { VscQuote } from "react-icons/vsc";
import { GoHorizontalRule } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className='min-h-screen banner-bg-color'>
      <div className='flex flex-col items-center justify-around lg:flex-row'>
        <div>
          {/* Hero section content */}
          <div className='flex items-center relative'>
            <div className='flex relative'>
              <div className='w-14 h-14 rounded-full light-pink'></div>
              <div className='w-14 h-14 rounded-full dark-pink absolute left-7'></div>
            </div>
            <div className='z-10'>
              <h2 className='text-2xl'>New Spring 2025<br />Collections</h2>
            </div>
          </div>

          <div className='text-7xl w-[541px] font-bold relative'>
            <h1>Fashion That Feels As Good As It <span className='text-[#CE4E61] absolute -rotate-3 ml-4'>Looks</span></h1>
          </div>

          <div>
            <p>Streetwear-inspired and flavor-packed, every drop celebrates individuality, freedom, and effortless style—where comfort meets cultural edge</p>
          </div>

          <div>
            <button className='dark-pink px-10 py-4 flex items-center gap-3 text-white font-bold'>
              <span className='text-xl'>Get Started</span>
              <GoArrowUpRight size={25} />
            </button>
          </div>

        </div>

        <div className='relative'>
          {/* Hero Section banner */}
          <div className='banner-image-bg '>
            <img src={HeroImage} alt="" className=' w-[542px] h-[650px]' />
          </div>
          <div className='absolute top-16 -right-36'>
            <div className=''>
              <VscQuote />

              <div>
                <h2>I love that it's made with gentle ingredients — no<br />irritation at all, even on my sensitive skin.</h2>
              </div>
              <div className='flex items-center'>
                <GoHorizontalRule className='w-10' />
                <p>Afia Jaman</p>
              </div>
            </div>
            

          </div>



        </div>
      </div>
    </div>
  );
};

export default Hero;