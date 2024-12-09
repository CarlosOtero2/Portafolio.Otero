import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiVite, SiCplusplus, SiMysql, SiPostgresql, SiMariadb } from 'react-icons/si';

const Hero = () => {
  const techData = [
    {
      title: 'Front-end',
      icons: [
        { Icon: FaHtml5, label: 'HTML' },
        { Icon: FaCss3Alt, label: 'CSS' },
        { Icon: FaJs, label: 'JavaScript' },
        { Icon: FaReact, label: 'React' },
        { Icon: SiVite, label: 'Vite' },
      ],
    },
    {
      title: 'Back-end',
      icons: [
        { Icon: FaPython, label: 'Python' },
        { Icon: SiCplusplus, label: 'C++' },
      ],
    },
    {
      title: 'Bases de Datos',
      icons: [
        { Icon: SiMysql, label: 'MySQL' },
        { Icon: SiPostgresql, label: 'PostgreSQL' },
        { Icon: SiMariadb, label: 'MariaDB' },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
          Carlos Otero
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-center text-white/90 mb-6">
          Desarrollador de Software
        </p>
        <p className="text-xl text-center text-white/80 mb-12 max-w-2xl mx-auto">
          ¡Hola! Aquí encontrarás soluciones tecnológicas más frescas que un raspao en verano.
        </p>

        {/* Nueva sección con las tecnologías */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4">
          {techData.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-6 text-center shadow-lg backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                {category.icons.map(({ Icon, label }, i) => (
                  <div key={i} className="text-white">
                    <Icon size={40} className="mx-auto mb-2" />
                    <p className="text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#projects" className="btn-primary">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;