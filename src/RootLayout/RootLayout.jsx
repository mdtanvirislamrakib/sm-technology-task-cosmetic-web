import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';

const RootLayout = () => {
  return (
    <div>
      {/* Top Navigation bar */}
      <Navbar></Navbar>

      {/* Home page content */}
      <Home></Home>
    </div>
  );
};

export default RootLayout;