"use client";

import { usePathname } from "next/navigation";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();

  const isActivePage = pathname === "/privacy" || pathname === "/terms";
  const baseColor = isActivePage ? "text-black" : "text-white";

  return (
    <footer className={`w-full py-8 px-6 ${className || ""}`}>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">

        <span className={`text-sm ${baseColor}`}>
          &copy; 2025 Broadhead Technologies. All rights reserved.
        </span>

        <div className="flex gap-6 text-sm font-semibold">

          <a
            href="/privacy"
            className={
              pathname === "/privacy"
                ? "underline text-[#27c885]"
                : `${baseColor} hover:text-[#27c885]`
            }
          >
            PRIVACY NOTICE
          </a>

          <a
            href="/terms"
            className={
              pathname === "/terms"
                ? "underline text-[#27c885]"
                : `${baseColor} hover:text-[#27c885]`
            }
          >
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>
    </footer>
  );
}
