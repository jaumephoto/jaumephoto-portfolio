import { useState } from "react";

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export function ProtectedImage({ src, alt, className, onClick }: ProtectedImageProps) {
  const [, setError] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      className="relative select-none"
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onError={handleError}
        draggable={false}
        loading="lazy"
        onClick={onClick}
        style={{ 
          pointerEvents: onClick ? 'auto' : 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      />
      {/* Invisible overlay to prevent direct image interaction */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onClick={onClick}
        style={{ pointerEvents: onClick ? 'auto' : 'none' }}
      />
    </div>
  );
}
