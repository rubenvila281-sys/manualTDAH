import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-[#D2C6B0] py-12 md:py-20 relative overflow-hidden">
      {/* Background Texture Overlay (Optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-4 animate-pulse shadow-lg border border-red-400">
            ⚠️ ATENCIÓN: OFERTA LIMITADA SOLO POR HOY
          </div>
          <h2 className="text-white font-bold text-xl md:text-2xl mb-4 uppercase tracking-wider drop-shadow-sm font-heading">
            ¿Cansado de sentir que tienes un <span className="text-[#E89643] bg-white/10 px-2 rounded">motor Ferrari con frenos de bicicleta</span>?
          </h2>
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-md font-heading tracking-tight">
            <span className="text-[#E89643]">TU CEREBRO NO ESTÁ ROTO</span>, SOLO LE FALTABA SU MANUAL DE INSTRUCCIONES
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-sm mb-6">
            La guía definitiva de Franco Vila que transforma el TDAH de un 'defecto' a una configuración única. <span className="font-bold bg-[#E89643]/20 px-1 rounded">Deja de pelear contra tu mente</span> y aprende las reglas para navegar el caos, reducir la ansiedad y recuperar tu potencial.
          </p>
          <div className="flex justify-center items-center gap-2 text-[#FEF3C7] font-bold text-sm md:text-base animate-bounce">
            🔥 +1,500 personas descargaron esta guía hoy
          </div>
        </div>

        <div className="rounded-3xl p-6 md:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#E89643]/50 rounded-2xl p-6 md:p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-[#9D2B38] font-black text-2xl md:text-3xl uppercase leading-tight font-heading tracking-tight mb-4">
                  ¡LIBÉRATE DEL CAOS MENTAL Y RECUPERA TU EQUILIBRIO!
                </h3>
                <p className="text-[#374151] text-lg font-bold mb-4">
                  LA GUÍA DEFINITIVA PARA ENTENDER EL TDAH EN LOS ADULTOS, CALMAR LA MENTE Y CREAR UNA VIDA PLENA Y ACTIVA
                </p>
                
                <p className="text-gray-700 italic border-l-4 border-[#E89643] pl-4 font-medium">
                  "Durante años te han dicho que te esfuerces más. Pero intentar navegar un océano con un mapa de carreteras es imposible."
                </p>
              </div>
            </div>

            <div className="flex-1 relative group flex flex-col items-center">
              <div className="bg-[#CCFBF1] text-[#0F766E] text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-[#0F766E]/20 mb-4 animate-bounce">
                +2 BONOS GRATIS INCLUIDOS
              </div>
              <div className="absolute -inset-4 bg-[#E89643]/20 rounded-full blur-xl group-hover:bg-[#E89643]/30 transition-all duration-500"></div>
              <img 
                src="https://cdn.shopify.com/s/files/1/0765/6108/8767/files/paradox.png?v=1767712972" 
                alt="El Manual del Usuario TDAH Book Cover" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-lg mb-6 font-medium drop-shadow-sm max-w-2xl mx-auto">
            Descubre cómo el método de Franco Vila está cambiando vidas. Es la guía práctica que te dará el control que mereces.
          </p>
          <a href="#pricing" className="inline-block">
            <Button 
              size="lg" 
              className="bg-[#10B981] text-white hover:bg-[#059669] text-base md:text-xl font-bold px-6 py-6 md:px-8 md:py-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transform hover:-translate-y-1 transition-all duration-300 animate-pulse whitespace-normal h-auto leading-tight"
            >
              ¡RECUPERA EL CONTROL DE TU MENTE AHORA!
            </Button>
          </a>
          <p className="text-white/80 text-sm mt-3 font-medium">
            Descarga digital inmediata + Garantía de Satisfacción
          </p>
        </div>
      </div>
    </section>
  );
}
