"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hadiah() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const rekening = "1450016080000";
  const nama = "Kadek Arya Agus Rudita";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(rekening);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hadiah"
      className="relative w-full bg-white px-5 py-20 sm:py-24"
    >
      {/* Curved Top - Soft Brown */}
      <div className="absolute top-0 left-0 z-10 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 100"
          className="block h-[45px] w-full sm:h-[55px] md:h-[65px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 H1440 V15 Q720,65 0,15 Z" fill="#241812" />
        </svg>
      </div>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {/* Heading */}
        <p
          className="text-4xl font-normal text-[#493126] sm:text-5xl"
          style={{ fontFamily: "var(--font-great-vibes-custom)" }}
        >
          Amplop Digital
        </p>

        {/* Description */}
        <p
          className="mt-5 text-sm font-light leading-7 text-[#493126] sm:text-base"
          style={{ fontFamily: "var(--font-poppins-custom)" }}
        >
          Doa restu anda merupakan karunia yang sangat berarti bagi kami. Namun
          jika memberi adalah ungkapan tanda kasih, anda dapat memberi kado
          secara cashless.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[#493126] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B49A65]"
          style={{ fontFamily: "var(--font-poppins-custom)" }}
        >
          {/* Gift Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <rect x="3" y="9" width="18" height="12" rx="1" />
            <path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5C10 8 12 9 12 9ZM12 9h4.5a2.5 2.5 0 1 0-2.5-2.5C14 8 12 9 12 9Z" />
          </svg>

          {isOpen ? "Tutup Hadiah" : "Kirim Hadiah"}
        </button>

        {/* Bank Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotateX: 15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                rotateX: 10,
                scale: 0.95,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -4,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                perspective: 1000,
              }}
              className="mt-12 w-full rounded-xl border border-[#B49A65]/30 bg-[#493126] p-6 text-left text-white shadow-[0_20px_40px_rgba(36,24,18,0.20),0_8px_16px_rgba(36,24,18,0.12)] sm:p-7"
            >
              {/* Bank Name */}
              <div className="mb-7">
                <p
                  className="text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-poppins-custom)" }}
                >
                  mandiri
                </p>
              </div>

              {/* Divider */}
              <div className="mb-5 h-px w-[65%] bg-white/70" />

              {/* Account */}
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p
                    className="text-base font-semibold tracking-wide sm:text-lg"
                    style={{ fontFamily: "var(--font-poppins-custom)" }}
                  >
                    {rekening}
                  </p>

                  <p
                    className="mt-1 text-sm font-light sm:text-base"
                    style={{ fontFamily: "var(--font-poppins-custom)" }}
                  >
                    {nama}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-3 text-xs font-medium text-[#A18D79] transition hover:bg-[#F5EBDD]"
                  style={{ fontFamily: "var(--font-poppins-custom)" }}
                >
                  {copied ? "Tersalin ✓" : "Salin"}

                  {!copied && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                    >
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 a0 2h1" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
