import React from 'react';
import logo from '../assets/Pred_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f7f6f6] border-t border-red-300 text-sm text-red-500">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left Navigation */}
        <div className="flex flex-col gap-3 text-left">
          <a href="#" className="hover:underline">PRODUCT</a>
          <a href="#" className="hover:underline">INTEGRATIONS</a>
          <a href="#" className="hover:underline">COMPARE</a>
          <a href="#" className="hover:underline">BLOG</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>

        {/* Logo and Address */}
        <div className="text-center">
          <img src={logo} alt="Churnly" className="h-8 mx-auto mb-3" />
          <p>Predictify Technologies Limited</p>
          <p>71-75 Nagpur Street,</p>
          <p>Eden Garden,</p>
          <p>Nagpur,440001</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <span>PREDICTIFY™ TECHNOLOGIES LTD. ALL RIGHTS RESERVED</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <a href="#" className="hover:underline">TERMS AND CONDITIONS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
