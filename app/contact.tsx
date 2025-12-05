"use client";

import { motion } from "framer-motion";
import Footer from "./footer";

export default function Contact() {
  return (
    <>
    <section className="min-h-screen flex flex-col">

      {/* Main Content Wrapper */}
      <div className="flex-grow w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-6">

        {/* Map Left */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 h-96 md:h-[500px] rounded-xl overflow-hidden border-2"
        >
          <iframe
            title="Broadhead Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.879357657532!2d-0.08527!3d51.52232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab5aa2d6d3%3A0x8598f45a8f3c3e90!2s31%20Worship%20St%2C%20Islington%2C%20London%20EC2A%202DX%2C%20UK!5e0!3m2!1sen!2sus!4v1701620361240!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Contact Info Right */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#27c885]">LET'S TALK</h2>
          <p className="text-lg sm:text-xl opacity-80">
            Do not let outdated systems slow your firm down
          </p>

          <a href="mailto:infosec@broadheadtechnologies.com" className="block h-full w-full">
            <button className="h-full w-full mt-6 mb-2 relative overflow-hidden group px-6 py-3 bg-[#27c885] text-black font-semibold rounded-lg border-2 border-[#27c885] transition cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#27c885]">
                GET IN TOUCH
              </span>
              <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out border-2 border-[#27c885] rounded-lg"></span>
            </button>
          </a>

          <p className="text-lg sm:text-xl opacity-80">Request a demo today!</p>

          <div className="mt-6 space-y-2 text-lg sm:text-2xl">
            <p>31 Worship Street, London, EC2A 2DX</p>
            <p className="text-[#27c885] font-semibold">+44 20 3328 7600</p>
            <p className="text-[#27c885] font-semibold">info@broadheadtechnologies.com</p>
          </div>

        </motion.div>
      </div>
      <Footer />
      </section>
    </>
  );
  
}
