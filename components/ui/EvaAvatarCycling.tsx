"use client";

export default function EvaAvatarCycling({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className} select-none`}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="head3DGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f3f4f6" />
            <stop offset="90%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </radialGradient>

          <linearGradient id="visorGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d0e1b" />
            <stop offset="100%" stopColor="#030307" />
          </linearGradient>

          <filter id="avatarGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <style>{`
          @keyframes svg-bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          .robo-group {
            animation: svg-bob 4s ease-in-out infinite;
            transform-box: fill-box;
          }
          @keyframes visorStrokeCycle {
            0%, 18%, 100% { stroke: #3b82f6; }
            20%, 38% { stroke: #06b6d4; }
            40%, 58% { stroke: #3b82f6; }
            60%, 78% { stroke: #a855f7; }
            80%, 98% { stroke: #ec4899; }
          }
          @keyframes earAccentCycle {
            0%, 18%, 100% { fill: #2563eb; }
            20%, 38% { fill: #0891b2; }
            40%, 58% { fill: #2563eb; }
            60%, 78% { fill: #9333ea; }
            80%, 98% { fill: #db2777; }
          }
          .visor { animation: visorStrokeCycle 12s linear infinite; }
          .ear-accent { animation: earAccentCycle 12s linear infinite; }
        `}</style>

        <g className="robo-group">
          {/* Head Base */}
          <circle cx="50" cy="50" r="42" fill="url(#head3DGrad)" stroke="#6b7280" strokeWidth="1.5" />
          
          {/* Visor Area */}
          <rect x="20" y="32" width="60" height="34" rx="12" fill="url(#visorGlassGrad)" className="visor" stroke="#3b82f6" strokeWidth="2.5" filter="url(#avatarGlow)" />
          
          {/* OLED Eyes */}
          <circle cx="36" cy="49" r="6" fill="#38bdf8" />
          <circle cx="64" cy="49" r="6" fill="#38bdf8" />
          <circle cx="38" cy="47" r="2" fill="#ffffff" />
          <circle cx="66" cy="47" r="2" fill="#ffffff" />

          {/* Ears */}
          <rect x="5" y="42" width="8" height="16" rx="4" className="ear-accent" fill="#2563eb" />
          <rect x="87" y="42" width="8" height="16" rx="4" className="ear-accent" fill="#2563eb" />
        </g>
      </svg>
    </div>
  );
}
