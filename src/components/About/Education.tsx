const educationData = [
  {
    title: "Lic. en Gestión de Tecnología de la Información",
    institution: "Universidad Autónoma de Chiriquí (UNACHI)",
    period: "2024 - Actualmente",
    imageUrl: "src/img/unachi-logo.jpg",
    link: "https://www.unachi.ac.pa/"
  },
  {
    title: "Técnico en Informática",
    institution: "Instituto Técnico Superior Cultural y Turismo (CSC&T)",
    period: "2023 - 2024",
    imageUrl: "src/img/Instituto técnico superior cultural y turismo (csc&t).png",
    link: "https://virtualc.fundacioninstitutospanama.com/"
  }
];

const Education = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Mis Estudios
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-semibold mb-1">
                  {item.institution}
                </p>
                <p className="text-gray-500">
                  {item.period}
                </p>
              </div>
              <div className="md:w-1/3">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.institution}
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;