"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/data/proyectos";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// Variantes para animar los bloques
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Retraso entre la columna del Swiper y la de contenido
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Proyectos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  return (
    <motion.section
      id="proyectos"
      className="w-full py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl mb-2">Nuestros Proyectos</h2>
        <p className="text-lg">Selecciona un proyecto para ver sus detalles.</p>
      </motion.div>

      {/* Contenedor principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
      >
        {/* Swiper */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 w-full h-[450px]"
        >
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="h-full w-full"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-black/10 dark:bg-white/10"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                {/* ... Contenido del SwiperSlide ... */}
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 overflow-hidden rounded-md flex-shrink-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{project.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* La columna de contenido también hereda la animación */}
        <motion.div variants={itemVariants} className="lg:col-span-2 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="relative w-full max-w-lg mx-auto aspect-square overflow-hidden rounded-full shadow-lg mb-8"
              >
                <Image
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 512px) 100vw, 512px"
                  priority={activeIndex === 0}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold mb-3">
                  {activeProject.title}
                </h3>
                <p className="text-lg max-w-2xl">{activeProject.description}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
