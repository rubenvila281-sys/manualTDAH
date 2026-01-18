import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const recentSales = [
  { name: "Diego Ordóñez", country: "Colombia", time: "12 Horas Atrás" },
  { name: "María González", country: "México", time: "5 Minutos Atrás" },
  { name: "Carlos Ruiz", country: "España", time: "2 Minutos Atrás" },
  { name: "Ana López", country: "Argentina", time: "Justo Ahora" },
  { name: "Javier Pérez", country: "Chile", time: "1 Hora Atrás" },
  { name: "Sofía Martínez", country: "Perú", time: "30 Minutos Atrás" },
];

export default function FomoNotification() {
  const [currentSale, setCurrentSale] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cycle through notifications
    const cycleTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSale((prev) => (prev + 1) % recentSales.length);
        setIsVisible(true);
      }, 1000); // Wait for exit animation
    }, 8000); // Show each for 8 seconds (including animation time)

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -20 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block fixed bottom-4 left-4 z-50 max-w-xs w-full"
        >
          <div className="bg-[#2D8A76] text-white p-4 rounded-lg shadow-2xl border border-[#3CB398] flex flex-col gap-1">
            <p className="font-bold text-sm leading-tight">
              {recentSales[currentSale].name} Acaba De Completar Su Compra Desde {recentSales[currentSale].country}
            </p>
            <p className="text-xs italic opacity-90 font-medium">
              {recentSales[currentSale].time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
