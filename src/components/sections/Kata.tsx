"use client";

import { useEffect, useRef, useState } from "react";

export default function Kata() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const meaningText =
    "Semoga kami mendengar hal-hal yang baik, melihat hal-hal yang baik, memiliki anggota tubuh yang kuat, serta menjalani kehidupan panjang yang diberkati oleh Tuhan.";

  const [typedMeaning, setTypedMeaning] = useState("");

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

  // Typewriter Animation for Meaning
  // Slow Typewriter Animation - Tidak Looping
  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = window.setInterval(() => {
      index++;

      setTypedMeaning(meaningText.slice(0, index));

      if (index >= meaningText.length) {
        window.clearInterval(interval);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [isVisible]);
  return (
    <section
      ref={sectionRef}
      id="doa"
      className="relative -mt-px flex w-full flex-col items-center justify-center overflow-hidden bg-black/50 px-6 pb-32 pt-16 text-center sm:pb-36 sm:pt-20"
    >
      {/* Circular Tigang Sasih Gelvin with Om Center */}
      <div
        className={`mb-9 transition-all duration-[1600ms] ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 220 220"
          className="h-auto w-[175px] sm:w-[195px] md:w-[210px]"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Tigang Sasih Gelvin dengan simbol Om"
        >
          <defs>
            <path
              id="tigangSasihCircle"
              d="M 110,110 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              fill="none"
            />
          </defs>

          {/* Tulisan Melingkar */}
          <defs>
            <path
              id="tigangSasihCircle"
              d="
      M 110,32
      A 78,78 0 1,1 110,188
      A 78,78 0 1,1 110,32
    "
              fill="none"
            />
          </defs>

          <g className={isVisible ? "tigang-wheel" : ""}>
            <text
              fill="#FFFFFF"
              fontSize="17"
              fontFamily="var(--font-cormorant), Georgia, serif"
              fontWeight="600"
              letterSpacing="1.8"
              textAnchor="middle"
              textLength="490"
              lengthAdjust="spacing"
            >
              <textPath href="#tigangSasihCircle" startOffset="50%">
                TIGANG SASIH GELVIN • TIGANG SASIH GELVIN •
              </textPath>
            </text>
          </g>

          {/* Simbol Om Tepat di Tengah */}
          <text
            x="110"
            y="110"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            fontSize="49"
            fontFamily="serif"
            fontWeight="400"
            textRendering="geometricPrecision"
            className={`transition-opacity duration-[1800ms] delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            ॐ
          </text>

          <style>
            {`
        .tigang-wheel {
          transform-box: view-box;
          transform-origin: 110px 110px;
          animation: tigangWheelRotate 24s linear infinite;
          will-change: transform;
        }

        @keyframes tigangWheelRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tigang-wheel {
            animation: none;
          }
        }
      `}
          </style>
        </svg>
      </div>

      {/* Vedic Mantra */}
      <div
        className={`mx-auto max-w-3xl space-y-0.5 transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-white sm:text-lg"
        >
          Bhadram karnebhih srnuyama devah,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-white sm:text-lg"
        >
          bhadram pasyemaksabhir yajatrah,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-white sm:text-lg"
        >
          sthirair angais tustuvamsas tanubhir,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-white sm:text-lg"
        >
          vyasema devahitam yadayuh.
        </p>
      </div>

      {/* Meaning */}
      <p
        style={{ fontFamily: "var(--font-poppins-custom)" }}
        className={`mx-auto mt-9 h-[165px] max-w-2xl whitespace-normal text-base font-normal leading-[1.65] text-white transition-opacity duration-1000 delay-500 sm:h-[100px] sm:text-lg ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {typedMeaning}
        {typedMeaning.length < meaningText.length && (
          <span className="ml-0.5 inline-block animate-pulse">|</span>
        )}
      </p>

      {/* Om Symbol and Veda Reference */}
      <div
        className={`mt-9 flex flex-col items-center transition-all duration-1000 delay-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <p className="text-3xl text-[#B49A65]">ॐ</p>

        <div className="mt-3 flex items-center gap-2 text-[#A48662]">
          {/* 3D Dark Brown Closed Book Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="bookBrown" x1="7" y1="4" x2="25" y2="25">
                <stop offset="0%" stopColor="#79543A" />
                <stop offset="50%" stopColor="#543725" />
                <stop offset="100%" stopColor="#38251C" />
              </linearGradient>

              <linearGradient id="bookSpine" x1="7" y1="5" x2="11" y2="25">
                <stop offset="0%" stopColor="#8B6748" />
                <stop offset="100%" stopColor="#422C20" />
              </linearGradient>
            </defs>

            {/* White 3D Pages - Bottom */}
            <path
              d="M8 23.5L25 20.5V24L9 27L7 25.5V23.5Z"
              fill="#FFFFFF"
              stroke="#D8D1C7"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />

            <path d="M9 25L25 22.2V24L9 27L9 25Z" fill="#E8E3DA" />

            {/* Book Side */}
            <path
              d="M25 5L27 6.5V23L25 24V5Z"
              fill="#D9D4CA"
              stroke="#C7BFB2"
              strokeWidth="0.6"
            />

            {/* Dark Brown Cover */}
            <path
              d="M7 5.5L25 3V21.5L7 24.5V5.5Z"
              fill="url(#bookBrown)"
              stroke="#38251C"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />

            {/* Book Spine */}
            <path d="M7 5.5L10 6.2V24L7 24.5V5.5Z" fill="url(#bookSpine)" />

            {/* Cover Border */}
            <path
              d="M12 7.5L22.5 6V19.5L12 21.3V7.5Z"
              stroke="#C5A477"
              strokeWidth="0.8"
              opacity="0.9"
            />

            {/* Gold Ornament */}
            <path
              d="M17.2 11L19 13.5L17.2 16L15.4 13.5L17.2 11Z"
              fill="#D6B77B"
            />

            {/* Spine Decoration */}
            <path d="M8.5 9L8.5 21.5" stroke="#B18B5B" strokeWidth="0.7" />
          </svg>

          <p
            style={{ fontFamily: "var(--font-poppins-custom)" }}
            className="text-base font-extrabold italic tracking-[0.12em] text-[#B49A65] sm:text-lg"
          >
            Rg Veda I.89.8
          </p>
        </div>
      </div>
    </section>
  );
}
