import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GymDemo from './pages/gymdemo';
import ThunderVault from './pages/thundervault'; // Correctly capitalised component import

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Initialize Project / About Page */}
        <Route path="/about" element={<About />} />
        
        {/* Custom Portals: Gym Demo */}
        <Route path="/demo/gym" element={<GymDemo />} />

        {/* Custom Portals: Thunder Vault */}
        <Route path="/demo/thundervault" element={<ThunderVault />} /> {/* Capitalised to fit React requirements */}
      </Routes>
    </Router>
  );
}

export default App;