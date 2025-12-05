"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="w-full bg-[#f2f2f2]/50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Image on top */}
        <motion.div
          className="
            w-full md:w-1/2 
            flex justify-center 
            -mt-20 md:-mt-70 
            -mb-12 md:-mb-30 
            z-50
            opacity-0 
          "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/drdm-mockup.svg"
            alt="DRDM Dashboard"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-none object-contain rounded-xl"
          />
        </motion.div>

        {/* Text below */}
        <motion.div
          className="w-full flex flex-col items-center text-center px-2 sm:px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-6 max-w-4xl">
            INTRODUCING DRDM, A POWERFUL DIGITAL CONTRACTS SOLUTION FOR MARKET DATA
          </h1>
          <p className="text-black/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            Built on decades of experience in the trillion-dollar Capital Markets, 
            spanning investment banking, stock exchanges, and major financial 
            institutions, DRDM is a comprehensive platform designed to safeguard 
            the rights, ownership, and usage of digital content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
