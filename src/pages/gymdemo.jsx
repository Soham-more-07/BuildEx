import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GymDemo() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  
  // Progress State
  const [tasks, setTasks] = useState([
    { id: 1, text: "30 Crunches", completed: false, label: "Warmup" },
    { id: 2, text: "20 Pushups", completed: false, label: "Strength" },
    { id: 3, text: "15 Weighted Squats", completed: false, label: "Power" },
    { id: 4, text: "5km Treadmill Run", completed: false, label: "Endurance" },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('gymTasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const toggleTask = (id) => {
    const newTasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    setTasks(newTasks);
    localStorage.setItem('gymTasks', JSON.stringify(newTasks));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length > 0 ? (completedCount / (tasks.length - 1)) * 100 : 0;
  const displayPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      
      {/* --- THE SIGNATURE DUMBBELL DROP (FIXED IN BACKGROUND) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute top-[-100px] animate-[nanodrop_12s_linear_infinite]" 
            style={{ 
              left: `${i * 5}%`, 
              animationDelay: `${Math.random() * 8}s`, 
              width: i % 2 === 0 ? '45px' : '30px', 
              opacity: 0.15 
            }}
          >
            <svg viewBox="0 0 24 24" fill="#10b981" className="w-full h-full drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] rotate-12">
              <path d="M6 5h2v14H6zm10 0h2v14h-2zm-6 5h4v4h-4z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* --- SECTION 1: HERO VIDEO BACKGROUND (Z-50 HIDES THE DUMBBELLS HERE) --- */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black z-50">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover grayscale brightness-50">
          {/* MAKE SURE THIS POINTS TO YOUR CUSTOM VIDEO */}
          <source src="/gym/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* NAV BAR */}
        <nav className="absolute top-0 w-full z-[100] flex justify-between items-center px-6 md:px-10 py-8">
          <div className="border-2 border-white p-1 cursor-pointer hover:border-emerald-500 transition-colors group" onClick={() => navigate('/')}>
             <div className="bg-white text-black font-black text-xl px-2 py-1 leading-none uppercase tracking-tighter group-hover:bg-emerald-500 transition-colors">IRON<br/>FORGE</div>
          </div>
          <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/80">
            <a href="#ecosystem" className="hover:text-emerald-500 transition-all">Ecosystem</a>
            <a href="#about" className="hover:text-emerald-500 transition-all">Gyms</a>
            <a href="#classes" className="hover:text-emerald-500 transition-all">Classes</a>
            <button onClick={() => setShowAuth(true)} className="text-emerald-500 border-b-2 border-emerald-500 pb-1 hover:text-white transition-all">
              {isLoggedIn ? "DASHBOARD" : "JOIN NOW"}
            </button>
          </div>
        </nav>

        {/* HERO TEXT */}
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-[14vw] md:text-[10vw] font-black uppercase italic leading-[0.8] tracking-tighter mb-4 drop-shadow-2xl">
            IRON <br /> <span className="text-emerald-500 drop-shadow-[4px_4px_0px_white]">FORGE</span>
          </h1>
          <p className="text-lg md:text-xl font-black uppercase tracking-[0.2em] mb-10 text-zinc-300">Pay nothing until 2026</p>
          {!isLoggedIn && (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setShowAuth(true)} className="bg-emerald-500 text-black px-12 py-5 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)]">INITIALIZE DASHBOARD →</button>
            </div>
          )}
        </div>
      </div>

      {/* --- SECTION 2: BUILDEX STYLE CARDS (PUBLIC VIEW) --- */}
      {!isLoggedIn && (
        <section id="ecosystem" className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">THE <span className="text-emerald-500">ECOSYSTEM</span></h2>
              <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm">Everything you need. Engineered for performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* CARD 1: PROGRESS TRACKER */}
              <div onClick={() => setShowAuth(true)} className="cursor-pointer bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-all mb-3">Live Tracker</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">Log in to access your personal Checkpoint System. Track sets, reps, and evolution in real-time.</p>
                <div className="mt-auto pt-6 text-[10px] font-black uppercase tracking-widest text-emerald-500">Launch Portal →</div>
              </div>

              {/* CARD 2: LOCATIONS */}
              <div className="bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-all mb-3">Locations</h3>
                <ul className="text-zinc-400 text-sm space-y-2 font-bold uppercase">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Mumbai (HQ)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Navi Mumbai</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Thane</li>
                </ul>
              </div>

              {/* CARD 3: TIMINGS */}
              <div className="bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-all mb-3">Hours of Ops</h3>
                <ul className="text-zinc-400 text-sm space-y-2 font-bold uppercase">
                  <li className="flex justify-between border-b border-white/5 pb-1"><span>Morning</span> <span className="text-emerald-500">07:00 AM</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-1"><span>Afternoon</span> <span className="text-emerald-500">12:00 PM</span></li>
                  <li className="flex justify-between"><span>Evening</span> <span className="text-emerald-500">05:00 PM</span></li>
                </ul>
              </div>

              {/* CARD 4: PLANS & PT */}
              <div className="bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-all mb-3">Memberships & PT</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-4">Elite 1-on-1 Personal Training and flexible month-to-month contracts.</p>
                <div className="mt-auto flex gap-2">
                   <span className="bg-white/10 text-white text-[9px] px-2 py-1 rounded-sm uppercase font-black">No Contracts</span>
                   <span className="bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 text-[9px] px-2 py-1 rounded-sm uppercase font-black">Elite Coaches</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* --- SECTION 3: LOGGED IN DASHBOARD (BUILDEX CARD STYLE) --- */}
      {isLoggedIn && (
        <section className="relative z-10 py-24 px-6 md:px-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
               <div>
                 <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-2">VAULT<span className="text-emerald-500">_SESSION</span></h2>
                 <p className="text-zinc-400 font-black text-[10px] tracking-[0.5em] uppercase">Athlete Biometrics Integrated</p>
               </div>
               <div className="mt-6 md:mt-0 text-right">
                 <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">Total Progress</p>
                 <p className="text-emerald-500 font-black text-5xl italic">{displayPercent}%</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* THE CHECKPOINT PROGRESS CARD */}
              <div className="lg:col-span-3 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
                
                {/* Unique Emerald Checkpoint Line */}
                <div className="relative my-12 px-4 md:px-10">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2 rounded-full"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-[4px] bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)] transition-all duration-1000 ease-out -translate-y-1/2 rounded-full"
                    style={{ width: `${progressPercent > 100 ? 100 : progressPercent}%` }}
                  ></div>

                  <div className="relative flex justify-between z-10">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${task.completed ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.8)] scale-110' : 'bg-[#0a0a0a] border-zinc-700'}`}>
                          {task.completed && <div className="w-3 h-3 bg-black rounded-full"></div>}
                        </div>
                        <span className={`absolute mt-12 text-[9px] md:text-[11px] font-black uppercase tracking-widest ${task.completed ? 'text-emerald-500' : 'text-zinc-400'}`}>
                          {task.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* THE TASKS CARDS */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {tasks.map(task => (
                  <div 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`group flex items-center justify-between p-8 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-md ${
                      task.completed 
                      ? 'bg-emerald-500 border-2 border-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1' 
                      : 'bg-zinc-950/80 border border-white/5 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1 text-white'
                    }`}
                  >
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${task.completed ? 'text-black/60' : 'text-zinc-500'}`}>{task.label}</p>
                      <span className="text-2xl font-black uppercase italic tracking-tighter">{task.text}</span>
                    </div>
                    <div className={`w-8 h-8 border-2 rounded-md transition-all flex items-center justify-center ${task.completed ? 'bg-black border-black' : 'border-zinc-700 group-hover:border-emerald-500'}`}>
                      {task.completed && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="mt-16 flex justify-between items-center">
              <button onClick={() => setIsLoggedIn(false)} className="text-[10px] font-black text-zinc-500 border border-zinc-800 px-6 py-3 rounded-full hover:text-white hover:border-white transition-all uppercase tracking-[.2em] bg-black/50 backdrop-blur-sm">Terminate Session</button>
            </div>
          </div>
        </section>
      )}

      {/* --- SECTION 4: ABOUT SECTION --- */}
      <section id="about" className="relative z-10 py-32 px-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic mb-8 text-emerald-500 leading-none">ABOUT<br/>IRONFORGE</h2>
        </div>
        <div className="flex-[1.5]">
          <p className="text-zinc-300 text-lg leading-relaxed font-medium bg-black/40 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
            IronForge is London's (in)famous challenger of the fitness landscape. Emerging from the remnants of an old West End car park, we built a distinct community that has revolutionised the industry. Energetic, trendy and genuinely enjoyable, our clubs are designed to keep your spirits high. With an unmistakable nightclub atmosphere, specialised studios and top-notch equipment, we make working out as fun as going out.
          </p>
        </div>
      </section>

      {/* --- SECTION 5: CLASSES CATEGORIES --- */}
      <section id="classes" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto mb-16 px-6 bg-black/50 p-8 rounded-3xl backdrop-blur-sm border border-white/5 inline-block">
           <h2 className="text-6xl font-black uppercase italic mb-4 text-emerald-500 tracking-tighter">CLASSES</h2>
           <p className="text-zinc-300 max-w-2xl font-medium uppercase tracking-widest text-sm">Discover over 70 classes, spanning 7 different categories from holistic to sadistic. You want it, we've got it!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 h-[600px] gap-4 max-w-7xl mx-auto">
          {/* FIGHT */}
          <div className="relative group overflow-hidden cursor-pointer bg-zinc-900 rounded-2xl border border-white/10 hover:border-emerald-500 transition-colors">
            {/* MAKE SURE THIS POINTS TO YOUR CUSTOM IMAGE */}
            <img src="/gym/fight.jpg" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Fight" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="absolute bottom-10 left-10 z-10">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-white drop-shadow-lg">FIGHT</h3>
              <button className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">VIEW CLASSES →</button>
            </div>
          </div>
          {/* RIDE */}
          <div className="relative group overflow-hidden cursor-pointer bg-zinc-900 rounded-2xl border border-white/10 hover:border-emerald-500 transition-colors">
            {/* MAKE SURE THIS POINTS TO YOUR CUSTOM IMAGE */}
            <img src="/gym/ride.jpg" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Ride" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="absolute bottom-10 left-10 z-10">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-white drop-shadow-lg">RIDE</h3>
              <button className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">VIEW CLASSES →</button>
            </div>
          </div>
          {/* STRENGTH */}
          <div className="relative group overflow-hidden cursor-pointer bg-zinc-900 rounded-2xl border border-white/10 hover:border-emerald-500 transition-colors">
            {/* MAKE SURE THIS POINTS TO YOUR CUSTOM IMAGE */}
            <img src="/gym/strength.jpg" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Strength" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="absolute bottom-10 left-10 z-10">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-white drop-shadow-lg">STRENGTH</h3>
              <button className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">VIEW CLASSES →</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: RECOVERY & RED LIGHT --- */}
      <section id="recovery" className="relative z-10 py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-black">
           {/* MAKE SURE THIS POINTS TO YOUR CUSTOM IMAGE */}
           <img src="/gym/recovery.jpg" className="w-full aspect-square object-cover grayscale brightness-50 transition-all group-hover:brightness-75 group-hover:scale-105" alt="Recovery" />
           <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-xl backdrop-blur-md">
              <h3 className="text-3xl font-black uppercase italic mb-4 drop-shadow-lg">RECOVERY ZONES</h3>
              <button className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">FIND OUT MORE →</button>
           </div>
        </div>
        <div className="flex-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-black">
           {/* MAKE SURE THIS POINTS TO YOUR CUSTOM IMAGE */}
           <img src="/gym/redlight.jpg" className="w-full aspect-square object-cover grayscale brightness-[0.3] mix-blend-screen opacity-80 bg-red-900 group-hover:scale-105 transition-all" alt="Red Light" />
           <div className="absolute inset-0 bg-red-600/30 group-hover:bg-red-600/50 transition-all"></div>
           <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-xl backdrop-blur-md">
              <h3 className="text-3xl font-black uppercase italic mb-4 drop-shadow-lg">RED LIGHT THERAPY</h3>
              <button className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">FIND OUT MORE →</button>
           </div>
        </div>
      </section>

      {/* --- SECTION 7: REPLICA FOOTER --- */}
      <footer className="relative z-20 bg-black/90 backdrop-blur-md border-t border-white/10 pt-32 pb-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 mb-20">
          <div className="flex-1">
            <div className="border-2 border-emerald-500 p-1 w-fit mb-10">
               <div className="bg-emerald-500 text-black font-black text-2xl px-3 py-1 leading-none uppercase tracking-tighter">IRON<br/>FORGE</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-[3]">
             <div>
                <h4 className="text-emerald-500 font-black uppercase text-sm mb-6 tracking-widest">GYMS</h4>
                <ul className="text-zinc-400 space-y-3 font-bold text-sm uppercase">
                  <li className="hover:text-white cursor-pointer transition-colors">Mumbai (HQ)</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Navi Mumbai</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Thane</li>
                </ul>
             </div>
             <div>
                <h4 className="text-emerald-500 font-black uppercase text-sm mb-6 tracking-widest">SUPPORT</h4>
                <ul className="text-zinc-400 space-y-3 font-bold text-sm uppercase">
                  <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Press & Marketing</li>
                </ul>
             </div>
             <div>
                <h4 className="text-emerald-500 font-black uppercase text-sm mb-6 tracking-widest">MORE INFO</h4>
                <ul className="text-zinc-400 space-y-3 font-bold text-sm uppercase">
                  <li className="hover:text-white cursor-pointer transition-colors">Personal Training</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Memberships</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Find a PT</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Refer a Friend</li>
                  <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <span>© 2026 IRONFORGE X BUILDEX</span>
              <span className="hover:text-emerald-500 cursor-pointer">CLUB RULES</span>
              <span className="hover:text-emerald-500 cursor-pointer">TERMS & CONDITIONS</span>
              <span className="hover:text-emerald-500 cursor-pointer">PRIVACY POLICY</span>
           </div>
           <div className="flex gap-6 text-xl text-zinc-500">
              <span className="hover:text-emerald-500 cursor-pointer">IG</span>
              <span className="hover:text-emerald-500 cursor-pointer">FB</span>
              <span className="hover:text-emerald-500 cursor-pointer">YT</span>
              <span className="hover:text-emerald-500 cursor-pointer">IN</span>
           </div>
        </div>
      </footer>

      {/* --- AUTHENTICATION MODAL --- */}
      {showAuth && !isLoggedIn && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-6 backdrop-blur-md">
          <div className="w-full max-w-md bg-white p-10 text-black border-4 border-emerald-500 relative">
            <button onClick={() => setShowAuth(false)} className="absolute top-4 right-4 text-xl font-black hover:text-emerald-500">✕</button>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none italic">LOG INTO<br/><span className="text-emerald-500">THE FORGE</span></h2>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setShowAuth(false); }} className="space-y-6">
              <input required type="text" placeholder="USERNAME" className="w-full border-b-4 border-black p-4 font-black outline-none focus:border-emerald-500 placeholder:text-zinc-400" />
              <input required type="password" placeholder="PASSWORD" className="w-full border-b-4 border-black p-4 font-black outline-none focus:border-emerald-500 placeholder:text-zinc-400" />
              <button className="w-full bg-black text-white font-black uppercase py-5 tracking-widest hover:bg-emerald-500 transition-all shadow-[8px_8px_0px_#10b981]">ENTER SESSION →</button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Exit Badge */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button onClick={() => navigate('/')} className="bg-black/80 backdrop-blur-sm border-2 border-emerald-500 text-emerald-500 px-6 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all">
          EXIT TO BUILDEX
        </button>
      </div>

    </div>
  );
}

export default GymDemo;