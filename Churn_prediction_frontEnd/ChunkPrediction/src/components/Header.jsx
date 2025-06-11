import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  // Inline Button component
  const navigate = useNavigate();
  function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  const sectorInfo = () =>{
    navigate("/showSectors")
  }

  const getHome = () =>{
    navigate("/");
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-6 py-4 border-b">
      <div onClick = {getHome} className="text-2xl font-bold text-red-600 flex items-center gap-2 cursor-pointer">
        <div className="text-4xl">❀</div> Predictify
      </div>
      <nav className="flex gap-6 text-red-600 font-semibold">
        <div className="flex gap-12 mt-2 mr-8">
          <Link to="/product" className="hover:text-red-300 transition-colors duration-300">
            PRODUCT
          </Link>
          <Link to="/integration" className="hover:text-red-300 transition-colors duration-300">
            INTEGRATIONS
          </Link>
          <Link to="/compare" className="hover:text-red-300 transition-colors duration-300">
            COMPARE
          </Link>
          <Link to="#" className="hover:text-red-300 transition-colors duration-300">
            LOGIN
          </Link>
        </div>
        <Button onClick={sectorInfo}>GET STARTED</Button>
      </nav>
    </header>
  );
}
