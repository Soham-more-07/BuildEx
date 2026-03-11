import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl text-center relative z-10">
        <div className="text-[#00d2ff] w-16 h-16 mx-auto mb-6 bg-[#00d2ff]/10 rounded-2xl flex items-center justify-center border border-[#00d2ff]/20 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Initialize <span className="text-[#00d2ff] drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]">Project.</span>
        </h1>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Secure connection established. This is your new routing system in action—notice how fast it loaded without the browser refreshing?
        </p>
        
        <button 
          onClick={() => navigate('/')} 
          className="bg-transparent border border-gray-700 text-white px-6 py-3 rounded-md hover:border-[#00d2ff] hover:text-[#00d2ff] hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all duration-300"
        >
          &larr; Return to Dashboard
        </button>
      </div>
    </div>
  );
}

export default About;