"use client";

import { useEffect, useState } from "react";

// 1. Definisikan Interface untuk Type Safety
interface TimeRemaining {
  hours: string;
  minutes: string;
  seconds: string;
}

const Hero: React.FC = () => {
  // State dengan type Union (TimeRemaining atau null untuk inisialisasi)
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const calculateTime = (): void => {
      const now = new Date();
      // Target: Tanggal 20 bulan ini, pukul 00:00:00
      const target = new Date(now.getFullYear(), now.getMonth(), 20, 0, 0, 0);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        // Hitung total detik
        const totalSeconds = Math.floor(difference / 1000);

        // Hitung jam (tanpa batas 24 jam agar tetap detail ke jam total)
        const h = Math.floor(totalSeconds / 3600);
        // Hitung sisa menit dari sisa jam
        const m = Math.floor((totalSeconds % 3600) / 60);
        // Hitung sisa detik
        const s = totalSeconds % 60;

        // Pad dengan angka 0 di depan jika di bawah 10 agar format konsisten
        setTimeLeft({
          hours: h.toString().padStart(2, "0"),
          minutes: m.toString().padStart(2, "0"),
          seconds: s.toString().padStart(2, "0"),
        });
      } else {
        // Jika waktu habis
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      }
    };

    // Jalankan kalkulasi pertama kali
    calculateTime();

    // Update setiap 1 detik
    const timer = setInterval(calculateTime, 1000);

    // Cleanup interval saat komponen unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen p-4 flex flex-col justify-center ">
      <div className="mx-auto container flex flex-col justify-end py-40">
        <div className="flex flex-col mb-6">
          <span className="font-mono text-gray-500 text-sm uppercase tracking-[0.3em] mb-2">
            T-Minus Time to Launch
          </span>

          {/* Format Output: JAM.MENIT.DETIK */}
          <span className="font-mono text-red-600 text-5xl md:text-7xl font-bold tabular-nums">
            {timeLeft ? (
              <>
                {timeLeft.hours}
                <span className="animate-pulse">.</span>
                {timeLeft.minutes}
                <span className="animate-pulse">.</span>
                {timeLeft.seconds}
              </>
            ) : (
              "00.00.00"
            )}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black font-mono leading-tight tracking-tighter">
          ORION SKY NET <br />
          FLIGHT TEST.
        </h1>

        <p className="font-mono text-gray-500 mt-6 max-w-lg text-sm md:text-base border-l-2 border-red-600 pl-4">
          SYSTEMS STATUS: <span className="text-green-500">NOMINAL</span>
          <br />
          All telemetry data verified for orbital insertion on the 20th. No
          unauthorized access detected.
        </p>
      </div>
    </section>
  );
};

export default Hero;
