import { motion } from "framer-motion"
import { Code, Server, Database, ListTodo, Search, Brain, PenTool } from 'lucide-react'

const skillsData = [
  { icon: Code, name: "Diseño y desarrollo web" },
  { icon: Server, name: "Backend" },
  { icon: Database, name: "Bases de datos" },
  { icon: ListTodo, name: "Gestión de proyectos" },
  { icon: Search, name: "SEO" },
  { icon: Brain, name: "Inteligencia artificial" },
  { icon: PenTool, name: "UI/UX Design" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Skills() {
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
      Mis habilidades
      </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-3 rounded-lg bg-primary/10 mb-4">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-center font-medium text-foreground">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

