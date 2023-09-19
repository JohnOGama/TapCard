"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tap Card",
  description:
    "Tap Card is seamless card that can be used to business or personal usage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
