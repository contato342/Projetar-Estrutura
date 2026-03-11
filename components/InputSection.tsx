
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useCallback } from 'react';
import { Camera, Loader2, LayoutGrid } from 'lucide-react';
import { GenerationStatus } from '../types';

interface InputSectionProps {
  onGenerate: (prompt: string) => void;
  status: GenerationStatus;
}

export const InputSection: React.FC<InputSectionProps> = ({ onGenerate, status }) => {
  const [input, setInput] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status !== GenerationStatus.LOADING) {
      onGenerate(input.trim());
    }
  }, [input, status, onGenerate]);

  const isLoading = status === GenerationStatus.LOADING;

  const suggestions = [
    'Tenda Piramidal 10x10m Branca (Aço)',
    'Palco Modular com Piso Madeirite Naval',
    'Cobertura Box Truss Q30 em Alumínio',
    'Tenda Cristal Transparente para Casamento',
    'Camarote VIP com Guarda-Corpo ABNT',
    'Pórtico de Entrada com Unifilas',
    'Gradil de Contenção Galvanizado',
    'Galpão Estruturado para Feira Industrial'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em]">SISTEMA DE PROJETOS V3.1</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
          PROJETAR <span className="text-indigo-500">ESTRUTURA</span>
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto uppercase tracking-wide">
          Descreva a infraestrutura técnica e o Palestino AI gerará uma visualização fotorrealista de alta precisão.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-zinc-900/50 border border-white/10 rounded-2xl p-2 focus-within:border-indigo-500/50 transition-all shadow-2xl">
          <div className="pl-5 text-zinc-500">
            <LayoutGrid className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Tenda Cristal 20x20 com iluminação cênica em um jardim..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-600 px-5 py-4 text-lg"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`
              flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300
              ${!input.trim() || isLoading 
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95'}
            `}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>GERANDO...</span>
              </>
            ) : (
              <>
                <span>GERAR</span>
                <Camera className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setInput(suggestion)}
            className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-900 border border-white/5 rounded-full hover:bg-zinc-800 hover:text-white hover:border-white/20 transition-all"
            disabled={isLoading}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};
