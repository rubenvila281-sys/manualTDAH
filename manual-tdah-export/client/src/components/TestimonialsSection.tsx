import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Laura M.",
      role: "Diseñadora Gráfica",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "Llevo 10 años luchando contra la procrastinación. He probado apps, agendas, alarmas... nada funcionaba. Este manual no te da 'tips', te explica CÓMO funciona tu cerebro. La técnica de 'micro-compromisos' del capítulo 4 cambió mi vida laboral en una semana. Por fin entregué un proyecto a tiempo sin trasnochar.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos R.",
      role: "Estudiante de Medicina",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "Pensé que no podría terminar la carrera. La ansiedad me paralizaba antes de cada examen. El 'Kit de Emergencia' es real. Lo usé antes de mi final de Anatomía y por primera vez mi mente estaba en silencio. Solo por eso vale 10 veces más de lo que cuesta.",
      rating: 5
    },
    {
      id: 3,
      name: "Sofía V.",
      role: "Emprendedora",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "Mi esposo no entendía por qué dejaba todo a medias. Leímos juntos la sección de 'Relaciones y TDAH'. Lloramos. Ahora él es mi equipo, no mi juez. Gracias Franco por explicar lo que yo nunca pude poner en palabras.",
      rating: 5
    },
    {
      id: 4,
      name: "Javier P.",
      role: "Programador",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      text: "Soy escéptico con estos 'manuales milagrosos'. Pero este es diferente. Es visual, directo y sin relleno. Los diagramas me ayudaron a entender mi dopamina como si fuera código. He optimizado mi rutina y mi energía se ha duplicado.",
      rating: 5
    },
    {
      id: 5,
      name: "Ana G.",
      role: "Madre de 2 hijos",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      text: "El caos en mi casa era insoportable. Sentía que fallaba como mamá. La Guía de Adaptación me enseñó a organizar mi cocina y mi entrada para que 'el desorden no tenga donde esconderse'. Pequeños cambios, paz mental gigante.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4 font-heading tracking-tight">
            HISTORIAS REALES, RESULTADOS REALES
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto font-sans">
            Personas como tú que dejaron de pelear contra su mente y empezaron a usarla a su favor.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#FFFBEB] border border-[#E89643]/30 rounded-2xl p-8 md:p-12 shadow-lg relative mx-auto max-w-2xl">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-[#E89643]/20 fill-current" />
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#E89643] fill-current" />
                        ))}
                      </div>

                      <p className="text-gray-700 text-lg md:text-xl italic mb-6 leading-relaxed font-medium">
                        "{item.text}"
                      </p>

                      <div>
                        <h4 className="font-bold text-[#333333] text-lg">{item.name}</h4>
                        <p className="text-gray-500 text-sm uppercase tracking-wide font-bold">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 z-10 border border-gray-100 hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-[#333333]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 z-10 border border-gray-100 hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-[#333333]" />
          </Button>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#E89643] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#pricing">
            <Button className="bg-[#2D8A76] hover:bg-[#246e5e] text-white text-xl font-black py-8 px-10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              ¡ SÉ EL PRÓXIMO TESTIMONIO !
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
