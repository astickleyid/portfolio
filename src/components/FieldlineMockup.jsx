export function FieldlineMockup() {
  const s = {
    root: {
      background: '#0d0d0d',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12px',
      lineHeight: 1.4,
      userSelect: 'none',
    },

    // Header
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 16px',
      background: '#111',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      flexShrink: 0,
    },
    logo: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '0.08em',
    },
    logoAccent: {
      color: '#3b82f6',
    },
    divider: {
      width: '1px',
      height: '14px',
      background: 'rgba(255,255,255,0.12)',
    },
    subtitle: {
      fontSize: '11px',
      color: 'rgba(255,255,255,0.38)',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
    headerSpacer: { flex: 1 },
    statusDot: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#3b82f6',
      boxShadow: '0 0 6px rgba(59,130,246,0.6)',
    },

    // Kanban board
    board: {
      display: 'flex',
      gap: '8px',
      padding: '10px 12px',
      flex: 1,
      overflow: 'hidden',
    },
    column: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      minWidth: 0,
    },
    colHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      paddingBottom: '4px',
    },
    colLabel: {
      fontSize: '10px',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.35)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
    colCount: {
      fontSize: '10px',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.2)',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '4px',
      padding: '1px 5px',
    },

    // Job cards
    card: (borderColor) => ({
      background: '#1a1a1a',
      border: '1px solid rgba(255,255,255,0.06)',
      borderLeft: `3px solid ${borderColor}`,
      borderRadius: '6px',
      padding: '8px 9px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
    }),
    cardName: {
      fontSize: '11px',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.88)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    cardJob: {
      fontSize: '10px',
      color: 'rgba(255,255,255,0.38)',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    cardAmount: {
      fontSize: '10px',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.55)',
    },

    // Bottom action strip
    strip: {
      display: 'flex',
      gap: '8px',
      padding: '8px 12px',
      background: '#111',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      flexShrink: 0,
    },
    btnPurple: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      padding: '6px 10px',
      borderRadius: '6px',
      background: 'rgba(139,92,246,0.18)',
      border: '1px solid rgba(139,92,246,0.3)',
      color: '#c4b5fd',
      fontSize: '10px',
      fontWeight: 600,
      cursor: 'default',
    },
    btnBlue: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      padding: '6px 10px',
      borderRadius: '6px',
      background: 'rgba(59,130,246,0.12)',
      border: '1px solid rgba(59,130,246,0.25)',
      color: '#93c5fd',
      fontSize: '10px',
      fontWeight: 600,
      cursor: 'default',
    },
    btnIcon: {
      fontSize: '11px',
    },
  };

  return (
    <div style={s.root} aria-hidden="true">
      {/* Header */}
      <div style={s.header}>
        <span style={s.logo}>
          FIELD<span style={s.logoAccent}>LINE</span>
        </span>
        <div style={s.divider} />
        <span style={s.subtitle}>Job Pipeline</span>
        <div style={s.headerSpacer} />
        <div style={s.statusDot} />
      </div>

      {/* Kanban board */}
      <div style={s.board}>
        {/* Column: New Leads */}
        <div style={s.column}>
          <div style={s.colHeader}>
            <span style={s.colLabel}>New Leads</span>
            <span style={s.colCount}>3</span>
          </div>
          <div style={s.card('#3b82f6')}>
            <span style={s.cardName}>Marcus Webb</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>Pipe leak repair</span>
              <span style={s.cardAmount}>—</span>
            </div>
          </div>
          <div style={s.card('#3b82f6')}>
            <span style={s.cardName}>Rita Campos</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>Water heater</span>
              <span style={s.cardAmount}>—</span>
            </div>
          </div>
          <div style={s.card('#3b82f6')}>
            <span style={s.cardName}>D. Thornton</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>Drain cleaning</span>
              <span style={s.cardAmount}>—</span>
            </div>
          </div>
        </div>

        {/* Column: Quoted */}
        <div style={s.column}>
          <div style={s.colHeader}>
            <span style={s.colLabel}>Quoted</span>
            <span style={s.colCount}>2</span>
          </div>
          <div style={s.card('#f59e0b')}>
            <span style={s.cardName}>J. Okafor</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>Electrical panel</span>
              <span style={s.cardAmount}>$1,850</span>
            </div>
          </div>
          <div style={s.card('#f59e0b')}>
            <span style={s.cardName}>Priya Nair</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>AC install</span>
              <span style={s.cardAmount}>$3,200</span>
            </div>
          </div>
        </div>

        {/* Column: Scheduled */}
        <div style={s.column}>
          <div style={s.colHeader}>
            <span style={s.colLabel}>Scheduled</span>
            <span style={s.colCount}>2</span>
          </div>
          <div style={s.card('#22c55e')}>
            <span style={s.cardName}>Tom Reyes</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>Roof inspection</span>
              <span style={s.cardAmount}>$480</span>
            </div>
          </div>
          <div style={s.card('#22c55e')}>
            <span style={s.cardName}>Sandra Liu</span>
            <div style={s.cardMeta}>
              <span style={s.cardJob}>HVAC service</span>
              <span style={s.cardAmount}>$620</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action strip */}
      <div style={s.strip}>
        <div style={s.btnPurple}>
          <span style={s.btnIcon}>✦</span>
          AI Quote
        </div>
        <div style={s.btnBlue}>
          <span style={s.btnIcon}>✉</span>
          SMS Follow-up
        </div>
      </div>
    </div>
  );
}
