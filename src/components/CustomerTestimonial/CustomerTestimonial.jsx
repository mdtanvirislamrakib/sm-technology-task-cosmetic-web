import React from 'react';
import customer1Image from "../../assets/images/Customer/customer1.png";
import customer2Image from "../../assets/images/Customer/customer2.png";
import testimonialImage from "../../assets/images/Customer/testomonial.png";

const CustomerTestimonial = () => {
  return (
    <div className="banner-bg-color py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Customer Testimonial</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Testimonial Cards Container */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2 lg:-mr-28 z-10 lg:ml-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-md shadow-md border border-gray-100 p-4 w-full lg:w-[424px] lg:h-[284px]">
              <div className="flex items-center mb-2">
                <img
                  src={customer1Image}
                  alt="Afifa Jaman Sinigdha"
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Afifa Jaman Sinigdha</h3>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Explore our collection of carefully chosen products expert advice and inspiring stories designed to
                help you discover your full potential. Whether you are seeking inspiration advice or the perfect
                product to elevate your routine.
              </p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-md shadow-md border border-gray-100 p-4 w-full lg:w-[424px] lg:h-[284px]">
              <div className="flex items-center mb-2">
                <img
                  src={customer2Image}
                  alt="Afifa Jaman Sinigdha"
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Afifa Jaman Sinigdha</h3>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Explore our collection of carefully chosen products expert advice and inspiring stories designed to
                help you discover your full potential. Whether you are seeking inspiration advice or the perfect
                product to elevate your routine.
              </p>
            </div>
          </div>

          {/* Large Image */}
          <div className="lg:max-w-[536px] lg:max-h-[430px] w-full lg:mr-10 mr-0">
            <img
              src={testimonialImage}
              alt="Testimonial background"
              className="rounded-md shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;