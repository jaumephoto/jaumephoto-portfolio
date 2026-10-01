// subir-fotos.mjs
// Copia las fotos de C:\fotos-portfolio a la web, crea las miniaturas, actualiza las galerías y hace el push.
// Uso: doble clic en SUBIR-FOTOS.bat  (o:  node subir-fotos.mjs)

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const REPO = path.dirname(fileURLToPath(import.meta.url));
const ORIGEN = process.env.ORIGEN || "C:\\fotos-portfolio";
const SIN_PUSH = process.argv.includes("--sin-push");
const BASE_URL = "/jaumephoto-portfolio";
const EXTENSIONES = [".jpg", ".jpeg", ".png", ".webp"];
const AVISO_MB = 1.5;
const ANCHO_MINIATURA = 1200; // píxeles de ancho de las miniaturas de la galería
const require = createRequire(import.meta.url);

// carpeta local  ->  página de la web
const SECCIONES = {
  StreetPhotography: "StreetPhotography.tsx",
  Concerts: "Concerts.tsx",
  Events: "WeddingsEvents.tsx",
  Photojournalism: "Photojournalism.tsx",
  PortraitProject: "PortraitProject.tsx",
};

function git(args, opciones = {}) {
  return spawnSync("git", args, { cwd: REPO, encoding: "utf8", ...opciones });
}

function esImagen(nombre) {
  return EXTENSIONES.includes(path.extname(nombre).toLowerCase());
}

function parar(mensaje) {
  console.error("\n❌ " + mensaje);
  process.exit(1);
}

if (!fs.existsSync(ORIGEN)) parar(`No encuentro la carpeta ${ORIGEN}`);
if (git(["rev-parse", "--git-dir"]).status !== 0)
  parar("Este script tiene que estar dentro de la carpeta del proyecto (jaumephoto-portfolio).");

if (!SIN_PUSH) {
  console.log("⬇️  Descargando últimos cambios de GitHub...");
  const pull = git(["pull", "--rebase", "--autostash"], { stdio: "inherit", encoding: undefined });
  if (pull.status !== 0) parar("No he podido actualizar desde GitHub. Copia este mensaje y pásaselo a Claude.");
}

// Evita subir por error carpetas enormes (node_modules, dist)
const rutaIgnore = path.join(REPO, ".gitignore");
if (!fs.existsSync(rutaIgnore)) {
  fs.writeFileSync(rutaIgnore, "node_modules\ndist\n*.log\n.DS_Store\nThumbs.db\n");
  console.log("Creado .gitignore");
}

// Herramienta para crear miniaturas (se instala sola la primera vez)
function cargarSharp() {
  try {
    return require("sharp");
  } catch {
    return null;
  }
}
let sharp = cargarSharp();
if (!sharp) {
  console.log("📦 Instalando la herramienta de miniaturas (solo la primera vez, puede tardar un par de minutos)...");
  const inst = spawnSync("npm", ["install", "--save-dev", "--no-package-lock", "sharp"], {
    cwd: REPO,
    stdio: "inherit",
    shell: true,
  });
  sharp = inst.status === 0 ? cargarSharp() : null;
  if (!sharp) parar("No he podido instalar la herramienta de miniaturas. Copia el mensaje de arriba y pásaselo a Claude.");
}

async function crearMiniatura(desde, hacia) {
  fs.mkdirSync(path.dirname(hacia), { recursive: true });
  let img = sharp(desde).rotate().resize({ width: ANCHO_MINIATURA, withoutEnlargement: true });
  const ext = path.extname(desde).toLowerCase();
  if (ext === ".png") img = img.png({ compressionLevel: 9 });
  else if (ext === ".webp") img = img.webp({ quality: 80 });
  else img = img.jpeg({ quality: 80, mozjpeg: true });
  await img.toFile(hacia);
}


// Fotos que están en la web pero ya no están en tu carpeta local (borradas o movidas de sección)
const sobran = [];
for (const carpeta of Object.keys(SECCIONES)) {
  const origen = path.join(ORIGEN, carpeta);
  const destino = path.join(REPO, "public", carpeta);
  if (!fs.existsSync(origen) || !fs.existsSync(destino)) continue;
  const locales = new Set(fs.readdirSync(origen).filter(esImagen).map((n) => n.toLowerCase()));
  for (const nombre of fs.readdirSync(destino).filter(esImagen)) {
    if (!locales.has(nombre.toLowerCase())) sobran.push(path.join(destino, nombre));
  }
}

if (sobran.length > 0) {
  console.log("\n🗑️  Estas fotos están en la web pero ya no están en tus carpetas:");
  sobran.forEach((r) => console.log("  - " + path.relative(path.join(REPO, "public"), r)));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const respuesta = (await rl.question("\n¿Quitarlas de la web? (s = sí, n = no): ")).trim().toLowerCase();
  rl.close();
  if (respuesta === "s") {
    sobran.forEach((r) => {
      fs.unlinkSync(r);
      const miniatura = path.join(path.dirname(r), "thumbs", path.basename(r));
      if (fs.existsSync(miniatura)) fs.unlinkSync(miniatura);
    });
    console.log("Quitadas.");
  } else {
    console.log("Las dejo como están.");
  }
}

let copiadas = 0;
const resumen = [];

for (const [carpeta, pagina] of Object.entries(SECCIONES)) {
  const origen = path.join(ORIGEN, carpeta);
  if (!fs.existsSync(origen)) {
    console.log(`(salto ${carpeta}: no existe en ${ORIGEN})`);
    continue;
  }

  const destino = path.join(REPO, "public", carpeta);
  fs.mkdirSync(destino, { recursive: true });

  // 1) copiar fotos nuevas o modificadas
  for (const nombre of fs.readdirSync(origen).filter(esImagen)) {
    const desde = path.join(origen, nombre);
    const hacia = path.join(destino, nombre);
    const mb = fs.statSync(desde).size / 1024 / 1024;
    if (mb > AVISO_MB)
      console.log(`⚠️  ${carpeta}/${nombre} pesa ${mb.toFixed(1)} MB: conviene comprimirla (la web irá más lenta).`);

    const existe = fs.existsSync(hacia);
    if (!existe || fs.statSync(hacia).size !== fs.statSync(desde).size) {
      fs.copyFileSync(desde, hacia);
      copiadas++;
      console.log(`  + ${carpeta}/${nombre}`);
    }
  }

  // 1b) crear miniaturas que falten o estén desactualizadas
  for (const nombre of fs.readdirSync(destino).filter(esImagen)) {
    const grande = path.join(destino, nombre);
    const mini = path.join(destino, "thumbs", nombre);
    if (!fs.existsSync(mini) || fs.statSync(mini).mtimeMs < fs.statSync(grande).mtimeMs) {
      try {
        await crearMiniatura(grande, mini);
        console.log(`  · miniatura ${carpeta}/${nombre}`);
      } catch (e) {
        console.log(`⚠️  No he podido crear la miniatura de ${carpeta}/${nombre}: ${e.message}`);
      }
    }
  }

  // 2) reescribir la lista de fotos de la página
  const fotos = fs.readdirSync(destino).filter(esImagen).sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
  const lista = fotos.map((f) => `  "${BASE_URL}/${carpeta}/${encodeURIComponent(f)}",`).join("\n");
  const bloque = fotos.length ? `const images = [\n${lista}\n];` : "const images = [];";

  const rutaPagina = path.join(REPO, "src", "app", "pages", pagina);
  const codigo = fs.readFileSync(rutaPagina, "utf8");
  if (!/const images = \[[\s\S]*?\];/.test(codigo)) parar(`No encuentro la lista de fotos en ${pagina}`);
  fs.writeFileSync(rutaPagina, codigo.replace(/const images = \[[\s\S]*?\];/, () => bloque));

  resumen.push(`${carpeta}: ${fotos.length} fotos`);
}

console.log("\n📋 Resumen");
resumen.forEach((l) => console.log("  " + l));

function subir() {
  console.log("\n⬆️  Subiendo a GitHub (con fotos grandes puede tardar un rato, no cierres la ventana)...");
  const push = git(["push"], { stdio: "inherit", encoding: undefined });
  if (push.status !== 0) parar("No he podido subir a GitHub. Copia el mensaje de arriba y pásaselo a Claude.");
  console.log("\n🎉 Subido. En 1-2 minutos estará en https://jaumephoto.github.io/jaumephoto-portfolio/");
  process.exit(0);
}

if (git(["status", "--porcelain"]).stdout.trim() === "") {
  // Sin cambios nuevos, pero puede haber cambios ya guardados que no se subieron
  const pendientes = parseInt(git(["rev-list", "--count", "@{u}..HEAD"]).stdout.trim() || "0", 10);
  if (pendientes > 0 && !SIN_PUSH) {
    console.log(`\nHay ${pendientes} cambio(s) guardados que aún no están en GitHub.`);
    subir();
  }
  console.log("\n✅ No hay nada nuevo que subir.");
  process.exit(0);
}

if (SIN_PUSH) {
  console.log("\n(modo prueba: no se ha hecho commit ni push)");
  process.exit(0);
}

const fecha = new Date().toISOString().slice(0, 16).replace("T", " ");
git(["add", "-A"], { stdio: "inherit", encoding: undefined });
const commit = git(["commit", "-m", `Nuevas fotos ${fecha}`], { stdio: "inherit", encoding: undefined });
if (commit.status !== 0) parar("No he podido hacer el commit.");
subir();
