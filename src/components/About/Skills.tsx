import { Code, Server, Database, ListTodo, Search, Brain, PenTool } from 'lucide-react';

const skillsData = [
  { icon: Code, name: "Diseño y desarrollo web" },
  { icon: Server, name: "Backend" },
  { icon: Database, name: "Bases de datos" },
  { icon: ListTodo, name: "Gestión de proyectos" },
  { icon: Search, name: "SEO" },
  { icon: Brain, name: "Inteligencia artificial" },
  { icon: PenTool, name: "UI/UX Design" }
];

const Skills = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <skill.icon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-center text-gray-800 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;