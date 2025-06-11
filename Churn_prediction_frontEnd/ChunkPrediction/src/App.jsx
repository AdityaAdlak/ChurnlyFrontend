import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Features from "./components/Features";
import Engagement from "./components/Engagement";
import LifetimeValue from "./components/LifetimeValue";
import Integrations from "./components/Integrations";
import WhyPred from "./components/WhyPred";
import WebFooter from "./components/WebFooter";
import IntegrationPage from "./components/IntegrationPage"
import IntegrationServices from "./components/IntegrationServices"
import ProductPage from "./components/ProductPage";
import ComparePage from "./components/ComparePage";
import ShowSector from "./components/showSectors";
import Gaming from "./components/GamingPage";
import Banking from "./components/BankingPage";
import Telecommunication from "./components/TelePage";


function HomePage() {
  return (
    <main className="grid gap-12 p-12">
      <Hero />
      <Dashboard />
      <Features />
      <Engagement />
      <LifetimeValue />
      <Integrations />
      <IntegrationServices/>
      <WhyPred />
    </main>
  );
}

function App() {
  return (
    <Router>
      {/* Global layout structure with the header visible across all pages */}
      <div className="min-h-screen bg-white text-black font-sans">
        <Header />
        <Routes>
          {/* Define the main home page route */}
          <Route path="/" element={<HomePage />} />
          {/* Define the integration page route */}
          <Route path="/integration" element={<IntegrationPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/showSectors" element={<ShowSector/>}/>
          <Route path="/gamingPage" element={<Gaming/>}/>
          <Route path="/bankingPage" element={<Banking/>}/>
          <Route path="/telePage" element={<Telecommunication/>}/>
        </Routes>
        {/* <WebFooter /> */}
      </div>
    </Router>
  );
}

export default App;
