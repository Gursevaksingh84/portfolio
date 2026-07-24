"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroPlatform from "@/components/hero/HeroPlatform";
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
import { SYSTEM_PRODUCTS, SystemProduct } from "@/lib/data/portfolio-data";

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
      
      {/* High-Tech System Loading Stage Sequence */}
      {!systemLoaded && (
        <SystemLoader onComplete={() => setSystemLoaded(true)} />
      )}

      {/* Main Website Contents */}
      <div className={`transition-opacity duration-700 ${systemLoaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        
        {/* Navigation Header */}
        <Navbar
          onOpenAssistant={() => handleOpenAssistantWithQuery()}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPalette={() => setIsPaletteOpen(true)}
        />

        {/* Hero Section */}
        <HeroPlatform
          onOpenAssistantWithQuery={handleOpenAssistantWithQuery}
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProduct={handleSelectProductById}
        />

        {/* Neural Query Interface */}
        <AboutVision
          onOpenAssistantWithQuery={handleOpenAssistantWithQuery}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Selected Works & Interactive System Map */}
        <ProductsShowcase onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Capabilities Matrix / Smart Skills Explorer */}
        <SolutionsGrid onSelectProductByName={handleSelectProductByName} />

        {/* Selected Research & Published Patent */}
        <ResearchSection />

        {/* Career Milestones & Mentorship */}
        <TeachingSection />

        {/* Contact CTA Portal */}
        <ContactPortal />

        {/* Minimalist Editorial Footer */}
        <Footer />

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

      </div>

    </main>
  );
}
