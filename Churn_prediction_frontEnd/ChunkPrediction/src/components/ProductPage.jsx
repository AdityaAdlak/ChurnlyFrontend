import React from "react";
import productHero from "../assets/product-hero.png";
import laptopGraph from "../assets/laptop.png";
import customerTable from "../assets/product-hero.png";
import pipedriveLogo from "../assets/chargebee00.png";
import excelLogo from "../assets/hubspot00.png";
import magentoLogo from "../assets/pipedrive.png";
import segmentLogo from "../assets/mandrill.png";
import stripeLogo from "../assets/stripe.png";
import intercomLogo from "../assets/intercom.png";

export default function ProductPage() {
  return (
    <div className="w-full bg-white">
      {/* Red Gradient Hero Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-400 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          ACTIONABLE CUSTOMER CHURN ANALYTICS
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          FOR CUSTOMER SUCCESS TEAMS.
        </h2>
        <p className="text-md md:text-lg text-white max-w-3xl mx-auto mt-4">
          Predictify provides B2B SaaS companies with data driven insights and predictive
          analytics that help Customer Success Managers save their customers and reduce
          the risk of churn.
        </p>

        {/* Screenshot Image */}
        <div className="mt-16 max-w-3xl mx-auto shadow-2xl rounded-lg overflow-hidden">
          <img src={productHero} alt="Product Screenshot" className="w-full" />
        </div>
      </div>

      {/* Bottom Description */}
      <div className="text-center text-gray-500 px-2 py-12 text-md md:text-sm max-w-4xl mx-auto">
        Discover the AI-powered customer churn software that tracks the entire customer
        journey and helps you reduce churn with a predictive accuracy level of 92–96 percent.
      </div>

      {/* GET STARTED Button */}
      <div className="flex justify-center mb-12">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition">
          GET STARTED
        </button>
      </div>

      {/* Retention Insights Section */}
      <div className="py-12 px-4 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              IMPROVE CUSTOMER RETENTION WITH ACTIONABLE INSIGHTS
            </h3>
            <p className="text-gray-800 mb-2">
              With all your customer data at your fingertips, you can quickly identify the
              factors that cause your customers to leave. Track every stage of the customer
              journey and have full visibility into product adoption, engagement and renewal.
            </p>
            <p className="text-gray-800">
              Our predictions tell you which customers are at most risk, giving you the
              chance to intervene and prevent them from leaving.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src={laptopGraph} alt="Laptop Graph" className="w-100 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Customer Lifetime Value Section */}
      <div className="py-12 px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img src={customerTable} alt="Customer Table" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              EXTEND CUSTOMER LIFETIME VALUE AND ACCELERATE GROWTH
            </h3>
            <p className="text-gray-800 mb-2">
              Our software helps your team to proactively manage customers that need your attention.
            </p>
            <p className="text-gray-800">
              Once you understand why you lose customers, your team can focus on keeping them.
              Find the customers that are at risk of churn and turn them into successful users,
              increase their lifetime value and ensure that you don’t lose any revenue.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <div className="w-48 h-48 rounded-full border-4 border-red-500 flex flex-col items-center justify-center text-red-500 text-center">
              <span className="text-3xl font-bold">92 - 96%</span>
              <span className="text-xl font-medium text-black mt-1">Accuracy</span>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">How it works</h3>
            <p className="text-gray-700 mb-3">
              Predictifies machine learning software has been developed by a team of PhD data scientists
              and thousands of hours of research.
            </p>
            <p className="text-gray-700 mb-3">
              Predictifies software runs through your customer data and permutates millions of factors to
              find the precise combination of metrics which trigger churn at any given time. Artificial
              intelligence then predicts which customers are likely to leave.
            </p>
            <p className="text-gray-700">
              The accuracy of our predictive model ranges from 92–96%, giving you the information you need
              to take action.
            </p>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h4 className="text-red-500 font-bold mb-2">INTEGRATIONS</h4>
              <p className="text-gray-700 mb-3">
                Predictify connects to the systems you use daily, including CRMs, customer support,
                product, billing and email.
              </p>
              <p className="text-gray-700 mb-6">
                By connecting to your existing systems Churnly can design a complete understanding of
                your customers’ behaviour and learn what triggers customers to leave.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition shadow-md">
                DISCOVER INTEGRATIONS
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              <img src={pipedriveLogo} alt="Pipedrive" className=" border-red-200 p-4 rounded-md" />
              <img src={excelLogo} alt="Excel" className=" border-red-200 p-4 rounded-md" />
              <img src={magentoLogo} alt="Magento" className=" border-red-200 p-4 rounded-md" />
              <img src={segmentLogo} alt="Segment" className=" border-red-200 p-4 rounded-md" />
              <img src={stripeLogo} alt="Stripe" className=" border-red-200 p-4 rounded-md" />
              <img src={intercomLogo} alt="Intercom" className=" border-red-200 p-4 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
