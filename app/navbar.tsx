"use client";

import CardNav from "@/components/CardNav";

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Legal",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Privacy Notice", ariaLabel: "View Privacy Notice", href: "/privacy" },
        { label: "Terms and Conditions", ariaLabel: "View Terms and Conditions", href: "/terms" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:infosec@broadheadtechnologies.com" },
      ],
    },
  ];

  return (
    <CardNav
      logo="https://irp.cdn-website.com/b0b5cb2c/dms3rep/multi/Broadhead+Technologies+Wordmark.svg"
      logoAlt="Broadhead Technologies"
      items={items}
      baseColor="#F2F2F2"
      menuColor="#000"
      buttonBgColor="transparent"
      buttonTextColor=""
      ease="power3.out"
    />
  );
}
