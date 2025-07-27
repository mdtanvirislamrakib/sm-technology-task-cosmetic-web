import React from 'react';
import logo from "../../assets/images/footerLogo.png"; // Assuming this logo is the 'Velvet Glow' text or image
import { FaLinkedinIn } from "react-icons/fa"; // LinkedIn icon for Quick Links

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content - Grid Layout */}
        <div className="flex flex-wrap lg:flex-row flex-col gap-8 mb-8">
          {/* Column 1: Velvet Glow (Logo & Description) */}
          <div className=" pr-4 md:pr-8 lg:pr-16 border-2 border-red-600 flex-1"> {/* Added right padding for spacing */}
            <div className="flex items-center mb-4">
              <img src={logo} alt="Velvet Glow Logo" className="h-6 mr-2" /> {/* Adjusted height, added margin-right */}
              <h3 className="text-2xl font-bold text-white tracking-wide">Velvet Glow</h3> {/* Added tracking-wide for text spacing */}
            </div>
            <p className="text-sm leading-relaxed text-gray-400"> {/* Changed text-gray-300 to text-gray-400 for better match */}
              At Northbound we specialize in aligning people's strategies with business goals. Whether you're growing, restructuring, or
              adapting to new challenges, we help ensure your organization has the right talent, in the right place, at the right time.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className=" border-2 border-red-600 flex-1 flex lg:items-end items-start flex-col lg:pr-20">
            <div className='border-2 border-green-800'>
              <h4 className="text-2xl font-semibold text-white mb-4">Services</h4>
            </div>
            
            <ul className="space-y-3 text-sm text-gray-400 border-2 border-white"> {/* Increased space-y, changed text color */}
              <li><a href="#" className="hover:text-white transition-colors duration-200">Our model</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Talent and Workforce Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Optimize your Talent processes</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Interim Consultants</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Advisory Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Recruitment and Executive Search</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className=" border-2 border-red-600 flex-1 flex lg:items-end items-start flex-col lg:pr-20">
            <h4 className="text-2xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400"> {/* Increased space-y, changed text color */}
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">Consulting Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Knowledge bank</a></li>
              <li className="pt-3"> {/* Adjusted padding top */}
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#007AB9] hover:bg-blue-700 transition-colors duration-200" // Added classes for circular blue button
                >
                  <FaLinkedinIn size={20} className="text-white" /> {/* Adjusted icon size and color */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-700 my-10" /> {/* Adjusted margin for line */}

        {/* Copyright Information */}
        <div className="text-left text-sm text-gray-500"> {/* Changed text-center to text-left as per image */}
          <p>2024 Copyright Benderim I All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;