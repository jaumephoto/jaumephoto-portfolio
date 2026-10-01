import { GalleryGrid } from "../components/GalleryGrid";

import streetimage1 from "../assets/images/street/miau.png";

const images = [
  "/jaumephoto-portfolio/StreetPhotography/cachorro_de_calle.jpg",
  "/jaumephoto-portfolio/StreetPhotography/chica_contra_ola.jpg",
  "/jaumephoto-portfolio/StreetPhotography/diversion_sin_limites.jpg",
  "/jaumephoto-portfolio/StreetPhotography/entre_gigantes.jpg",
  "/jaumephoto-portfolio/StreetPhotography/hombre_con_bandera.jpg",
  "/jaumephoto-portfolio/StreetPhotography/juego_de_la_rana.jpg",
  "/jaumephoto-portfolio/StreetPhotography/la_pareja_azechada.jpg",
  "/jaumephoto-portfolio/StreetPhotography/las_yayas_de_la_ventana.jpg",
  "/jaumephoto-portfolio/StreetPhotography/los_balcones.jpg",
  "/jaumephoto-portfolio/StreetPhotography/musicos_betanzos.jpg",
  "/jaumephoto-portfolio/StreetPhotography/pasos_de_princesa.jpg",
  "/jaumephoto-portfolio/StreetPhotography/protestas_octubre_bcn.jpg",
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