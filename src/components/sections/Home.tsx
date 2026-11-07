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
      className="relative flex min-h-dvh h-dvh w-full flex-col overflow-hidden bg-[#21150F] text-white"
    >
      {/* Background Photo */}
      <img
        src="/images/putu.jpeg"
        alt="Foto Gelvin"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      {/* Title */}
      <motion.div
        className="relative z-10 px-5 pt-[12vh] text-center sm:pt-[10vh]"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm font-light tracking-wide sm:text-base">
          Undangan Upacara
        </p>

        <h1 className="mt-2 font-serif text-4xl font-bold italic leading-tight sm:text-5xl">
          Tigang Sasih
          <br />
          Gelvin
        </h1>
      </motion.div>

      {/* Guest Information */}
      <motion.div
        className="relative z-10 mt-auto flex flex-col items-center px-4 pb-[12vh] text-center sm:pb-[10vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="text-sm sm:text-base">Kepada Yth. Bapak/Ibu/Saudara/i</p>

        <h2 className="mt-1 text-xl font-bold sm:text-2xl">Nama Undangan</h2>

        <p className="mt-1 text-sm italic sm:text-base">di Tempat</p>

        {/* Open Invitation Button */}
        <motion.button
          type="button"
          onClick={onOpenInvitation}
          whileTap={{ scale: 0.95 }}
          className="mt-9 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#806044] to-[#C5A46D] px-7 py-3 text-xs font-medium tracking-wide text-white shadow-lg transition-all duration-500 hover:brightness-110 sm:text-sm"
        >
          <Mail size={16} strokeWidth={1.7} />
          BUKA UNDANGAN
        </motion.button>
      </motion.div>
    </section>
  );
}
