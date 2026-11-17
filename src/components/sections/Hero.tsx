"use client";

import { useEffect, useState } from "react";

const photos = ["/images/gelvin.jpg", "/images/utu.jpeg", "/images/tuz.jpg"];

export default function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="undangan"
      className="relative flex min-h-dvh w-full items-end justify-start overflow-hidden bg-[#493126]"
    >
      {/* Background Slideshow */}
      {photos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt="Foto Gelvin"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            currentPhoto === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Title - Bottom Left */}
      <div className="relative z-20 mb-40 ml-8 text-left sm:mb-44 sm:ml-16">
        {/* Date */}
        <p
          style={{ fontFamily: "var(--font-poppins-custom)" }}
          className="mb-1 text-sm font-normal tracking-normal text-[#F5EBDD]"
        >
          10.12.2026
        </p>

        {/* Main Title */}
        <h1
          style={{ fontFamily: "var(--font-cinzel-custom)" }}
          className="text-3xl font-medium tracking-normal text-[#F5EBDD] sm:text-5xl"
        >
          TIGANG SASIH
        </h1>

        {/* Name */}
        <p
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          className="mt-0 text-4xl font-normal leading-tight text-[#F5EBDD] sm:text-6xl"
        >
          Gelvin
        </p>
      </div>
      {/* Curved Bottom Transition */}
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
