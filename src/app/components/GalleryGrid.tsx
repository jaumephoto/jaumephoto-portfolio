import { useState, useRef, useEffect } from "react";
import { Lightbox } from "./Lightbox";
import "./GalleryGrid.css";

interface GalleryGridProps {
  images: string[];
}

// La miniatura vive en la subcarpeta "thumbs" junto a la foto grande
function thumbUrl(src: string) {
  const i = src.lastIndexOf("/");
  return i === -1 ? src : `${src.slice(0, i)}/thumbs/${src.slice(i + 1)}`;
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    // Event delegation: handle clicks on any image within the gallery
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if clicked element is an image
      if (target.tagName === 'IMG') {
        // La galería muestra la miniatura; el lightbox abre la foto grande
        const imageSrc = target.getAttribute('data-full') || target.getAttribute('src');
        if (imageSrc) {
          setSelectedImage(imageSrc);
        }
      }
    };

    gallery.addEventListener('click', handleClick);

    return () => {
      gallery.removeEventListener('click', handleClick);
    };
  }, []);

  // Prevent context menu and drag on gallery
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <div className="px-6 py-8">
        <div 
          ref={galleryRef}
          className="gallery-grid"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        >
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={thumbUrl(image)}
                data-full={image}
                onError={(e) => {
                  // Si aún no existe la miniatura, usa la foto grande
                  if (e.currentTarget.getAttribute("src") !== image) {
                    e.currentTarget.setAttribute("src", image);
                  }
                }}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox 
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
}