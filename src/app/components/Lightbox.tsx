import { useEffect } from "react";
import { X } from "lucide-react";
import "./Lightbox.css";

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

export function Lightbox({ imageSrc, onClose }: LightboxProps) {
  useEffect(() => {
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent common save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Cmd+S (save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+S, Cmd+Shift+S (save as)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none"
      onClick={onClose}
      onContextMenu={handleContextMenu}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Image container with protection */}
      <div 
        className="relative flex items-center justify-center w-full h-full"
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
      >
        <img
          src={imageSrc}
          alt="Full resolution"
          className="lightbox-image"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          draggable={false}
          style={{ 
            maxWidth: 'calc(100vw - 2rem)',
            maxHeight: 'calc(100vh - 2rem)',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
}