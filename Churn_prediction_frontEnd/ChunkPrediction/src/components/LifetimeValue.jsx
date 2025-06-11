// import React from "react";
// import valueImage from "../assets/page2.png"; // Replace with actual image path

// const LifetimeValue = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
//       {/* Text Content */}
//       <div className="md:w-1/2 space-y-6">
//         <h2 className="text-2xl font-bold text-red-600 uppercase tracking-wide">
//           INCREASE LIFETIME VALUE
//         </h2>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Predictigie’s predictive insights show you how much revenue you’re at risk of
//           losing, and from whom, so your teams can intervene early, keep revenue
//           and grow faster.
//         </p>
//         <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm tracking-wide transition duration-300">
//           DISCOVER PRODUCT
//         </button>
//       </div>

      


//       {/* Tilted Image */}
//       <div className="md:w-1/2 px-4 flex justify-center items-center">
//           <img
//           src={valueImage}
//           alt="Churn analytics"
//           className="w-full h-auto max-w-2xl rounded-md shadow-2xl transition-transform duration-700 border-gray-500"
//           style={{
//             transform: "perspective(1500px) rotateY(-22deg) rotateX(8deg) skewY(-1deg)",
//             transformStyle: "preserve-3d",
//           }}
//           />
//         </div>
//     </section>
//   );
// };

// export default LifetimeValue;


import React from "react";
import { useNavigate } from "react-router-dom";
import valueImage from "../assets/page2.png"; // Adjust as needed

const LifetimeValue = () => {
  const navigate = useNavigate(); // ← hook from react-router

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold text-red-600 uppercase tracking-wide">
          INCREASE LIFETIME VALUE
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Predictify’s predictive insights show you how much revenue you’re at risk of
          losing, and from whom, so your teams can intervene early, keep revenue
          and grow faster.
        </p>
        <button
          onClick={() => navigate("/product")} // ← navigate to Product page
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm tracking-wide transition duration-300"
        >
          DISCOVER PRODUCT
        </button>
      </div>

      {/* Tilted Image */}
      <div className="md:w-1/2 px-4 flex justify-center items-center">
        <img
          src={valueImage}
          alt="Churn analytics"
          className="w-full h-auto max-w-2xl rounded-md shadow-2xl transition-transform duration-700 border-gray-500"
          style={{
            transform: "perspective(1500px) rotateY(-22deg) rotateX(8deg) skewY(-1deg)",
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </section>
  );
};

export default LifetimeValue;
