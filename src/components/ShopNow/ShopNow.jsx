import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// React Icons import
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Product images
import image1 from "../../assets/images/shopnow/image1.png";
import image2 from "../../assets/images/shopnow/image2.png";
import image3 from "../../assets/images/shopnow/image3.jpg";
import image4 from "../../assets/images/shopnow/image4.jpg";
import image5 from "../../assets/images/shopnow/image5.jpg";

const ShopNow = () => {
  const sliderImages = [image1, image2, image3, image4, image5];

  return (
    <div
      className="flex justify-center items-center py-12 px-4 lg:px-8 bg-white lg:max-w-11/12 mx-auto"
    >
      {/* Main container for the slider and static box, with responsive gap */}
      <div className="w-full max-w-[1280px] grid lg:grid-cols-5 grid-cols-1 gap-6 items-center justify-center">
        {/* Swiper Slider Section */}
        <div className="w-full relative flex justify-center items-center col-span-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16} // Gap between individual slides
            slidesPerView={2}
            slidesPerGroup={1} // Slides one by one on navigation click
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper w-full h-auto"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover rounded-lg shadow-md"
                  style={{ height: '350px', width: '100%' }} // Image dimensions
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons using React Icons */}
            <div className="swiper-button-prev-custom absolute z-10 top-1/2 -translate-y-1/2 left-4 cursor-pointer bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <BsArrowLeftShort className="text-gray-800 text-2xl" />
            </div>
            <div className="swiper-button-next-custom absolute z-10 top-1/2 -translate-y-1/2 right-4 cursor-pointer bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <BsArrowRightShort className="text-gray-800 text-2xl" />
            </div>
          </Swiper>
        </div>

        {/* Static Content Box Section */}
        <div
          className="w-full p-10 bg-gray-900 text-white shadow-lg flex flex-col justify-center items-center lg:items-start text-center lg:text-left rounded-xl col-span-3"
          style={{ height: '350px' }} // Height matched with slider images
        >
          <p className="text-orange-300 uppercase text-sm font-semibold mb-2">Ready To Shop</p>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Revolutionizing Your Skins<br />Journey to Radiance
          </h3>
          <a
            href="#"
            className="inline-flex items-center self-center lg:self-start px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            SHOP NOW <span className="ml-2"><BsArrowRightShort className="text-gray-800 text-2xl" /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;