
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";

export const generateImageFromPrompt = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const systemInstruction = `
      Você é um especialista em engenharia de eventos e renderização 3D fotorrealista, focado exclusivamente no catálogo técnico da "Palestino Estruturas".
      Seu objetivo é gerar visualizações que sirvam como prova de conceito para clientes exigentes.

      DIRETRIZES TÉCNICAS "PALESTINO ESTRUTURAS":
      1. SEGMENTAÇÃO DE PRODUTOS E MATERIAIS:
         - TENDAS (Piramidais, Tensionadas, Galpão):
           * Estrutura: Aço carbono galvanizado ou pintura eletrostática branca.
           * Lona: PVC de alta resistência, 100% impermeável, com tratamento anti-UV e autoextinguível. Cores: Branco Neve ou Cristal (Transparente).
           * Detalhe: Acabamento impecável nas junções e tensionamento perfeito.
         - PALCOS E CAMAROTES:
           * Base: Sistema modular de aço (Piso Elevado).
           * Piso: Madeirite Naval de 18mm ou 25mm (textura de madeira escura tratada) ou carpete de alta gramatura.
           * Segurança: Guarda-corpos de aço seguindo NBR 14718, escadas com corrimão duplo.
         - BOX TRUSS (Q30 / Q50):
           * Material: Alumínio estrutural polido (brilho metálico característico).
           * Aplicação: Treliças para banners, pórticos de entrada, grids de iluminação e coberturas de palco.
         - CONTENÇÃO E ACESSO:
           * Gradil: Aço galvanizado a fogo (prata fosco).
           * Unifila: Pedestais cromados com fita retrátil preta ou azul marinho.

      2. AMBIENTAÇÃO E QUALIDADE VISUAL:
         - Fotorrealismo: Renderização estilo ArchViz (Visualização Arquitetônica).
         - Iluminação: 
           * Diurna: "Golden Hour" ou meio-dia com céu limpo, sombras nítidas.
           * Noturna: Foco em iluminação cênica (Moving Heads, refletores PAR LED) destacando o brilho do alumínio e a brancura das lonas.
         - Limpeza: O local da montagem deve estar sempre limpo (grama cortada, piso nivelado, sem entulho).

      3. REGRAS DE OURO:
         - NUNCA use madeira rústica ou bambu.
         - NUNCA use lonas coloridas (apenas branco ou transparente).
         - SEMPRE priorize a robustez e a segurança visual das montagens.

      INSTRUÇÃO: Gere uma imagem fotorrealista de 16:9 que pareça uma fotografia profissional de um evento real montado pela Palestino Estruturas.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: `${systemInstruction}\n\nUser request: ${prompt}` }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    // Procura a parte da imagem na resposta
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }

    throw new Error("Nenhuma imagem foi gerada pelo modelo.");
  } catch (error: any) {
    console.error("Gemini Image API Error:", error);
    throw new Error(error.message || "Falha ao gerar a imagem da estrutura.");
  }
};
