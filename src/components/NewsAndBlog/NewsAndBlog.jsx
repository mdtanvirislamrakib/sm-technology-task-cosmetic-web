import React from 'react';
import firstImage from "../../assets/images/blogImages/image1.png"; // Top Middle Image (A woman with beauty products)
import secoundImage from "../../assets/images/blogImages/image2.png"; // Bottom Left Image (Hair washing/salon)
import thirdImage from "../../assets/images/blogImages/image3.png"; // Bottom Right Image (Assortment of cosmetic products)

const NewsAndBlog = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest News and Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top Left Text Card - Relates to general beauty/skincare */}
          <div className="col-span-1 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800 ">Unlocking Radiant Skin: Your Daily Skincare Ritual</h3>
            <p className="text-gray-600 text-sm mb-4">
              Discover the secrets to a glowing complexion with our expert guide to daily skincare. Learn about the best products and techniques to cleanse, hydrate, and protect your skin for lasting radiance and health.
            </p>
            <button className=" hover:bg-pink-700 text-lg text-white font-semibold bg-[#CE4E61] py-2 rounded-md transition duration-300 w-52 cursor-pointer">
              Read more
            </button>
          </div>

          {/* Top Middle Image Card - Already has image */}
          <div className="col-span-1 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={firstImage}
              alt="Woman with face mask or beauty product"
              className="w-full h-auto object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px]"
            />
          </div>

          {/* Top Right Text Card - Relates to makeup/cosmetics */}
          <div className="col-span-1 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800 ">The Art of Makeup: Enhancing Your Natural Beauty</h3>
            <p className="text-gray-600 text-sm mb-4">
              Dive into the world of cosmetics and learn how to apply makeup like a pro. From foundation to finishes, our tips will help you highlight your best features and express your unique style with confidence.
            </p>
            <button className=" hover:bg-[#CE4E61] text-black text-lg hover:text-white font-semibold border-[#CE4E61] border py-2 rounded-md transition duration-300 w-52 cursor-pointer">
              Read more
            </button>
          </div>

          {/* Bottom Left Image Card - Already has image */}
          <div className="col-span-1 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={secoundImage}
              alt="Hair washing or treatment in a salon"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Middle Text Card - Relates to hair care/treatments */}
          <div className="col-span-1 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800 ">Transform Your Tresses: Advanced Hair Care Solutions</h3>
            <p className="text-gray-600 text-sm mb-4">
              Explore the latest trends and treatments for healthy, lustrous hair. Whether you're dealing with damage, dryness, or dullness, our comprehensive guide offers solutions to revitalize your locks.
            </p>
            <button className=" hover:bg-[#CE4E61]  text-black text-lg hover:text-white font-semibold border-[#CE4E61]  border py-2 rounded-md transition duration-300 w-52 cursor-pointer">
              Read more
            </button>
          </div>

          {/* Bottom Right Image Card - Already has image */}
          <div className="col-span-1 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={thirdImage}
              alt="Assortment of cosmetic and beauty products"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlog;