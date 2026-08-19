// Character Bible oficial de NeuroFamilia Galapagos: 8 hojas de personaje.
// Produccion secuencial: la primera hoja (ALBA) se usa como referencia de estilo
// para las siguientes, garantizando coherencia visual Pixar/DreamWorks.
// Uso: node scripts/generate-character-bible.mjs [--only ALBA]
import { GoogleGenAI } from '@google/genai';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createPartFromText } from '@google/genai';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env');
const apiKey = readFileSync(envPath, 'utf8')
  .split('\n')
  .find((l) => l.startsWith('GEMINI_API_KEY='))
  ?.split('=').slice(1).join('=');

if (!apiKey) {
  console.error('Falta GEMINI_API_KEY en .env');
  process.exit(1);
}

const MODEL = process.env.IMAGE_MODEL ?? 'gemini-3-pro-image';
const OUT_DIR = resolve(__dirname, '../../web/public/images/mentores/bible');

const STYLE_ANCHOR =
  'Estilo de largometraje animado Pixar/Disney, calidad AAA cinematografica, render 3D premium, grandes ojos expresivos con brillo, rostro dulce y amigable mirando al frente, iluminacion suave de estudio, formato de hoja de diseno de personaje profesional. Fondo blanco puro limpio. Sin texto, sin logos, sin marcos, sin marcas de agua, sin firmas, sin creditos.';

const SHEET_LAYOUT =
  'Hoja de referencia de personaje profesional sobre fondo blanco puro: vista frontal completa del cuerpo, vista tres cuartos, vista lateral, encima una fila de tres expresiones faciales del rostro (alegria amable, curiosidad, serenidad/seguridad) y en una esquina una paleta de color de cuatro o cinco muestras sin etiquetas con los colores del personaje.';

const CHARACTERS = [
  {
    name: 'ALBA',
    species: 'Albatros de Galapagos juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura: albatros juvenil, cuerpo suave y redondeado, plumaje blanco cremoso con manchas cafe suaves, cabeza grande, ojos enormes esperanzadores, pico largo gris azulado. Transmite vision de futuro y serenidad. Prendas suaves tono azul oceano. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'NIA',
    species: 'Tortuga marina azul de Galapagos juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura tortuga marina azul juvenil, caparazon redondo azul celeste brillante, piel celeste suave, aletas pequenas redondeadas, ojos grandes serenos y curiosos. Transmite transiciones seguras y calma. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'MAKI',
    species: 'Iguana marina juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura iguana marina juvenil, escamas suaves gris oscuro con reflejos teal, cresta pequena sobre la cabeza, hocico redondeado, ojos grandes juguetones. Transmite resiliencia, energia alegre y recuperacion. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'BOBBY',
    species: 'Piquero patiazul juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura piquero de patas azules juvenil, cuerpo blanco, cabeza cafe suave, patas azul electrico (su rasgo iconico), ojos grandes calidos y expresivos. Transmite conexion emocional y escucha. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'LEO',
    species: 'Lobo marino de Galapagos juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura lobo marino juvenil, pelaje cafe dorado, hocico suave, bigotes, orejas redondeadas, ojos grandes serenos y confiables. Transmite comunidad, cuidado y rutinas. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'CORA',
    species: 'Cormoran no volador juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura cormoran no volador juvenil, plumaje negro azulado suave, alas pequenas y cortas, ojos teal tiernos y reflexivos. Transmite autoaceptacion y serenidad. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'PINGO',
    species: 'Pinguino de Galapagos juvenil',
    prompt: `Personaje juvenil antropomorfo, criatura pinguino de Galapagos juvenil, cuerpo negro y blanco con banda oscura en la cabeza y mancha blanca del ojo, pico oscuro, ojos grandes brillantes de curiosidad. Transmite asombro cientifico y ganas de descubrir. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
  {
    name: 'DARWIN',
    species: 'Pinzon de Darwin juvenil con gafas',
    prompt: `Personaje juvenil antropomorfo, criatura pinzon juvenil, plumaje gris cafe, pico corto y fuerte, gafas redondas (su rasgo iconico), ojos grandes observadores. Transmite innovacion y curiosidad creativa. ${SHEET_LAYOUT} ${STYLE_ANCHOR}`,
  },
];

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const selected = CHARACTERS.filter((c) => !only || c.name === only);

async function generate(character, styleReference) {
  const genAI = new GoogleGenAI({ apiKey });
  const contents = [character.prompt];

  if (styleReference) {
    contents.push(
      createPartFromText(
        'Esta hoja es la REFERENCIA DE ESTILO del proyecto: copia exactamente sus proporciones de personaje, morfologia de rostro, diseno de ojos, nivel de detalle y calidad, adaptando solo la especie, paleta y personalidad de este nuevo personaje.',
      ),
      styleReference,
    );
  }

  const response = await genAI.models.generateContent({
    model: MODEL,
    contents: contents.join('\n\n'),
    config: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: '1:1' },
    },
  });

  const part = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData || p.fileData);
  if (!part) {
    console.error(`${character.name}: sin imagen en la respuesta`, JSON.stringify(response.candidates?.[0]?.finishReason ?? 'sin finishReason'));
    return null;
  }

  const buffer = Buffer.from(part.inlineData?.data ?? part.fileData?.data, 'base64');
  const out = resolve(OUT_DIR, `${character.name}-bible.png`);
  writeFileSync(out, buffer);
  console.log(`${character.name} (${character.species}): ${buffer.readUInt32BE(16)}x${buffer.readUInt32BE(20)} -> ${out}`);

  return {
    part: {
      inlineData: { mimeType: 'image/png', data: buffer.toString('base64') },
    },
  };
}

mkdirSync(OUT_DIR, { recursive: true });
console.log(`Character Bible | modelo: ${MODEL} | personajes: ${selected.map((c) => c.name).join(', ')}`);

let styleRef = null;
for (const character of selected) {
  try {
    const ref = await generate(character, styleRef);
    if (ref && !styleRef) {
      styleRef = ref;
      console.log('Referencia de estilo fijada con la primera hoja generada.');
    }
  } catch (error) {
    console.error(`${character.name}: error -> ${error.message}`);
  }
}

console.log('Character Bible completado.');