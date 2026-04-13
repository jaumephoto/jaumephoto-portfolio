import { GalleryGrid } from "../components/GalleryGrid";

const images = [

];

export function Concerts() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Concerts</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}