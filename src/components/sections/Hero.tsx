"use client";

import { useEffect, useState } from "react";

const photos = ["/images/gelvin.jpg", "/images/putuz.jpeg", "/images/tuz.jpg"];

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
      <div className="relative z-10 mb-40 ml-8 text-left sm:mb-44 sm:ml-16">
        {/* Ceremony Label */}

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
    </section>
  );
}
