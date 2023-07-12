import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Border IA Clone",
  description: "Developed by willraoli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
