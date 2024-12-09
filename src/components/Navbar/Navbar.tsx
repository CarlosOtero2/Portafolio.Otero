import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            <strong>OTERO</strong>
          </a>
          
          <button 
            className="md:hidden focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-gray-800 hover:text-blue-600 transition-colors" size={24} />
          </button>

          <ul className={`absolute md:relative top-full left-0 w-full md:w-auto
            bg-white/80 backdrop-blur-sm md:bg-transparent
            ${isOpen ? 'flex' : 'hidden'} md:flex
            flex-col md:flex-row
            items-center
            transition-all duration-300
            md:space-x-8
            shadow-md md:shadow-none
            py-4 md:py-0
            `}>
            <li><a href="#" className="nav-link"><strong>Inicio</strong></a></li>
            <li><a href="#about" className="nav-link"><strong>Sobre mí</strong></a></li>
            <li><a href="#projects" className="nav-link"><strong>Proyectos</strong></a></li>
            <li><a href="#about" className="nav-link"><strong>Habilidades</strong></a></li>
            <li><a href="#contact" className="nav-link"><strong>Contacto</strong></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;