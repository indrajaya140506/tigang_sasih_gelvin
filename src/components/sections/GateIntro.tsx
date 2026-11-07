"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GateIntroProps {
  onComplete: () => void;
}

export default function GateIntro({ onComplete }: GateIntroProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#21150F]"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1],
            },
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
            <h1 className="font-serif text-3xl font-light leading-relaxed tracking-[0.12em] text-[#E9DDC9] sm:text-5xl sm:tracking-[0.2em]">
              TIGANG SASIH
            </h1>

            <p className="mt-2 font-serif text-3xl italic tracking-[0.16em] text-[#C5A46D] sm:text-5xl">
              Gelvin
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
