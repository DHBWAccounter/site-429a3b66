import type { Metadata } from "next";
import { Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cypherpunk Email List — Privacy Intelligence for the Digital Age",
  description:
    "Join 47,000+ subscribers receiving weekly insights on cryptography, surveillance resistance, and digital freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${outfit.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <div className="scanlines pointer-events-none fixed inset-0 z-50 opacity-[0.02]" />
        {children}
      </body>
    </html>
  );
}
