"use client";

import { motion } from "framer-motion";

// Iconos SVG (ahora usan `currentColor` para heredar el color del padre)
const EmailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-12 h-12 mb-4 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-12 h-12 mb-4 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.82-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79.97s-.3.17-.56 0c-.25-.12-1.07-.39-2.04-1.26s-1.63-1.8-1.82-2.12c-.19-.32-.02-.48.1-.63.11-.13.25-.34.37-.45.12-.11.17-.2.25-.32.08-.13.04-.25 0-.37s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42h-.48c-.15 0-.37.04-.56.25-.19.2-.72.7-.72 1.7s.74 1.97.84 2.12c.1.15 1.47 2.24 3.55 3.13.5.22.9.36 1.21.45.54.17.95.15 1.3.1.39-.04 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.2-.15-.43-.27z" />
  </svg>
);

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
          <EmailIcon className="text-gris-azulado dark:text-dorado-2" />
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Cotizaciones por Email
          </h3>
          <p className="text-gris-1 dark:text-dorado-3/80 mb-6">
            Para proyectos o solicitudes detalladas, envíanos un correo. Te
            responderemos a la brevedad.
          </p>
          <a
            href={`mailto:${tuEmail}`}
            className="w-full text-center bg-gris-azulado text-white dark:bg-dorado-2 dark:text-negro-custom font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Enviar Email
          </a>
        </motion.div>

        {/* Tarjeta de Dudas por WhatsApp */}
        <motion.div
          variants={cardVariants}
          className="bg-background p-8 rounded-xl shadow-lg border border-dorado-3/20 flex flex-col items-center text-center"
        >
          <WhatsAppIcon className="text-gris-1 dark:text-dorado-3" />
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
            className="w-full text-center bg-gris-1 text-white dark:bg-dorado-3 dark:text-negro-custom font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Chatear por WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
