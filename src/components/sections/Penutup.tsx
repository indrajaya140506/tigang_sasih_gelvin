"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex min-h-[180px] w-full flex-col items-center justify-center gap-5 bg-black px-6 py-12 text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-sm text-white/70 sm:text-base"
      >
        Invitation by{" "}
        <a
          href="https://indrajaya.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white transition-colors hover:text-[#c9a56a]"
        >
          indrajaya.my.id
        </a>
      </motion.p>

      <motion.a
        href="https://wa.me/6283142730107"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/70 transition-all duration-300 hover:scale-110 hover:text-[#25D366]"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </footer>
  );
}
