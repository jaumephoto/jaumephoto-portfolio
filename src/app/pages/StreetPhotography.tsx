import { GalleryGrid } from "../components/GalleryGrid";

import streetimage1 from "../assets/images/street/miau.png";

const images = [
  "/StreetPhotography/abrazo_con_historia.jpg",
  "/StreetPhotography/Betanzos_festa-1-8.jpg",
  "/StreetPhotography/cabezones.jpg",
  "/StreetPhotography/cachorro_de_calle.jpg",
  "/StreetPhotography/carrusel.jpg",
  "/StreetPhotography/chica_contra_ola.jpg",
  "/StreetPhotography/diversion_sin_limites.jpg",
  "/StreetPhotography/entre_gigantes.jpg",
  "/StreetPhotography/fiesta_mayor.jpg",
  "/StreetPhotography/gente_de_betanzos.jpg",
  "/StreetPhotography/gigantes.jpg",
  "/StreetPhotography/hombre_con_bandera.jpg",
  "/StreetPhotography/juego_de_la_rana.jpg",
  "/StreetPhotography/la_pareja_azechada.jpg",
  "/StreetPhotography/las_yayas_de_la_ventana.jpg",
  "/StreetPhotography/los_balcones.jpg",
  "/StreetPhotography/musicos_betanzos.jpg",
  "/StreetPhotography/pasos_de_princesa.jpg",
  "/StreetPhotography/protestas_octubre_bcn.jpg",
  "/StreetPhotography/te_veo.jpg",
  "/StreetPhotography/vigilante.jpg",
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