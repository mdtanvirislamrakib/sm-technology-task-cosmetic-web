import React from 'react';
import HeroSection from '../../components/Hero/Hero';
import BrowseCollection from '../../components/BrowseCollection/BrowseCollection';
import ShopNow from '../../components/ShopNow/ShopNow';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BrowseCollection></BrowseCollection>
      <ShopNow></ShopNow>
      <PopularProducts></PopularProducts>
    </div>
  );
};

export default Home;