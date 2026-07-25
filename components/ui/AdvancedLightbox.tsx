"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Download,
  Info,
  Smartphone,
  Monitor,
  Activity,
  Cpu,
} from "lucide-react";

export interface LightboxImage {
  url: string;
  caption: string;
  category?: "web" | "mobile" | "methodology" | "hardware" | string;
}

interface AdvancedLightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  projectName?: string;
}

export default function AdvancedLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
  projectName = "System Architecture",
}: AdvancedLightboxProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showMetadata, setShowMetadata] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentImage = images[currentIndex] || images[0];

  // Reset zoom and pan when image changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  // Keyboard navigation & Esc key binding
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    const newIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(newIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    const newIdx = (currentIndex + 1) % images.length;
    onNavigate(newIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const nextZoom = Math.max(prev - 0.5, 1);
      if (nextZoom === 1) setPanPosition({ x: 0, y: 0 });
      return nextZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleTap = () => {
    if (zoomLevel > 1) {
      handleResetZoom();
    } else {
      setZoomLevel(2);
    }
  };

  if (!isOpen || !currentImage) return null;

  const isMobile = currentImage.category === "mobile";
  const isWeb = currentImage.category === "web";
  const isMethodology = currentImage.category === "methodology";
  const isHardware = currentImage.category === "hardware";

  const categoryLabel = isMobile
    ? "Mobile App View"
    : isWeb
    ? "Web Dashboard View"
    : isMethodology
    ? "Methodology Architecture"
    : isHardware
    ? "Hardware Prototype"
    : "System Screenshot";

  const CategoryIcon = isMobile
    ? Smartphone
    : isWeb
    ? Monitor
    : isMethodology
    ? Activity
    : isHardware
    ? Cpu
    : Info;

  return (
    <AnimatePresence>
      {/* Light Theme Backdrop matching Product Modal */}
      <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 font-sans select-none overflow-hidden">
        
        {/* Main Light Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl h-[94vh] bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col font-sans text-slate-900"
        >
          
          {/* Top Control Bar Header (Light Editorial Style) */}
          <div className="h-16 px-4 sm:px-6 bg-[#f9f9f9] border-b border-slate-200 flex items-center justify-between z-20 shrink-0">
            <div className="flex items-center gap-3 pr-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#0051d5] flex items-center justify-center shrink-0">
                <CategoryIcon className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-slate-950 font-bold text-sm sm:text-base tracking-tight line-clamp-1">
                  {projectName} — {currentImage.caption}
                </h4>
                <p className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                  Image {currentIndex + 1} of {images.length} • <span className="font-semibold text-[#0051d5]">{categoryLabel}</span>
                </p>
              </div>
            </div>

            {/* Zoom & Action Controls (Matching Light Theme Buttons) */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-xs">
              
              {/* Zoom Controls Pill */}
              <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center gap-1">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 text-slate-600 hover:text-slate-950 disabled:opacity-30 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 text-[11px] font-bold text-[#0051d5] min-w-[42px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3.5}
                  className="p-1.5 text-slate-600 hover:text-slate-950 disabled:opacity-30 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 text-[#0051d5] hover:text-[#003ea8] rounded hover:bg-slate-200 transition-colors cursor-pointer ml-1"
                    title="Reset Zoom (0)"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Toggle Metadata Sidebar */}
              <button
                onClick={() => setShowMetadata(!showMetadata)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer hidden md:flex items-center justify-center ${
                  showMetadata
                    ? "bg-[#0051d5] text-white border-blue-600 shadow-sm"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-950"
                }`}
                title="Toggle Telemetry Sidebar"
              >
                <Info className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-950 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Viewing Area */}
          <div className="flex-1 relative flex overflow-hidden bg-slate-100/60">
            
            {/* Previous Image Button */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 hover:bg-[#0051d5] text-slate-800 hover:text-white border border-slate-300 shadow-xl transition-all hover:scale-110 cursor-pointer"
                title="Previous Image (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Canvas Display Viewport */}
            <div
              ref={containerRef}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleTap}
              className={`flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden relative ${
                zoomLevel > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
              }`}
            >
              <motion.div
                style={{
                  scale: zoomLevel,
                  x: panPosition.x,
                  y: panPosition.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
                className={`relative max-w-full max-h-full flex items-center justify-center ${
                  isMobile ? "max-w-[340px] sm:max-w-[380px]" : "max-w-5xl"
                }`}
              >
                <img
                  src={currentImage.url}
                  alt={currentImage.caption}
                  className="max-w-full max-h-[78vh] rounded-xl object-contain shadow-xl border border-slate-300 bg-white"
                />
              </motion.div>
            </div>

            {/* Next Image Button */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 hover:bg-[#0051d5] text-slate-800 hover:text-white border border-slate-300 shadow-xl transition-all hover:scale-110 cursor-pointer"
                title="Next Image (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Collapsible Right Metadata Sidebar (Light Theme Editorial) */}
            <AnimatePresence>
              {showMetadata && (
                <motion.aside
                  initial={{ x: 320, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 320, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 bg-white border-l border-slate-200 p-6 flex flex-col justify-between shrink-0 font-sans z-20 text-slate-800 hidden md:flex shadow-lg"
                >
                  <div className="space-y-6 overflow-y-auto">
                    
                    {/* Category Pill Tag */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-50 text-[#0051d5] border border-blue-200 font-mono text-[10px] font-bold uppercase rounded-full tracking-wider">
                        {categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        {currentIndex + 1} / {images.length}
                      </span>
                    </div>

                    {/* Title & Caption */}
                    <div className="space-y-2 border-b border-slate-200 pb-5">
                      <h3 className="text-base font-bold text-slate-950 leading-snug">
                        {currentImage.caption}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        High-resolution visual telemetry rendering for {projectName}.
                      </p>
                    </div>

                    {/* Interactive Technical Details */}
                    <div className="space-y-3 font-mono text-xs">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        TELEMETRY METADATA
                      </h5>

                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">Project:</span>
                          <span className="text-slate-900 font-bold">{projectName}</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">View Category:</span>
                          <span className="text-[#0051d5] font-bold uppercase">{currentImage.category || "General"}</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">Zoom Level:</span>
                          <span className="text-emerald-700 font-bold">{Math.round(zoomLevel * 100)}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Keyboard Shortcuts Hint */}
                    <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-[11px] font-mono text-slate-600 space-y-1.5">
                      <p className="text-[#0051d5] font-bold text-[10px] uppercase tracking-wider">Keyboard Controls:</p>
                      <div className="flex justify-between"><span>Prev / Next:</span> <span className="text-slate-900 font-bold">← / →</span></div>
                      <div className="flex justify-between"><span>Zoom In / Out:</span> <span className="text-slate-900 font-bold">+ / -</span></div>
                      <div className="flex justify-between"><span>Reset Zoom:</span> <span className="text-slate-900 font-bold">0</span></div>
                      <div className="flex justify-between"><span>Close Lightbox:</span> <span className="text-slate-900 font-bold">Esc</span></div>
                    </div>

                  </div>

                  {/* Direct File Download Button */}
                  <div className="pt-4 border-t border-slate-200 mt-4">
                    <a
                      href={currentImage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full py-2.5 bg-[#0051d5] hover:bg-[#003ea8] text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Original Image</span>
                    </a>
                  </div>

                </motion.aside>
              )}
            </AnimatePresence>

          </div>

          {/* Thumbnail Strip Footer (Light Segmented Style) */}
          {images.length > 1 && (
            <div className="h-16 px-4 bg-[#f3f3f3] border-t border-slate-200 flex items-center justify-center gap-2 shrink-0 overflow-x-auto scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    idx === currentIndex
                      ? "border-[#0051d5] scale-105 shadow-md shadow-blue-500/20"
                      : "border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
