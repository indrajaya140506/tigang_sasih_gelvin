"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface HomeProps {
  onOpenInvitation: () => void;
}

export default function Home({ onOpenInvitation }: HomeProps) {
  return (
    <section
      id="home"
      className="relative flex h-dvh min-h-dvh w-full flex-col items-center overflow-hidden bg-[#21150F] text-white"
    >
      {/* Background */}
      <img
        src="/images/putu.jpeg"
        alt="Foto Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <motion.div
        className="relative z-10 mt-[12vh] flex flex-col items-center px-4 text-center"
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
        className="relative z-10 mt-auto mb-[10vh] flex flex-col items-center px-4 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-sm font-light tracking-wide sm:text-base">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>

        <h2 className="mt-2 font-medium text-xl sm:text-2xl">Nama Undangan</h2>

        <p className="mt-1 text-sm italic font-light">di Tempat</p>

        <motion.button
          type="button"
          onClick={onOpenInvitation}
          whileTap={{ scale: 0.95 }}
          className="mt-7 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#806044] to-[#C5A46D] px-7 py-3 text-xs font-medium tracking-wider text-white shadow-lg transition hover:brightness-110 sm:text-sm"
        >
          <Mail size={16} strokeWidth={1.7} />
          BUKA UNDANGAN
        </motion.button>
      </motion.div>
    </section>
  );
}
