"use client";

import { useState } from "react";
import Link from "next/link";
// CAMBIO: Importamos los iconos de hamburguesa y de cierre
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar({ onSectionChange, activeSection }) {
  // CAMBIO: Añadimos un estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Servicios", id: "servicios" },
    { name: "Cotizaciones", id: "cotizaciones" },
    { name: "Sobre nosotros", id: "sobre-nosotros" },
  ];

  // Función para manejar el clic en un enlace del menú móvil
  const handleMobileLinkClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false); // Cierra el menú después de hacer clic
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold"
          style={{ color: "var(--foreground)" }}
        >
          <Link href="#home" onClick={() => handleMobileLinkClick("home")}>
            Mantenimiento Residencial
          </Link>
        </div>

        {/* CAMBIO: Menú para pantallas grandes (Desktop) */}
        <ul className="hidden md:flex justify-end space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={() => onSectionChange(item.id)}
                className="transition-colors hover:font-bold"
                style={{
                  color: "var(--foreground)",
                  fontWeight: activeSection === item.id ? "bold" : "normal",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CAMBIO: Botón de Hamburguesa para pantallas pequeñas (Móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <HiX className="h-8 w-8" style={{ color: "var(--foreground)" }} />
            ) : (
              <HiOutlineMenuAlt3
                className="h-8 w-8"
                style={{ color: "var(--foreground)" }}
              />
            )}
          </button>
        </div>
      </div>

      {/* CAMBIO: Menú desplegable para Móvil */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--background)" }}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={() => handleMobileLinkClick(item.id)}
                className="text-2xl transition-colors hover:font-bold"
                style={{
                  color: "var(--foreground)",
                  fontWeight: activeSection === item.id ? "bold" : "normal",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
