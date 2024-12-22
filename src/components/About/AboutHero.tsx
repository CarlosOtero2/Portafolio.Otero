import { motion } from "framer-motion"


export default function AboutHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/10 px-4 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="public\img\Carlos-Otero-Desarrollador-Sotware.jpg"
                alt="Carlos Otero"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
              >
                
              </motion.h2>

              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
                 Sobre mí
               </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="prose prose-lg dark:prose-invert"
              >
                <p className="text-lg text-muted-foreground">
                  Soy un Técnico en Ingeniería en Sistemas Informáticos con experiencia en el desarrollo de soluciones tecnológicas innovadoras. Mi enfoque se centra en crear experiencias digitales excepcionales que combinen funcionalidad y diseño.
                </p>
                <p className="text-lg text-muted-foreground">
                  A lo largo de mi carrera, he trabajado en diversos proyectos que me han permitido desarrollar una sólida base en desarrollo web full-stack, con especial énfasis en tecnologías modernas como React, Node.js y bases de datos tanto SQL como NoSQL.
                </p>
                <p className="text-lg text-muted-foreground">
                  Mi objetivo es seguir creciendo profesionalmente mientras contribuyo a proyectos desafiantes que me permitan aplicar y expandir mis conocimientos en el campo de la tecnología.
                </p>
              </motion.div>
            </div>

            {/* Stats or highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            >
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}