import { motion } from "framer-motion";

const certificatesData = [
  {
    title: "Certificado SEO",
    institution: "capacitateparaelempleo.org",
    pdfUrl: "public/CERTIFICADO-SEO-Carlos.Otero.pdf",
    link: "https://capacitateparaelempleo.org/"
  },
  {
    title: "Plan de negocios",
    institution: "INADEH",
    pdfUrl: "public/Certificado del Inadeh.pdf",
    link: "https://digital.inadeh.edu.pa/preinscrip/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Certificates = () => {
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
      Certificados
      </motion.h2>



        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-[200px] bg-gray-100">
                <embed 
                  src={cert.pdfUrl} 
                  type="application/pdf" 
                  width="100%" 
                  height="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {cert.institution}
                </p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Ver más
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;