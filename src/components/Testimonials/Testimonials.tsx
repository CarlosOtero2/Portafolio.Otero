import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "El trabajo de Carlos es excepcional. Mi sitio web nunca había sido tan rápido y atractivo.",
    author: "Ana Rodríguez",
    position: "--",
  },
  {
    text: "Gracias a su consultoría, mi negocio creció exponencialmente. ¡Altamente recomendado!",
    author: "Juan Pérez",
    position: "--",
  },
  {
    text: "Profesional, dedicado y con una visión increíble. Trabajar con Carlos fue un placer.",
    author: "María González",
    position: "--",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg"
        >
          Lo que dicen mis clientes
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-xl relative"
          >
            <Quote className="absolute text-blue-500/20 w-24 h-24 -top-4 -left-4" />
            <div className="relative z-10">
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Anterior"
              title="Anterior"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Siguiente"
              title="Siguiente"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
