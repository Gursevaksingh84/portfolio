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

const siteUrl = "https://gursevaksingh.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gursevak Singh Aulakh | AI Systems Engineer, Patent Co-Inventor & Robotics Developer",
    template: "%s | Gursevak Singh Aulakh",
  },
  description:
    "Official Portfolio & Engineering Studio of Gursevak Singh Aulakh. AI Systems Engineer & Co-Inventor of Published Indian Patent Application No. 202621047713 A. Specializing in Edge AI, Multimodal Biometrics (InsightFace 512-dim), Cyber-Physical Robotics (EVA ESP32-S3), and High-Accuracy OCR (BhashaScan).",
  keywords: [
    "Gursevak Singh Aulakh",
    "Gursevak Singh Aulakh Portfolio",
    "Gursevak Singh Aulakh Patent",
    "Patent 202621047713 A",
    "AI Systems Engineer",
    "Robotics Developer",
    "Edge AI Engineer",
    "InsightFace ArcFace 512-dim",
    "Kumbh Bandhu AI",
    "EVA AI Robot",
    "Granthalaya Sikh Scripture Library",
    "BhashaScan Indian Languages OCR",
    "ESP32-S3 Robotics C++",
    "FastAPI Python Developer",
    "Nashik AI Engineer",
    "Full-Stack AI Developer India",
  ],
  authors: [{ name: "Gursevak Singh Aulakh", url: "https://github.com/Gursevaksingh84" }],
  creator: "Gursevak Singh Aulakh",
  publisher: "Gursevak Singh Aulakh",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Gursevak Singh Aulakh | AI Systems Engineer & Published Patent Co-Inventor",
    description:
      "Explore Edge AI systems, Published Indian Patent (202621047713 A), Kumbh Bandhu biometric match engine, EVA ESP32-S3 institutional desk robot, and Granthalaya quad-layer exegesis library.",
    siteName: "Gursevak Singh Aulakh Portfolio",
    images: [
      {
        url: "/assets/kumbh bandhu/hero.png",
        width: 1200,
        height: 630,
        alt: "Gursevak Singh Aulakh — AI Systems Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gursevak Singh Aulakh | AI Systems Engineer & Patent Co-Inventor",
    description:
      "Published Indian Patent (App No. 202621047713 A), Edge AI, Multimodal ArcFace Biometrics, ESP32-S3 Robotics, and Full-Stack Engineering.",
    images: ["/assets/kumbh bandhu/hero.png"],
  },
  verification: {
    google: "BrvOWU1X8NNqVC2iYfmy43JFQtR8Zgj3b7GQwU8xt_Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for Google Rich Snippets
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gursevak Singh Aulakh",
    jobTitle: "AI Systems Engineer & Robotics Developer",
    description:
      "AI Systems Engineer and Co-Inventor of Published Indian Patent Application No. 202621047713 A specializing in Edge AI, Multimodal ArcFace Biometrics, Cyber-Physical Robotics, and Full-Stack Systems.",
    url: siteUrl,
    sameAs: [
      "https://github.com/Gursevaksingh84",
      "https://linkedin.com/in/gursevak-singh-aulakh",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Guru Gobind Singh Polytechnic (GGSP)",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Edge AI",
      "Biometrics & Face Recognition",
      "InsightFace ArcFace 512-dim Embeddings",
      "ESP32-S3 Microcontrollers",
      "C++ & Python Systems",
      "FastAPI & React",
      "Indian Patent Application No. 202621047713 A",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="BrvOWU1X8NNqVC2iYfmy43JFQtR8Zgj3b7GQwU8xt_Y" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-on-surface antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
