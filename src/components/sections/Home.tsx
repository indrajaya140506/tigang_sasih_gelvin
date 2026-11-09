"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface HomeProps {
  onOpenInvitation: () => void;
}

export default function Home({ onOpenInvitation }: HomeProps) {
  const [guestName, setGuestName] = useState("Nama Undangan");
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestName(params.get("to") || "Nama Undangan");
  }, []);

  return (
    <motion.section
      id="home"
      className="relative flex h-dvh min-h-dvh w-full flex-col items-center overflow-hidden bg-[#080706] text-white"
      initial={{ y: 0 }}
      animate={{
        y: isOpening ? "-100%" : 0,
      }}
      transition={
        isOpening
          ? {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (isOpening) {
          onOpenInvitation();
        }
      }}
    >
      {/* Background */}
      <img
        src="/images/putuz.jpeg"
        alt="Foto Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Heading */}
      <motion.div
        className="relative z-10 mt-[10vh] flex flex-col items-center px-4 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1
          style={{ fontFamily: "var(--font-cinzel-custom)" }}
          className="text-3xl font-medium tracking-wide text-[#F5EBDD]"
        >
          TIGANG SASIH
        </h1>

        <p
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          className="mt-1 text-4xl font-normal leading-tight text-[#F5EBDD]"
        >
          Gelvin
        </p>
      </motion.div>

      {/* Guest Information */}
      <motion.div
        className="relative z-10 mt-auto mb-[16vh] flex flex-col items-center px-4 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-sm font-light tracking-wide sm:text-base">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>

        <h2 className="mt-1 max-w-[90vw] break-words text-[17px] font-semibold text-[#C5A46D] sm:text-lg">
          {guestName}
        </h2>
        <p className="mt-1 text-sm font-medium italic sm:text-base">
          di Tempat
        </p>
        <motion.button
          type="button"
          onClick={() => setIsOpening(true)}
          disabled={isOpening}
          whileTap={{ scale: 0.96 }}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#806044]/40 px-4 py-2 text-xs font-normal tracking-wide text-white shadow-md backdrop-blur-[2px] transition-colors hover:bg-[#94704F]/55 active:bg-[#A9845D]/65 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Mail size={13} strokeWidth={1.8} className="text-[#806044]" />
          </span>
          BUKA UNDANGAN
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
