const certificatesData = [
  {
    title: "Certificado SEO",
    institution: "capacitateparaelempleo.org",
    pdfUrl: "public/pdfs/CERTIFICADO-SEO-Carlos.Otero.pdf",
    link: "https://capacitateparaelempleo.org/"
  },
  {
    title: "Plan de negocios",
    institution: "INADEH",
    pdfUrl: "public/pdfs/Certificado del Inadeh.pdf",
    link: "https://digital.inadeh.edu.pa/preinscrip/"
  }
];

const Certificates = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Certificados
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificatesData.map((cert, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;