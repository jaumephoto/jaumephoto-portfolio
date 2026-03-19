import { GalleryGrid } from "../components/GalleryGrid";

const images = [
  "https://images.unsplash.com/photo-1772241824154-ce6e7c985ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXQlMjBlbGVnYW50fGVufDF8fHx8MTc3Mzc1ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1771315021882-f881c02c6b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGFuY2UlMjBjZWxlYnJhdGlvbiUyMG1vbWVudHxlbnwxfHx8fDE3NzM4NTQxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1605644656444-ff452c73e2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRlY29yYXRpb24lMjBmbG93ZXJzJTIwdmVudWV8ZW58MXx8fHwxNzczODU0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1712709975427-bd1c70c40691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZ3Vlc3RzJTIwaGFwcGluZXNzJTIwY2FuZGlkfGVufDF8fHx8MTc3Mzg1NDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1760669348218-20c45a264231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwbG92ZSUyMHJvbWFudGljfGVufDF8fHx8MTc3Mzg1NDE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1765615202714-e9c809896e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZXZlbnQlMjBwZW9wbGV8ZW58MXx8fHwxNzczODU0MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export function WeddingsEvents() {
  return (
    <div>
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-3xl">Weddings & Events</h1>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}