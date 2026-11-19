"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function DetailAcara() {
  const [countdown, setCountdown] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Reveal
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

  // Countdown
  useEffect(() => {
    const targetDate = new Date(2026, 11, 10, 0, 0, 0).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setCountdown({ hari: 0, jam: 0, menit: 0, detik: 0 });
        return;
      }

      setCountdown({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance / (1000 * 60 * 60)) % 24),
        menit: Math.floor((distance / (1000 * 60)) % 60),
        detik: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "HARI", value: countdown.hari },
    { label: "JAM", value: countdown.jam },
    { label: "MENIT", value: countdown.menit },
    { label: "DETIK", value: countdown.detik },
  ];

  // Class animasi bertahap
  const revealClass = (delay: number) =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      id="detail-acara"
      className="relative flex min-h-[750px] w-full flex-col items-center justify-center overflow-hidden bg-black px-5 py-20 sm:min-h-[850px]"
    >
      {/* Background Foto Gelvin */}
      <Image
        src="/images/gelvin.jpg"
        alt="Foto Gelvin"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay Hitam Transparan */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center rounded-[28px] border border-white/20 bg-black/15 px-6 py-8 text-center text-white backdrop-blur-[2px]">
        {/* Deskripsi Undangan */}
        <p
          className={`${revealClass(0)} max-w-sm text-sm font-light leading-7 tracking-[0.08em] text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.25)] sm:text-base`}
          style={{
            fontFamily: "var(--font-poppins-custom)",
            transitionDelay: isVisible ? "0ms" : "0ms",
          }}
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu.
        </p>

        {/* Divider Atas */}
        <div
          className={`mt-4 mb-3 h-px w-full bg-white/40 ${revealClass(1)}`}
          style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
        />

        {/* Nama Acara */}
        <h3
          className={`${revealClass(2)} text-sm font-light tracking-[0.25em] text-white`}
          style={{
            fontFamily: "var(--font-poppins-custom)",
            transitionDelay: isVisible ? "450ms" : "0ms",
          }}
        >
          RESEPSI
        </h3>

        {/* Divider Bawah */}
        <div
          className={`mt-3 mb-6 h-px w-full bg-white/40 ${revealClass(3)}`}
          style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
        />

        {/* Informasi Acara */}
        <div className="mt-6 grid w-full grid-cols-2 gap-6">
          {/* Waktu */}
          <div
            className={`flex flex-col items-center ${revealClass(4)}`}
            style={{ transitionDelay: isVisible ? "850ms" : "0ms" }}
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>

            <p className="mt-1 text-xs text-white/80">10:00 WITA</p>
            <p className="mt-1 text-xs text-white/80">S/d</p>
            <p className="mt-1 text-xs text-white/80">Selesai</p>
          </div>

          {/* Tanggal */}
          <div
            className={`flex flex-col items-center ${revealClass(5)}`}
            style={{ transitionDelay: isVisible ? "1100ms" : "0ms" }}
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
              </svg>
            </div>

            <p className="mt-1 text-xs text-white/80">Kamis,</p>
            <p className="mt-1 text-xs text-white/80">10 Desember</p>
            <p className="mt-1 text-xs text-white/80">2026</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mx-auto mt-10 grid w-full max-w-[220px] grid-cols-2 gap-x-6 gap-y-6">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center ${revealClass(6 + index)}`}
              style={{
                transitionDelay: isVisible ? `${1400 + index * 200}ms` : "0ms",
              }}
            >
              <div className="flex aspect-square w-full max-w-[80px] items-center justify-center rounded-full border-2 border-white/90">
                <span
                  className="text-lg font-light tabular-nums sm:text-xl"
                  style={{ fontFamily: "var(--font-poppins-custom)" }}
                >
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-2 text-[9px] tracking-[0.15em] text-white/80 sm:text-[10px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Bottom - Sama seperti Hero */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="block h-[65px] w-full sm:h-[85px] md:h-[100px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,65 C360,95 1080,95 1440,65 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
