import React, { useState } from 'react';
import axios from 'axios';

export default function Gaming() {
  const [formData, setFormData] = useState({
    GameGenre: '',
    GameDifficulty: '',
    SessionsPerWeek: '',
    AvgSessionDurationMinutes: '',
    PlayerLevel: '',
    AchievementsUnlocked: '',
    EngagementLevel: '',
    Subscription_Length_Months: '',
    Monthly_Bill: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      sector: 'Gaming',
    };

    try {
      const res = await axios.post(
        "https://churnbackend-1.onrender.com/predict",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 pt-24"> {/* 👈 Changed mt-30px to pt-24 */}
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          🎮 Gaming Sector Churn Prediction
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-gray-700 font-medium mb-1">{key.replace(/_/g, ' ')}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Predict Churn
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-md shadow">
            {response.error ? (
              <p className="text-red-600 font-medium">❌ Error: {response.error}</p>
            ) : (
              <>
                <p className="text-lg font-semibold">🔮 Prediction: {response.prediction}</p>
                <p className="text-gray-700">📊 Churn Probability: {response.churn_probability}%</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
