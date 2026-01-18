export default function AuthorSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#F3EFE6] rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#E89643] rounded-full transform rotate-6 opacity-20"></div>
            <img 
              src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/Gemini_Generated_Image_n1m0nzn1m0nzn1m0.png?v=1768694139" 
              alt="Franco Vila" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
              loading="lazy"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 font-heading tracking-tight">
              Sobre el Autor: Franco Vila
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4 font-sans text-lg">
              Franco Vila no solo escribe desde la teoría, sino desde la trinchera. Dedicado a desestigmatizar la neurodivergencia, ha creado este mapa para que nadie más tenga que navegar a ciegas.
            </p>
            <p className="text-[#333333] leading-relaxed font-semibold font-sans text-lg">
              Su enfoque combina la neurociencia moderna con estrategias prácticas de vida diaria, ayudando a miles de personas a transformar su "defecto" en su mayor ventaja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
