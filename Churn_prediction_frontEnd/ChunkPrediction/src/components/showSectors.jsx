
import { useNavigate } from 'react-router-dom';

export default function ShowSector() {
  const navigate = useNavigate();

  const handleClick = (sector) => {
    if(sector.toLowerCase() == "gaming")
    {
      navigate("/gamingPage")
    }

    else if(sector.toLowerCase() == "banking")
    {
      navigate("/bankingPage")
    }

    else if(sector.toLowerCase() == "telecommunication")
    {
      navigate("/telePage")
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold mb-8">Select a Sector</h1>

      <button
        onClick={() => handleClick("Gaming")}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-10 rounded-2xl shadow-md border border-gray-300 transition duration-300"
      >
        Gaming
      </button>

      <button
        onClick={() => handleClick("Banking")}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-10 rounded-2xl shadow-md border border-gray-300 transition duration-300"
      >
        Banking
      </button>

      <button
        onClick={() => handleClick("Telecommunication")}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-10 rounded-2xl shadow-md border border-gray-300 transition duration-300"
      >
        Telecommunication
      </button>
    </div>
  );
}
