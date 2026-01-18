import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Frown, Zap } from "lucide-react";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <Brain className="w-6 h-6 text-[#EF4444]" />,
      title: "La Orquesta sin Director",
      description: "Sientes que tienes mil ideas sonando a la vez, pero nadie lleva la batuta, resultando en ruido y parálisis."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#EF4444]" />,
      title: "El Ciclo de la Culpa",
      description: "Te prometes que 'mañana me organizo', fallas de nuevo, y la vergüenza te consume."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#EF4444]" />,
      title: "Ceguera del Tiempo",
      description: "Te sientas a trabajar '5 minutos' y han pasado 4 horas (o al revés, sientes que no tienes tiempo para nada)."
    },
    {
      icon: <Frown className="w-6 h-6 text-[#EF4444]" />,
      title: "Montaña Rusa Emocional",
      description: "Pasas de la euforia a la frustración profunda en cuestión de minutos ante el menor contratiempo."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-12 font-heading tracking-tight">
          El Peso Oculto del TDAH: ¿Te Identificas con Esto?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-[#FDF6E3] border-[#E89643]/20 hover:border-[#E89643] transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {point.icon}
                  <CardTitle className="text-lg font-bold text-[#333333] font-heading">
                    {point.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#333333] leading-relaxed font-sans text-base">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg mb-8">
            Descubre cómo el método de Franco Vila está cambiando vidas. Es la guía práctica que te dará el control que mereces.
          </p>
          <a href="#pricing">
            <Button className="bg-[#2D8A76] hover:bg-[#246e5e] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
              ¡NECESITO ESTE MANUAL AHORA! 🧠
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
