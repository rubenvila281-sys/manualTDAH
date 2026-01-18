import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#374151] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E89643] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CCFBF1] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading tracking-tight">
            Recupera el Control Hoy Mismo
          </h2>
          <p className="text-gray-300 text-lg font-sans">
            Oferta de lanzamiento por tiempo limitado. Acceso inmediato.
          </p>
        </div>

        <div className="bg-white text-[#333333] rounded-3xl shadow-2xl max-w-lg mx-auto overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="bg-[#E89643] py-4 text-center">
            <p className="text-white font-bold uppercase tracking-wider text-sm">
              Oferta Especial -80% OFF
            </p>
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-[#E89643]/20 rounded-full blur-3xl group-hover:bg-[#E89643]/40 transition-all duration-500"></div>
              <img 
                src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/unnamed_d4318d8e-4077-4f66-a6d7-b0e614ef59b0.jpg?v=1767713871" 
                alt="Paquete Completo" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center mb-8 px-4">
              <div className="bg-[#FFFBEB] border-2 border-[#E89643] rounded-xl p-6 shadow-lg max-w-md w-full text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#E89643] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                  VALUE STACK
                </div>
                <h4 className="font-black text-[#333333] text-lg mb-4 border-b border-gray-200 pb-2">
                  LO QUE TE LLEVAS HOY:
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">📚 El Manual del Usuario TDAH</span>
                    <span className="text-gray-400 line-through decoration-red-500 decoration-2">$49.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">🚑 Kit de Emergencia Mental</span>
                    <span className="text-gray-400 line-through decoration-red-500 decoration-2">$29.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">🏠 Guía de Adaptación de Entorno</span>
                    <span className="text-gray-400 line-through decoration-red-500 decoration-2">$29.00</span>
                  </li>

                </ul>
                <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300 flex justify-between items-center">
                  <span className="font-black text-gray-500">VALOR TOTAL REAL:</span>
                  <span className="font-black text-xl text-gray-500 line-through decoration-red-600 decoration-4">$107.00</span>
                </div>
                <div className="mt-2 bg-[#EF4444] text-white text-center font-black text-lg py-2 rounded shadow animate-pulse">
                  TUYO HOY POR SOLO $12
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-8 relative">
              {/* Sello Animado */}
              <div className="absolute -right-4 top-0 md:-right-16 md:-top-4 w-24 h-24 md:w-32 md:h-32 z-20 animate-bounce-slow">
                <img 
                  src="/images/sello-garantia.png" 
                  alt="Acceso de Por Vida" 
                  className="w-full h-full object-contain drop-shadow-lg rotate-12 hover:rotate-0 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded uppercase">
                  Ahorras $48.00
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-2xl line-through font-bold decoration-red-500 decoration-2">
                  $60.00
                </span>
                <span className="text-[#EF4444] text-6xl md:text-7xl font-black font-heading tracking-tight drop-shadow-sm">
                  $12.00
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2 font-medium">
                Pago único. Acceso de por vida.
              </p>
            </div>

            <a 
              href="https://francovila.salduu.com/p/tdha?pay=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                className="w-full bg-[#2D8A76] hover:bg-[#246e5e] text-white text-lg md:text-2xl font-black py-6 md:py-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse whitespace-normal h-auto leading-tight"
              >
                ¡QUIERO MI ACCESO AHORA!
              </Button>
            </a>

            <div className="flex items-center justify-center gap-2 text-base text-[#333333] bg-gray-50 py-3 rounded-lg font-sans">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <span className="font-medium">Garantía de devolución de 7 días</span>
            </div>
            
            <p className="text-xs text-gray-400 mt-4 px-4">
              "Si no sientes que este libro describe tu mente mejor que tú mismo, te devolvemos el 100% de tu dinero. Sin preguntas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
