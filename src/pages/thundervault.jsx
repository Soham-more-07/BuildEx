import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThunderVault() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Simulation & Volatility States
  const [isSimulatingRelease, setIsSimulatingRelease] = useState(false);
  const [simulationImpactMsg, setSimulationImpactMsg] = useState('');

  // Simulated Live Market Ticker
  const [prices, setPrices] = useState({
    'NIFTY 50': { value: 24150.25, change: '+1.15%', up: true },
    'BANKNIFTY': { value: 52480.60, change: '-0.38%', up: false },
    'XAU/USD': { value: 2645.80, change: '+0.75%', up: true },
    'EUR/USD': { value: 1.0545, change: '-0.12%', up: false },
    'USD/INR': { value: 84.35, change: '+0.08%', up: true },
    'BTC/USD': { value: 94250.00, change: '+4.20%', up: true },
  });

  // Dynamic scheduled events representing real-world Forex Factory macroeconomic indicators
  const [economicEvents, setEconomicEvents] = useState([
    { 
      id: 1, 
      time: '18:30', 
      currency: 'USD', 
      asset: 'EUR/USD', 
      impact: 'HIGH', // Red
      power: 94, 
      event: 'Federal Funds Rate (FOMC Decision)', 
      actual: '5.25%', 
      forecast: '5.25%', 
      previous: '5.50%',
      category: 'FOREX',
      bias: 'HAWKISH/DOVISH SENSITIVE',
      analysis: 'Central bank scheduled interest rate release. Higher interest rate prints typically support the local currency and lower safe-haven asset demand.',
      triggered: true
    },
    { 
      id: 2, 
      time: '18:00', 
      currency: 'USD', 
      asset: 'XAU/USD', 
      impact: 'HIGH', // Red
      power: 88, 
      event: 'CPI m/m (Consumer Price Index)', 
      actual: 'Pending', 
      forecast: '0.3%', 
      previous: '0.2%',
      category: 'FOREX',
      bias: 'STRONG INFLATIONARY DEV',
      analysis: 'A primary measure of price inflation. High deviations indicate strong retail price growth, signaling hawkish policy responses.',
      triggered: false
    },
    { 
      id: 3, 
      time: '09:15', 
      currency: 'INR', 
      asset: 'BANKNIFTY', 
      impact: 'HIGH', // Red
      power: 91, 
      event: 'RBI Monetary Policy Statement', 
      actual: '6.50%', 
      forecast: '6.50%', 
      previous: '6.50%',
      category: 'INDIAN MARKETS',
      bias: 'LIQUIDITY SYSTEMIC BIAS',
      analysis: 'Reserve Bank of India rate evaluation. Direct driver of systematic market equity flows and domestic banking sector index spreads.',
      triggered: true
    },
    { 
      id: 4, 
      time: '14:30', 
      currency: 'GBP', 
      asset: 'EUR/USD', 
      impact: 'MED', // Orange
      power: 65, 
      event: 'Official Bank Rate Statement', 
      actual: 'Pending', 
      forecast: '4.75%', 
      previous: '5.00%',
      category: 'FOREX',
      bias: 'MILD DEV',
      analysis: 'Bank of England scheduled MPC rate guidance tracking inflationary benchmarks for global trade relationships.',
      triggered: false
    },
    { 
      id: 5, 
      time: '19:30', 
      currency: 'USD', 
      asset: 'GOLD / OIL', 
      impact: 'MED', // Orange
      power: 74, 
      event: 'Crude Oil Inventories', 
      actual: 'Pending', 
      forecast: '1.2M', 
      previous: '-0.8M',
      category: 'COMMODITIES',
      bias: 'DEMAND-DRIVEN FLUCTUATION',
      analysis: 'Weekly commercial inventory indicator measuring fuel availability in crude barrels. Strongly affects crude benchmark pricing.',
      triggered: false
    },
    { 
      id: 6, 
      time: '11:00', 
      currency: 'INR', 
      asset: 'NIFTY 50', 
      impact: 'LOW', // Yellow
      power: 32, 
      event: 'Infrastructure Output y/y', 
      actual: '4.4%', 
      forecast: '4.2%', 
      previous: '4.0%',
      category: 'INDIAN MARKETS',
      bias: 'NEUTRAL BASELINE',
      analysis: 'Domestic production output benchmark across major industrial segments. Reflects long-term organic structural health.',
      triggered: true
    }
  ]);

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

  // Filter based on selected Tab
  const filteredEvents = activeTab === 'ALL' 
    ? economicEvents 
    : economicEvents.filter(n => n.category === activeTab);

  // Simulated Macro News Release Engine
  const executeReleaseSimulation = (event) => {
    if (event.triggered) return;

    setIsSimulatingRelease(true);
    setSimulationImpactMsg(`Connecting to Forex Factory mirror data stream for ${event.event}...`);

    setTimeout(() => {
      // Create random positive/negative deviation
      const isPositive = Math.random() > 0.4;
      let generatedActual = '';

      if (event.forecast.includes('%')) {
        const currentVal = parseFloat(event.forecast);
        const change = isPositive ? 0.2 : -0.2;
        generatedActual = `${(currentVal + change).toFixed(2)}%`;
      } else if (event.forecast.includes('M')) {
        const currentVal = parseFloat(event.forecast);
        const change = isPositive ? 0.5 : -0.5;
        generatedActual = `${(currentVal + change).toFixed(1)}M`;
      } else {
        generatedActual = isPositive ? 'Surplus' : 'Deficit';
      }

      // Update actual value in calendar list
      setEconomicEvents(prev => 
        prev.map(item => item.id === event.id ? { ...item, actual: generatedActual, triggered: true } : item)
      );

      // Trigger temporary, massive price move in market tickers
      setPrices(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(key => {
          if (event.asset.includes(key) || key === 'EUR/USD' || key === 'XAU/USD') {
            const shiftMultiplier = isPositive ? 1.03 : 0.97;
            updated[key].value = +(updated[key].value * shiftMultiplier).toFixed(2);
            updated[key].change = isPositive ? '+2.45%' : '-2.10%';
            updated[key].up = isPositive;
          }
        });
        return updated;
      });

      setSimulationImpactMsg(`Data Release Complete! Actual: ${generatedActual} (Forecast was ${event.forecast}). Volatility spike distributed to tickers!`);
      setIsSimulatingRelease(false);

      // Refresh currently selected panel info
      setSelectedEvent(prev => prev && prev.id === event.id ? { ...prev, actual: generatedActual, triggered: true } : prev);
    }, 2000);
  };

  // Perplexity Deep Research Prompt Generator
  const runDeepResearch = (event) => {
    const prompt = `Act as an elite quantitative analyst. Analyze the scheduled Forex Factory macroeconomic event:\n\nEvent: ${event.event}\nTarget Asset Category: ${event.asset}\nScheduled Volatility Power: ${event.power}%\nPrevious Value: ${event.previous}\nMarket Consensus Forecast: ${event.forecast}\n\nProvide an age-appropriate, clear, and highly educational structured analysis outlining:\n1. Why this scheduled announcement creates market variance.\n2. The historical relationship between actual deviations and asset price dynamics.\n3. How standard dev calculations are utilized by global research teams.`;
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
          <div className="w-2 h-2 bg-[#00d2ff] rounded-full animate-pulse shadow-[0_0_12px_#00d2ff]"></div>
          <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
            THUNDER<span className="text-[#00d2ff]">VAULT</span>
          </h1>
          <span className="bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#00d2ff] px-2 py-1 text-[9px] rounded uppercase font-black tracking-[0.2em] ml-4 hidden sm:block">
            Intel Core
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
          {['ALL', 'FOREX', 'INDIAN MARKETS', 'COMMODITIES'].map(tab => (
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
               <span>Engine Stream</span>
               <span className="text-emerald-500">CONNECTED</span>
             </div>
             <div className="flex justify-between items-center">
               <span>Forex Source</span>
               <span className="text-[#00d2ff]">TRUSTED MIRROR</span>
             </div>
          </div>
        </div>

        {/* --- MAIN ECONOMIC CALENDAR --- */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#050505]">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter mb-2 italic">Scheduled Economic Events</h2>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Forex Factory Alignment - High Trust Mirror</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-2xl font-black text-white italic">{new Date().toLocaleTimeString('en-US', { hour12: false })}</p>
              <p className="text-zinc-600 text-[9px] uppercase font-black tracking-widest">Local Exchange Time</p>
            </div>
          </div>

          {simulationImpactMsg && (
            <div className="mb-6 p-4 bg-[#00d2ff]/10 border border-[#00d2ff]/20 rounded-lg text-[#00d2ff] text-xs font-bold tracking-wide animate-pulse">
              ⚡ {simulationImpactMsg}
            </div>
          )}

          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-3 text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-black border-y border-white/10 bg-[#0a0a0a]">
            <div className="col-span-2 md:col-span-1">Time</div>
            <div className="col-span-1 text-center hidden md:block">Cur</div>
            <div className="col-span-1 text-center">Impact</div>
            <div className="col-span-4 md:col-span-4">Macro Indicators & scheduled releases</div>
            <div className="col-span-3 md:col-span-2">Target Asset</div>
            <div className="col-span-1">Actual</div>
            <div className="col-span-1">Forecast</div>
            <div className="col-span-1 hidden md:block">Previous</div>
          </div>

          {/* EVENT ROWS */}
          <div className="flex flex-col">
            {filteredEvents.map(event => (
              <div 
                key={event.id} 
                onClick={() => setSelectedEvent(event)}
                className={`grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-5 border-b transition-all items-center cursor-pointer ${
                  selectedEvent?.id === event.id 
                  ? 'bg-white/5 border-white/20 shadow-[inset_3px_0_0_#00d2ff]' 
                  : 'bg-transparent border-white/5 hover:bg-white/[0.02]'
                }`}
              >
                {/* Time */}
                <div className="col-span-2 md:col-span-1 text-zinc-300 font-bold text-[10px] md:text-xs">{event.time}</div>
                
                {/* Currency */}
                <div className="col-span-1 text-center hidden md:block">
                  <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-black">{event.currency}</span>
                </div>
                
                {/* Impact Level Classification */}
                <div className="col-span-1 flex justify-start md:justify-center">
                  <div 
                    className="w-4 h-4 rounded-sm flex items-center justify-center font-black text-[9px] text-black"
                    style={{
                      backgroundColor: event.impact === 'HIGH' ? '#ef4444' : event.impact === 'MED' ? '#f97316' : '#eab308'
                    }}
                    title={`${event.impact} IMPACT`}
                  />
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
                  event.actual === 'Pending' 
                  ? 'text-zinc-500 animate-pulse' 
                  : (event.actual > event.forecast ? 'text-emerald-500' : 'text-red-500')
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
                  <div className="w-2 h-2 bg-[#00d2ff] rounded-full animate-pulse"></div>
                  <span>Indicator Breakdown</span>
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
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Calculated Volatility Index</p>
                  <span className={`font-black italic text-xl ${selectedEvent.impact === 'HIGH' ? 'text-red-500' : 'text-orange-500'}`}>
                    {selectedEvent.power}%
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${selectedEvent.impact === 'HIGH' ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-orange-500'}`} 
                    style={{ width: `${selectedEvent.power}%` }}
                  ></div>
                </div>
              </div>

              {/* Directional Bias */}
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg">
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-1">Impact Designation Category</p>
                <p className="text-[#00d2ff] font-black text-sm uppercase tracking-wide">{selectedEvent.bias}</p>
              </div>

              {/* Analytical Description */}
              <div>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mb-2">Detailed Forecast Context</p>
                <p className="text-zinc-400 text-xs leading-relaxed font-medium">
                  {selectedEvent.analysis}
                </p>
              </div>
            </div>

            {/* VOLATILITY RELEASE SIMULATOR BUTTON */}
            <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
              <button 
                onClick={() => executeReleaseSimulation(selectedEvent)}
                disabled={selectedEvent.triggered || isSimulatingRelease}
                className={`w-full font-black uppercase py-4 text-[10px] tracking-widest transition-all rounded ${
                  selectedEvent.triggered 
                  ? 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed' 
                  : 'bg-emerald-500 text-black hover:bg-white shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                }`}
              >
                {selectedEvent.triggered ? 'DATA ALREADY RELEASED' : 'SIMULATE SCHEDULED REPORT RELEASE ⚡'}
              </button>

              <button 
                onClick={() => runDeepResearch(selectedEvent)}
                className="w-full bg-white/5 border border-white/10 text-white font-black uppercase py-4 text-[10px] tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 rounded"
              >
                <span>RUN DEEP RESEARCH VIA PERPLEXITY</span>
                <span className="text-sm leading-none">→</span>
              </button>
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