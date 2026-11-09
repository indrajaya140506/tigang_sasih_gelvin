"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GateIntroProps {
  onComplete: () => void;
}

const dateText = "10 DESEMBER 2026";

export default function GateIntro({ onComplete }: GateIntroProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [typedDate, setTypedDate] = useState("");

  useEffect(() => {
    let index = 0;
    let typingTimer: ReturnType<typeof setInterval> | undefined;

    const typingStart = setTimeout(() => {
      typingTimer = setInterval(() => {
        index++;
        setTypedDate(dateText.slice(0, index));

        if (index >= dateText.length && typingTimer) {
          clearInterval(typingTimer);
        }
      }, 130);
    }, 2200);

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 4800);

    return () => {
      clearTimeout(typingStart);
      clearTimeout(timer);

      if (typingTimer) {
        clearInterval(typingTimer);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#080706]"
      style={{ minHeight: "100dvh" }}
      initial={{ y: 0 }}
      animate={{
        y: isExiting ? "-100%" : 0,
      }}
      transition={
        isExiting
          ? {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (isExiting) {
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
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/75" />

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

        {/* Typing Date */}
        <div className="mt-7 min-h-7">
          <p
            style={{ fontFamily: "var(--font-cinzel-custom)" }}
            className="whitespace-nowrap text-xs font-medium tracking-[0.2em] text-[#E9DDC9] sm:text-sm sm:tracking-[0.3em]"
          >
            {typedDate}
            <span className="ml-1 inline-block h-3.5 w-px animate-pulse bg-[#E9DDC9] align-middle" />
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
