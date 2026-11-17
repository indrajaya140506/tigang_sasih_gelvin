"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Gelvin() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gelvin"
      className="relative flex min-h-[750px] w-full items-end justify-center overflow-hidden bg-black sm:min-h-[850px] md:min-h-[900px]"
    >
      {/* Background Foto */}
      <Image
        src="/images/gelvin.jpg"
        alt="Putu Gelvin Albern Danisvara"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

      {/* Konten Rata Kanan */}
      <div
        className={`relative z-10 w-full px-6 pb-24 text-right sm:px-10 sm:pb-28 md:pb-32 transition-all duration-[1500ms] ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Nama Gelvin */}
        <h2
          className="ml-auto mt-2 w-full whitespace-nowrap text-right text-[clamp(24px,5.5vw,74px)] font-semibold leading-tight text-white"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            textShadow:
              "0 0 16px rgba(255,255,255,0.4), 0 0 28px rgba(255,255,255,0.15)",
          }}
        >
          Putu Gelvin Albern Danisvara
        </h2>

        {/* Keterangan Orang Tua */}
        <div className="ml-auto mt-0 max-w-md space-y-0.5">
          <p
            className="text-xs font-light leading-relaxed tracking-[0.15em] text-white/85 sm:text-sm"
            style={{ fontFamily: "var(--font-poppins-custom)" }}
          >
            Putra dari pasangan
          </p>

          <p
            className="text-xs font-light leading-relaxed tracking-[0.15em] text-white/85 sm:text-sm"
            style={{ fontFamily: "var(--font-poppins-custom)" }}
          >
            Kadek Arya Agus Rudita &
          </p>

          <p
            className="text-xs font-light leading-relaxed tracking-[0.15em] text-white/85 sm:text-sm"
            style={{ fontFamily: "var(--font-poppins-custom)" }}
          >
            Ni Luh Vera Astuti
          </p>
        </div>
      </div>
    </section>
  );
}
