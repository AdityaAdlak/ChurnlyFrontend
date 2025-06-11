


import React from "react";
import backgroundImage from "../assets/back.png";
import IntegrationServices from "./IntegrationServices"; // Importing services section

export default function IntegrationPage() {
  return (
    <div className="w-full min-h-screen bg-sky-100">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen pt-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute top-36 left-0 w-full h-[100vh] bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            ALL YOUR CUSTOMER DATA IN ONE PLACE
          </h1>
          <p className="text-md md:text-lg text-gray-700 max-w-xl">
            We connect to the services you’re already using to provide you with a more
            accurate customer churn prediction analysis.
          </p>
        </div>
      </div>

      {/* Services Integration Section */}
      <IntegrationServices />
    </div>
  );
}






