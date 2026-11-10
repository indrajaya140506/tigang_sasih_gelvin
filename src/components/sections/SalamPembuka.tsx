"use client";

import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <section
      id="greeting"
      className="relative overflow-hidden bg-[#F9F6EF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-8 h-[1px] bg-[#B89B65]"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-xs tracking-[0.35em] text-[#A58A5A] uppercase"
        >
          Salam Pembuka
        </motion.p>

        {/* Sanskrit Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-xl leading-relaxed text-[#594936] md:text-3xl"
        >
          "Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair
          naptrbhih, Modamānau sve grhe."
        </motion.h2>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-12 bg-[#B89B65]" />

        {/* Translation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto max-w-2xl text-sm leading-8 text-[#776B5D] md:text-base"
        >
          Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan. Semoga menikmati kehidupan yang panjang, dipenuhi
          kebahagiaan bersama keluarga.
        </motion.p>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#776B5D] md:text-base"
        >
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
          turut hadir dan memberikan doa restu dalam rangkaian upacara Tigang
          Sasih putra kami tercinta.
        </motion.p>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 font-serif text-3xl text-[#A58A5A] md:text-4xl"
        >
          Gelvin
        </motion.p>

        {/* Bottom Ornament */}
        <div className="mx-auto mt-8 h-[1px] w-16 bg-[#B89B65]" />
      </div>
    </section>
  );
}
