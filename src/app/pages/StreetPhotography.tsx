import { GalleryGrid } from "../components/GalleryGrid";

import streetimage1 from "../assets/images/street/miau.png";

const images = [
  "/jaumephoto-portfolio/StreetPhotography/IMG_2574.jpg",
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