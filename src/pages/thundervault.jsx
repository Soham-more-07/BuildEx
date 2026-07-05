import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThunderVault() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Simulated Live Market Ticker
  const [prices, setPrices] = useState({
    'NIFTY 50': { value: 24150.25, change: '+1.15%', up: true },
    'BANKNIFTY': { value: 52480.60, change: '-0.38%', up: false },
    'XAU/USD': { value: 2645.80, change: '+0.75%', up: true },
    'EUR/USD': { value: 1.0545, change: '-0.12%', up: false },
    'USD/INR': { value: 84.35, change: '+0.08%', up: true },
    'BTC/USD': { value: 94250.00, change: '+4.20%', up: true },
  });

  // HFT (High Frequency Trading) Ticker Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => {
        const newPrices = { ...prev };
        Object.keys(newPrices).forEach(key => {
          const volatility = key === 'BTC/USD' ? 25 : key.includes('NIFTY') ? 4 : 0.2;
          const move = (Math.random() - 0.48) * volatility; 
          newPrices[key].value = +(newPrices[key].value + move).toFixed(2);
        });
        return newPrices;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Professional Forex-Factory Style Macro Events (Simulated for Prototype)
  const macroEvents = [
    { 
      id: 1, 
      time: '09:15', 
      currency: 'INR', 
      asset: 'BANKNIFTY', 
      impact: 'HIGH', // Red
      power: 94, 
      event: 'RBI Interest Rate Decision', 
      actual: '6.75%', 
      forecast: '6.50%', 
      previous: '6.50%',
      category: 'INDIAN MARKETS',
      bias: 'HAWKISH (Bearish for Equities)',
      analysis: 'A surprise 25bps hike completely violates consensus. Expect immediate liquidity sweeps and heavy institutional shorting on rate-sensitive banking stocks.'
    },
    { 
      id: 2, 
      time: '18:30', 
      currency: 'USD', 
      asset: 'XAU/USD', 
      impact: 'HIGH', // Red
      power: 88, 
      event: 'Non-Farm Employment Change (NFP)', 
      actual: '275K', 
      forecast: '198K', 
      previous: '220K',
      category: 'FOREX',
      bias: 'STRONG USD (Bearish Gold)',
      analysis: 'Labor market running significantly hotter than expected. Erases near-term rate cut probabilities. Dollar index (DXY) expected to surge, crushing Gold support levels.'
    },
    { 
      id: 3, 
      time: '14:30', 
      currency: 'GBP', 
      asset: 'GBP/USD', 
      impact: 'MED', // Orange
      power: 62, 
      event: 'CPI y/y', 
      actual: '3.2%', 
      forecast: '3.1%', 
      previous: '3.4%',
      category: 'FOREX',
      bias: 'MILD HAWKISH',
      analysis: 'Slight beat on inflation, but within standard deviation bounds. Expect choppy, ranging price action with algorithms hunting stop-losses before mean reversion.'
    },
    { 
      id: 4, 
      time: '20:00', 
      currency: 'GLOBAL', 
      asset: 'GOLD / OIL', 
      impact: 'HIGH', // Red
      power: 98, 
      event: 'Geopolitical Escalation Report', 
      actual: 'CRITICAL', 
      forecast: 'STABLE', 
      previous: 'STABLE',
      category: 'COMMODITIES',
      bias: 'RISK-OFF (Safe Haven Bid)',
      analysis: 'Unquantifiable macro shock. Pure panic bidding in Gold and Crude. Technical resistance levels are void. Trade with extreme caution.'
    },
    { 
      id: 5, 
      time: '11:00', 
      currency: 'INR', 
      asset: 'NIFTY 50', 
      impact: 'LOW', // Yellow
      power: 24, 
      event: 'Manufacturing PMI', 
      actual: '55.4', 
      forecast: '55.0', 
      previous: '55.1',
      category: 'INDIAN MARKETS',
      bias: 'NEUTRAL',
      analysis: 'In-line print showing steady economic expansion. Algorithms will likely ignore this data point. Focus shifts to global cues.'
    }
  ];

  const filteredEvents = activeTab === 'ALL' ? macroEvents : macroEvents.filter(n => n.category === activeTab);

  // Perplexity Deep Research Encoder
  const runDeepResearch = (event) => {
    const prompt = `Act as an elite quantitative analyst. Analyze the market disruption caused by the following economic event:\n\nEvent: ${event.event}\nTarget Asset: ${event.asset}\nActual Release: ${event.actual} (Forecast was ${event.forecast})\nCalculated Volatility Power Signal: ${event.power}%\n\nProvide a strict, professional analysis including:\n1. Historical price behavior of ${event.asset} when this exact scenario occurs.\n2. Key technical levels to watch today.`;
    const encodedPrompt = encodeURIComponent(prompt);
    window.open(`https://www.perplexity.ai/?q=${encodedPrompt}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#00d2ff] selection:text-black overflow-hidden flex flex-col">
      
      {/* --- TOP TICKER TAPE --- */}
      <div className="w-full bg-[#0a0a0a] border-b border-white/5 py-2 flex overflow-hidden whitespace-nowrap text-[10px] font-black tracking-widest relative z-50">
        <div className="animate-[ticker_30s_linear_infinite] flex gap-16 px-4">
          {Object.entries(prices).map(([asset, data]) => (
            <div key={asset} className="flex gap-4 items-center">
              <span className="text-zinc-500">{asset}</span>
              <span className="text-white">{data.value}</span>
              <span className={data.up ? 'text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'}>
                {data.up ? '▲' : '▼'} {data.change}
              </span>
            </div>
          ))}
          {/* Duplicated for infinite scroll */}
          {Object.entries(prices).map(([asset, data]) => (
            <div key={asset + 'dup'} className="flex gap-4 items-center">
              <span className="text-zinc-500">{asset}</span>
              <span className="text-white">{data.value}</span>
              <span className={data.up ? 'text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'}>
                {data.up ? '▲' : '▼'} {data.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/5 bg-[#0a0a0a]">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></div>
          <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
            THUNDER<span className="text-[#00d2ff]">VAULT</span>
          </h1>
          <span className="bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#00d2ff] px-2 py-1 text-[9px] rounded uppercase font-black tracking-[0.2em] ml-4 hidden sm:block">
            Prototype Engine
          </span>
        </div>
        <button onClick={() => navigate('/')} className="text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
          Exit to BuildEx
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* --- SIDEBAR FILTERS --- */}
        <div className="hidden lg:flex w-64 bg-[#0a0a0a] border-r border-white/5 p-6 flex-col gap-1 z-10">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black mb-6 mt-2">Market Sectors</p>
          {['ALL', 'INDIAN MARKETS', 'FOREX', 'COMMODITIES'].map(tab => (
            <button 
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedEvent(null); }}
              className={`text-left px-4 py-3 text-[11px] font-black uppercase tracking-widest transition-all rounded-md ${
                activeTab === tab 
                ? 'bg-white/10 text-white' 
                : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300'
              }`}
            >
              {tab}
            </button>
          ))}
          
          <div className="mt-auto p-4 bg-black/50 border border-white/5 rounded-lg text-[9px] uppercase font-black tracking-widest text-zinc-500 space-y-3">
             <div className="flex justify-between items-center">
               <span>API Status</span>
               <span className="text-yellow-500">SIMULATED</span>
             </div>
             <div className="flex justify-between items-center">
               <span>Latency</span>
               <span className="text-emerald-500">0ms</span>
             </div>
          </div>
        </div>

        {/* --- MAIN ECONOMIC CALENDAR --- */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#050505]">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter mb-2 italic">Macro Economic Calendar</h2>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Live Disruption & Variance Tracking</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-2xl font-black text-white italic">{new Date().toLocaleTimeString('en-US', { hour12: false })}</p>
              <p className="text-zinc-600 text-[9px] uppercase font-black tracking-widest">Local Exchange Time</p>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-3 text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-black border-y border-white/10 bg-[#0a0a0a]">
            <div className="col-span-2 md:col-span-1">Time</div>
            <div className="col-span-1 text-center hidden md:block">Cur</div>
            <div className="col-span-1 text-center">Imp</div>
            <div className="col-span-4 md:col-span-4">Event</div>
            <div className="col-span-3 md:col-span-2">Target Asset</div>
            <div className="col-span-1">Act</div>
            <div className="col-span-1">For</div>
            <div className="col-span-1 hidden md:block">Prev</div>
          </div>

          {/* EVENT ROWS (Forex Factory Style) */}
          <div className="flex flex-col">
            {filteredEvents.map(event => (
              <div 
                key={event.id} 
                onClick={() => setSelectedEvent(event)}
                className={`grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-5 border-b transition-all items-center cursor-pointer ${
                  selectedEvent?.id === event.id 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-transparent border-white/5 hover:bg-white/[0.02]'
                }`}
              >
                {/* Time */}
                <div className="col-span-2 md:col-span-1 text-zinc-300 font-bold text-[10px] md:text-xs">{event.time}</div>
                
                {/* Currency/Flag */}
                <div className="col-span-1 text-center hidden md:block">
                  <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-black">{event.currency}</span>
                </div>
                
                {/* Impact Icon (Red, Orange, Yellow) */}
                <div className="col-span-1 flex justify-start md:justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={event.impact === 'HIGH' ? '#ef4444' : event.impact === 'MED' ? '#f97316' : '#eab308'} stroke="none">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                
                {/* Event Name */}
                <div className="col-span-4 md:col-span-4 text-zinc-200 font-medium text-xs md:text-sm pr-2 md:pr-4">
                  {event.event}
                </div>

                {/* Target Asset */}
                <div className="col-span-3 md:col-span-2 text-[#00d2ff] font-black text-[10px] md:text-xs tracking-wider">
                  {event.asset}
                </div>
                
                {/* Actual */}
                <div className={`col-span-1 text-xs md:text-sm font-black ${
                  event.actual !== event.forecast && event.actual !== 'STABLE' 
                  ? (parseFloat(event.actual) > parseFloat(event.forecast) ? 'text-emerald-500' : 'text-red-500') 
                  : 'text-zinc-300'
                }`}>
                  {event.actual}
                </div>
                
                <div className="col-span-1 text-[10px] md:text-xs text-zinc-500 font-bold">{event.forecast}</div>
                <div className="col-span-1 text-[10px] md:text-xs text-zinc-500 font-bold hidden md:block">{event.previous}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC PROBABILITY & PERPLEXITY PANEL --- */}
        {selectedEvent && (
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-[#080808] border-l border-white/10 p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)] z-40 animate-[slideIn_0.3s_ease-out]">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
               <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Deep Research Protocol</span>
               </div>
               <button onClick={() => setSelectedEvent(null)} className="text-zinc-500 hover:text-white font-black">✕</button>
            </div>
            
            <h3 className="text-white font-black text-lg uppercase tracking-tight mb-8 leading-snug">
              {selectedEvent.event}
            </h3>

            <div className="space-y-6 flex-1">
              
              {/* Power Signal Component */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Volatility Power Signal</p>
                  <span className={`font-black italic text-xl ${selectedEvent.power >= 85 ? 'text-red-500' : selectedEvent.power >= 50 ? 'text-orange-500' : 'text-yellow-500'}`}>
                    {selectedEvent.power}%
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${selectedEvent.power >= 85 ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : selectedEvent.power >= 50 ? 'bg-orange-500' : 'bg-yellow-500'}`} 
                    style={{ width: `${selectedEvent.power}%` }}
                  ></div>
                </div>
              </div>

              {/* Directional Bias */}
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg">
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-1">Algorithmic Directional Bias</p>
                <p className="text-[#00d2ff] font-black text-sm uppercase tracking-wide">{selectedEvent.bias}</p>
              </div>

              {/* Initial Analysis Output */}
              <div>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-2">Initial System Read</p>
                <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                  {selectedEvent.analysis}
                </p>
              </div>
            </div>

            {/* PERPLEXITY DEEP LINK BUTTON */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <button 
                onClick={() => runDeepResearch(selectedEvent)}
                className="w-full bg-[#00d2ff] text-black font-black uppercase py-5 text-[11px] tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3"
              >
                <span>RUN DEEP RESEARCH VIA PERPLEXITY</span>
                <span className="text-lg leading-none">→</span>
              </button>
              <p className="text-[9px] text-zinc-500 uppercase text-center mt-4 font-black tracking-[0.2em]">
                Auto-generates institutional prompt
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Embedded CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />

    </div>
  );
}

export default ThunderVault;