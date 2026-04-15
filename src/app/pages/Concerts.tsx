import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "/jaumephoto-portfolio/Concerts/15octubrebcn.jpg",
  "/jaumephoto-portfolio/Concerts/20190710-IMG_8740.jpg",
  "/jaumephoto-portfolio/Concerts/20190710-IMG_8755.jpg",
  "/jaumephoto-portfolio/Concerts/20190710-IMG_8791.jpg",
  "/jaumephoto-portfolio/Concerts/goat.jpg",
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