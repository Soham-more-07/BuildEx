import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GymDemo from './pages/gymdemo';

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
      </Routes>
    </Router>
  );
}

export default App;