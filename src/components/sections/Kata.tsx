"use client";

import { useEffect, useRef, useState } from "react";

export default function Kata() {
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
      id="doa"
      className="relative -mt-px flex w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pb-32 pt-16 text-center sm:pb-36 sm:pt-20"
    >
      {/* Golden Botanical Flower Illustration */}
      <div
        className={`mb-9 transition-all duration-[1600ms] ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <svg
          width="150"
          height="180"
          viewBox="0 0 150 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`
                .flower-stem {
                  stroke-dasharray: 200;
                  stroke-dashoffset: ${isVisible ? 0 : 200};
                  transition: stroke-dashoffset 3s ease-out;
                }

                .flower-bloom {
                  transform-box: fill-box;
                  transform-origin: center;
                  transform: scale(${isVisible ? 1 : 0});
                  opacity: ${isVisible ? 1 : 0};
                  transition:
                    transform 1.8s cubic-bezier(0.2, 0.8, 0.3, 1),
                    opacity 1.2s ease;
                }

                .flower-leaf {
                  transform-box: fill-box;
                  transform-origin: center;
                  transform: scale(${isVisible ? 1 : 0});
                  opacity: ${isVisible ? 1 : 0};
                  transition:
                    transform 1.5s ease-out,
                    opacity 1.2s ease;
                }

                .flower-sway {
  transform-box: view-box;
  transform-origin: 50% 94%;
  animation: flowerSway 4.5s ease-in-out infinite;
  animation-play-state: ${isVisible ? "running" : "paused"};
  will-change: transform;
}

@keyframes flowerSway {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(7deg);
  }
  50% {
    transform: rotate(-6deg);
  }
  75% {
    transform: rotate(5deg);
  }
}
              `}
            </style>
          </defs>

          {/* Flower Movement Group */}
          <g className="flower-sway">
            {/* Main Stems */}
            <g
              stroke="#B49A65"
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
            >
              <path className="flower-stem" d="M73 169 C70 125 76 82 65 28" />
              <path className="flower-stem" d="M74 169 C83 125 93 87 104 48" />
              <path className="flower-stem" d="M72 169 C61 130 45 100 32 73" />
              <path className="flower-stem" d="M74 169 C77 133 81 108 91 83" />
              <path className="flower-stem" d="M73 169 C64 135 57 119 48 100" />
            </g>

            {/* Leaves */}
            <g
              fill="none"
              stroke="#B49A65"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g className="flower-leaf">
                <path d="M68 111 C42 99 32 79 37 69 C54 78 69 92 68 111Z" />
                <path d="M68 111 L39 74" />
                <path d="M56 96 L47 96 M49 86 L42 84" />
              </g>

              <g className="flower-leaf">
                <path d="M77 131 C101 114 115 112 121 99 C105 99 85 110 77 131Z" />
                <path d="M77 131 L116 103" />
                <path d="M91 120 L91 112 M103 112 L103 106" />
              </g>

              <g className="flower-leaf">
                <path d="M65 139 C43 126 34 111 30 97 C47 104 63 119 65 139Z" />
                <path d="M65 139 L33 102" />
              </g>

              <g className="flower-leaf">
                <path d="M82 99 C99 82 104 67 100 57 C86 66 79 82 82 99Z" />
                <path d="M82 99 L98 62" />
              </g>

              <g className="flower-leaf">
                <path d="M70 76 C50 63 45 49 48 39 C62 48 71 61 70 76Z" />
                <path d="M70 76 L50 43" />
              </g>

              <g className="flower-leaf">
                <path d="M76 88 C92 72 91 57 87 48 C76 59 72 75 76 88Z" />
                <path d="M76 88 L86 52" />
              </g>
            </g>

            {/* Flowers - Bloom Animation */}
            <g className="flower-bloom" style={{ transitionDelay: "0.4s" }}>
              <g stroke="#B49A65" strokeWidth="0.85" fill="none">
                <path d="M64 31 C51 22 52 13 60 10 C67 13 69 21 64 31Z" />
                <path d="M64 31 C65 16 71 8 77 12 C81 20 73 28 64 31Z" />
                <path d="M64 31 C75 24 84 25 84 33 C80 40 70 37 64 31Z" />
                <path d="M64 31 C66 43 60 49 54 44 C50 38 56 32 64 31Z" />
                <path d="M64 31 C54 35 46 30 49 23 C53 18 61 24 64 31Z" />
                <path d="M64 31 L64 45" />
              </g>
              <circle cx="64" cy="31" r="1.5" fill="#B49A65" />
            </g>

            <g className="flower-bloom" style={{ transitionDelay: "0.9s" }}>
              <g stroke="#B49A65" strokeWidth="0.9" fill="none">
                <path d="M104 49 C93 41 93 33 100 30 C107 34 109 42 104 49Z" />
                <path d="M104 49 C105 36 113 31 119 36 C120 43 112 49 104 49Z" />
                <path d="M104 49 C117 44 123 50 119 57 C113 61 107 54 104 49Z" />
                <path d="M104 49 C108 62 100 68 94 61 C92 55 98 50 104 49Z" />
                <path d="M104 49 C94 55 86 49 90 42 C94 38 101 44 104 49Z" />
              </g>
              <circle cx="104" cy="49" r="1.5" fill="#B49A65" />
            </g>

            <g className="flower-bloom" style={{ transitionDelay: "1.3s" }}>
              <g stroke="#B49A65" strokeWidth="0.85" fill="none">
                <path d="M37 71 C28 64 29 57 35 55 C41 60 41 66 37 71Z" />
                <path d="M37 71 C40 60 47 58 51 64 C51 70 43 73 37 71Z" />
                <path d="M37 71 C48 72 50 79 44 83 C38 83 36 76 37 71Z" />
                <path d="M37 71 C35 82 27 85 23 78 C24 72 31 69 37 71Z" />
                <path d="M37 71 C27 73 21 67 26 61 C31 58 35 65 37 71Z" />
              </g>
              <circle cx="37" cy="71" r="1.5" fill="#B49A65" />
            </g>

            <g className="flower-bloom" style={{ transitionDelay: "1.6s" }}>
              <g stroke="#B49A65" strokeWidth="0.85" fill="none">
                <path d="M88 83 C79 76 80 70 86 67 C92 72 92 78 88 83Z" />
                <path d="M88 83 C92 73 98 72 102 77 C102 83 95 86 88 83Z" />
                <path d="M88 83 C99 84 100 91 94 95 C88 94 87 88 88 83Z" />
                <path d="M88 83 C85 94 78 96 74 89 C76 84 82 81 88 83Z" />
              </g>
              <circle cx="88" cy="83" r="1.4" fill="#B49A65" />
            </g>
          </g>
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
          className="text-base font-bold italic leading-snug text-[#3F3F3F] sm:text-lg"
        >
          Bhadram karnebhih srnuyama devah,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-[#3F3F3F] sm:text-lg"
        >
          bhadram pasyemaksabhir yajatrah,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-[#3F3F3F] sm:text-lg"
        >
          sthirair angais tustuvamsas tanubhir,
        </p>

        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="text-base font-bold italic leading-snug text-[#3F3F3F] sm:text-lg"
        >
          vyasema devahitam yadayuh.
        </p>
      </div>

      {/* Meaning */}
      <p
        style={{ fontFamily: "var(--font-poppins-custom)" }}
        className={`mx-auto mt-9 max-w-2xl text-base font-normal leading-[1.65] text-[#555555] transition-all duration-1000 delay-500 sm:text-lg ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Semoga kami mendengar hal-hal yang baik, melihat hal-hal yang baik,
        memiliki anggota tubuh yang kuat, serta menjalani kehidupan panjang yang
        diberkati oleh Tuhan.
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
            className="text-base font-bold italic tracking-[0.12em] text-[#B49A65] sm:text-lg"
          >
            Rg Veda I.89.8
          </p>
        </div>
      </div>

      {/* Bottom Curved Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block h-[55px] w-full sm:h-[85px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,35 C360,125 1080,125 1440,35 L1440,120 L0,120 Z"
            fill="#F8F3EC"
          />
        </svg>
      </div>
    </section>
  );
}
