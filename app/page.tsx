"use client";

import Navbar from "./navbar";
import Hero from "./hero";
import Introduction from "./introduction";
import Benefits from "./benefits";
import Contact from "./contact";
import Footer from "./footer";
import Capabilities from "./capabilities";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">

      <div className="sticky top-0 z-60">
        <Navbar />
      </div>

      <div className="overflow-x-hidden">
        <Hero />

        <div className="relative">

          {/* solid background base */}
          <div
            className="absolute inset-0 -z-10"
            style={{ backgroundColor: "#F2F2F2" }}
          />

          {/* floating PNG background ABOVE the solid background */}
          <div
            className="
              absolute inset-0 
              bg-[url('/broadhead-bg.png')]
              bg-cover bg-center
              opacity-40
              pointer-events-none
              z-30
            "
          />

          {/* Content */}
          <div className="relative z-30">
            <Introduction />

            <div className="relative h-0">
            <motion.img
              src="/cjc-qr-mockup2.png"
              alt="QR Mockup"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="
                hidden md:block md:absolute md:-right-74 md:top-14      /* tablet/iPad */
                lg:-right-47 lg:-top-26                                  /* desktop/PC */
                w-[520px] md:w-[720px] lg:w-[880px]
                md:opacity-100 lg:opacity-100
                pointer-events-none select-none z-30
              "
            />
            </div>

            <Benefits />
            <Capabilities />
            {/* Contact - black background */}
            <div className="bg-black relative z-30">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
