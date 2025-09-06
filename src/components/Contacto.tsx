"use client";

import { motion } from "framer-motion";
import { IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";

// Variantes para la animación escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contacto() {
  const tuNumeroWhatsApp = "521234567890";
  const tuEmail = "cotizaciones@tuempresa.com";
  const mensajeWhatsApp =
    "Hola, me gustaría resolver una duda sobre sus servicios.";

  return (
    <motion.section
      key="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Ponte en Contacto
        </h2>
        <p className="text-lg md:text-xl text-gris-1 dark:text-dorado-3/80 max-w-3xl mx-auto">
          Elige la opción que mejor se adapte a tus necesidades.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {/* Tarjeta de Cotizaciones por Email */}
        <motion.div
          variants={cardVariants}
          className="bg-background p-8 rounded-xl shadow-lg border border-dorado-3/20 flex flex-col items-center text-center"
        >
          {/* icono de Email */}
          <IoMailOutline className="w-12 h-12 mb-4 text-gris-azulado dark:text-dorado-2" />
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Cotizaciones por Email
          </h3>
          <p className="text-gris-1 dark:text-dorado-3/80 mb-6">
            Para proyectos o solicitudes detalladas, envíanos un correo. Te
            responderemos a la brevedad.
          </p>
          <a
            href={`mailto:${tuEmail}`}
            className="w-full text-center bg-gris-azulado dark:bg-dorado-2 dark:text-negro-custom font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Enviar Email
          </a>
        </motion.div>

        {/* Tarjeta de Dudas por WhatsApp */}
        <motion.div
          variants={cardVariants}
          className="bg-background p-8 rounded-xl shadow-lg border border-dorado-3/20 flex flex-col items-center text-center"
        >
          {/* icono de WhatsApp */}
          <IoLogoWhatsapp className="w-12 h-12 mb-4 text-gris-1 dark:text-dorado-3" />
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Dudas por WhatsApp
          </h3>
          <p className="text-gris-1 dark:text-dorado-3/80 mb-6">
            Para preguntas rápidas o consultas generales, contáctanos
            directamente por WhatsApp.
          </p>
          <a
            href={`https://wa.me/${tuNumeroWhatsApp}?text=${encodeURIComponent(
              mensajeWhatsApp
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-gris-1 dark:bg-dorado-3 dark:text-negro-custom font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Chatear por WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
