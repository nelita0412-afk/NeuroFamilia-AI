// Generacion oficial v2 de los retratos de los 8 mentores (3D cinematico premium).
// Uso: node scripts/generate-mentor-images.mjs [--only ALBA] -- desde la raiz de apps/api
import { GoogleGenAI } from '@google/genai';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

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
const OUT_DIR = resolve(__dirname, '../../web/public/images/mentores/v2');

const STYLE_BASE =
  'Retrato 3D cinematografico premium estilo animacion de estudio de alta calidad (render Pixar/DreamWorks), formato vertical PNG 9:16 para aplicacion movil. Un solo personaje centrado, mirando directamente al frente, expresion amigable y cercana. El enfoque esta en el rostro y la personalidad del personaje, no en el entorno. Fondo muy limpio y desenfocado (bokeh suave de tono unico), sin elementos, sin paisaje. Sin texto, sin logos, sin marcos, sin marcas de agua, sin firmas, sin credenciales. Iluminacion cinematografica suave, piel con textura realista de animacion 3D premium.';

const MENTORS = [
  {
    name: 'ALBA',
    prompt: `Mujer joven adulta latina de alrededor de 28 anos, cabello largo oscuro, mirada serena y esperanzadora, sonrisa sutil y confiada. Debe transmitir vision de futuro y proposito de vida. Prendas en tonos azul oceano, fondo bokeh azul oceano suave. ${STYLE_BASE}`,
  },
  {
    name: 'NIA',
    prompt: `Nina pequena de 4 anos, ojos grandes y curiosos, expresion tranquila y confiada que transmite transicion segura ante los cambios. Ropa en tonos celeste suave, fondo bokeh celeste suave. ${STYLE_BASE}`,
  },
  {
    name: 'MAKI',
    prompt: `Nina de 7 anos con energia alegre, sonrisa brillante y luminosa, gesto jugueton que transmite fortaleza para levantarse despues de un error. Ropa en tonos turquesa, fondo bokeh turquesa suave. ${STYLE_BASE}`,
  },
  {
    name: 'BOBBY',
    prompt: `Nino de 8 anos, mirada calida y abierta, sonrisa amable que transmite escucha profunda y conexion emocional. Ropa en tonos azul, fondo bokeh azul suave. ${STYLE_BASE}`,
  },
  {
    name: 'LEO',
    prompt: `Nino de 9 anos, semblante sereno y organizado, sonrisa de cuidado confiable que transmite rutinas, comunidad y responsabilidad compartida. Ropa en tonos verde, fondo bokeh verde suave. ${STYLE_BASE}`,
  },
  {
    name: 'CORA',
    prompt: `Nina de 9 anos reflexiva y tierna, mirada suave de aceptacion, sonrisa serena que transmite autoestima sana y celebracion de ser unica. Ropa en tonos teal, fondo bokeh teal suave. ${STYLE_BASE}`,
  },
  {
    name: 'PINGO',
    prompt: `Nina de 8 anos con asombro genuino, ojos brillantes de curiosidad, sonrisa de descubrimiento que transmite curiosidad cientifica y ganas de aprender. Ropa en tonos azul brillante, fondo bokeh azul brillante suave. ${STYLE_BASE}`,
  },
  {
    name: 'DARWIN',
    prompt: `Joven adulto latino de alrededor de 30 anos, mirada observadora y creativa, sonrisa reflexiva y propositiva que transmite ideas nuevas y experimentacion. Ropa en tonos indigo, fondo bokeh indigo suave. ${STYLE_BASE}`,
  },
];

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const selected = MENTORS.filter((m) => !only || m.name === only);

async function generate(mentor) {
  const genAI = new GoogleGenAI({ apiKey });
  const response = await genAI.models.generateContent({
    model: MODEL,
    contents: mentor.prompt,
    config: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: '9:16' },
    },
  });

  const part = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData || p.fileData);
  if (!part) {
    console.error(`${mentor.name}: sin imagen en la respuesta`, JSON.stringify(response.candidates?.[0]?.finishReason ?? 'sin finishReason'));
    return false;
  }

  const b64 = part.inlineData?.data ?? part.fileData?.data;
  const buffer = Buffer.from(b64, 'base64');
  const out = resolve(OUT_DIR, `${mentor.name}.png`);
  writeFileSync(out, buffer);

  const w = buffer.readUInt32BE(16);
  const h = buffer.readUInt32BE(20);
  console.log(`${mentor.name}: ${w}x${h} (${(buffer.length / 1024).toFixed(0)} KB) -> ${out}`);
  return true;
}

mkdirSync(OUT_DIR, { recursive: true });
console.log(`Modelo: ${MODEL} | destinos: ${selected.length}`);

let ok = 0;
for (const mentor of selected) {
  try {
    if (await generate(mentor)) ok++;
  } catch (error) {
    console.error(`${mentor.name}: error -> ${error.message}`);
  }
}

console.log(`Completado: ${ok}/${selected.length}`);