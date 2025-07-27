import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default RootLayout;