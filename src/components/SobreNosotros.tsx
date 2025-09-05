import { motion } from "framer-motion";

const SobreNosotros = ({ sectionData, activeSection }) => {
  if (!sectionData || !sectionData["sobre-nosotros"]) return null;
  const { title, text, image, specialists } = sectionData["sobre-nosotros"];
  return (
    <motion.section
      key={activeSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-5xl mx-auto"
    >
      {/* Sección principal con imagen y texto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-80 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://placehold.co/600x400/202221/b68b4b?text=Sobre+Nosotros`;
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-base md:text-lg text-[var(--foreground)] text-opacity-80 leading-relaxed">
            {text}
          </p>
        </motion.div>
      </div>

      {/* NUEVO: Sección de especialistas */}
      {specialists && specialists.length > 0 && (
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl mb-8">
            Nuestro Equipo de Expertos
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {specialists.map((specialist, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <img
                  src={specialist.avatarUrl}
                  alt={specialist.name}
                  className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-opacity-20"
                />
                <h4 className="mt-4 text-lg font-bold text-[var(--foreground)]">
                  {specialist.name}
                </h4>
                <p className="text-sm text-[var(--foreground)] text-opacity-70">
                  {specialist.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default SobreNosotros;
