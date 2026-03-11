
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Box, Sparkles, ExternalLink } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-5 px-4 border-b border-white/5 bg-zinc-950/90 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-black text-white tracking-tighter uppercase leading-none">Palestino AI</h1>
            <p className="text-[9px] text-zinc-500 font-bold flex items-center gap-1 uppercase tracking-[0.2em] mt-1">
              Engine de Visualização <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden sm:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Infraestrutura</a>
            <a href="#" className="hover:text-white transition-colors">Segurança</a>
            <a href="#" className="hover:text-white transition-colors">Portfólio</a>
          </nav>
          
          <a 
            href="https://palestinoestruturas.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[10px] font-black px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-zinc-400 hover:border-white/20 hover:text-white transition-all"
          >
            <span>SITE OFICIAL</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </header>
  );
};
