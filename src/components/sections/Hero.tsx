"use client";

import { useEffect, useState } from "react";

const photos = ["/images/gelvin.jpg", "/images/putu.jpeg", "/images/tuz.jpg"];

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  delay: `${(i % 9) * 1.2}s`,
  duration: `${8 + (i % 5) * 2}s`,
  size: `${10 + (i % 4) * 4}px`,
}));

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

      {/* Falling Flower Petals */}

      {/* Falling Pink Jepun Flowers */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="falling-petal absolute -top-12"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 100 100"
              fill="none"
            >
              <defs>
                <radialGradient id={`jepun-${petal.id}`}>
                  <stop offset="0%" stopColor="#FFF0E8" />
                  <stop offset="65%" stopColor="#F6B6C8" />
                  <stop offset="100%" stopColor="#E98BA9" />
                </radialGradient>
              </defs>

              <g fill={`url(#jepun-${petal.id})`}>
                <ellipse cx="50" cy="27" rx="12" ry="23" />
                <ellipse
                  cx="50"
                  cy="27"
                  rx="12"
                  ry="23"
                  transform="rotate(72 50 50)"
                />
                <ellipse
                  cx="50"
                  cy="27"
                  rx="12"
                  ry="23"
                  transform="rotate(144 50 50)"
                />
                <ellipse
                  cx="50"
                  cy="27"
                  rx="12"
                  ry="23"
                  transform="rotate(216 50 50)"
                />
                <ellipse
                  cx="50"
                  cy="27"
                  rx="12"
                  ry="23"
                  transform="rotate(288 50 50)"
                />
              </g>

              <circle cx="50" cy="50" r="7" fill="#E9B95D" />
            </svg>
          </span>
        ))}
      </div>

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
    </section>
  );
}
