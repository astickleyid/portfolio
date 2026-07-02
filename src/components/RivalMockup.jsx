/* ─── Tiny sparkline bars (8 weeks) ───────────────────────────────────── */
function Sparkline({ bars }) {
  const max = Math.max(...bars, 1);
  const colors = ['#ef4444', '#ef4444', '#f97316', '#4ade80', '#4ade80', '#f97316', '#4ade80', '#4ade80'];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 20, width: 52 }}>
      {bars.map((v, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${Math.max(Math.round((v / max) * 100), v === 0 ? 0 : 12)}%`,
            borderRadius: 2,
            background: v === 0 ? 'rgba(255,255,255,0.08)' : colors[i] ?? '#4ade80',
            opacity: v === 0 ? 0.35 : 1,
          }}
        />
      ))}
    </div>
  );
}

/* ─── 14-day signal heatmap strip ──────────────────────────────────────── */
function HeatmapStrip({ cells }) {
  function cellColor(s) {
    if (!s) return '#1c1c1c';
    if (s === 'critical') return '#7f1d1d';
    if (s === 'notable')  return '#9a3412';
    return '#14532d';
  }
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      padding: '8px 14px 10px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      flexShrink: 0,
    }}>
      <span style={{
        fontSize: 9,
        color: 'rgba(255,255,255,0.25)',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginRight: 4,
      }}>14d</span>
      {cells.map((c, i) => (
        <div key={i} style={{
          width: 12,
          height: 12,
          borderRadius: 2,
          background: cellColor(c.signal),
          flexShrink: 0,
        }} />
      ))}
      <div style={{ flex: 1 }} />
      <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>signal activity</span>
    </div>
  );
}

/* ─── One competitor row ───────────────────────────────────────────────── */
function CompetitorRow({ name, statusLabel, statusColor, critical, notable, sparkBars, pinned }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <span style={{ fontSize: 10, color: pinned ? '#f59e0b' : 'rgba(255,255,255,0.14)', flexShrink: 0 }}>★</span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#f0f0f0', letterSpacing: '-0.01em' }}>{name}</span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '1px 6px',
            borderRadius: 4,
            background: statusColor + '22',
            border: `1px solid ${statusColor}44`,
            color: statusColor,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: statusColor }} />
            {statusLabel}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
        {critical > 0 && (
          <span style={{
            padding: '2px 6px', borderRadius: 4,
            background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)',
            color: '#f87171', fontSize: 9, fontWeight: 700, fontFamily: 'monospace',
          }}>
            {critical} crit
          </span>
        )}
        {notable > 0 && (
          <span style={{
            padding: '2px 6px', borderRadius: 4,
            background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)',
            color: '#fb923c', fontSize: 9, fontWeight: 700, fontFamily: 'monospace',
          }}>
            {notable}↑
          </span>
        )}
      </div>

      <Sparkline bars={sparkBars} />
    </div>
  );
}

export function RivalMockup() {
  const s = {
    root: {
      background: '#0a0a0a',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px',
      overflow: 'hidden',
      maxHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      fontSize: '12px',
      lineHeight: 1.4,
      userSelect: 'none',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '10px 16px',
      background: '#111111',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      flexShrink: 0,
    },
    wordmark: { fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginRight: '4px' },
    navTabs: { display: 'flex', gap: '2px' },
    navTabActive: { padding: '4px 10px', borderRadius: '6px', background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', fontWeight: 600, fontSize: '11px' },
    navTab: { padding: '4px 10px', borderRadius: '6px', color: 'rgba(255,255,255,0.38)', fontWeight: 500, fontSize: '11px' },
    navSpacer: { flex: 1 },
    navDot: { width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.6)' },
    filterRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      flexShrink: 0,
    },
  };

  const chip = (label, active) => ({
    padding: '2px 9px',
    borderRadius: 20,
    border: active ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.1)',
    background: active ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
    color: active ? '#a5b4fc' : 'rgba(255,255,255,0.4)',
    fontSize: 10,
    fontWeight: 600,
  });

  const competitors = [
    { name: 'Stripe',  statusLabel: 'Active', statusColor: '#22c55e', critical: 1, notable: 2, sparkBars: [0, 1, 2, 1, 3, 2, 1, 4], pinned: true  },
    { name: 'Linear',  statusLabel: 'Active', statusColor: '#22c55e', critical: 0, notable: 1, sparkBars: [1, 0, 1, 2, 0, 1, 2, 1], pinned: false },
    { name: 'Vercel',  statusLabel: 'Quiet',  statusColor: '#f59e0b', critical: 0, notable: 0, sparkBars: [0, 1, 0, 0, 1, 0, 0, 0], pinned: false },
  ];

  const heatmapCells = [
    { signal: null }, { signal: 'routine' }, { signal: null }, { signal: 'notable' },
    { signal: null }, { signal: 'routine' }, { signal: 'critical' }, { signal: null },
    { signal: 'notable' }, { signal: null }, { signal: 'routine' }, { signal: null },
    { signal: null }, { signal: 'notable' },
  ];

  return (
    <div style={s.root} aria-hidden="true">
      {/* Nav */}
      <div style={s.nav}>
        <span style={s.wordmark}>Rival</span>
        <div style={s.navTabs}>
          <span style={s.navTab}>Briefings</span>
          <span style={s.navTabActive}>Competitors</span>
          <span style={s.navTab}>Settings</span>
        </div>
        <div style={s.navSpacer} />
        <div style={s.navDot} />
      </div>

      {/* Filter chips */}
      <div style={s.filterRow}>
        <span style={chip('All', true)}>All</span>
        <span style={chip('Critical', false)}>Critical</span>
        <span style={chip('Notable', false)}>Notable</span>
        <span style={chip('Quiet', false)}>Quiet</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', fontFamily: 'monospace' }}>3 tracked</span>
      </div>

      {/* Competitor rows */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {competitors.map(c => <CompetitorRow key={c.name} {...c} />)}
        <HeatmapStrip cells={heatmapCells} />
      </div>
    </div>
  );
}
