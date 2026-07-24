"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import HeroPlatform from "@/components/hero/HeroPlatform";
import TechMarquee from "@/components/hero/TechMarquee";
import AboutVision from "@/components/about/AboutVision";
import ProductsShowcase from "@/components/products/ProductsShowcase";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import ResearchSection from "@/components/research/ResearchSection";
import TeachingSection from "@/components/teaching/TeachingSection";
import ContactPortal from "@/components/contact/ContactPortal";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";
import ProductModal from "@/components/products/ProductModal";
import AIAssistantModal from "@/components/assistant/AIAssistantModal";
import ResumeModal from "@/components/ui/ResumeModal";
import FloatingChatWidget from "@/components/assistant/FloatingChatWidget";
import SystemLoader from "@/components/ui/SystemLoader";
import CyberneticCursor from "@/components/ui/CyberneticCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { SYSTEM_PRODUCTS, SystemProduct } from "@/lib/data/portfolio-data";

const pageRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const pageRevealItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function Home() {
  const [systemLoaded, setSystemLoaded] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SystemProduct | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantInitialQuery, setAssistantInitialQuery] = useState<string | undefined>(undefined);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenAssistantWithQuery = (query?: string) => {
    setAssistantInitialQuery(query);
    setIsAssistantOpen(true);
  };

  const handleSelectProductById = (id: string) => {
    const found = SYSTEM_PRODUCTS.find((p) => p.id === id);
    if (found) setSelectedProduct(found);
  };

  const handleSelectProductByName = (name: string) => {
    const found = SYSTEM_PRODUCTS.find(
      (p) =>
        p.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(p.name.toLowerCase())
    );
    if (found) setSelectedProduct(found);
  };

  return (
    <main suppressHydrationWarning className="min-h-screen bg-[#f9f9f9] text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0051d5] relative">
      
      {/* Custom Cybernetic Cursor (desktop only) */}
      <CyberneticCursor />

      {/* High-Tech System Loading Stage Sequence */}
      <AnimatePresence>
        {!systemLoaded && (
          <SystemLoader onComplete={() => setSystemLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main Website Contents — Staggered Page Reveal */}
      {systemLoaded && (
        <motion.div
          variants={pageRevealContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Navigation Header */}
          <motion.div variants={pageRevealItem}>
            <Navbar
              onOpenAssistant={() => handleOpenAssistantWithQuery()}
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenPalette={() => setIsPaletteOpen(true)}
            />
          </motion.div>

          {/* Hero Section */}
          <motion.div variants={pageRevealItem}>
            <HeroPlatform
              onOpenAssistantWithQuery={handleOpenAssistantWithQuery}
              onOpenResume={() => setIsResumeOpen(true)}
              onSelectProduct={handleSelectProductById}
            />
          </motion.div>

          {/* Tech Stack Marquee Divider */}
          <motion.div variants={pageRevealItem}>
            <TechMarquee />
          </motion.div>

          {/* Neural Query Interface */}
          <motion.div variants={pageRevealItem}>
            <AboutVision
              onOpenAssistantWithQuery={handleOpenAssistantWithQuery}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </motion.div>

          {/* Selected Works & Interactive System Map */}
          <motion.div variants={pageRevealItem}>
            <ProductsShowcase onSelectProduct={(prod) => setSelectedProduct(prod)} />
          </motion.div>

          {/* Capabilities Matrix / Smart Skills Explorer */}
          <motion.div variants={pageRevealItem}>
            <SolutionsGrid onSelectProductByName={handleSelectProductByName} />
          </motion.div>

          {/* Selected Research & Published Patent */}
          <motion.div variants={pageRevealItem}>
            <ResearchSection />
          </motion.div>

          {/* Career Milestones & Mentorship */}
          <motion.div variants={pageRevealItem}>
            <TeachingSection />
          </motion.div>

          {/* Contact CTA Portal */}
          <motion.div variants={pageRevealItem}>
            <ContactPortal />
          </motion.div>

          {/* Minimalist Editorial Footer */}
          <motion.div variants={pageRevealItem}>
            <Footer />
          </motion.div>

          {/* Scroll Progress Indicator & Scroll-to-Top */}
          <ScrollProgress />

          {/* Command Palette (Cmd+K) */}
          <CommandPalette
            isOpen={isPaletteOpen}
            onClose={() => setIsPaletteOpen(false)}
            onOpenAssistant={handleOpenAssistantWithQuery}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Floating Assistant Trigger */}
          <FloatingChatWidget onOpenAssistant={() => handleOpenAssistantWithQuery()} />

          {/* Interactive Modals */}
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          <AIAssistantModal
            isOpen={isAssistantOpen}
            initialQuery={assistantInitialQuery}
            onClose={() => {
              setIsAssistantOpen(false);
              setAssistantInitialQuery(undefined);
            }}
          />

          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />

        </motion.div>
      )}

    </main>
  );
}
