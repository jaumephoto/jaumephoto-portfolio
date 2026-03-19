import { useState, useRef, useEffect } from "react";
import { Lightbox } from "./Lightbox";
import "./GalleryGrid.css";

interface GalleryGridProps {
  images: string[];
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
        const imageSrc = target.getAttribute('src');
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
                src={image}
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