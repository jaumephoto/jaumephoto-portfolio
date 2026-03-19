import { GalleryGrid } from "../components/GalleryGrid";

import streetimage1 from "../assets/images/street/miau.png";

const images = [
  streetimage1,
  "https://images.unsplash.com/photo-1592840264892-76e8d7f0c7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjB3aWRlJTIwcGFub3JhbWljfGVufDF8fHx8MTc3Mzg1NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1543985601-47850b159d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHN0cmVldCUyMGNhbmRpZCUyMHBlb3BsZXxlbnwxfHx8fDE3NzM4NTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1692088171481-f96e5dbcd809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjB2ZXJ0aWNhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3Mzg1NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1595937551199-3f956a081faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbGFuZHNjYXBlJTIwd2lkZXxlbnwxfHx8fDE3NzM4NTQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1613894811137-b5ee44ba3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdyYWZmaXRpJTIwd2FsbCUyMGFydHxlbnwxfHx8fDE3NzM4NTQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1767800652452-9a71340175dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYWxsZXklMjBuYXJyb3clMjB2ZXJ0aWNhbHxlbnwxfHx8fDE3NzM4NTQwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1607144058159-7b5034c072ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMGJpY3ljbGUlMjBob3Jpem9udGFsfGVufDF8fHx8MTc3Mzg1NDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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