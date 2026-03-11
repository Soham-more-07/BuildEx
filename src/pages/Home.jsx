import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00d2ff] selection:text-white overflow-x-hidden">
      
      {/* --- RA-ONE / JARVIS NANOTECH BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="nano-cube w-10 h-10 left-[2%] animate-[nanodrop_12s_linear_infinite]" style={{ animationDelay: '0s' }}></div>
        <div className="nano-cube w-16 h-16 left-[8%] animate-[nanodrop_18s_linear_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="nano-cube w-6 h-6 left-[12%] animate-[nanodrop_15s_linear_infinite]" style={{ animationDelay: '8s' }}></div>
        <div className="nano-cube w-20 h-20 left-[20%] animate-[nanodrop_22s_linear_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="nano-cube w-8 h-8 left-[28%] animate-[nanodrop_14s_linear_infinite]" style={{ animationDelay: '9s' }}></div>
        <div className="nano-cube w-12 h-12 left-[35%] animate-[nanodrop_19s_linear_infinite]" style={{ animationDelay: '5s' }}></div>
        <div className="nano-cube w-14 h-14 left-[45%] animate-[nanodrop_16s_linear_infinite]" style={{ animationDelay: '1s' }}></div>
        <div className="nano-cube w-10 h-10 left-[52%] animate-[nanodrop_24s_linear_infinite]" style={{ animationDelay: '7s' }}></div>
        <div className="nano-cube w-16 h-16 left-[60%] animate-[nanodrop_17s_linear_infinite]" style={{ animationDelay: '11s' }}></div>
        <div className="nano-cube w-24 h-24 left-[70%] animate-[nanodrop_20s_linear_infinite]" style={{ animationDelay: '3s' }}></div>
        <div className="nano-cube w-6 h-6 left-[78%] animate-[nanodrop_13s_linear_infinite]" style={{ animationDelay: '10s' }}></div>
        <div className="nano-cube w-12 h-12 left-[85%] animate-[nanodrop_15s_linear_infinite]" style={{ animationDelay: '6s' }}></div>
        <div className="nano-cube w-8 h-8 left-[92%] animate-[nanodrop_21s_linear_infinite]" style={{ animationDelay: '12s' }}></div>
        <div className="nano-cube w-14 h-14 left-[97%] animate-[nanodrop_18s_linear_infinite]" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* --- FOREGROUND UI --- */}
      <div className="relative z-10">
        
        {/* 1. TOP NAVBAR */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 text-sm backdrop-blur-sm bg-[#050505]/50 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div 
              className="text-xl font-black tracking-wider text-white flex items-center cursor-pointer hover:scale-105 transition-transform" 
              onClick={() => navigate('/')}
            >
              <div>Build<span className="text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]">Ex</span></div>
              <span className="hidden md:inline-block ml-4 pl-4 border-l border-gray-700 text-sm font-medium tracking-normal text-gray-400">
                Build Your Idea Into Reality
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="text-gray-400 hover:text-[#00d2ff] transition-colors hidden md:block">Contact sales</a>
            <a href="#" className="text-gray-400 hover:text-[#00d2ff] transition-colors hidden md:block">Log in</a>
            <button 
              onClick={() => navigate('/about')} 
              className="bg-[#00d2ff] text-black font-bold px-5 py-2.5 rounded-md shadow-[0_0_15px_rgba(0,210,255,0.4)] hover:bg-[#b3f0ff] hover:shadow-[0_0_25px_rgba(0,210,255,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Project
            </button>
          </div>
        </nav>

        {/* 2. MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-6 pt-16 md:pt-20">
          
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Build<span className="text-[#00d2ff] drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]">Ex</span>: <span className="text-gray-100">Build Your Idea In Reality.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We engineer high-performance, secure, and custom web applications. Enter your project details below to initialize a secure session.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* LEFT SIDE: Secure Intake Form */}
            <div className="w-full bg-[#0f0f0f]/90 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 focus-within:border-[#00d2ff]/50 focus-within:shadow-[0_0_40px_rgba(0,210,255,0.15)] relative group p-1">
              <div className="bg-[#141414]/90 rounded-lg p-6 md:p-8">
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Name</label>
                      <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all" placeholder="John Doe" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Mobile No.</label>
                      <input type="tel" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Email ID</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Project Details</label>
                    <textarea className="w-full bg-[#0a0a0a] border border-gray-800 rounded-md p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all h-36 resize-none" placeholder="Describe your vision and timeline..."></textarea>
                  </div>
                  <div className="mt-2">
                    <button 
                      type="button" 
                      onClick={() => navigate('/about')}
                      className="w-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/50 shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:border-[#00d2ff] hover:bg-[#00d2ff]/20 hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:text-white transition-all duration-300 font-bold py-3.5 rounded-md flex justify-center items-center gap-2 group/btn mb-3"
                    >
                      Start Project
                      <svg className="group-hover/btn:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      <span>Data is securely tokenized upon submission.</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE: Cards */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-800/80 lg:mt-[2px]">
                <h2 className="text-2xl font-bold tracking-tight text-white leading-none">
                  What We Can Build <span className="text-[#00d2ff] drop-shadow-[0_0_5px_rgba(0,210,255,0.5)]">For You</span>
                </h2>
                <svg className="text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
                <div className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00d2ff]/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full justify-center">
                  <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-[#00d2ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[#00d2ff] mb-4 bg-[#00d2ff]/10 w-12 h-12 rounded-lg flex items-center justify-center border border-[#00d2ff]/20 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-all mb-2">E-Commerce Store</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Secure, scalable, and highly optimized digital storefronts designed to maximize your conversions.</p>
                </div>
                
                <div className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00d2ff]/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full justify-center">
                  <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-[#00d2ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[#00d2ff] mb-4 bg-[#00d2ff]/10 w-12 h-12 rounded-lg flex items-center justify-center border border-[#00d2ff]/20 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-all mb-2">Commercial Business</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Enterprise-grade internal tools, dashboards, and automated management software for your team.</p>
                </div>
                
                <div className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00d2ff]/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full justify-center">
                  <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-[#00d2ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[#00d2ff] mb-4 bg-[#00d2ff]/10 w-12 h-12 rounded-lg flex items-center justify-center border border-[#00d2ff]/20 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-all mb-2">Landing Pages</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Lightning-fast, beautifully animated front-end pages built to capture leads and showcase your brand.</p>
                </div>

                {/* ===== THIS IS THE NEW CLICKABLE CARD WITH UPDATED NAME ===== */}
                <div 
                  onClick={() => navigate('/demo/gym')} 
                  className="cursor-pointer bg-[#0f0f0f]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00d2ff]/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full justify-center"
                >
                  <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-[#00d2ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[#00d2ff] mb-4 bg-[#00d2ff]/10 w-12 h-12 rounded-lg flex items-center justify-center border border-[#00d2ff]/20 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-all mb-2">Custom Webpages (Gym Demo)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Highly secure, authenticated environments for your clients or employees. Click to view demo.</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* LIVE PROJECT TELEMETRY */}
          <div className="mt-16 pt-16 pb-20 border-t border-gray-800/60">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Track Your Webpage <span className="text-[#00d2ff] drop-shadow-[0_0_12px_rgba(0,210,255,0.8)]">Live Now</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Once your project initializes, track its development through our secure pipeline in real-time, just like a package.
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-10">
              <div className="absolute top-6 left-[5%] w-[90%] h-1 bg-gray-800 z-0 hidden md:block rounded-full">
                <div className="h-full w-[50%] bg-gradient-to-r from-[#0088ff] to-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.8)] rounded-full"></div>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00d2ff] bg-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.4)] backdrop-blur-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="text-left md:text-center"><h4 className="text-white font-bold text-sm">Idea</h4><p className="text-gray-500 text-xs mt-0.5">Blueprint approved</p></div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00d2ff] bg-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.4)] backdrop-blur-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="text-left md:text-center"><h4 className="text-white font-bold text-sm">Working</h4><p className="text-gray-500 text-xs mt-0.5">Core engine built</p></div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group relative">
                  <div className="absolute top-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#00d2ff] animate-ping opacity-30"></div>
                  <div className="relative w-12 h-12 rounded-full border-2 border-[#00d2ff] bg-[#00d2ff] flex items-center justify-center text-black shadow-[0_0_25px_rgba(0,210,255,0.8)] backdrop-blur-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className="text-left md:text-center"><h4 className="text-[#00d2ff] font-bold text-sm drop-shadow-[0_0_5px_rgba(0,210,255,0.6)]">Almost Done</h4><p className="text-[#00d2ff]/70 text-xs mt-0.5">QA & Testing</p></div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-700 bg-[#111] flex items-center justify-center text-gray-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </div>
                  <div className="text-left md:text-center"><h4 className="text-gray-400 font-bold text-sm">Final Touch</h4><p className="text-gray-600 text-xs mt-0.5">UI Polish</p></div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-700 bg-[#111] flex items-center justify-center text-gray-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="text-left md:text-center"><h4 className="text-gray-400 font-bold text-sm">Web is Live</h4><p className="text-gray-600 text-xs mt-0.5">Deployed</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ========================================== */}
        {/* 3. FOOTER SECTION                            */}
        {/* ========================================== */}
        <footer className="border-t border-gray-800/60 bg-[#0a0a0a]/80 backdrop-blur-md pt-16 pb-8 mt-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Brand Col */}
              <div className="col-span-1 lg:col-span-1">
                <div className="text-2xl font-black tracking-wider text-white mb-4">
                  Build<span className="text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]">Ex</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Bringing your ideas to reality through high-performance, secure, and expert web engineering.
                </p>
                <a href="mailto:hello@buildex.com" className="text-[#00d2ff] hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                  hello@buildex.com
                </a>
              </div>

              {/* Solutions Col */}
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Type Of Websites</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">E-Commerce</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Commercial Webpage</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Landing Pages</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Custom Website</a></li>
                </ul>
              </div>

              {/* Company Col */}
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Company</h4>
                <ul className="flex flex-col gap-3">
                  <li><button onClick={() => navigate('/about')} className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block text-left">About Us</button></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Our Portfolio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-block">Contact Support</a></li>
                </ul>
              </div>

              {/* Connect Col */}
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Connect</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2">X / Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[#00d2ff] hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2">GitHub</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-xs text-center md:text-left">© 2026 BuildEx. All rights reserved.</p>
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs whitespace-nowrap">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs whitespace-nowrap">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs whitespace-nowrap">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Home;