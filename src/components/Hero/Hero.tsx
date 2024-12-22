import { motion } from "framer-motion"
import { Code2, Layout, Database, HashIcon as Html, CodepenIcon as Css, FileJson, Server, GitGraphIcon as Git, CodepenIcon as NodeJs, Terminal } from 'lucide-react'

export default function Hero() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "HTML5", icon: <Html className="w-5 h-5" /> },
        { name: "CSS3", icon: <Css className="w-5 h-5" /> },
        { name: "JavaScript", icon: <FileJson className="w-5 h-5" /> },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <NodeJs className="w-5 h-5" /> },
        { name: "API REST", icon: <Code2 className="w-5 h-5" /> },
        { name: "Git", icon: <Git className="w-5 h-5" /> },
      ]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "SQL", icon: <Terminal className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      ]
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

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/10 px-4 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <br />

          <h1 className="text-4xl md:text-6xl font-semibold text-muted-foreground mb-2">
            Hola, bienvenidos a mi portafolio
          </h1>

          <br />

          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-2">
            Soy, Carlos I.Otero E.
          </h2>

          <br />

          <h3 className="text-2xl text-muted-foreground/80">
            Técnico en Ingeniería en Sistemas Informáticos
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold">{category.title}</h4>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-1.5 rounded-md bg-muted">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
