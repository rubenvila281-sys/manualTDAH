import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    "Establecer rutinas simples que organizan tu día sin estrés.",
    "Aplicar técnicas probadas para calmar tu mente hiperactiva en minutos.",
    "Realizar ejercicios efectivos para convertir el TDAH en tu mayor fortaleza, no en tu limitación.",
    "Entiende tu Hardware: Por qué tu cerebro busca dopamina desesperadamente.",
    "Domina el Hiperfoco: Convierte tu capacidad de obsesión en ventaja.",
    "Escudo contra el Rechazo: Herramientas para gestionar la Disforia Sensible."
  ];

  return (
    <section className="bg-[#FDF6E3] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-heading leading-tight tracking-tight">
            La guía práctica que ha ayudado a más de 100.000 lectores a transformar su mente y su vida.
          </h2>
          <p className="text-lg text-[#333333] leading-relaxed font-sans">
            Este libro <strong className="font-semibold">NO es teoría vacía</strong>. Son herramientas prácticas, directas y efectivas, diseñadas específicamente para la mente TDAH, que te ofrecen el <strong className="font-semibold">andamiaje externo</strong> que necesitas. Olvídate de la fuerza de voluntad. Necesitas un <strong className="font-semibold">sistema</strong> probado para:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E89643]/20 rounded-full blur-xl"></div>
              <img 
                src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/paradox.png?v=1767712972" 
                alt="El Manual del Usuario TDAH" 
                className="relative z-10 w-64 md:w-full shadow-2xl rounded-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p className="text-[#333333] font-semibold leading-relaxed font-sans text-lg">
                  {benefit}
                </p>
              </div>
            ))}
            
            <div className="pt-6">
              <p className="text-center md:text-left font-bold text-[#374151]">
                Ideal para adultos, con o sin diagnóstico formal de TDAH
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#pricing">
            <button className="bg-[#2D8A76] hover:bg-[#246e5e] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
              ¡SÍ, QUIERO TRANSFORMAR MI MENTE AHORA! 👉
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
