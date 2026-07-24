import type { Metadata } from "next";
import { Inter, Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gursevak Singh Aulakh | AI Systems Engineer & Innovation Researcher",
  description: "Official AI Systems Engineering Studio of Gursevak Singh Aulakh. Showcasing Edge AI, Multimodal Biometrics, Published Patent (202621047713 A), Cyber-Physical Robotics, and Systems Architecture.",
  keywords: ["Gursevak Singh Aulakh", "AI Systems Engineer", "Robotics", "Edge AI", "ArcFace Biometrics", "Kumbh Bandhu", "EVA Robot", "Patent 202621047713 A", "Computer Engineering Lecturer"],
  authors: [{ name: "Gursevak Singh Aulakh" }],
  openGraph: {
    title: "Gursevak Singh Aulakh | AI Systems Engineer & Innovation Researcher",
    description: "Official AI Systems Engineering Studio of Gursevak Singh Aulakh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
