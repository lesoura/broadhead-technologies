"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Quotation text at the top
const Quote = () => (
  <div className="w-full max-w-4xl mx-auto text-center mb-12 px-4">
    <p className="text-black text-lg sm:text-xl leading-relaxed italic">
    “We have created a pioneering technology platform to revolutionise how data providers
    manage and track their contract utilisation. For the first time, data contracts are an
    active and compliant asset in their data ecosystem that can be continuously monitored
    in real-time.”
    </p>
  <p className="text-black text-sm sm:text-base mt-2 font-semibold">— Alan Ross, Chief Executive Officer at Broadhead Technologies —</p>
</div>
);

interface Capability {
  title: string;
  description?: string;
  content: string[];
}

const capabilitiesData: Capability[] = [
  {
    title: "DRDM OVERVIEW",
    description:
      "DRDM transforms digital rights management by automating compliance, tracking data usage in real time, and providing full transparency for data vendors, exchanges, and asset managers.",
    content: [
      "TRUE DIGITAL CONTRACTS",
      "DRDM is a groundbreaking platform that revolutionises how digital rights are managed, tracked, and enforced across the financial markets.",
      "Many companies still rely on digitised contracts—paper-based agreements or scan-based PDFs. These are static, non-interactive, and cumbersome to manage.",
      "Alongside familiar features like digital signatures, DRDM’s digital contracts can integrate with internal systems, third-party platforms, or client environments.",
      "From tracking contractual agreements and ensuring compliance with licensing terms to managing downstream data flows.",
      "INDUSTRY BENEFITS",
      "DRDM enhances the financial markets ecosystem, ensuring all parties meet data access requirements.",
    ],
  },
  {
    title: "AUTOMATED DECLARATIONS",
    description:
      "Market data usage reporting is essential—but manual processes are time-consuming and error-prone.",
    content: [
      "Built into the DLT-powered Digital Contract Network (DCN), the automated declarations provide real-time visibility into data usage.",
      "• Automate client usage declarations and follow-ups.",
      "• Monitor compliance in real time, reducing audit risks.",
      "• Instantly compare declared usage with contractual rights.",
      "• Capture underreported usage to maximise revenue.",
      "• Access audit-ready compliance records at any time.",
    ],
  },
  {
    title: "MAXIMISING EFFICIENCY",
    description:
      "DRDM streamlines operations and drives smarter business decisions by combining intelligent automation with powerful data insights.",
    content: [
      "WORKFLOW EFFICIENCIES",
      "Manual processes slow operations and increase compliance risks.",
      "Workflow Efficiencies automates critical tasks like onboarding, credit checks, compliance monitoring, and contract approvals.",
      "• Automate KYC, credit checks, and contracts.",
      "• Update pricing and terms automatically.",
      "• Seamlessly integrate with existing systems.",
      "INTELLIGENT SALES",
      "Converting sales opportunities shouldn’t be guesswork. Intelligent Sales uses AI and real-time contract data to identify new leads, upsell opportunities, and maximise revenue.",
      "• Discover high-value sales opportunities with tailored product recommendations.",
      "• Automate sales workflows for faster closures.",
      "• Real-time dashboards to monitor sales performance and client engagement.",
    ],
  },
];

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md flex flex-col p-6 min-h-[240px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#060010]">{cap.title}</h3>

      {cap.description && (
        <p className="text-black/80 mb-4 text-sm sm:text-base text-justify">{cap.description}</p>
      )}

      <button
        className="flex items-center justify-between text-[#27c885] font-semibold mb-4 w-full text-left md:text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>MORE DETAILS</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          ▼
        </motion.span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 space-y-2 bg-white rounded-xl shadow-inner">
          {cap.content.map((line, i) => (
            <p
              key={i}
              className={`text-black text-sm sm:text-base leading-relaxed text-justify ${
                ["WORKFLOW EFFICIENCIES", "INTELLIGENT SALES", "AUTOMATED DECLARATIONS", "TRUE DIGITAL CONTRACTS", "INDUSTRY BENEFITS"].includes(line)
                  ? "font-bold"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section className="w-full py-16 px-6">
      <Quote />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {capabilitiesData.map((cap, idx) => (
          <CapabilityCard key={idx} cap={cap} index={idx} />
        ))}
      </div>
    </section>
  );
}