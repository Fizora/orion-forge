"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const calculateTime = (): void => {
      const now = new Date();
      const target = new Date(2027, 4, 27, 0, 0, 0);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Left column – content (slightly narrower) */}
          <div className="flex-1 lg:flex-[0.9]">
            {/* Countdown */}
            <div className="mb-6">
              <span className="font-mono text-gray-500 text-sm uppercase tracking-[0.3em] mb-2 block">
                T-Minus Time to Launch
              </span>
              <div className="font-mono text-red-600 text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums flex flex-wrap gap-3 items-baseline">
                {timeLeft ? (
                  <>
                    <span>{timeLeft.days}d</span>
                    <span className="text-gray-400">:</span>
                    <span>{timeLeft.hours}h</span>
                    <span className="text-gray-400">:</span>
                    <span>{timeLeft.minutes}m</span>
                    <span className="text-gray-400">:</span>
                    <span>{timeLeft.seconds}s</span>
                  </>
                ) : (
                  "00d : 00h : 00m : 00s"
                )}
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono leading-tight tracking-tighter">
              ORION SKY NET <br />
              FLIGHT TEST.
            </h1>

            {/* Status message */}
            <p className="font-mono text-gray-600 mt-4 max-w-md text-sm md:text-base border-l-2 border-red-600 pl-4">
              SYSTEMS STATUS: <span className="text-green-600">NOMINAL</span>
              <br />
              Final integrated checkout scheduled for May 27, 2027. All
              subsystems ready.
            </p>

            {/* Two info cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-mono text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Why orbit matters
                </h3>
                <p className="font-mono text-xs text-gray-600 mt-1 leading-relaxed">
                  Sub‑20ms latency, quantum encryption, connecting 2.7B unserved
                  by 2029.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-mono text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Launch readiness
                </h3>
                <p className="font-mono text-xs text-gray-600 mt-1 leading-relaxed">
                  132 satellites ready, 18 ground stations live. Final tests Q2
                  2027.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-8">
              <button className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 font-mono text-sm font-semibold text-white transition-all hover:bg-red-700">
                Get notified about launch
              </button>
              <p className="font-mono text-xs text-gray-400 mt-2">
                One email only. No spam.
              </p>
            </div>
          </div>

          {/* Right column – larger image */}
          <div className="flex-1 lg:flex-[1.2] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/images/hero.png"
                alt="Orion Sky Net satellite mesh network concept"
                width={800}
                height={800}
                className="rounded-2xl object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
