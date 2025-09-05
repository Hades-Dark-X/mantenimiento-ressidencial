"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Inicio({ sectionData, activeSection }) {
  const currentContent = sectionData[activeSection];

  if (!currentContent) {
    return null;
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      key={activeSection}
      className="flex flex-col md:flex-row items-center justify-between mt-12"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={currentContent.image}
          alt={currentContent.title}
          width={400}
          height={600}
          className="w-full h-full object-cover rounded-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>

      {/* Sección Derecha - Contenido */}
      <motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {currentContent.title}
        </h1>
        <p className="text-lg mb-6 max-w-md">{currentContent.text}</p>
      </motion.div>
    </motion.section>
  );
}
