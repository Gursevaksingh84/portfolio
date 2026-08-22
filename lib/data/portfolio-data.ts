export interface SystemProduct {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  architectureNodes: string[];
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  heroImage: string;
  galleryImages: { url: string; caption: string; category?: "web" | "mobile" | "methodology" | "hardware" | "document" }[];
  liveUrl?: string;
  githubUrl?: string;
  patentNo?: string;
  appreciationLetterUrl?: string;
  status: string;
  gradient: string;
}

export interface SolutionDomain {
  id: string;
  title: string;
  iconName: string;
  description: string;
  capabilities: string[];
  highlightProduct: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  type: "Patent" | "Conference Paper" | "Technical Note";
  referenceNo?: string;
  dates: string;
  authors: string;
  abstract: string;
  impact: string;
  pdfUrl?: string;
  statusTag: string;
}

export interface TeachingExperience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_BIO = {
  name: "Gursevak Singh Aulakh",
  shortName: "Gursevak Singh",
  title: "AI Systems Engineer & Innovation Researcher",
  subtitle: "AI Systems Engineer, Robotics Developer & AI Innovation Researcher",
  tagline: "I design and ship complete AI systems — from silicon microcontrollers to user interfaces.",
  mission: "Engineered to solve real-world enterprise & civic challenges by unifying on-device edge AI, biometrics, robotics firmware, and full-stack cloud platforms.",
  email: "singhgursevak872@gmail.com",
  github: "https://github.com/Gursevaksingh84",
  linkedin: "https://linkedin.com/in/gursevak-singh-aulakh",
  location: "Nashik, India",
  stats: [
    { label: "Published Patent", value: "1", detail: "App No: 202621047713 A" },
    { label: "Biometric Accuracy", value: "94.7%", detail: "On-Device Multimodal Fusion" },
    { label: "OCR Languages", value: "9+", detail: "Indian Script Processing" },
    { label: "National Finalist", value: "Top 33", detail: "Synergy 2026 Hackathon" },
  ]
};

export const SYSTEM_PRODUCTS: SystemProduct[] = [
  {
    id: "eva-robot",
    name: "EVA",
    subtitle: "AI-Powered Institutional Assistant System",
    category: "Robotics & Agentic AI",
    tagline: "Autonomous physical assistant robot with SSD1306 dual OLED eye dynamics, INMP441/MAX98357A I2S audio loops, and Android cellular telephony relay.",
    problem: "Higher education department desks receive hundreds of daily repetitive inquiries regarding timetables, faculty availability, and student attendance analytics, consuming HOD and administrative time.",
    solution: "A complete 9-step cyber-physical AI ecosystem: an animated ESP32-S3 physical companion robot, a FastAPI Python 3.10+ backend with Gemini function calling, an Android cellular telephony daemon for automated parent calls/WhatsApp dispatches, and a React executive dashboard.",
    heroImage: "/assets/eva/hero.png",
    galleryImages: [
      { url: "/assets/eva/dashboard.png", caption: "Executive Analytics Dashboard", category: "web" },
      { url: "/assets/eva/console.png", caption: "EVA Live AI Console Interface", category: "web" },
      { url: "/assets/eva/attendance.png", caption: "Attendance Analytics & Defaulters Portal", category: "web" },
      { url: "/assets/eva/time_table.png", caption: "Lecture Timetable & Schedule Grid", category: "web" },
      { url: "/assets/eva/students.png", caption: "Student Management Datatable", category: "web" },
      { url: "/assets/eva/events.png", caption: "Department Events Calendar", category: "web" },
      { url: "/assets/eva/admin.png", caption: "System Administration & Role Settings", category: "web" },
      { url: "/assets/eva/login.png", caption: "Institutional Portal Authentication", category: "web" },
      { url: "/assets/eva/eva_hardware_prototype.jpg", caption: "3D-Printed Robotic Companion Hardware Prototype", category: "hardware" },
      { url: "/assets/eva/eva_ai_workflow.png", caption: "9-Step End-to-End System Workflow Diagram", category: "methodology" },
      { url: "/assets/eva/eva_why_comparison.png", caption: "Traditional Process vs EVA AI Assistant", category: "methodology" }
    ],
    architectureNodes: [
      "1. User Voice Input (Voice inquiry to physical robot or web console)",
      "2. ESP32-S3 Capture (INMP441 I2S MEMS mic 16kHz audio sampling)",
      "3. Whisper STT (Speech-to-Text transcription)",
      "4. Google Gemini LLM (Reasoning, context memory & SQL tools)",
      "5. FastAPI Gateway (Relational DB lookup & WebSocket telephony)",
      "6. SQLite Relational DB (Timetable, attendance & student records)",
      "7. Piper TTS Engine (Synthesizes high-quality MP3 speech)",
      "8. ESP32 Audio Stream (Transmits audio to MAX98357A 3W amp)",
      "9. Robot Output & OLED Sync (Robot speaks + SSD1306 OLED eyes render expressions)"
    ],
    keyFeatures: [
      "ESP32-S3 Tensilica LX7 Dual-Core 240MHz microcontroller with captive SoftAP (AI_Desk_Robo_AP)",
      "Dual SSD1306 0.96\" OLED eyes rendering real-time mood, blinking, and audio wave animations",
      "I2S hardware audio loop using INMP441 MEMS mic & MAX98357A 3W Class-D amplifier",
      "Android WebSocket daemon enabling automated cellular parent phone calls & WhatsApp alerts (<50% attendance)",
      "Tool-orchestrated Gemini AI engine querying live timetable, attendance, and student datatables"
    ],
    techStack: ["ESP32-S3", "C++", "FastAPI", "Python", "React", "TypeScript", "Android/Kotlin", "Gemini API", "Whisper STT", "SQLite"],
    metrics: [
      { label: "Voice Query Latency", value: "< 1.2s" },
      { label: "Audio Sampling", value: "16kHz I2S" },
      { label: "OLED Display FPS", value: "60 FPS Eye Sync" },
      { label: "Active Campus Deployment", value: "Institutional Campus" }
    ],
    githubUrl: "https://github.com/Gursevaksingh84/EVA-AI-Powered-Institutional-Assistant-System",
    status: "Deployed Cyber-Physical System",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "kumbh-bandhu",
    name: "Kumbh Bandhu",
    subtitle: "AI-Powered Missing Person Detection & Reunification System for Mass Gatherings",
    category: "Edge AI & Biometrics",
    tagline: "Full-stack, AI-powered platform built for Kumbh Mela — using real-time face recognition, CCTV scanning, ESP32/RFID hardware, and WhatsApp notifications to reunite missing persons with their families.",
    problem: "At Kumbh Mela, over 400 million pilgrims gather — making it the largest human congregation on Earth. Thousands of pilgrims, especially the elderly and children, get separated from their families. Traditional loudspeaker announcements and manual searches are painfully slow, CCTV footage goes unanalyzed, and no central missing-person registry exists.",
    solution: "A unified full-stack AI ecosystem: InsightFace Buffalo-L CNN for high-accuracy 512-dim face embeddings with cosine similarity matching, CCTV crowd scanning that detects all faces in a frame, an Android mobile app for registration and reporting, a React admin dashboard with live heatmaps and case management, ESP32+RFID wristband zone tracking, and automated WhatsApp alerts via Twilio — all backed by Firebase Realtime Database and deployed on Google Cloud Run.",
    heroImage: "/assets/kumbh bandhu/hero.png",
    galleryImages: [
      { url: "/assets/kumbh bandhu/web/dashboard.png", caption: "Admin Analytics & Case Management Dashboard", category: "web" },
      { url: "/assets/kumbh bandhu/web/heatmap.png", caption: "Real-Time Pilgrim Density & Crowd Heatmap", category: "web" },
      { url: "/assets/kumbh bandhu/web/Volunteer Map.png", caption: "Geo-Spatial Volunteer Tracking Map", category: "web" },
      { url: "/assets/kumbh bandhu/web/Reunion Centers.png", caption: "Reunification Help Desk & Sector Centers", category: "web" },
      { url: "/assets/kumbh bandhu/web/zones.png", caption: "Mela Ground Sector Zones Monitoring", category: "web" },
      { url: "/assets/kumbh bandhu/web/zone_details.png", caption: "Detailed Zone Entry & Exit Analytics", category: "web" },
      { url: "/assets/kumbh bandhu/web/lost_workflow0.png", caption: "Missing Person Report Filing Console", category: "web" },
      { url: "/assets/kumbh bandhu/web/lost_workflow2.png", caption: "Biometric Match Verification Terminal", category: "web" },
      { url: "/assets/kumbh bandhu/web/user.png", caption: "Pilgrim Biometric Profile & Metadata", category: "web" },
      { url: "/assets/kumbh bandhu/web/voluteer.png", caption: "Volunteer Task Dispatch Panel", category: "web" },
      { url: "/assets/kumbh bandhu/web/admin_login.png", caption: "Secure Portal Authentication", category: "web" },

      { url: "/assets/kumbh bandhu/mobile/home.png", caption: "Kumbh Bandhu Mobile App Home Dashboard", category: "mobile" },
      { url: "/assets/kumbh bandhu/mobile/registration.png", caption: "Pilgrim Face & Metadata Registration", category: "mobile" },
      { url: "/assets/kumbh bandhu/mobile/otp-verification.png", caption: "SMS OTP Verification Screen", category: "mobile" },
      { url: "/assets/kumbh bandhu/mobile/map.png", caption: "Interactive Mela Grounds Map & GPS Navigation", category: "mobile" },
      { url: "/assets/kumbh bandhu/mobile/attractions.png", caption: "Key Attractions & Emergency Assistance Stations", category: "mobile" },
      { url: "/assets/kumbh bandhu/mobile/chatbot.png", caption: "Multilingual AI Chatbot Assistant", category: "mobile" },

      { url: "/assets/kumbh bandhu/methodology/Kumbh Bandhu missing person systen (1).png", caption: "End-to-End Missing Person Detection Workflow Diagram", category: "methodology" },
      { url: "/assets/kumbh bandhu/methodology/face-detection.png", caption: "InsightFace 512-dim CNN Embedding Extraction", category: "methodology" },
      { url: "/assets/kumbh bandhu/methodology/capability-comparision.png", caption: "Capability & Identification Accuracy Matrix", category: "methodology" },
      { url: "/assets/kumbh bandhu/methodology/user-tracking.png", caption: "RFID Wristband & CCTV Spatial User Tracking", category: "methodology" },
      { url: "/assets/kumbh bandhu/methodology/zone-monitoring.png", caption: "Sector-Wise Pilgrim Flow & Zone Analytics", category: "methodology" }
    ],
    architectureNodes: [
      "1. Mobile App (Android/Kotlin) — Pilgrim registration, missing/found person reporting, FCM push alerts",
      "2. Admin Dashboard (React + Vite + Firebase) — Case management, live crowd heatmaps, volunteer tracking",
      "3. Alert Display (Hindi UI) — Large-screen missing person alerts for help centers & checkpoints",
      "4. Hardware Layer (ESP32 + RFID RC522) — Wristband scanning at zone entry/exit, Firebase sync",
      "5. Firebase Realtime Database & Storage — Unified missing-person registry with photo storage",
      "6. AI Backend (Flask + Python) — InsightFace Buffalo-L CNN, 512-dim embedding extraction, cosine similarity match engine",
      "7. CCTV Analysis — Multi-face detection per frame, target matching across crowd images & video clips",
      "8. WhatsApp Notifications (Twilio) — Automated match alerts with photo, location & contact details",
      "9. Google Cloud Run (Docker) — Containerized production deployment"
    ],
    keyFeatures: [
      "InsightFace Buffalo-L model: 512-dim face embeddings with cosine similarity matching and configurable confidence thresholds",
      "CCTV crowd scanning: detects all faces in a single frame and matches against missing person targets",
      "Multi-database search across registered users, missing persons, and found persons simultaneously",
      "Android app with face photo registration, real-time status updates, multi-language support (Hindi, Punjabi, Gujarati, Marathi, Bengali & more), and AI chatbot assistant",
      "React admin dashboard with live Leaflet crowd heatmap, WhatsApp notification hub, volunteer tracking, and case status pipeline",
      "ESP32 + RFID RC522 wristband-based pilgrim identification at zone entry/exit with real-time Firebase alerts",
      "Automated WhatsApp alerts via Twilio with photo, GPS location pin, and contact details on match detection",
      "Hindi-first alert display board system for mela camps and help center checkpoints"
    ],
    techStack: ["Python", "Flask", "InsightFace", "ONNX Runtime", "OpenCV", "Kotlin", "Android", "React", "TypeScript", "Vite", "Firebase", "ESP32", "RFID", "Twilio", "Docker", "Google Cloud Run"],
    metrics: [
      { label: "Identification Accuracy", value: "94.7%" },
      { label: "Search Effort Reduction", value: "~73%" },
      { label: "National Techno Fest 2026", value: "2nd Prize" },
      { label: "Synergy 2026 Hackathon", value: "Top 33 / 135+" }
    ],
    githubUrl: "https://github.com/Gursevaksingh84/Kumbh-Bandhu",
    patentNo: "202621047713 A",
    status: "Published Patent & Field Validated",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: "fateh-erp",
    name: "Fateh Excellence ERP",
    subtitle: "Local-First Institutional Management Suite for Preschool & Daycare Operations",
    category: "Full-Stack Enterprise Systems",
    tagline: "Full-stack ERP replacing paper registers with an executive dashboard, quarterly fee engine, attendance-linked payroll, and a native A4 print system for receipts & payslips.",
    problem: "Preschool and daycare administrators were tracking admissions, quarterly fees, staff payroll, and daily attendance across scattered paper registers and spreadsheets — with no audit trail, no fast dues lookup for walk-in parents, and no way to produce official printable receipts or payslips.",
    solution: "A full-featured local-first institutional ERP covering the complete operational loop: an executive command dashboard, a Student Information System with document archive, an admissions Kanban pipeline, a quarterly fee engine with walk-in collection, subject-wise evaluation reporting, attendance-linked staff payroll, and a native A4 print system for receipts, payslips and ID cards — with soft-delete archives and audit trail logging for fail-safe data governance.",
    heroImage: "/assets/fateh-erp/dashboard.png",
    galleryImages: [
      { url: "/assets/fateh-erp/dashboard.png", caption: "Executive Command Dashboard", category: "web" },
      { url: "/assets/fateh-erp/student directory.png", caption: "Student Directory & Enrollment List", category: "web" },
      { url: "/assets/fateh-erp/fees.png", caption: "Annual Fee Schedule & Defaulter Tracking", category: "web" },
      { url: "/assets/fateh-erp/fees ledger.png", caption: "Individual Student Fee Ledger", category: "web" },
      { url: "/assets/fateh-erp/fee payment.png", caption: "Walk-In Fee Collection Modal", category: "web" },
      { url: "/assets/fateh-erp/fee recipt.png", caption: "Printable A4 Fee Receipt", category: "web" },
      { url: "/assets/fateh-erp/payroll.png", caption: "Monthly Staff Payroll Table", category: "web" },
      { url: "/assets/fateh-erp/payslip.png", caption: "Printable A4 Salary Slip", category: "web" },
      { url: "/assets/fateh-erp/letter-of-appreciation.jpg", caption: "Letter of Appreciation — Fateh Excellence Preschool & Daycare", category: "document" }
    ],
    architectureNodes: [
      "1. Executive Command Dashboard (Live metrics: enrollment, staff, attendance, fees, dues)",
      "2. Student Information System (SIS) — profiles, documents, parent/guardian records",
      "3. Admissions Pipeline (Kanban: Inquiry → Under Review → Approved → Enrolled)",
      "4. Evaluation & Curriculum Engine (Subject-wise grading, teacher observations)",
      "5. Fee Engine (Quarterly installments, walk-in collection, oldest-first allocation)",
      "6. A4 Print Layer (Isolated iframe printing via CSS Paged Media — receipts, payslips, ID cards)",
      "7. Staff Payroll Engine (Attendance-linked Loss-of-Pay, proxy duty pay)",
      "8. Archives & Soft-Delete Recovery (Audit trail logging, 1-click restore)"
    ],
    keyFeatures: [
      "Local-first architecture: sub-millisecond UI response with zero cloud dependency — all financial ledgers and student records stay on institution infrastructure",
      "Quarterly 4-installment fee engine with oldest-first payment allocation and 1-click 'Pay Total Pending' / 'Pay Overdue' quick actions",
      "Native A4 print engine using an isolated iframe + CSS Paged Media — no third-party PDF library overhead for receipts, payslips & ID cards",
      "Attendance-linked payroll: automatic Loss-of-Pay deductions and proxy/substitution duty compensation on a standard 30-day divisor",
      "Soft-delete Archives module with audit trail logging and 1-click record recovery for students and staff",
      "Subject-wise grade engine for Evaluation 1 & 2 milestone reporting with configurable curriculum subjects"
    ],
    techStack: ["TanStack Start", "React 19", "TanStack Router", "TanStack Query", "Tailwind CSS v4", "Radix UI", "Recharts", "Lucide React", "Sonner", "CSS Paged Media"],
    metrics: [
      { label: "Data Residency", value: "100% Local-First" },
      { label: "Fee Installments", value: "Quarterly x4" },
      { label: "Payroll History", value: "Apr 2026 → Present" },
      { label: "Document Types Archived", value: "4+ (Birth Cert, Aadhaar, Vaccination, Forms)" }
    ],
    appreciationLetterUrl: "/assets/fateh-erp/letter-of-appreciation.jpg",
    status: "Deployed Institutional System",
    gradient: "from-emerald-600 to-teal-500"
  },
  {
    id: "fateh-web-portal",
    name: "Fateh Excellence Web Portal",
    subtitle: "Official Website & Admin CMS — TanStack Start, Supabase, Tailwind v4",
    category: "Full-Stack Web Platforms",
    tagline: "Public-facing SSR website with a custom brand design system and a protected admin CMS for real-time content, curriculum & gallery updates.",
    problem: "The preschool had no dedicated online presence for parents to discover programs, admissions info or campus photos, and any content change required a developer — there was no way for staff to update the site themselves.",
    solution: "A server-rendered marketing site built on TanStack Start + React 19 with sub-350ms first contentful paint, a custom warm brand design system, masonry photo galleries with touch lightboxes, a WhatsApp inquiry widget, and a protected Admin CMS (JWT + Bcrypt auth) letting staff update hero slides, program curricula, campus videos and galleries without touching code — backed by Supabase Postgres and deployed on Vercel's global CDN with full SEO schema markup.",
    heroImage: "/assets/fateh-web-portal/hero.png",
    galleryImages: [
      { url: "/assets/fateh-web-portal/hero.png", caption: "Homepage Hero Carousel", category: "web" },
      { url: "/assets/fateh-web-portal/about.png", caption: "Our Story & Philosophy Section", category: "web" },
      { url: "/assets/fateh-web-portal/programs.png", caption: "Academic Programs & Curriculum Section", category: "web" },
      { url: "/assets/fateh-web-portal/activities.png", caption: "Activities That Inspire Gallery", category: "web" },
      { url: "/assets/fateh-web-portal/gallery.png", caption: "Masonry Photo Gallery with Lightbox", category: "web" },
      { url: "/assets/fateh-web-portal/admin.png", caption: "Protected Admin CMS Dashboard", category: "web" },
      { url: "/assets/fateh-web-portal/letter-of-appreciation.jpeg", caption: "Letter of Appreciation — Fateh Excellence Preschool & Daycare", category: "document" }
    ],
    architectureNodes: [
      "1. Public Site (React 19 + TanStack Start SSR) — hero carousel, programs, gallery, contact",
      "2. Admin CMS Dashboard (JWT + Bcrypt Auth) — hero slides, curriculum & gallery content editor",
      "3. Supabase (PostgreSQL + CDN Storage) — dynamic content & media asset store",
      "4. Local Persistence (SQLite + Drizzle ORM) — offline dev & edge data engine",
      "5. Vite 8 + Nitro Engine — build, bundling & serverless edge runtime",
      "6. SEO Layer — JSON-LD schema.org/Preschool, OpenGraph, sitemap.xml",
      "7. Vercel Edge Deployment — global CDN with automatic SSL"
    ],
    keyFeatures: [
      "Server-Side Rendering with instant client hydration — under 350ms First Contentful Paint",
      "Custom warm brand design system (#830001 crimson, #F8AB04 saffron gold) with hero crossfade animations and organic wave dividers",
      "Mobile-first responsive layout with masonry photo galleries and touch-enabled lightboxes",
      "Protected Admin CMS for real-time updates to hero slides, program curricula, campus tour videos & galleries",
      "Scroll-triggered floating WhatsApp widget for direct parent inquiries",
      "Full SEO layer: JSON-LD schema.org/Preschool, OpenGraph meta tags, robots.txt & automated sitemap.xml"
    ],
    techStack: ["React 19", "TanStack Start", "TanStack Router", "TanStack Query", "Tailwind CSS v4", "Radix UI", "Supabase", "PostgreSQL", "SQLite", "Drizzle ORM", "Vite 8", "Nitro", "Jose (JWT)", "Bcrypt", "Vercel"],
    metrics: [
      { label: "First Contentful Paint", value: "< 350ms" },
      { label: "Academic Programs Listed", value: "5 (Playgroup → Daycare)" },
      { label: "SEO Schema", value: "schema.org/Preschool" },
      { label: "Deployment", value: "Vercel Global CDN" }
    ],
    appreciationLetterUrl: "/assets/fateh-web-portal/letter-of-appreciation.jpeg",
    status: "Production Live",
    gradient: "from-rose-700 to-amber-500"
  },
  {
    id: "granthalaya",
    name: "Granthalaya",
    subtitle: "Sikh Historical Literature Digital Library & Scholar Workbench",
    category: "Web Architecture & Digital Humanities",
    tagline: "Enterprise-grade open-source digital humanities platform with Quad-Layer Exegesis, SoundCloud Audio Sync, and Scholar Workbench.",
    problem: "Historical Sikh manuscripts (Sri Gur Pratap Suraj Granth, Sri Gur Panth Prakash, Faridkot Teeka) present complex structural, linguistic, and multi-layered commentary challenges that standard ebook readers cannot handle.",
    solution: "A decoupled serverless JAMstack digital library featuring a Quad-Layer Exegesis Engine (Original Gurmukhi, Padh Arth word-by-word, Teeka concise commentary, Steek extended analysis), millisecond audio sync, and Supabase RLS Scholar Workbench.",
    heroImage: "/assets/granthalaya/web/hero.png",
    galleryImages: [
      { url: "/assets/granthalaya/web/hero.png", caption: "Granthalaya Scholar Reader & Workbench Landing", category: "web" },
      { url: "/assets/granthalaya/web/granths.png", caption: "Digital Scripture Archive Index", category: "web" },
      { url: "/assets/granthalaya/web/chapter_index.png", caption: "Chapter & Ang Navigation Index", category: "web" },
      { url: "/assets/granthalaya/web/reader.png", caption: "Triple-Column Comparative Verse Reader", category: "web" },
      { url: "/assets/granthalaya/web/gurbani.png", caption: "Gurmukhi Typography & Translation Alignment", category: "web" },

      { url: "/assets/granthalaya/mobile/home.png", caption: "Granthalaya Mobile Reader Home Dashboard", category: "mobile" },
      { url: "/assets/granthalaya/mobile/granth_index.png", caption: "Mobile Scripture Archive Navigation", category: "mobile" },
      { url: "/assets/granthalaya/mobile/chapter_index.png", caption: "Mobile Chapter & Ang Index Browser", category: "mobile" },
      { url: "/assets/granthalaya/mobile/library.png", caption: "Personal Library & Bookmarked Manuscripts", category: "mobile" },
      { url: "/assets/granthalaya/mobile/gurbani.png", caption: "Mobile Gurmukhi Verse Display", category: "mobile" },
      { url: "/assets/granthalaya/mobile/reader.png", caption: "Mobile Exegesis & Padh Arth Viewer", category: "mobile" },
      { url: "/assets/granthalaya/mobile/reader_teeka.png", caption: "Mobile Teeka Commentary Mode", category: "mobile" }
    ],
    architectureNodes: [
      "Client Presentation Layer (React 18 + Vite 5 + TypeScript + Tailwind)",
      "Quad-Layer Exegesis Engine (Original Gurmukhi, Padh Arth, Teeka, Steek)",
      "Millisecond Audio Recitation Sync via SoundCloud API",
      "TanStack Query v5 Server State + IndexedDB Offline PWA Cache",
      "Supabase PostgreSQL 15 Relational Schema & Row-Level Security Policies",
      "Dual-Repository Ecosystem (Granthalaya Web + Granthalaya Mobile in Flutter)"
    ],
    keyFeatures: [
      "Quad-Layer Exegesis Engine: Gurmukhi, Padh Arth (ਪਦ ਅਰਥ), Teeka (ਟੀਕਾ), and Steek (ਸਟੀਕ) commentary",
      "Scholar's Workbench: Triple-column live preview, reviewer sign-off pipelines, and SoundCloud audio timestamping",
      "Listen Along Audio Sync: Automatic page scrolling and active verse highlighting synced with audio recordings",
      "Offline-First PWA Architecture: IndexedDB local caching for continuous offline reading",
      "Faceted Search & Discovery across categories (Gurbani, Historical, Janam Sakhi, Teeka, Rehatnama, Kosh, Vaar)"
    ],
    techStack: ["React 18", "TypeScript", "Vite 5", "Supabase", "PostgreSQL 15", "TanStack Query", "Tailwind CSS", "Flutter", "PWA"],
    metrics: [
      { label: "Chapters & Angs Indexed", value: "218+" },
      { label: "Exegesis Layers", value: "4 Quad-Level" },
      { label: "Ecosystem Topology", value: "Web + Flutter Mobile" },
      { label: "Audio Sync Latency", value: "Millisecond Sync" }
    ],
    liveUrl: "https://granthalaya-web.vercel.app",
    githubUrl: "https://github.com/Gursevaksingh84/Granthalaya-Web",
    status: "Production Live & Dual-Repo Ecosystem",
    gradient: "from-sky-600 to-teal-500"
  },
  {
    id: "rotary-roaster",
    name: "Rotary Roaster",
    subtitle: "Cross-Platform Club Administration & Member Suite",
    category: "Mobile & Web Full Stack",
    tagline: "Digital roster Flutter mobile app and React web admin portal sharing a Supabase cloud backend.",
    problem: "Rotary clubs rely on printed member rosters that quickly become outdated, creating communication friction for community initiatives.",
    solution: "A unified cross-platform system comprising a responsive Flutter mobile directory application for members and a React/Vite management dashboard for club administrators.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "Rotary Roaster Mobile & Web Roster Suite", category: "mobile" }
    ],
    architectureNodes: [
      "Flutter Mobile Directory App (iOS & Android)",
      "React/Vite Admin Dashboard",
      "Shared Supabase PostgreSQL Database",
      "Real-Time Member Contact Sync"
    ],
    keyFeatures: [
      "Instant member contact search and digital business card generation",
      "Admin portal for event management and member status updates",
      "Offline-first mobile caching with instant cloud synchronization"
    ],
    techStack: ["Flutter", "Dart", "React", "Vite", "Supabase", "PostgreSQL"],
    metrics: [
      { label: "Supported Platforms", value: "iOS, Android, Web" },
      { label: "Backend Architecture", value: "Unified Supabase DB" }
    ],
    githubUrl: "https://github.com/Gursevaksingh84/Rotary-Roaster",
    status: "Open Source Codebase",
    gradient: "from-blue-700 to-indigo-600"
  }
];

export const SOLUTIONS_DOMAINS: SolutionDomain[] = [
  {
    id: "robotics-firmware",
    title: "Cyber-Physical Robotics & Hardware",
    iconName: "Bot",
    description: "Engineering physical companion robots and micro-controller firmware using ESP32-S3 dual-core chips, I2S MEMS audio streams, SSD1306 OLED displays, and cellular telephony daemons.",
    capabilities: [
      "ESP32-S3 Tensilica LX7 C++/Arduino firmware development",
      "INMP441 & MAX98357A I2S 16kHz audio capture & playback loops",
      "Dynamic SSD1306 OLED eye expression state machines",
      "Android RoboConnectionService WebSocket telephony daemon"
    ],
    highlightProduct: "EVA Cyber-Physical Robot"
  },
  {
    id: "edge-biometrics",
    title: "Edge AI & Multimodal Biometrics",
    iconName: "Fingerprint",
    description: "Designing low-latency, privacy-preserving biometric systems that run face embeddings (ArcFace 512-dim) and RFID telemetry on edge hardware without constant cloud connectivity.",
    capabilities: [
      "512-dim vector similarity search on embedded microcontrollers",
      "Multimodal signal fusion (Face + RFID + Gait + Behavior)",
      "On-device inference via TensorFlow Lite & OpenCV",
      "Field-proven in mass crowd gathering environments"
    ],
    highlightProduct: "Kumbh Bandhu"
  },
  {
    id: "institutional-erp",
    title: "Institutional ERP & Document Systems",
    iconName: "ClipboardList",
    description: "Building local-first institutional management suites — fee engines, payroll automation, and native A4 print systems — that keep sensitive financial and student data fully on-premise.",
    capabilities: [
      "Local-first architecture with zero external data sharing for financial & student records",
      "Quarterly fee engines with oldest-first payment allocation & walk-in collection",
      "Attendance-linked payroll automation with Loss-of-Pay calculations",
      "Native A4 print systems via CSS Paged Media — zero third-party PDF overhead"
    ],
    highlightProduct: "Fateh Excellence ERP"
  },
  {
    id: "fullstack-cloud",
    title: "Full-Stack Enterprise Systems",
    iconName: "Server",
    description: "Architecting web and mobile platforms with Next.js, React, FastAPI, Flutter, Supabase, and PostgreSQL designed for speed, security, and long-term maintainability.",
    capabilities: [
      "Next.js App Router & React Server Components",
      "Supabase PostgreSQL Row-Level Security (RLS)",
      "Cross-platform Flutter mobile application architecture",
      "FastAPI asynchronous RESTful backend microservices"
    ],
    highlightProduct: "Granthalaya & Rotary Roaster"
  }
];

export const RESEARCH_PATENTS: ResearchItem[] = [
  {
    id: "patent-2026",
    title: "AI-Powered Missing Person Detection & Family Reunification System",
    type: "Patent",
    referenceNo: "Application No. 202621047713 A",
    dates: "Filed: Apr 2026 | Published: Jun 2026",
    authors: "Gursevak Singh Aulakh (Co-Inventor, 1 of 7)",
    abstract: "A privacy-preserving, multi-modal identity-recognition framework fusing 512-dimensional facial embeddings (ArcFace), RFID sensor signals, gait signatures, and behavioral traits into a single weighted confidence score. Engineered specifically to operate reliably at mass religious events and large-scale emergency situations.",
    impact: "Formed the technical cornerstone of Kumbh Bandhu, achieving 94.7% accuracy and reducing manual search time by ~73%. Published by the Indian Patent Office.",
    statusTag: "Published Indian Patent"
  },
  {
    id: "icrtetm-2023",
    title: "Animal Rescue and Wellness Web Application Platform",
    type: "Conference Paper",
    referenceNo: "ICRTETM 2023",
    dates: "Presented: 2023",
    authors: "Gursevak Singh Aulakh et al.",
    abstract: "Presented at the 2nd International Conference on Recent Trends in Engineering, Science, Technology and Management. Focuses on spatial tagging, geo-fenced stray animal rescue dispatch, and community veterinary response coordination.",
    impact: "Peer-reviewed conference paper presentation detailing real-time geographic tracking for community welfare.",
    statusTag: "International Conference Presentation"
  }
];

export const TEACHING_DATA: TeachingExperience[] = [
  {
    role: "Workshop Facilitator — AI Tools for Engineers",
    organization: "Dept. of Computer Engineering",
    period: "June 2026",
    description: "Designed and delivered an intensive technical workshop for engineering students focusing on practical AI integration, prompt engineering, agentic workflows, and micro-controller Edge AI.",
    highlights: [
      "Instructed computer engineering students on practical AI engineering",
      "Covered hands-on deployment of TensorFlow Lite models on microcontrollers",
      "Guided students in building real-world projects for regional hackathons"
    ]
  },
  {
    role: "Computer Engineering Academic Mentorship",
    organization: "Computer Engineering Dept",
    period: "2024 — Present",
    description: "Mentoring student development teams in full-stack web engineering, hardware robotics integration, and competitive hackathon execution.",
    highlights: [
      "Led teams to 2nd Prize at National Level Techno Fest 2026",
      "Mentored Top 33 finalists out of 135+ national teams at Synergy 2026",
      "Supervised hardware prototype builds for department innovation labs"
    ]
  }
];

export const WORK_TIMELINE = [
  {
    year: "2026",
    title: "Fateh Excellence Preschool ERP & Web Portal",
    role: "Full-Stack Developer",
    description: "Built a local-first institutional ERP (admissions, quarterly fees, attendance-linked payroll, A4 print system) and a companion public website + admin CMS for Fateh Excellence Preschool & Daycare, on TanStack Start, Supabase and Tailwind CSS v4."
  },
  {
    year: "2026",
    title: "Patent Publication & Kumbh Bandhu Breakthrough",
    role: "Co-Inventor & AI Systems Engineer",
    description: "Published Indian Patent (App No. 202621047713 A) for multimodal biometric reunification. Won 2nd Prize at National Techno Fest 2026 and Top 33 at Synergy 2026."
  },
  {
    year: "2026",
    title: "EVA Institutional Robot Deployment",
    role: "Cyber-Physical Systems & AI Developer",
    description: "Designed and built physical assistant robot EVA featuring dual-OLED eyes, INMP441/MAX98357A I2S speech pipeline, ESP32-S3 firmware, and Android cellular telephony relay."
  },
  {
    year: "2026",
    title: "AI Tools Workshop Facilitator",
    role: "Facilitator & Mentor",
    description: "Conducted hands-on technical training for computer engineering students on Edge AI, full-stack development, and agentic tools."
  },
  {
    year: "2025",
    title: "Data Science Internship",
    role: "Data Science Intern — Acmegrade (Remote)",
    description: "Worked on machine learning pipelines, data cleaning routines, feature selection, and predictive modeling algorithms."
  },
  {
    year: "2023",
    title: "ICRTETM 2023 Conference Presentation",
    role: "Researcher & Presenter",
    description: "Presented research paper on Animal Rescue and Wellness Web Platforms at the 2nd International Conference on Recent Trends in Engineering."
  }
];