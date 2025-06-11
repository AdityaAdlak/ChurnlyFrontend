import React from 'react';
import saasIcon from '../assets/saas.png';
import insightsIcon from '../assets/insights.png';
import mlIcon from '../assets/machine_learning.png';
import systemsIcon from '../assets/systems.png';
import heartIcon from '../assets/heart.png';
import { useNavigate } from "react-router-dom";


const WhyPred = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-white text-center px-6 py-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Predictify?</h2>
      <p className="max-w-2xl text-gray-600 text-md mb-12">
        Choosing the right Customer Success software can be tough, but we make it easy for you.
        We enable your team to add layers of customer insight with the help of machine learning
        predictions to support your customer success efforts.
      </p>

      {/* Icons Grid */}
      <div className="flex flex-wrap justify-center mt-16 ml-8 gap-12 lg:gap-32 mb-12">
        <Feature icon={saasIcon} title="BUILT FOR SAAS" />
        <Feature icon={insightsIcon} title="ACTIONABLE INSIGHTS" />
        <Feature icon={mlIcon} title="MACHINE LEARNING" />
        <Feature icon={systemsIcon} title="CONNECTS TO EXISTING SYSTEMS" />
        <Feature icon={heartIcon} title="LOVED BY CUSTOMER SUCCESS TEAMS" />
      </div>

      {/* Button */}
      <button onClick={() => navigate("/compare")} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 mt-8  rounded-md text-lg tracking-wide transition duration-300">
        COMPARE PREDICTIFY
      </button>
    </div>
  );
};

// Reusable feature card
const Feature = ({ icon, title }) => (
  <div className="flex flex-col items-center max-w-[160px]">
    <img src={icon} alt={title} className="h-20 mb-4" />
    <h4 className="font-bold text-sm text-gray-800 text-center">{title}</h4>
  </div>
);

export default WhyPred;
