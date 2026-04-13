import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://images.unsplash.com/photo-1771942690809-49605caf6ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjB2ZXJ0aWNhbHxlbnwxfHx8fDE3NzM4NTQxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1678518713075-64c2c287a238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjcm93ZCUyMHBhbm9yYW1pY3xlbnwxfHx8fDE3NzM4NTQxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1631909068619-1a12b9852542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1lciUyMGd1aXRhciUyMGNsb3NlfGVufDF8fHx8MTc3Mzg1NDExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1651313533623-e8fe0c1ee06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNvbmNlcnQlMjBhdWRpZW5jZSUyMHdpZGV8ZW58MXx8fHwxNzczODU0MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1764084444432-36fec47faf2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY29uY2VydCUyMGVuZXJneSUyMGNyb3dkfGVufDF8fHx8MTc3Mzg1NDExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1669181339677-0f646762be03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBtaWNyb3Bob25lJTIwdmVydGljYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4NTQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1769755014186-471bb4d6a8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtcyUyMGRydW1tZXIlMjBjb25jZXJ0JTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczODU0MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "/jaumephoto-portfolio/Concerts/20230818_210439.jpg",
  "/jaumephoto-portfolio/Concerts/3ad6cee35715d5136472d75fe5d43499.jpg",
  "/jaumephoto-portfolio/Concerts/0c9b9bf1d598e0e381427169bb1ce76e.jpg",
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