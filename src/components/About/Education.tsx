import { motion } from "framer-motion"

const educationData = [
  {
    title: "Lic. en Gestión de Tecnología de la Información",
    institution: "Universidad Autónoma de Chiriquí (UNACHI)",
    period: "2024 - Actualmente",
    imageUrl: "./public/img/unachi-logo.jpg",
    link: "https://www.unachi.ac.pa/"
  },
  {
    title: "Técnico en Informática",
    institution: "Instituto Técnico Superior Cultural y Turismo (CSC&T)",
    period: "2023 - 2024",
    imageUrl: "./public/img/Instituto técnico superior cultural y turismo (csc&t).png",
    link: "https://virtualc.fundacioninstitutospanama.com/"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Education() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
      <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white drop-shadow-lg"
       >
      Mis estudios
      </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="md:w-2/3 space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="font-semibold text-muted-foreground">
                  {item.institution}
                </p>
                <p className="text-muted-foreground/80">
                  {item.period}
                </p>
              </div>
              <div className="md:w-1/3">
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={item.imageUrl}
                      alt={item.institution}
                      className="object-cover"
                    />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

