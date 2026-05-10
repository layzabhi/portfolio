import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base deep-black background */}
      <div className="absolute inset-0 bg-deep-black"></div>

      {/* PCB Trace SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.12 }}
      >
        <defs>
          {/* Tiling PCB pattern tile 300x300 */}
          <pattern id="pcb-tile" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            {/* ── Trace A: horizontal then down then right ── */}
            <path d="M 0 50 L 80 50 L 80 150 L 220 150 L 220 250 L 300 250"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace B ── */}
            <path d="M 0 130 L 40 130 L 40 200 L 150 200 L 150 280 L 300 280"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace C: from top ── */}
            <path d="M 180 0 L 180 80 L 260 80 L 260 180 L 300 180"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace D: short vertical from top ── */}
            <path d="M 100 0 L 100 50"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" />
            {/* ── Trace E: top-right short L ── */}
            <path d="M 240 0 L 240 30 L 300 30"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace F: left-side short connector ── */}
            <path d="M 0 200 L 40 200"
              fill="none" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="square" />
            {/* ── Trace G: bottom-left loop ── */}
            <path d="M 0 280 L 40 280 L 40 250 L 80 250 L 80 150"
              fill="none" stroke="#ff6b00" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace H: extra horizontal filler ── */}
            <path d="M 120 0 L 120 30 L 180 30"
              fill="none" stroke="#ff6b00" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" />
            {/* ── Trace I: bottom right filler ── */}
            <path d="M 260 220 L 300 220"
              fill="none" stroke="#ff6b00" strokeWidth="1" strokeLinecap="square" />

            {/* ━━━ Via pads (donut style at every corner / junction) ━━━ */}
            {[
              [80, 50], [80, 150], [220, 150], [220, 250],
              [40, 130], [40, 200], [150, 200], [150, 280],
              [180, 80], [260, 80], [260, 180],
              [240, 30], [80, 250], [40, 250],
              [100, 50], [120, 30], [180, 30],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r={4.5} fill="none" stroke="#ff6b00" strokeWidth="1.5" />
                <circle cx={cx} cy={cy} r={1.8} fill="#ff6b00" />
              </g>
            ))}

            {/* ━━━ Through-hole pads (larger square pads for IC-like connectors) ━━━ */}
            {[
              [80, 50], [260, 80], [150, 200],
            ].map(([cx, cy], i) => (
              <rect key={`sq-${i}`} x={cx - 6} y={cy - 6} width={12} height={12}
                fill="none" stroke="#ff6b00" strokeWidth="1" opacity={0.6} />
            ))}
          </pattern>

          {/* Animated signal dot filter glow */}
          <filter id="glow-dot">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fill entire canvas with tiled PCB */}
        <rect width="100%" height="100%" fill="url(#pcb-tile)" />

        {/* ━━━ Animated signal pulses along traces (CSS keyframe trick) ━━━ */}
        {/* Signal 1 – horizontal sweep top */}
        <circle r="3" fill="#ff6b00" filter="url(#glow-dot)" opacity="0.85">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M 0 50 L 80 50 L 80 150 L 220 150 L 220 250 L 900 250"
          />
        </circle>
        {/* Signal 2 – trace B */}
        <circle r="2.5" fill="#ff8c42" filter="url(#glow-dot)" opacity="0.75">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            begin="2s"
            path="M 0 130 L 40 130 L 40 200 L 150 200 L 150 280 L 900 280"
          />
        </circle>
        {/* Signal 3 – trace C from top */}
        <circle r="2.5" fill="#ff6b00" filter="url(#glow-dot)" opacity="0.7">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            begin="1s"
            path="M 180 0 L 180 80 L 260 80 L 260 180 L 900 180"
          />
        </circle>
        {/* Signal 4 – reversed direction trace A */}
        <circle r="2" fill="#ffaa55" filter="url(#glow-dot)" opacity="0.6">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            begin="3.5s"
            path="M 900 250 L 220 250 L 220 150 L 80 150 L 80 50 L 0 50"
          />
        </circle>
      </svg>

      {/* ── Atmospheric depth glow orbs ── */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] mix-blend-screen animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px] mix-blend-screen animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)', animationDelay: '2s' }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.10) 0%, transparent 70%)', animationDelay: '4s' }}
      />

      {/* ── Subtle top-to-bottom vignette so content remains readable ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.65) 100%)'
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
