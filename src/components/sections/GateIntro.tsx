"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GateIntroProps {
  onComplete: () => void;
}

export default function GateIntro({ onComplete }: GateIntroProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#21150F] ${
        isExiting ? "gate-exit" : ""
      }`}
      onAnimationEnd={(event) => {
        if (
          isExiting &&
          event.target === event.currentTarget &&
          event.animationName === "gateSlideUp"
        ) {
          onComplete();
        }
      }}
    >
      {/* Background Photo */}
      <img
        src="/images/gelvin.jpg"
        alt="Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#21150F]/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Intro Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
      >
        <h1
          style={{ fontFamily: "var(--font-cinzel-custom)" }}
          className="text-3xl font-medium leading-relaxed tracking-[0.12em] text-[#E9DDC9] sm:text-5xl sm:tracking-[0.2em]"
        >
          TIGANG SASIH
        </h1>

        <p
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          className="mt-2 text-4xl font-normal text-[#C5A46D] sm:text-5xl"
        >
          Gelvin
        </p>
      </motion.div>

      <style jsx>{`
        .gate-exit {
          animation: gateSlideUp 1.3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          will-change: transform;
        }

        @keyframes gateSlideUp {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(0, -100%, 0);
          }
        }
      `}</style>
    </div>
  );
}
