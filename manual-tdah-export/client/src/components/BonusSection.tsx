import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, BrainCircuit } from "lucide-react";

export default function BonusSection() {
  return (
    <section className="bg-[#CCFBF1] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-4 font-heading tracking-tight">
          Descubre los Bonos de Regalo
        </h2>
        <p className="text-center text-[#333333] max-w-2xl mx-auto mb-12 font-sans text-lg leading-relaxed">
          Herramientas complementarias indispensables diseñadas para detener el overthinking, reducir la ansiedad y recuperar tu paz mental.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bonus 1 */}
          <Card className="bg-white/80 backdrop-blur border-none shadow-lg overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/imagen_11.png?v=1767712121" 
                alt="Kit de Emergencia" 
                className="w-48 shadow-xl mb-6 rounded transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-[#0F766E] mb-2 font-heading tracking-tight">
                BONUS #1: EL KIT DE EMERGENCIA PARA CRISIS
              </h3>
              <p className="text-[#333333] text-base mb-4 font-sans leading-relaxed">
                Una guía de acción rápida para esos días de parálisis total o desborde emocional.
              </p>
              <ul className="text-left space-y-2 text-base text-[#333333] w-full font-sans">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E89643] mt-0.5" />
                  <span>Ejercicios de anclaje inmediatos</span>
                </li>
                <li className="flex items-start gap-2">
                  <BrainCircuit className="w-4 h-4 text-[#E89643] mt-0.5" />
                  <span>Protocolo "Reinicio de Dopamina"</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Bonus 2 */}
          <Card className="bg-white/80 backdrop-blur border-none shadow-lg overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/imagen_2.png?v=1767712128" 
                alt="Guía de Adaptación" 
                className="w-48 shadow-xl mb-6 rounded transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-[#0F766E] mb-2 font-heading tracking-tight">
                BONUS #2: GUÍA DE ADAPTACIÓN
              </h3>
              <p className="text-[#333333] text-base mb-4 font-sans leading-relaxed">
                Plantillas y guiones listos para usar en el trabajo y estudios.
              </p>
              <ul className="text-left space-y-2 text-base text-[#333333] w-full font-sans">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-[#E89643] mt-0.5" />
                  <span>Cómo solicitar adecuaciones sin miedo</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E89643] mt-0.5" />
                  <span>Estructurar entorno para evitar distracciones</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
