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

    // 4. Try Gemini API if API key is present in environment
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (geminiApiKey) {
      try {
        const systemPrompt = `You are the official AI Assistant and Digital Twin for Gursevak Singh Aulakh.
Your job is to accurately, politely, and professionally answer questions about Gursevak's work, background, published patent, cyber-physical robotics, and software projects.

AUTHENTIC KNOWLEDGE CONTEXT:
- Name: Gursevak Singh Aulakh
- Title: AI Systems Engineer, Robotics Developer, Published Indian Patent Co-Inventor & Computer Engineering Lecturer at GGSP Nashik.
- Location: Nashik, India | Email: singhgursevak872@gmail.com
- Published Indian Patent Application No. 202621047713 A: Title "AI-Powered Missing Person Detection & Multimodal Family Reunification System". Filed Apr 2026, Published Jun 2026. On-device 512-dim ArcFace face embeddings (TFLite) fused with RFID sensor signals, gait analysis, and behavioral signals into a weighted confidence score. 94.7% accuracy, 73% search effort reduction at Kumbh Mela crowd gatherings.
- Flagship Systems:
  1. EVA Robot: AI-powered physical assistant robot. 9-step workflow (Voice -> ESP32-S3 INMP441 I2S mic -> Whisper STT -> Gemini LLM -> FastAPI async gateway -> SQLite -> Piper TTS -> MAX98357A 3W amp speaker + SSD1306 OLED eyes 60 FPS mood sync). Includes Android RoboConnectionService WebSocket telephony daemon for automated parent phone calls & WhatsApp dispatches.
  2. Kumbh Bandhu: On-device biometric reunification system. Won 2nd Prize at National Level Techno Fest 2026 & Top 33 Finalist out of 135+ teams at Synergy 2026.
  3. Granthalaya: Sikh historical scripture digital library with Quad-Layer Exegesis Engine (Gurmukhi, Padh Arth, Teeka, Steek) + SoundCloud audio recitation timestamp auto-scrolling sync + Supabase RLS DB.
  4. BhashaScan: OpenCV adaptive thresholding document OCR pipeline for 9 Indian languages.
- Academic Role: Lecturer & Workshop Facilitator at Dept. of Computer Engineering, GGSP Nashik.

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
        }
      } catch (err) {
        console.error("Gemini API call failed, falling back to Knowledge Engine:", err);
      }
    }

    // 5. High-Precision Knowledge Base Engine (Fallback / Default Instant Response)
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

    // Default Intelligence Response
    return NextResponse.json({
      response: `👋 Hello! I am **Gursevak Singh Aulakh's** AI Digital Twin.

**Core Highlights**:
• **Published Indian Patent Application No. 202621047713 A** (*AI-Powered Missing Person Detection & Reunification System*)
• **EVA Robot**: Cyber-physical ESP32-S3 physical companion with INMP441/MAX98357A I2S speech loop & Android telephony daemon
• **Granthalaya**: Sikh scripture digital humanities platform with Quad-Layer Exegesis & SoundCloud audio sync
• **BhashaScan**: OpenCV adaptive thresholding document OCR across 9 Indian languages
• **Lecturer**: Dept. of Computer Engineering, GGSP Nashik

Ask me about EVA hardware specs, Kumbh Bandhu patent claims, Granthalaya architecture, or technical collaboration!`,
      engine: "Sevak Neural Knowledge Base",
      remaining: rateLimit.remaining,
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
