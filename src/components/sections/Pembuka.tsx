"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Pembuka() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black px-5 py-16 text-center sm:py-20"
    >
      {/* Background Foto Gelvin */}
      <Image
        src="/images/utu.jpeg"
        alt="Foto pasangan Gelvin"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* Aksara Bali */}
        <div
          className={`mb-3 transition-all duration-[1500ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/images/aksara.png"
            alt="Aksara Bali Om Swastyastu"
            width={320}
            height={120}
            priority
            className="h-auto w-[160px] object-contain sm:w-[200px] md:w-[230px]"
          />
        </div>

        {/* Om Swastyastu */}
        <h2
          className={`mb-4 text-[2.1rem] font-normal tracking-wide text-white transition-all duration-[1500ms] delay-200 ease-out sm:text-[2.6rem] md:text-5xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          Om Swastyastu
        </h2>

        {/* Kata Pengantar */}
        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className={`mx-auto max-w-3xl text-sm font-normal leading-[1.65] tracking-[0.12em] text-white transition-all duration-[1200ms] delay-500 sm:text-base ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada upacara
          tigang sasih putra kami.
        </p>
      </div>
    </section>
  );
}
