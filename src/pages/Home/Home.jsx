import React from 'react';
import HeroSection from '../../components/Hero/Hero';
import BrowseCollection from '../../components/BrowseCollection/BrowseCollection';
import ShopNow from '../../components/ShopNow/ShopNow';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import NewsAndBlog from '../../components/NewsAndBlog/NewsAndBlog';
import Footer from '../../components/Footer/Footer';
import CustomerTestimonial from '../../components/CustomerTestimonial/CustomerTestimonial';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BrowseCollection></BrowseCollection>
      <ShopNow></ShopNow>
      <PopularProducts></PopularProducts>
      <CustomerTestimonial></CustomerTestimonial>
      <NewsAndBlog></NewsAndBlog>
      <Footer></Footer>
    </div>
  );
};

export default Home;