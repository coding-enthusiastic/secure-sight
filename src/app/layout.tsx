/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600"],
});

const InterFont = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SecureSight",
  description: "A CCTV Monitoring Software",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JakartaSans.variable}>{children}</body>
    </html>
  );
}
