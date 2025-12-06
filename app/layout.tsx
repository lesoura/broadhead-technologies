import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Contracts Solution | Broadhead Technologies",
  description: "Do not let outdated systems slow your firm down",
  icons: {
    icon: "/bt-tab-icon.png",
  },
  openGraph: {
    title: "Digital Contracts Solution | Broadhead Technologies",
    description: "Do not let outdated systems slow your firm down",
    url: "https://broadhead-technologies.vercel.app/",
    siteName: "Broadhead Technologies",
    images: [
      {
        url: "https://lirp.cdn-website.com/b0b5cb2c/dms3rep/multi/opt/1200x630+broadside+OG+Image-1920w.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
