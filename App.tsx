
import React, { useState } from 'react';
import { PianoGenerator } from './components/PianoGenerator';
import { GuitarGenerator } from './components/GuitarGenerator';
import { ScaleGenerator } from './components/ScaleGenerator';
import { Music, Guitar, ListMusic } from 'lucide-react';
import { STARKIDS_LOGO_URL } from './constants';

enum Tab {
  PIANO = 'PIANO',
  GUITAR = 'GUITAR',
  SCALES = 'SCALES'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PIANO);

  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-slate-700 selection:bg-yellow-200">
      
      {/* Studio Header */}
      <nav className="bg-white/95 backdrop-blur-sm border-b-4 border-sky-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            
            {/* Brand - Big & Fun */}
            <div className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.location.reload()}>
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur opacity-50 animate-pulse"></div>
                <img src={STARKIDS_LOGO_URL} alt="Starkids Logo" className="relative h-20 w-auto drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                 <h1 className="font-lobster text-4xl text-sky-500 drop-shadow-sm leading-none">Starkids</h1>
                 <span className="font-lobster text-xl text-orange-400 tracking-widest -mt-1">Studio</span>
              </div>
            </div>

            {/* Desktop Navigation - Chunky Buttons */}
            <div className="flex items-center gap-4 bg-sky-50 p-2 rounded-2xl border-2 border-sky-100 overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab(Tab.PIANO)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-lobster text-lg md:text-xl transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-1 whitespace-nowrap ${
                  activeTab === Tab.PIANO
                    ? 'bg-sky-400 border-sky-600 text-white shadow-lg'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-sky-400 hover:border-sky-200'
                }`}
              >
                <Music size={24} className={activeTab === Tab.PIANO ? 'animate-bounce' : ''} /> 
                Piano
              </button>
              
              <button
                onClick={() => setActiveTab(Tab.GUITAR)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-lobster text-lg md:text-xl transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-1 whitespace-nowrap ${
                  activeTab === Tab.GUITAR
                    ? 'bg-orange-400 border-orange-600 text-white shadow-lg'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-orange-400 hover:border-orange-200'
                }`}
              >
                <Guitar size={24} className={activeTab === Tab.GUITAR ? 'animate-bounce' : ''} /> 
                Guitarra
              </button>

              <button
                onClick={() => setActiveTab(Tab.SCALES)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-lobster text-lg md:text-xl transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-1 whitespace-nowrap ${
                  activeTab === Tab.SCALES
                    ? 'bg-purple-400 border-purple-600 text-white shadow-lg'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-purple-400 hover:border-purple-200'
                }`}
              >
                <ListMusic size={24} className={activeTab === Tab.SCALES ? 'animate-bounce' : ''} /> 
                Escala Piano
              </button>
            </div>

            {/* Empty div to balance flex layout */}
            <div className="hidden lg:block w-20"></div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-6xl mx-auto p-4 md:p-10 flex flex-col items-center">
        <div className="w-full animate-fade-in-up">
            {activeTab === Tab.PIANO && <PianoGenerator />}
            {activeTab === Tab.GUITAR && <GuitarGenerator />}
            {activeTab === Tab.SCALES && <ScaleGenerator />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-yellow-300 py-12 mt-auto relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center">
            <img src={STARKIDS_LOGO_URL} alt="Starkids" className="h-16 opacity-80 hover:opacity-100 transition-all hover:rotate-3" />
            <p className="text-slate-500 font-poppins text-sm font-medium max-w-lg">
                Site desenvolvido para gerar o material didático
            </p>
        </div>
        
        {/* Design Credit in Bottom Corner */}
        <div className="absolute bottom-2 right-4 opacity-60 hover:opacity-100 transition-opacity">
            <p className="text-xs font-poppins text-slate-400 font-bold">Design by XANDÃO</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
