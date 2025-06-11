import React from "react";
import engagementImage from "../assets/page2.png"; // replace with actual path

const Engagement = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* 3D Styled Image */}
        <div
        className="transform rotate-[-2deg] skew-y-1 scale-105"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={engagementImage}
          alt="User Engagement Analytics"
          className=" border-solid border-gray-400 shadow-2xl rounded-md w-full max-w-xl"
          style={{
            transform: "rotateY(30deg) rotateX(2deg)",
          }}
        />
      </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 uppercase mb-2">TRACK ENGAGEMENT</h2>
          <p className="text-gray-800 mb-4">
            Activity and engagement are key indicators that your customers are successfully using your product.
          </p>
          <p className="text-gray-700">
            Predictify uses Machine Learning to weight and track all user engagement across your product,
            giving you immediate insight into who is at risk and needs attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
