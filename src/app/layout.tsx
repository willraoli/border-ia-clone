import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Border IA Clone",
  description: "Developed by willraoli",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
