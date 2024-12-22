import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pagos.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/usuario/ecommerce-platform",  // URL de GitHub
    liveUrl: "https://ecommerce-platform.com"  // URL en vivo del proyecto
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con características colaborativas.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/usuario/task-management-app",  // URL de GitHub
    liveUrl: "https://task-management-app.com"  // URL en vivo del proyecto
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con datos en tiempo real y pronósticos.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "TypeScript", "API Integration"],
    githubUrl: "https://github.com/usuario/weather-dashboard",  // URL de GitHub
    liveUrl: "https://weather-dashboard.com"  // URL en vivo del proyecto
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Mis Últimos Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-4">
                    <a href={project.githubUrl} className="text-white hover:text-blue-400 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.liveUrl} className="text-white hover:text-blue-400 transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;