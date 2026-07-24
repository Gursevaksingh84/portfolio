import { NextResponse } from "next/server";
import { SEVAK_KNOWLEDGE_BASE } from "@/lib/data/sevak-knowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message payload" }, { status: 400 });
    }

    const query = message.toLowerCase();

    // EVA Cyber-Physical Robot Query
    if (query.includes("eva") || query.includes("robot") || query.includes("hardware") || query.includes("esp32")) {
      const eva = SEVAK_KNOWLEDGE_BASE.evaRobot;
      return NextResponse.json({
        response: `🤖 **EVA — AI-Powered Cyber-Physical Institutional Assistant System**
GitHub: ${eva.repo}

**Hardware Core Specs**:
• Microcontroller: ESP32-S3 Tensilica LX7 Dual-Core 240MHz with SoftAP (AI_Desk_Robo_AP)
• Audio capture: INMP441 I2S MEMS mic (16kHz audio stream)
• Audio playback: MAX98357A I2S Class-D Amplifier + 3W Speaker
• Visual HMI: SSD1306 0.96" OLED display eyes rendering 60 FPS state animations
• Telephony Daemon: Android RoboConnectionService for automated ACTION_CALL parent alerts & WhatsApp attendance warnings (< 50%)

**The 9-Step Technical Workflow**:
1. User Voice Input -> INMP441 I2S MEMS mic
2. ESP32-S3 16kHz audio capture -> Whisper STT
3. Google Gemini LLM intent parsing & SQL tool invocation
4. FastAPI async gateway DB lookup
5. Piper TTS audio synthesis -> MAX98357A speaker playback
6. SSD1306 OLED eye animation sync`
      });
    }

    // Published Indian Patent Query
    if (query.includes("patent") || query.includes("kumbh") || query.includes("reunification")) {
      const p = SEVAK_KNOWLEDGE_BASE.patent;
      return NextResponse.json({
        response: `📜 **Published Indian Patent — App No. ${p.appNo}**
Title: ${p.title}
Filed: ${p.filed} | Published: ${p.published}

**Technical Details**:
${p.details}`
      });
    }

    // Granthalaya Scripture Platform Query
    if (query.includes("granthalaya") || query.includes("scripture") || query.includes("gurbani")) {
      const g = SEVAK_KNOWLEDGE_BASE.granthalaya;
      return NextResponse.json({
        response: `📚 **Granthalaya — Sikh Scripture Digital Archive & Scholar Workbench**
Live Platform: ${g.liveUrl}

**Architecture**:
${g.details}`
      });
    }

    // BhashaScan OCR Query
    if (query.includes("bhashascan") || query.includes("ocr") || query.includes("indian language")) {
      const b = SEVAK_KNOWLEDGE_BASE.bhashascan;
      return NextResponse.json({
        response: `🔍 **BhashaScan — Multi-Language Indian Document OCR**
Live App: ${b.liveUrl}

**Capabilities**:
${b.details}`
      });
    }

    // General Profile & Collaboration Query
    return NextResponse.json({
      response: `👋 Hello! I am **Gursevak Singh Aulakh's** AI Digital Twin.
I am an AI Systems Engineer & Innovation Researcher at GGSP Nashik.

**Core Achievements**:
• Published Indian Patent Co-Inventor (App No. 202621047713 A)
• Built EVA (Cyber-Physical ESP32-S3 Robot with Gemini function calling)
• Built Granthalaya (Sikh Scripture Reader on Supabase)
• Mentored 350+ engineering students on Edge AI

Ask me about EVA robot hardware, Kumbh Bandhu patent, Granthalaya, or technical collaboration!`
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
