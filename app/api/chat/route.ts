import { NextResponse } from "next/server";
import { SEVAK_KNOWLEDGE_BASE } from "@/lib/data/sevak-knowledge";

// Simple in-memory sliding window rate limiter
// Map structure: ip -> { count: number, resetTime: number }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetInSec: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetInSec: 60 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const resetInSec = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, resetInSec };
  }

  record.count += 1;
  const remaining = MAX_REQUESTS_PER_WINDOW - record.count;
  const resetInSec = Math.ceil((record.resetTime - now) / 1000);
  return { allowed: true, remaining, resetInSec };
}

export async function POST(req: Request) {
  try {
    // 1. Identify Client IP for Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // 2. Enforce Rate Limiting (5 requests per minute)
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          response: `⏳ **Rate Limit Exceeded**\n\nTo preserve API resources and prevent spam, queries are limited to **5 requests per minute**. Please wait **${rateLimit.resetInSec} seconds** before sending another query.`,
          remaining: 0,
          resetInSec: rateLimit.resetInSec,
        },
        { status: 429 }
      );
    }

    // 3. Parse Message
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message payload" }, { status: 400 });
    }

    const query = message.trim();
    const queryLower = query.toLowerCase();

    // 4. Try Gemini API if valid API key is present in environment
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (geminiApiKey && !geminiApiKey.includes("aBcD")) {
      try {
        const systemPrompt = `You are the official AI Assistant and Digital Twin for Gursevak Singh Aulakh.
Your job is to accurately, politely, and professionally answer questions about Gursevak's work, background, published patent, cyber-physical robotics, and software projects.

AUTHENTIC KNOWLEDGE CONTEXT:
- Name: Gursevak Singh Aulakh
- Title: AI Systems Engineer, Robotics Developer & Published Indian Patent Co-Inventor.
- Location: Nashik, India | Email: singhgursevak872@gmail.com
- Published Indian Patent Application No. 202621047713 A: Title "AI-Powered Missing Person Detection & Multimodal Family Reunification System". Filed Apr 2026, Published Jun 2026. On-device 512-dim ArcFace face embeddings (TFLite) fused with RFID sensor signals, gait analysis, and behavioral signals into a weighted confidence score. 94.7% accuracy, 73% search effort reduction at Kumbh Mela crowd gatherings.
- Flagship Systems:
  1. EVA Robot: AI-powered physical assistant robot. 9-step workflow (Voice -> ESP32-S3 INMP441 I2S mic -> Whisper STT -> Gemini LLM -> FastAPI async gateway -> SQLite -> Piper TTS -> MAX98357A 3W amp speaker + SSD1306 OLED eyes 60 FPS mood sync). Includes Android RoboConnectionService WebSocket telephony daemon for automated parent phone calls & WhatsApp dispatches.
  2. Kumbh Bandhu: On-device biometric reunification system. Won 2nd Prize at National Level Techno Fest 2026 & Top 33 Finalist out of 135+ teams at Synergy 2026.
  3. Granthalaya: Sikh historical scripture digital library with Quad-Layer Exegesis Engine (Gurmukhi, Padh Arth, Teeka, Steek) + SoundCloud audio recitation timestamp auto-scrolling sync + Supabase RLS DB.
  4. BhashaScan: OpenCV adaptive thresholding document OCR pipeline for 9 Indian languages.

INSTRUCTIONS:
- Keep answers concise, informative, and formatted with markdown bullet points where appropriate.
- Maintain a warm, executive, and highly knowledgeable tone.
- Do NOT make up unverified facts. If asked something unrelated to Gursevak's work, politely redirect to his AI engineering portfolio.`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }],
                },
              ],
              generationConfig: {
                maxOutputTokens: 600,
                temperature: 0.4,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const aiResponse = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiResponse) {
            return NextResponse.json({
              response: aiResponse,
              engine: "Gemini 1.5 Flash (Live)",
              remaining: rateLimit.remaining,
            });
          }
        } else {
          const errText = await geminiRes.text();
          console.error("Gemini API Non-OK status:", geminiRes.status, errText);
        }
      } catch (err) {
        console.error("Gemini API call failed, falling back to Knowledge Engine:", err);
      }
    }

    // 5. High-Precision Knowledge Base Engine (Smart Intent-Based Router)
    
    // A. Skills & Tech Stack Queries
    if (
      queryLower.includes("skill") ||
      queryLower.includes("stack") ||
      queryLower.includes("tech") ||
      queryLower.includes("language") ||
      queryLower.includes("framework") ||
      queryLower.includes("tool") ||
      queryLower.includes("expertise") ||
      queryLower.includes("competency") ||
      queryLower.includes("what can you do")
    ) {
      return NextResponse.json({
        response: `⚡ **Gursevak Singh Aulakh — Technical Competencies & Capabilities**

• **Microcontrollers & Hardware Firmware**: ESP32-S3 Tensilica Dual-Core 240MHz, C++, Arduino IDE, SoftAP Captive Portals, INMP441 I2S MEMS Mics, MAX98357A 3W Amplifiers, SSD1306 OLED HMI Eye Animations
• **Edge AI & Computer Vision**: ArcFace 512-dim Vector Similarity, TensorFlow Lite, OpenCV Adaptive Denoising/Local Thresholding, Tesseract OCR (9 Indian Script Engines)
• **Web & Serverless Cloud**: Next.js 16 (App Router + Turbopack), React 19, TypeScript, FastAPI Python microservices, Supabase PostgreSQL, Row-Level Security (RLS), TanStack Query v5
• **Mobile & System Daemons**: Flutter/Dart, Kotlin, Android WebSocket \`RoboConnectionService\` telephony relays`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // B. Greetings & Small Talk
    if (
      queryLower === "hi" ||
      queryLower === "hello" ||
      queryLower === "hey" ||
      queryLower.includes("greetings") ||
      queryLower.includes("who are you") ||
      queryLower.includes("who is gursevak") ||
      queryLower.includes("intro")
    ) {
      return NextResponse.json({
        response: `👋 Hello! I am **Gursevak Singh Aulakh's** AI Digital Twin.

How can I assist your inquiry today? You can ask me about:
• 📜 **Published Indian Patent** (App No. 202621047713 A)
• 🤖 **EVA Robot** (ESP32-S3 physical companion with 9-step audio loop)
• 📚 **Granthalaya** (Quad-Layer scripture exegesis platform)
• ⚡ **Technical Skills & Stack**
• 📧 **Direct Contact & Collaboration**`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // C. EVA Cyber-Physical Robot Query
    if (queryLower.includes("eva") || queryLower.includes("robot") || queryLower.includes("hardware") || queryLower.includes("esp32")) {
      const eva = SEVAK_KNOWLEDGE_BASE.evaRobot;
      return NextResponse.json({
        response: `🤖 **EVA — AI-Powered Cyber-Physical Institutional Assistant System**
GitHub: ${eva.repo}

**Hardware Core Specs**:
• Microcontroller: ESP32-S3 Tensilica LX7 Dual-Core 240MHz with SoftAP (\`AI_Desk_Robo_AP\`)
• Audio capture: INMP441 I2S MEMS mic (16kHz audio stream)
• Audio playback: MAX98357A I2S Class-D Amplifier + 3W Speaker
• Visual HMI: SSD1306 0.96" OLED display eyes rendering 60 FPS state animations
• Telephony Daemon: Android \`RoboConnectionService\` for automated parent phone calls & WhatsApp attendance alerts (< 50%)

**The 9-Step Technical Workflow**:
1. User Voice Input -> INMP441 I2S MEMS mic
2. ESP32-S3 16kHz audio capture -> Whisper STT
3. Google Gemini LLM intent parsing & SQL tool invocation
4. FastAPI async gateway DB lookup
5. Piper TTS audio synthesis -> MAX98357A speaker playback
6. SSD1306 OLED eye animation sync`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // D. Published Indian Patent Query
    if (queryLower.includes("patent") || queryLower.includes("kumbh") || queryLower.includes("reunification")) {
      const p = SEVAK_KNOWLEDGE_BASE.patent;
      return NextResponse.json({
        response: `📜 **Published Indian Patent — App No. ${p.appNo}**
Title: ${p.title}
Filed: ${p.filed} | Published: ${p.published}

**Technical Details**:
${p.details}`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // E. Granthalaya Scripture Platform Query
    if (queryLower.includes("granthalaya") || queryLower.includes("scripture") || queryLower.includes("gurbani")) {
      const g = SEVAK_KNOWLEDGE_BASE.granthalaya;
      return NextResponse.json({
        response: `📚 **Granthalaya — Sikh Scripture Digital Archive & Scholar Workbench**
Live Platform: ${g.liveUrl}

**Architecture & Capabilities**:
${g.details}`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // F. BhashaScan OCR Query
    if (queryLower.includes("bhashascan") || queryLower.includes("ocr") || queryLower.includes("indian language")) {
      const b = SEVAK_KNOWLEDGE_BASE.bhashascan;
      return NextResponse.json({
        response: `🔍 **BhashaScan — Multi-Language Indian Document OCR**
Live App: ${b.liveUrl}

**Capabilities**:
${b.details}`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // G. Projects Overview Query
    if (queryLower.includes("project") || queryLower.includes("work") || queryLower.includes("portfolio") || queryLower.includes("building")) {
      return NextResponse.json({
        response: `🛠️ **Gursevak's Flagship Engineering Systems**

1. **EVA Robot**: Cyber-physical ESP32-S3 physical companion with INMP441/MAX98357A I2S audio loops & Android WebSocket telephony.
2. **Kumbh Bandhu**: Biometric reunification system using ArcFace 512D embeddings + RFID telemetry (*Published Indian Patent App 202621047713 A*).
3. **Granthalaya**: Sikh scripture digital library featuring Quad-Layer Exegesis & SoundCloud millisecond audio sync.
4. **BhashaScan**: OpenCV adaptive thresholding document OCR pipeline for 9 Indian languages.
5. **Rotary Roaster**: Cross-platform member management suite in Flutter, React, and Supabase.`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // H. Contact & Collaboration Query
    if (queryLower.includes("contact") || queryLower.includes("email") || queryLower.includes("hire") || queryLower.includes("collaborate") || queryLower.includes("reach")) {
      return NextResponse.json({
        response: `📧 **Direct Contact & Collaboration Channels**

• **Direct Email**: \`singhgursevak872@gmail.com\`
• **GitHub**: [github.com/Gursevaksingh84](https://github.com/Gursevaksingh84)
• **LinkedIn**: [linkedin.com/in/gursevak-singh-aulakh](https://linkedin.com/in/gursevak-singh-aulakh)
• **Location**: Nashik, India

Feel free to reach out for Edge AI implementations, robotics prototyping, or technical inquiries!`,
        engine: "Sevak Neural Knowledge Base",
        remaining: rateLimit.remaining,
      });
    }

    // Default Intelligence Response
    return NextResponse.json({
      response: `👋 Hello! I am **Gursevak Singh Aulakh's** AI Digital Twin.

**Core Highlights**:
• **Published Indian Patent Application No. 202621047713 A** (*AI-Powered Missing Person Detection & Reunification System*)
• **EVA Robot**: Cyber-physical ESP32-S3 physical companion with INMP441/MAX98357A I2S speech loop & Android telephony daemon
• **Granthalaya**: Sikh scripture digital humanities platform with Quad-Layer Exegesis & SoundCloud audio sync
• **BhashaScan**: OpenCV adaptive thresholding document OCR across 9 Indian languages

Ask me about EVA hardware specs, Kumbh Bandhu patent claims, Granthalaya architecture, skills, or technical collaboration!`,
      engine: "Sevak Neural Knowledge Base",
      remaining: rateLimit.remaining,
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
