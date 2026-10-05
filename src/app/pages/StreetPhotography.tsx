import { GalleryGrid } from "../components/GalleryGrid";

import streetimage1 from "../assets/images/street/miau.png";

const images = [
  "/jaumephoto-portfolio/StreetPhotography/abrazo_con_historia.jpg",
  "/jaumephoto-portfolio/StreetPhotography/cabezones.jpg",
  "/jaumephoto-portfolio/StreetPhotography/cachorro_de_calle.jpg",
  "/jaumephoto-portfolio/StreetPhotography/carrusel.jpg",
  "/jaumephoto-portfolio/StreetPhotography/chica_contra_ola.jpg",
  "/jaumephoto-portfolio/StreetPhotography/diversion_sin_limites.jpg",
  "/jaumephoto-portfolio/StreetPhotography/entre_gigantes.jpg",
  "/jaumephoto-portfolio/StreetPhotography/fiesta_mayor.jpg",
  "/jaumephoto-portfolio/StreetPhotography/gente_de_betanzos.jpg",
  "/jaumephoto-portfolio/StreetPhotography/gigantes.jpg",
  "/jaumephoto-portfolio/StreetPhotography/hombre_con_bandera.jpg",
  "/jaumephoto-portfolio/StreetPhotography/juego_de_la_rana.jpg",
  "/jaumephoto-portfolio/StreetPhotography/la_pareja_azechada.jpg",
  "/jaumephoto-portfolio/StreetPhotography/las_yayas_de_la_ventana.jpg",
  "/jaumephoto-portfolio/StreetPhotography/los_balcones.jpg",
  "/jaumephoto-portfolio/StreetPhotography/musicos_betanzos.jpg",
  "/jaumephoto-portfolio/StreetPhotography/pasos_de_princesa.jpg",
  "/jaumephoto-portfolio/StreetPhotography/protestas_octubre_bcn.jpg",
  "/jaumephoto-portfolio/StreetPhotography/te_veo.jpg",
  "/jaumephoto-portfolio/StreetPhotography/vigilante.jpg",
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