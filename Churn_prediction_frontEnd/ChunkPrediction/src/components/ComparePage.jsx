import React from "react";
import compareImage from "../assets/back.png"; // Ensure this is placed correctly

export default function ComparePage() {
  return (
    <div className="px-6 py-12 text-gray-800 max-w-7xl mx-auto">
      <h1 className="mt-6 text-3xl md:text-4xl font-bold text-center mb-6">
        Why choose Predictify for your business?
      </h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        There are many customer success software options on the market. But here's what Predictify does better than anyone else.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* WHAT WE DO */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4">WHAT PREDICTIFY DOES</h2>
          <ul className="space-y-6">
            <li>
              ✅ <strong>Predicts which customers are likely to leave:</strong><br />
              Predictify lets you know weeks in advance which customers are likely to churn.
            </li>
            <li>
              ✅ <strong>Turns customer data into actionable insights:</strong><br />
              Provides the data you need to take action and intervene before churn happens.
            </li>
            <li>
              ✅ <strong>Spots revenue at risk:</strong><br />
              Increase lifetime value by proactively managing at-risk customers.
            </li>
          </ul>
        </div>

        {/* WHAT WE DON'T DO */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4">WHAT PREDICTIFY WON’T DO</h2>
          <ul className="space-y-6">
            <li>
              ❌ <strong>Give you fluffy health scores:</strong><br />
              No vanity metrics that skew your forecasts.
            </li>
            <li>
              ❌ <strong>Build customer profiles:</strong><br />
              We focus on predictions, not CRM-like profile building.
            </li>
            <li>
              ❌ <strong>Improve workflows:</strong><br />
              Predictify doesn’t interfere with email campaigns or team workflows.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Image */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Do you already use Customer Success software?</h3>
          <p className="text-gray-700 mb-6">
            Predictify complements your existing tools. Add layers of customer insight and machine learning predictions to power up your retention strategy and customer success operations.
          </p>
          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition">
            REQUEST DEMO
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={compareImage} alt="Compare Illustration" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
}
