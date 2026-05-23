const shippedItems = [
  { project: 'Rival', feature: 'persistent filter state' },
  { project: 'VOID RIFT', feature: 'Hangar upgrade shop' },
  { project: 'Portfolio', feature: 'Skills & Stack section' },
  { project: 'Rival', feature: 'competitor activity bars' },
  { project: 'VOID RIFT', feature: 'berserker enemy' },
  { project: 'Rival', feature: 'digest view mode' },
  { project: 'Portfolio', feature: 'animated counters' },
  { project: 'VOID RIFT', feature: 'carrier enemy' },
  { project: 'Rival', feature: 'keyboard shortcuts' },
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
