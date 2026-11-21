"use client";

import { useEffect, useRef, useState } from "react";
import BrownMap from "@/components/sections/BrownMap";

export default function Maps() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const revealClass = () =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

  const address = "Br. Dinas Pendem, Desa Muncan, Selat, Karangasem, Bali";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section
      ref={sectionRef}
      id="lokasi-upacara"
      className="relative flex w-full flex-col items-center overflow-hidden bg-white px-5 py-20 sm:py-28"
    >
      {/* Heading */}
      <div
        className={`flex w-full max-w-md flex-col items-center text-center ${revealClass()}`}
        style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
      >
        <p
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          className="mt-0 text-4xl font-normal leading-tight text-black sm:text-6xl"
        >
          Lokasi Resepsi
        </p>

        <p
          className="mt-4 text-xs font-light leading-6 text-black"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Br.Pendem, Ds.Muncan, Selat, Karangasem, Bali
        </p>
      </div>

      {/* Espresso Brown Maps */}
      <div
        className={`mt-8 w-full max-w-[340px] overflow-hidden rounded-[20px] border border-[#B49A65]/30 bg-[#241812] p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.25)] sm:max-w-md ${revealClass()}`}
        style={{ transitionDelay: isVisible ? "350ms" : "0ms" }}
      >
        <div className="overflow-hidden rounded-[15px]">
          <BrownMap />
        </div>
      </div>

      {/* Open Google Maps */}
      <div
        className={`mt-7 w-full max-w-[340px] sm:max-w-md ${revealClass()}`}
        style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
      >
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex w-fit items-center justify-center gap-2.5 rounded-full border border-[#B49A65]/60 bg-[#493126] px-5 py-3 text-[#F5EBDD] transition-all duration-300 hover:bg-[#B49A65] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M12 21s8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 8 12 8 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>

          <span
            className="whitespace-nowrap text-[10px] tracking-[0.15em] sm:text-[11px]"
            style={{ fontFamily: "var(--font-poppins-custom)" }}
          >
            BUKA MAPS
          </span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
      {/* Curved Bottom - Soft Upward Curve */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="block h-[65px] w-full sm:h-[85px] md:h-[100px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 C360,65 1080,65 1440,120 L1440,120 L0,120 Z"
            fill="#241812"
          />
        </svg>
      </div>
    </section>
  );
}
