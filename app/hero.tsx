"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import LaserFlow from "@/components/LaserFlow";
import BlurText from "@/components/BlurText";
import { useState, useEffect } from "react";

export default function Hero() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        horizontalBeamOffset={0.2}
        verticalBeamOffset={0.0}
        color="#27c885"
        dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
      />
      
      {/* Overlay content box */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "50%",
          backgroundColor: "transparent",
          borderTop: "2px solid #F2F2F2",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          zIndex: 6,
          padding: "0 20px",
        }}
      >

        {!isMobile && (
          <motion.img
            src="/Broadhead+chevrons.svg"
            alt="Broadhead Arrow Desktop"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "-25vh",
              left: "25vh",
              width: "30vh",
              height: "auto",
            }}
          />
        )}

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          key={Math.random()} // force remount each time it enters view
        >
          <BlurText
            text="A UNIQUE APPROACH TO DIGITAL ASSET PROTECTION"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-2 leading-tight"
            animationFrom={undefined}
            animationTo={undefined}
            onAnimationComplete={() => {}}
          />
        </motion.div>

        {/* Sub label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          key={Math.random()} // force remount each time it enters view
        >
          <BlurText
          text="Developed by Broadhead Technologies, in partnership with CJC"
          delay={300}
          animateBy="words"
          direction="bottom"
          className="w-full text-center md:text-left text-sm sm:text-base md:text-[1.2rem] font-normal opacity-90"
          animationFrom={undefined}
          animationTo={undefined}
          onAnimationComplete={() => {}}
        />

        </motion.div>
      </div>
    </div>
  );
}
