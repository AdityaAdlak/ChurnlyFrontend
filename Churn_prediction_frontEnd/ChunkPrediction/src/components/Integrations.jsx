import React from 'react';
import { useNavigate } from "react-router-dom";

// Import images from assets
import segmentLogo from '../assets/segment1.png';
import intercomLogo from '../assets/intercom_logo.png';
import magentoLogo from '../assets/magento_logo.png';
import salesforceLogo from '../assets/salesforce1.jpeg';
import stripeLogo from '../assets/stripe.jpeg';
import hubspotLogo from '../assets/hubspot.png';
import chargebeeLogo from '../assets/chargebee2.png';
import laptopImage from '../assets/laptop.png';

const Integrations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between px-4 pt-10 pb-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Import all your customer data, instantly
        </h2>
        <p className="text-gray-600 text-md max-w-xl mx-auto">
          Predictify connects to existing systems and imports your data instantly to create a more
          accurate churn prediction for your customer base.
        </p>
      </div>

      {/* Logos and Image */}
      <div className="w-[95%] flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
        {/* Left column logos */}
        <div className="flex flex-col gap-8 items-end min-w-[160px]">
          <img src={segmentLogo} alt="Segment" className="h-16  object-contain" />
          <img src={intercomLogo} alt="Intercom" className="h-20  object-contain" />
          <img src={magentoLogo} alt="Magento" className="h-20  object-contain" />
        </div>

        {/* Center image */}
        <div className="mx-10">
          <img src={laptopImage} alt="Laptop dashboard" className="h-80 max-w-full object-contain" />
        </div>

        {/* Right column logos */}
        <div className="flex flex-col gap-2 items-start min-w-[160px]">
          <img src={salesforceLogo} alt="Salesforce" className="h-16  object-contain" />
          <img src={stripeLogo} alt="Stripe" className="h-16  object-contain" />
          <img src={hubspotLogo} alt="HubSpot" className="h-16  object-contain" />
          <img src={chargebeeLogo} alt="Chargebee" className="h-16  object-contain" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-16">
        <button onClick={() => navigate("/integration")} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg tracking-wide transition duration-300">
          DISCOVER INTEGRATIONS
        </button>
      </div>
    </div>
  );
};

export default Integrations;
