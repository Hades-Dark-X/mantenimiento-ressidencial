export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// Información de tus proyectos
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Remodelación de Cocina",
    description:
      "Instalación de gabinetes, encimeras de granito y nueva iluminación.",
    imageUrl: "/images/muestra.webp",
    category: "Remodelación",
  },
  {
    id: 2,
    title: "Instalación Eléctrica Residencial",
    description:
      "Cableado completo para una nueva construcción, incluyendo panel de control.",
    imageUrl: "/images/muestra.webp",
    category: "Electricidad",
  },
  {
    id: 3,
    title: "Reparación de Plomería",
    description:
      "Solución de fugas y cambio de tuberías en sistema de baño principal.",
    imageUrl: "/images/muestra.webp",
    category: "Plomería",
  },
  {
    id: 4,
    title: "Diseño de Jardín Vertical",
    description:
      "Creación e instalación de un jardín vertical automatizado para patio.",
    imageUrl: "/images/muestra.webp",
    category: "Jardinería",
  },
];
