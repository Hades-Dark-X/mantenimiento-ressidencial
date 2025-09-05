"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componentes de las secciones
import Inicio from "@/components/Inicio";
import Proyectos from "@/components/Proyectos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import SobreNosotros from "@/components/SobreNosotros";

// Datos de las secciones
import { sectionData } from "@/data/sectionData";

// Mapeo de nombres de sección a componentes
const sectionComponents = {
  home: Inicio,
  proyectos: Proyectos,
  servicios: Servicios,
  cotizaciones: Contacto,
  "sobre-nosotros": SobreNosotros,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const CurrentSectionComponent = sectionComponents[activeSection];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar
        onSectionChange={setActiveSection}
        activeSection={activeSection}
      />
      <main className="container flex-grow py-8">
        <AnimatePresence mode="wait">
          {CurrentSectionComponent && (
            <CurrentSectionComponent
              sectionData={sectionData}
              activeSection={activeSection}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
