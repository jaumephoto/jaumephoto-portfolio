import { GalleryGrid } from "../components/GalleryGrid";

const images = [];

export function PortraitProject() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Portrait Project</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}