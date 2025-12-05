"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    "Modernise market data operations for efficiency",
    "Reduce operational costs",
    "Help firms stay compliant",
    "Maximise revenue",
  ];

  return (
    <section className="w-full relative h-auto py-16 sm:py-20">
    {/* Video Background */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="https://vid.cdn-website.com/b0b5cb2c/videos/HJsN1sJbRMW5h5cPpUTB_AdobeStock_966786656-v.mp4"
      style={{ opacity: 0.7 }}
      autoPlay
      loop
      muted
    />

    {/* Content Overlay */}
    <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 sm:px-6 z-30">
      {/* Left Side Title */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left text-black flex flex-col justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide mb-4">
          Why DRDM?
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Managing digital rights and ensuring compliance can be complex, with fragmented systems and increased regulatory scrutiny. Supported by a distributed ledger technology (DLT) based digital contracts network (DCN), DRDM helps data providers:
        </p>
      </motion.div>

      {/* Right Side Benefits List */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 text-[#27c885] justify-center text-base sm:text-lg md:text-2xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            • {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  );
}
