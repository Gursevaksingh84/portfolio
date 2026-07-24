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
  galleryImages: { url: string; caption: string }[];
  liveUrl?: string;
  githubUrl?: string;
  patentNo?: string;
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
  subtitle: "AI Systems Engineer, Robotics Developer, AI Innovation Researcher & Computer Engineering Lecturer",
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
    subtitle: "AI-Powered Cyber-Physical Institutional Assistant System",
    category: "Robotics & Agentic AI",
    tagline: "Autonomous physical assistant robot with SSD1306 dual OLED eye dynamics, INMP441/MAX98357A I2S audio loops, and Android cellular telephony relay.",
    problem: "Higher education department desks receive hundreds of daily repetitive inquiries regarding timetables, faculty availability, and student attendance analytics, consuming HOD and administrative time.",
    solution: "A complete 9-step cyber-physical AI ecosystem: an animated ESP32-S3 physical companion robot, a FastAPI Python 3.10+ backend with Gemini function calling, an Android cellular telephony daemon for automated parent calls/WhatsApp dispatches, and a React executive dashboard.",
    heroImage: "/assets/eva/hero.png",
    galleryImages: [
      { url: "/assets/eva/dashboard.png", caption: "Executive Analytics Dashboard" },
      { url: "/assets/eva/console.png", caption: "EVA Live AI Console Interface" },
      { url: "/assets/eva/attendance.png", caption: "Attendance Analytics & Defaulters Portal" },
      { url: "/assets/eva/time_table.png", caption: "Lecture Timetable & Schedule Grid" },
      { url: "/assets/eva/students.png", caption: "Student Management Datatable" },
      { url: "/assets/eva/events.png", caption: "Department Events Calendar" },
      { url: "/assets/eva/eva_hardware_prototype.jpg", caption: "3D-Printed Robotic Companion Hardware Prototype" },
      { url: "/assets/eva/eva_ai_workflow.png", caption: "9-Step End-to-End System Workflow Diagram" },
      { url: "/assets/eva/eva_why_comparison.png", caption: "Traditional Process vs EVA AI Assistant" },
      { url: "/assets/eva/admin.png", caption: "System Administration & Role Settings" },
      { url: "/assets/eva/login.png", caption: "Institutional Portal Authentication" }
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
      { label: "Active Campus Deployment", value: "GGSP Nashik" }
    ],
    githubUrl: "https://github.com/Gursevaksingh84/EVA-AI-Powered-Institutional-Assistant-System",
    status: "Deployed Cyber-Physical System",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "kumbh-bandhu",
    name: "Kumbh Bandhu",
    subtitle: "Snan to Suraksha — Enterprise Multimodal Reunification System",
    category: "Edge AI & Biometrics",
    tagline: "Privacy-preserving missing-person detection and biometric family reunification for mass religious gatherings.",
    problem: "Massive religious events like Kumbh Mela host tens of millions of pilgrims, making traditional lost-and-found posts ineffective and creating long missing-person tracking delays.",
    solution: "A unified edge biometric fusion framework. On-device facial recognition using ArcFace (512-dim embeddings via TensorFlow Lite) is fused with RFID tag telemetry, gait analysis, and behavioral signals into a mathematically weighted confidence score.",
    heroImage: "/assets/kumbh%20bandhu/hero.png",
    galleryImages: [
      { url: "/assets/kumbh%20bandhu/hero.png", caption: "Kumbh Bandhu Multimodal System Interface" },
      { url: "/assets/kumbh%20bandhu/1.png", caption: "Real-Time Pilgrim Search & Embedding Matching" },
      { url: "/assets/kumbh%20bandhu/2.png", caption: "Biometric Confidence Ranking Console" },
      { url: "/assets/kumbh%20bandhu/3.png", caption: "RFID & Camera Node Mesh Telemetry Map" },
      { url: "/assets/kumbh%20bandhu/4.png", caption: "Reunification Dispatch & Verification Terminal" },
      { url: "/assets/kumbh%20bandhu/Kumbh%20Bandhu%20missing%20person%20systen%20(1).png", caption: "Missing Person Detection Workflow Overview" }
    ],
    architectureNodes: [
      "Camera Edge Feeds (ESP32/RPi)",
      "ArcFace 512-dim Embedding Extraction",
      "RFID Sensor Gateway & Sync",
      "Multimodal Biometric Fusion Engine",
      "FastAPI Real-Time Alert Dispatch",
      "React Command Dashboard & Mobile App"
    ],
    keyFeatures: [
      "512-Dimensional ArcFace Vector Similarity Search on TFLite",
      "Sub-second on-device offline biometric candidate ranking",
      "RFID signal fusion for crowded non-line-of-sight identification",
      "73% reduction in manual verification effort for lost pilgrim centers",
      "End-to-end encrypted identity metadata pipeline"
    ],
    techStack: ["Kotlin", "TensorFlow Lite", "ArcFace", "ESP32", "RFID", "Firebase", "React", "Python"],
    metrics: [
      { label: "Identification Accuracy", value: "94.7%" },
      { label: "Search Effort Reduction", value: "~73%" },
      { label: "National Techno Fest 2026", value: "2nd Prize" },
      { label: "Synergy 2026 Hackathon", value: "Top 33 / 135+" }
    ],
    patentNo: "202621047713 A",
    status: "Published Patent & Field Validated",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: "granthalaya",
    name: "Granthalaya",
    subtitle: "Sikh Historical Literature Digital Library & Scholar Workbench",
    category: "Web Architecture & Digital Humanities",
    tagline: "Enterprise-grade open-source digital humanities platform with Quad-Layer Exegesis, SoundCloud Audio Sync, and Scholar Workbench.",
    problem: "Historical Sikh manuscripts (Sri Gur Pratap Suraj Granth, Sri Gur Panth Prakash, Faridkot Teeka) present complex structural, linguistic, and multi-layered commentary challenges that standard ebook readers cannot handle.",
    solution: "A decoupled serverless JAMstack digital library featuring a Quad-Layer Exegesis Engine (Original Gurmukhi, Padh Arth word-by-word, Teeka concise commentary, Steek extended analysis), millisecond audio sync, and Supabase RLS Scholar Workbench.",
    heroImage: "/assets/granthalaya/hero.png",
    galleryImages: [
      { url: "/assets/granthalaya/hero.png", caption: "Granthalaya Scholar Reader & Workbench" },
      { url: "/assets/granthalaya/granths.png", caption: "Digital Scripture Archive Index" },
      { url: "/assets/granthalaya/reader.png", caption: "Triple-Column Comparative Verse Reader" },
      { url: "/assets/granthalaya/chapter_index.png", caption: "Chapter & Ang Navigation Index" },
      { url: "/assets/granthalaya/gurbani.png", caption: "Gurmukhi Typography & Translation Alignment" },
      { url: "/assets/granthalaya/library.jpeg", caption: "Scholar Editorial Library Dashboard" }
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
    id: "bhashascan",
    name: "BhashaScan",
    subtitle: "Multi-Language Indian Document OCR & Translation Pipeline",
    category: "Computer Vision & OCR",
    tagline: "Document processing engine covering 9 Indian languages with adaptive preprocessing for degraded scans.",
    problem: "Official forms, archives, and regional documents in India suffer from optical noise, low resolution, and non-standard fonts, causing standard OCR tools to fail.",
    solution: "An end-to-end computer vision and OCR pipeline combining OpenCV adaptive binarization, skew correction, and Tesseract script recognition tuned across 9 Indian languages.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80", caption: "BhashaScan Document OCR Pipeline" }
    ],
    architectureNodes: [
      "OpenCV Image Denoising & Skew Correction",
      "Adaptive Local Thresholding Engine",
      "Tesseract Script Recognition (9 Languages)",
      "Neural Translation & Text Normalization",
      "Streamlit Document Export Dashboard"
    ],
    keyFeatures: [
      "Supports 9 major Indian regional languages and scripts",
      "Adaptive OpenCV image preprocessing gaining ~40% accuracy on noisy scans",
      "Multi-page PDF batch upload and automated script detection",
      "Clean translation export in formatted plain text or CSV"
    ],
    techStack: ["Python", "OpenCV", "Tesseract", "Streamlit", "NumPy"],
    metrics: [
      { label: "OCR Accuracy Gain", value: "~40%" },
      { label: "Supported Indian Languages", value: "9 Scripts" },
      { label: "Batch File Processing", value: "Multi-page PDF" }
    ],
    liveUrl: "https://local-language-ocr-hj32suqla2zf7nanhsncvl.streamlit.app",
    githubUrl: "https://github.com/Gursevaksingh84/local-language-ocr",
    status: "Production Streamlit Live",
    gradient: "from-cyan-600 to-blue-600"
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
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "Rotary Roaster Mobile & Web Roster Suite" }
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
    id: "cv-ocr",
    title: "Computer Vision & Script Processing",
    iconName: "ScanText",
    description: "Developing custom computer vision pipelines tailored for low-quality image enhancement, document deskewing, and multi-script regional OCR recognition.",
    capabilities: [
      "OpenCV adaptive thresholding & noise filtering",
      "Tesseract OCR tuning across 9 Indian languages",
      "Multi-page PDF batch processing & text normalization",
      "Sub-second document script identification"
    ],
    highlightProduct: "BhashaScan"
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
    organization: "Dept. of Computer Engineering, GGSP Nashik",
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
    organization: "GGSP Engineering Department",
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
    role: "Lecturer / Facilitator — GGSP Nashik",
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
