import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";

export default function InsideBookSection() {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'center',
    containScroll: 'trimSnaps'
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const videos = [
    {
      id: 0,
      title: "EL MANUAL PRINCIPAL",
      description: "Navega por las páginas llenas de diagramas visuales y estrategias prácticas. Sin teoría aburrida, solo acción.",
      src: "https://cdn.shopify.com/videos/c/o/v/d1ef484d9f42443aa9ee298a1b1f5eb6.mp4"
    },
    {
      id: 1,
      title: "BONUS 1: KIT DE EMERGENCIA",
      description: "Herramientas rápidas para momentos de crisis. Calma tu mente y recupera el control en minutos.",
      src: "https://cdn.shopify.com/videos/c/o/v/d1373f75b31c4ffb8cedb6cf6b692344.mp4"
    },
    {
      id: 2,
      title: "BONUS 2: GUÍA DE ADAPTACIÓN",
      description: "Cómo ajustar tu entorno para que trabaje A TU FAVOR, no en tu contra. Hacks de productividad reales.",
      src: "https://cdn.shopify.com/videos/c/o/v/4169c4f36efb4daba3079044fcc3e7c9.mp4"
    }
  ];

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playing === index) {
      video.pause();
      setPlaying(null);
    } else {
      // Pause currently playing video if any
      if (playing !== null && videoRefs.current[playing]) {
        videoRefs.current[playing]?.pause();
      }
      video.play();
      setPlaying(index);
    }
  };

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi]);

  return (
    <section className="bg-[#F3EFE6] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-[#E89643]/20 text-[#D97706] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Vistazo Exclusivo
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4 font-heading tracking-tight">
            MIRA EXACTAMENTE LO QUE RECIBIRÁS
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto font-sans">
            No compres a ciegas. Aquí tienes un tour completo por el material.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
              {videos.map((video, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-8">
                  <div className="group h-full flex flex-col">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg aspect-[9/16] md:aspect-[3/4] mb-6 bg-black cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                      onClick={() => togglePlay(index)}
                    >
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={video.src}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="none"
                      />
                      
                      {/* Overlay with Play Button - only visible when paused */}
                      {playing !== index && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all">
                            <Play className="w-6 h-6 text-[#E89643] fill-current ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Pause indicator on hover when playing */}
                      {playing === index && (
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center transition-all opacity-0 hover:opacity-100">
                          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                            <Pause className="w-5 h-5 text-[#333333] fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center md:text-left flex-grow">
                      <h3 className="font-bold text-xl text-[#333333] mb-3 group-hover:text-[#E89643] transition-colors uppercase font-heading leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 font-sans text-base leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Visible on Desktop */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 z-10 border border-gray-100 ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-[#333333]" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full w-12 h-12 z-10 border border-gray-100 ${!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-6 h-6 text-[#333333]" />
            </Button>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  // Simple logic to highlight current slide based on scroll position could be added here
                  // For now just showing dots
                  "w-2 bg-gray-300"
                }`} 
              />
            ))}
            <p className="text-xs text-gray-400 w-full text-center absolute -bottom-6">
              Desliza para ver más →
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#pricing">
            <button className="bg-[#2D8A76] hover:bg-[#246e5e] text-white text-lg md:text-xl font-bold py-4 px-8 md:px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse w-full md:w-auto">
              ¡QUIERO ACCEDER A TODO ESTO AHORA! 👉
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
