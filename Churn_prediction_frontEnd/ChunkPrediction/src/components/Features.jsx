import React from 'react';
import churnImage from "../assets/page2.png";

const ChurnPredictionSection = () => {
  return (
    <div className="w-full px-4 md:px-12 pt-16">
      <div className="text-center max-w-5xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        Predict customer churn at every stage of the journey
      </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Predictifie’s artificial intelligence gathers customer data and predicts which customers are likely to churn at each stage of the journey. Our software identifies patterns which determine why a customer may leave, helping you take the necessary action to retain them before it’s too late.
        </p>
      </div>
    
      {/* Feature Section */}
      <div className="mt-24 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-16">
        {/* Text */}
        <div className="md:w-1/2 px-4">
          <h3 className="text-2xl font-bold text-red-600 mb-4 uppercase">
            Track Revenue at Risk
          </h3>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Predictify views each seat as a sub-customer, which enables you to quickly understand what revenue is at risk for every paying seat.
          </p>
        </div>
    
        {/* Image */}
        <div className="md:w-1/2 px-4 flex justify-center items-center">
          <img
            src={churnImage}
            alt="Churn analytics"
            className="w-full h-auto max-w-2xl rounded-md shadow-2xl transition-transform duration-700 border-gray-500"
            style={{
              transform: "perspective(1500px) rotateY(-22deg) rotateX(8deg) skewY(-1deg)",
              transformStyle: "preserve-3d",
            }}
          />
        </div>


      </div>
  </div>
  
  );
};

export default ChurnPredictionSection;



