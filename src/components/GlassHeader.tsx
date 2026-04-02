import { useState, useEffect } from "react";
import logo from "@/assets/logo-mynexa.png";

const GlassHeader = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    const stored = sessionStorage.getItem("urgency_end");
    let endTime: number;
    if (stored) {
      endTime = parseInt(stored);
    } else {
      endTime = Date.now() + 2 * 60 * 60 * 1000;
      sessionStorage.setItem("urgency_end", endTime.toString());
    }

    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <img src={logo} alt="MyNexa" className="h-14 sm:h-16" />

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline text-xs text-destructive font-bold uppercase tracking-wider animate-pulse">
            🔥 Oferta termina en
          </span>
          <div className="flex items-center gap-1">
            {[
              { value: pad(timeLeft.hours), label: "h" },
              { value: pad(timeLeft.minutes), label: "m" },
              { value: pad(timeLeft.seconds), label: "s" },
            ].map((unit, i) => (
              <span key={i} className="flex items-center">
                <span className="bg-card/80 border border-border/50 rounded px-1.5 sm:px-2 py-0.5 text-sm sm:text-base font-black text-gradient-gold tabular-nums">
                  {unit.value}
                </span>
                <span className="text-[10px] text-muted-foreground ml-0.5 mr-1">{unit.label}</span>
              </span>
            ))}
          </div>
          <span className="text-xs sm:text-sm font-black text-gradient-gold ml-1">29,99 €</span>
        </div>
      </div>
    </header>
  );
};

export default GlassHeader;
