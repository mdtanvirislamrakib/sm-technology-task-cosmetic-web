import React from 'react';
import HeroSection from '../../components/Hero/Hero';
import BrowseCollection from '../../components/BrowseCollection/BrowseCollection';
import ShopNow from '../../components/ShopNow/ShopNow';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BrowseCollection></BrowseCollection>
      <ShopNow></ShopNow>
    </div>
  );
};

export default Home;