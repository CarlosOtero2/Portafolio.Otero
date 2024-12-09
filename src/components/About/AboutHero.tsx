const AboutHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="src\img\Carlos-Otero-Desarrollador-Sotware.jpg" 
                alt="Carlos Otero"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Desarrollador de Software panameño
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              Soy un apasionado desarrollador de software con conocimientos en tecnologías modernas, 
              especializado en crear soluciones prácticas e innovadoras. Mi misión es transformar 
              ideas en proyectos exitosos y funcionales, ofreciendo siempre calidad y profesionalismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;