export const SEVAK_KNOWLEDGE_BASE = {
  engineer: {
    name: "Gursevak Singh Aulakh",
    title: "AI Systems Engineer & Innovation Researcher",
    college: "Dept. of Computer Engineering",
    email: "singhgursevak872@gmail.com",
    github: "https://github.com/Gursevaksingh84",
    linkedin: "https://linkedin.com/in/gursevak-singh-aulakh",
  },
  patent: {
    appNo: "202621047713 A",
    title: "AI-Powered Missing Person Detection & Family Reunification System",
    filed: "April 2026",
    published: "June 2026",
    details: "A privacy-preserving multimodal identity-recognition framework fusing ArcFace 512-dimensional facial embeddings, RFID telemetry, gait signatures, and behavioral signals. Implemented in Kumbh Bandhu, achieving 94.7% identification accuracy and ~73% reduction in manual verification effort."
  },
  evaRobot: {
    name: "EVA Cyber-Physical AI Assistant System",
    repo: "https://github.com/Gursevaksingh84/EVA-AI-Powered-Institutional-Assistant-System",
    workflow: [
      "1. User Voice Input: Speaks query to physical robot or web console",
      "2. ESP32-S3 Processing: Captures 16kHz audio via INMP441 I2S MEMS mic",
      "3. Whisper STT: Converts speech into text transcription",
      "4. Google Gemini LLM: Resolves intent memory and executes custom SQL tools",
      "5. FastAPI Backend Gateway: Performs database lookup or triggers WebSocket dispatches",
      "6. SQLite/PostgreSQL DB: Retrieves student, timetable, attendance records",
      "7. Piper TTS Engine: Synthesizes structured response into MP3 speech",
      "8. ESP32 Audio Stream: Plays audio via MAX98357A I2S amplifier & 3W speaker",
      "9. OLED Eye Sync: SSD1306 0.96\" OLED eyes render dynamic blinking & mouth height scaling"
    ],
    telephonyDaemon: "Android RoboConnectionService WebSocket daemon for automated ACTION_CALL cellular parent alerts & WhatsApp dispatches for attendance < 50%."
  },
  granthalaya: {
    name: "Granthalaya",
    liveUrl: "https://granthalaya-web.vercel.app",
    details: "Sikh scripture (Gurbani) study platform indexing 218+ chapters with verse-level granularity, 3-column comparative scholar workbench, and Supabase Row-Level Security."
  },
  bhashascan: {
    name: "BhashaScan",
    liveUrl: "https://local-language-ocr-hj32suqla2zf7nanhsncvl.streamlit.app",
    details: "Computer vision OCR engine covering 9 Indian languages with OpenCV adaptive binarization, achieving ~40% accuracy gain on degraded scans."
  }
};
