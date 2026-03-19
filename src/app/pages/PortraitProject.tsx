import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://images.unsplash.com/photo-1621012649112-d1724740b0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHZlcnRpY2FsJTIwZmFjZSUyMGNsb3NlfGVufDF8fHx8MTc3Mzg1NDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1742357482508-4532b0b4bec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGVudmlyb25tZW50YWwlMjB3aWRlJTIwY29udGV4dHxlbnwxfHx8fDE3NzM4NTQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1621273898131-70fc7f767ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwcG9ydHJhaXQlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzM4MDE1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1760819019982-bd9d9c9a92ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodCUyMG91dGRvb3J8ZW58MXx8fHwxNzczODU0MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHN0dWRpbyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3Mzg1NDE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1757700314602-d0971e793203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kaWQlMjBwb3J0cmFpdCUyMGxpZmVzdHlsZSUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzM4NTQxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1724713845952-43c77121cbc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGVtb3Rpb25hbCUyMGV4cHJlc3Npb24lMjBtb29kfGVufDF8fHx8MTc3Mzg1NDE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

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