import { motion } from "framer-motion";

// Tipado para los props del componente
interface ServiceItem {
  title: string;
  description: string;
}

interface ServiciosProps {
  sectionData: {
    servicios: {
      title: string;
      description: string;
      items: ServiceItem[];
    };
  };
  activeSection: string;
}

const Servicios = ({ sectionData, activeSection }: ServiciosProps) => {
  if (!sectionData || !sectionData.servicios) {
    return null;
  }

  // Extraemos los datos específicos para esta sección
  const { title, items } = sectionData.servicios;

  // Animación para el contenedor de la sección
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section
      key={activeSection}
      variants={sectionAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={sectionAnimation.transition}
      className="w-full max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl mb-8 text-center">{title}</h2>

      <div className="border-t border-[var(--foreground)] border-opacity-20">
        {items.map((service, index) => (
          <div
            key={index}
            className="group border-b border-[var(--foreground)] border-opacity-20 py-8 px-4 transition-all duration-300 ease-in-out "
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h3 className="text-xl md:text-2xl">{service.title}</h3>
              <p className="mt-2 md:mt-0 md:ml-6 text-base text-[var(--foreground)] text-opacity-80 md:text-right max-w-md">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Servicios;
