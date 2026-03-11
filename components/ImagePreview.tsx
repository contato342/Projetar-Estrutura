
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Download, Share2, ImageIcon } from 'lucide-react';
import { GeneratedImage } from '../types';

interface ImagePreviewProps {
  data: GeneratedImage | null;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ data }) => {
  if (!data) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data.url;
    link.download = `palestino-${data.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-zinc-900/80 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/50">
          <div className="flex items-center gap-2 overflow-hidden">
            <ImageIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <h3 className="text-sm font-medium text-zinc-300 truncate">
              {data.prompt}
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Imagem</span>
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative group aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden">
          <img 
            src={data.url} 
            alt={data.prompt}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
             <div className="max-w-md">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">Especificação Técnica Validada</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "Estrutura projetada seguindo rigorosamente os padrões de segurança ABNT e o catálogo técnico Palestino Estruturas."
                </p>
             </div>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="px-6 py-3 bg-zinc-950/50 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-500">
          <span>Padrão Palestino Estruturas</span>
          <span>Gemini 2.5 Image Engine</span>
        </div>
      </div>
    </div>
  );
};
