"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-end overflow-hidden bg-black px-6 pb-16 pt-20 text-center sm:pb-20"
      style={{
        backgroundImage: "url('/images/gelvin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CURVE TOP */}
      <div className="absolute top-0 left-0 z-20 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-[35px] w-full sm:h-[45px]"
        >
          <path d="M0 80 Q720 -10 1440 80 L1440 0 L0 0 Z" fill="#FFFFFF" />
        </svg>
      </div>
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* GRADIENT BAWAH */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-md"
      >
        {/* NAMA PASANGAN */}
        <h2
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          className="-mt-28 mb-16 text-5xl font-normal leading-tight text-white sm:text-7xl"
        >
          Gelvin
        </h2>
        {/* UCAPAN TERIMA KASIH */}
        <p
          className="mx-auto max-w-[380px] text-[15px] font-normal leading-[1.9] text-white sm:text-[17px]"
          style={{
            fontFamily: "var(--font-poppins-custom)",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Terima kasih atas ucapan, doa, dan kesediaannya untuk datang di acara
          tigang sasih anak kami.
        </p>
      </motion.div>
    </footer>
  );
}
