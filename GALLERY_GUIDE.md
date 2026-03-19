# Guía de Actualización de Galería

## Sistema Masonry Dinámico - 100% Autogestionable

Este portafolio utiliza un sistema de galería tipo Pinterest que se adapta automáticamente a cualquier imagen que subas, **manteniendo su formato original (vertical, horizontal, cuadrado) sin recortes**.

---

## 🖼️ Cómo Actualizar las Imágenes

### Opción 1: Actualizar las URLs (Recomendado)

Ve al archivo de la categoría que quieres actualizar y simplemente cambia las URLs en el array `images`:

**Ubicación de los archivos:**
- Street Photography: `/src/app/pages/StreetPhotography.tsx`
- Concerts: `/src/app/pages/Concerts.tsx`
- Weddings & Events: `/src/app/pages/WeddingsEvents.tsx`
- Portrait Project: `/src/app/pages/PortraitProject.tsx`

**Ejemplo:**
```typescript
const images = [
  "https://tuservidor.com/foto1.jpg",
  "https://tuservidor.com/foto2.jpg",
  "https://tuservidor.com/foto3.jpg",
  // Añade o elimina URLs según necesites
];
```

### Opción 2: Modificar directamente el HTML (Modo Avanzado)

Si prefieres editar HTML directamente, puedes hacerlo en el componente `GalleryGrid.tsx`.

El sistema usa **Event Delegation**, por lo que cualquier imagen que añadas manualmente dentro del contenedor `.gallery-grid` funcionará automáticamente con el lightbox.

---

## ⚙️ Características del Sistema

### ✅ Automático
- **Aspect Ratio Original**: Las imágenes mantienen su formato sin recortes (vertical/horizontal)
- **Masonry Dinámico**: Layout tipo Pinterest que se adapta a cualquier tamaño de imagen
- **Gap Constante**: 1.5rem de separación entre todas las imágenes

### 📱 Responsive
- **Mobile** (hasta 767px): 1 columna
- **Tablet** (768px - 1023px): 2 columnas  
- **Desktop** (1024px+): 3 columnas

### 🔒 Protección
- Desactivado el menú contextual (clic derecho)
- Desactivado el arrastre de imágenes
- Desactivada la selección de texto/imágenes
- Protección contra guardado mediante atajos de teclado

---

## 🎨 Personalización

### Cambiar Número de Columnas

Edita las media queries en `/src/app/components/GalleryGrid.css`:

```css
@media (min-width: 1024px) {
  .gallery-grid {
    column-count: 4; /* 4 columnas en desktop */
  }
}
```

### Cambiar el Espaciado (Gap)

```css
.gallery-grid {
  column-gap: 2rem; /* Espacio horizontal entre columnas */
}

.gallery-item {
  margin-bottom: 2rem; /* Espacio vertical entre imágenes */
}
```

---

## 🚀 Ventajas del Sistema

1. **Sin recortes** - Las imágenes mantienen su aspect ratio original
2. **Layout fluido** - Estilo Pinterest/Masonry que se adapta automáticamente
3. **No necesitas tocar JavaScript** - Solo cambias URLs
4. **Event Delegation** - Añade/elimina imágenes sin romper la funcionalidad
5. **CSS Columns puro** - Sin dependencias de librerías externas
6. **Mantenimiento simple** - Cambios rápidos y seguros

---

## 📝 Ejemplo Completo de Actualización

```typescript
// /src/app/pages/StreetPhotography.tsx

import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://mi-servidor.com/calle-vertical.jpg",    // Imagen vertical
  "https://mi-servidor.com/panoramica.jpg",        // Imagen horizontal
  "https://mi-servidor.com/cuadrada.jpg",          // Imagen cuadrada
  "https://mi-servidor.com/retrato-alto.jpg",      // Otra vertical
  "https://mi-servidor.com/paisaje-ancho.jpg",     // Otra horizontal
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

**¡Y listo!** El sistema reorganiza automáticamente las imágenes en un mosaico fluido, sin importar si son verticales, horizontales o cuadradas.

---

## 🧹 Limpieza (Opcional)

El sistema anterior usaba la librería `react-responsive-masonry`. Ahora que usamos CSS Columns puro, puedes eliminar esa dependencia si lo deseas:

**Nota:** No es necesario hacer esto, pero reduce el tamaño del bundle si no la necesitas.

1. Abre `/package.json`
2. Elimina la línea: `"react-responsive-masonry": "2.7.1",`
3. Guarda el archivo

---

## 🛠️ Arquitectura Técnica

Para desarrolladores que quieran entender cómo funciona:

### Event Delegation
```javascript
// El contenedor padre escucha todos los clicks
gallery.addEventListener('click', handleClick);

// Detecta automáticamente si el click fue en una imagen
if (target.tagName === 'IMG') {
  const imageSrc = target.getAttribute('src');
  setSelectedImage(imageSrc);
}
```

### CSS Multi-column Layout (Masonry)
```css
/* Desktop: 3 columnas tipo Pinterest */
@media (min-width: 1024px) {
  .gallery-grid {
    column-count: 3;
    column-gap: 1.5rem;
  }
}

.gallery-item {
  break-inside: avoid; /* Evita que las imágenes se rompan entre columnas */
  margin-bottom: 1.5rem; /* Gap vertical */
}
```

### Aspect Ratio Original
```css
.gallery-image {
  width: 100%;
  height: auto; /* Mantiene proporciones originales */
  display: block;
}
```

Esta combinación crea un efecto Masonry fluido donde:
- Las imágenes verticales ocupan más altura
- Las imágenes horizontales ocupan menos altura
- Todo se distribuye automáticamente en columnas balanceadas
- **Sin recortes, sin deformaciones**