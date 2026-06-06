const shippedItems = [
  { project: 'Rival', feature: 'unread briefing count badges per competitor' },
  { project: 'Portfolio', feature: 'active section highlighting in sticky nav' },
  { project: 'VOID RIFT', feature: 'live combo timer bar in HUD' },
  { project: 'Rival', feature: 'trending keywords + clear-filters reset' },
  { project: 'Rival', feature: 'per-competitor internal notes (auto-save)' },
  { project: 'Rival', feature: 'Cmd+K global search palette' },
  { project: 'VOID RIFT', feature: 'press kit page + personal best banner' },
  { project: 'VOID RIFT', feature: 'ship skin system — 4 color variants' },
  { project: 'VOID RIFT', feature: 'LEVIATHAN boss — wave 10 multi-phase' },
  { project: 'Portfolio', feature: 'HowIBuild interactive process section' },
  { project: 'Portfolio', feature: 'mobile hamburger navigation' },
  { project: 'Portfolio', feature: 'Testimonials section — 3 client quotes' },
  { project: 'Rival', feature: 'inline competitor name + URL editing' },
  { project: 'VOID RIFT', feature: 'roguelite upgrade card picker' },
  { project: 'Rival', feature: 'competitor activity comparison bar' },
  { project: 'VOID RIFT', feature: 'achievement system (10 achievements)' },
  { project: 'Rival', feature: 'digest view mode' },
  { project: 'VOID RIFT', feature: 'Daily Challenge mode' },
  { project: 'Rival', feature: 'filter persistence + CSV export' },
  { project: 'Portfolio', feature: 'full OG / SEO meta suite' },
  { project: 'VOID RIFT', feature: 'persistent Hangar upgrade shop' },
];

const marqueeStyles = `
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export function RecentlyShipped() {
  const doubled = [...shippedItems, ...shippedItems];

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        marginTop: '18px',
        marginBottom: '4px',
      }}
    >
      <style>{marqueeStyles}</style>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0',
          animation: 'marquee 35s linear infinite',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.38)',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0',
            }}
          >
            <span style={{ color: 'rgba(99,102,241,0.7)', marginRight: '5px' }}>✓</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.project}</span>
            <span style={{ margin: '0 3px', opacity: 0.4 }}>:</span>
            <span>{item.feature}</span>
            <span style={{ margin: '0 16px', opacity: 0.25 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
