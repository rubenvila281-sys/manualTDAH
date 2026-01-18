import { useEffect, useState } from "react";

export default function TopBar() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#EF4444] text-white py-2 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <p className="font-bold text-sm sm:text-base uppercase tracking-wide">
          OFERTA EXCLUSIVA: ACCESO TOTAL + 2 BONO GRATIS ¡HOY $12.00!
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <TimeBox value={timeLeft.hours} label="Horas" />
            <span className="text-white font-bold self-start mt-1">:</span>
            <TimeBox value={timeLeft.minutes} label="Minutos" />
            <span className="text-white font-bold self-start mt-1">:</span>
            <TimeBox value={timeLeft.seconds} label="Segundos" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white text-[#EF4444] rounded px-2 py-1 min-w-[40px] flex flex-col items-center justify-center">
      <span className="font-bold text-lg leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[8px] uppercase font-semibold leading-none mt-0.5">
        {label}
      </span>
    </div>
  );
}
