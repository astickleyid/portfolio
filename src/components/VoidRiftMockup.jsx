export function VoidRiftMockup() {
  const s = {
    root: {
      background: '#0a0a0f',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px',
      overflow: 'hidden',
      maxHeight: '320px',
      minHeight: '220px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: '12px',
      lineHeight: 1.4,
      userSelect: 'none',
      position: 'relative',
    },

    // Star field
    stars: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
    },

    // HUD top bar
    hud: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 14px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 2,
    },
    scoreBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      flex: 1,
    },
    scoreLabel: {
      fontSize: '9px',
      color: 'rgba(74,222,128,0.55)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    scoreValue: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#4ade80',
      letterSpacing: '-0.02em',
      textShadow: '0 0 12px rgba(74,222,128,0.55)',
    },
    waveBlock: {
      flex: 1,
      textAlign: 'center',
    },
    waveText: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    comboBlock: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    comboBadge: {
      padding: '3px 9px',
      borderRadius: '5px',
      background: 'rgba(245,158,11,0.15)',
      border: '1px solid rgba(245,158,11,0.35)',
      color: '#fbbf24',
      fontSize: '13px',
      fontWeight: 700,
      textShadow: '0 0 8px rgba(245,158,11,0.5)',
    },

    // Arena (SVG game area)
    arena: {
      flex: 1,
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '140px',
    },

    // Bottom HUD
    bottomHud: {
      padding: '8px 14px 10px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 2,
    },
    hullRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    hullLabel: {
      fontSize: '9px',
      color: 'rgba(255,255,255,0.4)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      width: '28px',
    },
    hullTrack: {
      flex: 1,
      height: '6px',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '3px',
      overflow: 'hidden',
    },
    hullFill: {
      width: '60%',
      height: '100%',
      background: 'linear-gradient(90deg, #16a34a, #4ade80)',
      borderRadius: '3px',
      boxShadow: '0 0 8px rgba(74,222,128,0.5)',
    },
    hullPct: {
      fontSize: '9px',
      color: '#4ade80',
      width: '24px',
      textAlign: 'right',
    },
  };

  // Star positions — deterministic so SSR and hydration match
  const stars = [
    { x: 8, y: 12, r: 1 },
    { x: 22, y: 5, r: 1.2 },
    { x: 41, y: 18, r: 0.8 },
    { x: 57, y: 8, r: 1 },
    { x: 73, y: 22, r: 0.9 },
    { x: 88, y: 6, r: 1.1 },
    { x: 94, y: 30, r: 0.7 },
    { x: 15, y: 38, r: 0.8 },
    { x: 32, y: 52, r: 1 },
    { x: 48, y: 44, r: 0.6 },
    { x: 65, y: 60, r: 1.2 },
    { x: 80, y: 48, r: 0.8 },
    { x: 5, y: 68, r: 0.7 },
    { x: 25, y: 75, r: 1 },
    { x: 45, y: 82, r: 0.9 },
    { x: 62, y: 72, r: 0.6 },
    { x: 78, y: 85, r: 1.1 },
    { x: 92, y: 64, r: 0.8 },
    { x: 12, y: 90, r: 0.7 },
    { x: 35, y: 95, r: 1 },
    { x: 55, y: 88, r: 0.8 },
    { x: 70, y: 93, r: 0.6 },
    { x: 85, y: 78, r: 0.9 },
    { x: 97, y: 92, r: 1 },
    { x: 3, y: 55, r: 0.8 },
    { x: 18, y: 22, r: 0.5 },
    { x: 50, y: 28, r: 0.7 },
    { x: 82, y: 15, r: 0.6 },
  ];

  return (
    <div style={s.root} aria-hidden="true">
      {/* Star field */}
      <svg style={s.stars} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="white"
            opacity={0.25 + (i % 4) * 0.12}
          />
        ))}
      </svg>

      {/* HUD — top */}
      <div style={s.hud}>
        <div style={s.scoreBlock}>
          <span style={s.scoreLabel}>Score</span>
          <span style={s.scoreValue}>47,823</span>
        </div>
        <div style={s.waveBlock}>
          <span style={s.waveText}>Wave 7</span>
        </div>
        <div style={s.comboBlock}>
          <span style={s.comboBadge}>×3.0</span>
        </div>
      </div>

      {/* Game arena */}
      <div style={s.arena}>
        <svg
          viewBox="0 0 260 160"
          width="260"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id="vr-ship-glow" cx="50%" cy="100%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="vr-ship-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="vr-engine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <filter id="vr-enemy-glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="vr-bullet-glow">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Engine glow beneath ship */}
          <ellipse cx="130" cy="136" rx="14" ry="6" fill="url(#vr-ship-glow)" />
          {/* Engine exhaust plume */}
          <polygon
            points="124,130 136,130 133,145 127,145"
            fill="url(#vr-engine)"
            opacity="0.85"
          />

          {/* Player ship — triangle pointing up */}
          <polygon
            points="130,104 116,128 144,128"
            fill="url(#vr-ship-body)"
            stroke="#7dd3fc"
            strokeWidth="1"
          />
          {/* Ship cockpit detail */}
          <polygon
            points="130,110 125,122 135,122"
            fill="#0ea5e9"
            opacity="0.6"
          />

          {/* Bullet traces — thin cyan lines shooting upward */}
          <line x1="124" y1="103" x2="116" y2="60" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" filter="url(#vr-bullet-glow)" />
          <line x1="130" y1="103" x2="130" y2="30" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.9" filter="url(#vr-bullet-glow)" />
          <line x1="136" y1="103" x2="144" y2="55" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" filter="url(#vr-bullet-glow)" />

          {/* Bullet tip highlights */}
          <circle cx="116" cy="60" r="2" fill="#38bdf8" opacity="0.9" filter="url(#vr-bullet-glow)" />
          <circle cx="130" cy="30" r="2" fill="#7dd3fc" opacity="0.9" filter="url(#vr-bullet-glow)" />
          <circle cx="144" cy="55" r="2" fill="#38bdf8" opacity="0.9" filter="url(#vr-bullet-glow)" />

          {/* Enemy 1 — top-center, pointing down */}
          <polygon
            points="130,18 120,36 140,36"
            fill="#ef4444"
            stroke="#fca5a5"
            strokeWidth="0.8"
            filter="url(#vr-enemy-glow)"
          />

          {/* Enemy 2 — top-left */}
          <polygon
            points="58,32 48,50 68,50"
            fill="#ef4444"
            stroke="#fca5a5"
            strokeWidth="0.8"
            filter="url(#vr-enemy-glow)"
          />

          {/* Enemy 3 — top-right */}
          <polygon
            points="202,24 192,42 212,42"
            fill="#ef4444"
            stroke="#fca5a5"
            strokeWidth="0.8"
            filter="url(#vr-enemy-glow)"
          />

          {/* Enemy 4 — mid-left */}
          <polygon
            points="40,78 30,96 50,96"
            fill="#dc2626"
            stroke="#fca5a5"
            strokeWidth="0.8"
            opacity="0.75"
            filter="url(#vr-enemy-glow)"
          />

          {/* TECH FRAGMENT pickup label near enemy 3 */}
          <rect x="178" y="50" width="66" height="14" rx="3" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.3)" strokeWidth="0.8" />
          <text x="211" y="61" textAnchor="middle" fill="#4ade80" fontSize="7" fontFamily="monospace" letterSpacing="0.06em">
            TECH FRAGMENT +1
          </text>

          {/* Ambient particle dots */}
          <circle cx="75" cy="65" r="1.2" fill="#4ade80" opacity="0.4" />
          <circle cx="185" cy="88" r="1" fill="#38bdf8" opacity="0.35" />
          <circle cx="100" cy="45" r="0.8" fill="#4ade80" opacity="0.3" />
          <circle cx="160" cy="72" r="1" fill="#38bdf8" opacity="0.3" />
        </svg>
      </div>

      {/* HUD — bottom */}
      <div style={s.bottomHud}>
        <div style={s.hullRow}>
          <span style={s.hullLabel}>Hull</span>
          <div style={s.hullTrack}>
            <div style={s.hullFill} />
          </div>
          <span style={s.hullPct}>60%</span>
        </div>
      </div>
    </div>
  );
}
