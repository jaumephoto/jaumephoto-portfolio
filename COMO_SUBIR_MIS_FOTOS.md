# 📸 Cómo Subir Tus Propias Fotos al Portafolio

Esta guía te explica **paso a paso** cómo reemplazar las imágenes de ejemplo con tus propias fotografías.

---

## 🎯 IMPORTANTE: Dos Métodos Disponibles

Tienes **2 opciones** para mostrar tus fotos:

### ✅ Opción 1: URLs Externas (RECOMENDADO - Más Fácil)
Sube tus fotos a un servicio en la nube y usa las URLs.

### ✅ Opción 2: Archivos Locales
Guarda las fotos en el proyecto y haz import.

---

## 🌐 OPCIÓN 1: URLs Externas (Recomendado)

Esta es la forma **MÁS FÁCIL** y rápida de actualizar tus fotos.

### Paso 1: Sube tus fotos a un servicio de hosting

Puedes usar cualquiera de estos servicios **GRATUITOS**:

**Servicios Recomendados:**
- **Imgur** (https://imgur.com) - Muy fácil, sin registro necesario
- **Cloudinary** (https://cloudinary.com) - Profesional, gratis hasta 25GB
- **ImgBB** (https://imgbb.com) - Simple y directo
- **Google Drive** - Si ya usas Google (requiere hacer públicos los archivos)
- **Dropbox** - Si ya tienes cuenta

### Paso 2: Obtén la URL directa de cada imagen

**Ejemplo con Imgur:**
1. Ve a https://imgur.com
2. Haz clic en "New post"
3. Arrastra tu foto
4. Una vez subida, haz clic derecho en la imagen
5. Selecciona "Copy image address" o "Copiar dirección de imagen"
6. La URL se verá algo así: `https://i.imgur.com/AbC123.jpg`

**IMPORTANTE:** Asegúrate de que la URL termine en `.jpg`, `.jpeg`, `.png`, o `.webp`

### Paso 3: Actualiza el código

Abre el archivo de la categoría que quieres actualizar:

**Ubicación de los archivos:**
- Street Photography: `/src/app/pages/StreetPhotography.tsx`
- Concerts: `/src/app/pages/Concerts.tsx`
- Weddings & Events: `/src/app/pages/WeddingsEvents.tsx`
- Portrait Project: `/src/app/pages/PortraitProject.tsx`

**Ejemplo práctico:**

```typescript
// /src/app/pages/StreetPhotography.tsx

import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://i.imgur.com/MiFoto1.jpg",
  "https://i.imgur.com/MiFoto2.jpg",
  "https://i.imgur.com/MiFoto3.jpg",
  "https://i.imgur.com/MiFoto4.jpg",
  // Añade todas las URLs que quieras
];

export function StreetPhotography() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Street Photography</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}
```

### ✅ Ventajas de este método:
- ✨ Súper fácil de actualizar
- 🚀 No afecta el tamaño del proyecto
- 💾 Tus fotos están respaldadas en la nube
- 🔄 Puedes cambiar fotos sin recompilar

---

## 💻 OPCIÓN 2: Archivos Locales (Avanzado)

Si prefieres tener las imágenes dentro del proyecto.

### Paso 1: Crea la carpeta de imágenes (si no existe)

La carpeta ya está creada aquí: `/src/app/assets/images/`

### Paso 2: Organiza tus fotos por categoría

Crea subcarpetas para mantener todo ordenado:

```
/src/app/assets/images/
├── street/
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── foto3.jpg
├── concerts/
│   ├── concierto1.jpg
│   ├── concierto2.jpg
│   └── concierto3.jpg
├── weddings/
│   ├── boda1.jpg
│   └── boda2.jpg
└── portraits/
    ├── retrato1.jpg
    └── retrato2.jpg
```

### Paso 3: Importa las imágenes en el código

**Ejemplo completo con archivos locales:**

```typescript
// /src/app/pages/StreetPhotography.tsx

import { GalleryGrid } from "../components/GalleryGrid";

// Importa cada imagen
import foto1 from "../assets/images/street/foto1.jpg";
import foto2 from "../assets/images/street/foto2.jpg";
import foto3 from "../assets/images/street/foto3.jpg";
import foto4 from "../assets/images/street/foto4.jpg";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
];

export function StreetPhotography() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Street Photography</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}
```

### ⚠️ Desventajas de este método:
- 📦 Aumenta el tamaño del bundle
- 🐌 Puede hacer la carga más lenta con muchas imágenes
- 🔧 Requiere más conocimiento técnico

---

## 🎨 Consejos para Mejores Resultados

### Optimización de Imágenes

**Antes de subir tus fotos:**

1. **Tamaño recomendado:**
   - Ancho máximo: 1920px (Full HD)
   - Para web, no necesitas más resolución

2. **Peso del archivo:**
   - Comprime tus fotos a 100-300 KB por imagen
   - Usa herramientas como:
     - TinyPNG (https://tinypng.com)
     - Squoosh (https://squoosh.app)
     - Photoshop "Guardar para web"

3. **Formato:**
   - **JPG/JPEG**: Para fotos normales (mejor compresión)
   - **PNG**: Si necesitas transparencia
   - **WebP**: Moderna y con mejor compresión (no compatible con todos los navegadores antiguos)

### Nombres de Archivos

**✅ Buenos nombres:**
```
calle-barcelona-01.jpg
concierto-rock-2024.jpg
boda-maria-juan.jpg
```

**❌ Malos nombres:**
```
IMG_1234.jpg
foto (1).jpg
DSC_0001.jpg
```

---

## 🚀 Ejemplo Completo: Actualizar Street Photography

### Si usas URLs Externas:

```typescript
// /src/app/pages/StreetPhotography.tsx

import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://i.imgur.com/calle1.jpg",
  "https://i.imgur.com/calle2.jpg",
  "https://i.imgur.com/calle3.jpg",
  "https://i.imgur.com/calle4.jpg",
  "https://i.imgur.com/calle5.jpg",
  "https://i.imgur.com/calle6.jpg",
];

export function StreetPhotography() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Street Photography</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}
```

---

## ❓ Solución de Problemas

### Problema: Las imágenes no se muestran

**Solución 1:** Verifica que la URL sea correcta
- Abre la URL en tu navegador
- Si no se muestra, la URL está mal

**Solución 2:** Verifica que la URL termine en una extensión
- ✅ Correcto: `https://ejemplo.com/foto.jpg`
- ❌ Incorrecto: `https://ejemplo.com/foto`

**Solución 3:** Algunos servicios bloquean "hotlinking"
- Usa Imgur, ImgBB o Cloudinary (permiten hotlinking)

### Problema: El código da error

**Solución:** Verifica la sintaxis
```typescript
// ✅ Correcto
const images = [
  "url1.jpg",
  "url2.jpg",
  "url3.jpg",  // Última coma es opcional
];

// ❌ Incorrecto - falta coma
const images = [
  "url1.jpg"
  "url2.jpg"
];

// ❌ Incorrecto - falta comilla de cierre
const images = [
  "url1.jpg,
  "url2.jpg",
];
```

---

## 📋 Resumen Rápido

**Para actualizar rápido (5 minutos):**

1. Sube tus fotos a Imgur.com
2. Copia las URLs de cada imagen
3. Abre `/src/app/pages/StreetPhotography.tsx` (o la categoría que quieras)
4. Reemplaza las URLs en el array `images`
5. Guarda el archivo
6. ¡Listo! 🎉

**Para las otras categorías, repite el proceso en:**
- `/src/app/pages/Concerts.tsx`
- `/src/app/pages/WeddingsEvents.tsx`
- `/src/app/pages/PortraitProject.tsx`

---

## 🎯 Ejemplo Visual

**Antes:**
```typescript
const images = [
  "https://images.unsplash.com/photo-ejemplo1...",
  "https://images.unsplash.com/photo-ejemplo2...",
];
```

**Después (con tus fotos):**
```typescript
const images = [
  "https://i.imgur.com/TuFoto1.jpg",
  "https://i.imgur.com/TuFoto2.jpg",
];
```

---

¿Necesitas ayuda? Dime qué método prefieres usar y te ayudo con el proceso específico! 🚀
