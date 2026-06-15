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

    // Top nav bar
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '10px 16px',
      background: '#111111',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      flexShrink: 0,
    },
    wordmark: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.02em',
      marginRight: '4px',
    },
    navTabs: {
      display: 'flex',
      gap: '2px',
    },
    navTabActive: {
      padding: '4px 10px',
      borderRadius: '6px',
      background: 'rgba(99,102,241,0.2)',
      color: '#a5b4fc',
      fontWeight: 600,
      fontSize: '11px',
    },
    navTab: {
      padding: '4px 10px',
      borderRadius: '6px',
      color: 'rgba(255,255,255,0.38)',
      fontWeight: 500,
      fontSize: '11px',
    },
    navSpacer: { flex: 1 },
    navDot: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#22c55e',
      boxShadow: '0 0 6px rgba(34,197,94,0.6)',
    },

    // Stat cards row
    statRow: {
      display: 'flex',
      gap: '8px',
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      flexShrink: 0,
    },
    statCard: {
      flex: 1,
      background: '#161616',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '8px',
      padding: '8px 10px',
    },
    statLabel: {
      display: 'block',
      fontSize: '10px',
      color: 'rgba(255,255,255,0.38)',
      fontFamily: 'var(--font-mono, monospace)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: '4px',
    },
    statValue: {
      display: 'block',
      fontSize: '20px',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1,
    },
    statValueAmber: {
      display: 'block',
      fontSize: '20px',
      fontWeight: 700,
      color: '#f59e0b',
      lineHeight: 1,
    },

    // Briefing cards list
    briefingList: {
      overflow: 'hidden',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      padding: '8px 14px',
    },
    briefingCard: {
      background: '#141414',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '8px',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      marginBottom: '6px',
    },
    briefingHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    competitorBadge: {
      padding: '2px 7px',
      borderRadius: '4px',
      background: 'rgba(99,102,241,0.15)',
      border: '1px solid rgba(99,102,241,0.25)',
      color: '#a5b4fc',
      fontSize: '10px',
      fontWeight: 600,
      fontFamily: 'var(--font-mono, monospace)',
    },
    periodText: {
      fontSize: '10px',
      color: 'rgba(255,255,255,0.3)',
      fontFamily: 'var(--font-mono, monospace)',
    },
    pillSpacer: { flex: 1 },
    pillNotable: {
      padding: '2px 7px',
      borderRadius: '4px',
      background: 'rgba(245,158,11,0.12)',
      border: '1px solid rgba(245,158,11,0.25)',
      color: '#fbbf24',
      fontSize: '10px',
      fontWeight: 600,
      fontFamily: 'var(--font-mono, monospace)',
    },
    pillRoutine: {
      padding: '2px 7px',
      borderRadius: '4px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: 'rgba(255,255,255,0.4)',
      fontSize: '10px',
      fontWeight: 600,
      fontFamily: 'var(--font-mono, monospace)',
    },
    briefingBody: {
      fontSize: '11.5px',
      color: 'rgba(240,240,240,0.72)',
      lineHeight: 1.55,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
  };

  return (
    <div style={s.root} aria-hidden="true">
      {/* Nav bar */}
      <div style={s.nav}>
        <span style={s.wordmark}>Rival</span>
        <div style={s.navTabs}>
          <span style={s.navTabActive}>Briefings</span>
          <span style={s.navTab}>Competitors</span>
          <span style={s.navTab}>Settings</span>
        </div>
        <div style={s.navSpacer} />
        <div style={s.navDot} />
      </div>

      {/* Stat cards */}
      <div style={s.statRow}>
        <div style={s.statCard}>
          <span style={s.statLabel}>Unread</span>
          <span style={s.statValue}>12</span>
        </div>
        <div style={s.statCard}>
          <span style={s.statLabel}>Bookmarked</span>
          <span style={s.statValue}>4</span>
        </div>
        <div style={s.statCard}>
          <span style={s.statLabel}>Notable</span>
          <span style={s.statValueAmber}>2</span>
        </div>
      </div>

      {/* Briefing cards */}
      <div style={s.briefingList}>
        <div style={s.briefingCard}>
          <div style={s.briefingHeader}>
            <span style={s.competitorBadge}>Stripe</span>
            <span style={s.periodText}>Jun 9–15, 2025</span>
            <div style={s.pillSpacer} />
            <span style={s.pillNotable}>notable</span>
          </div>
          <p style={s.briefingBody}>
            Pricing page updated — checkout fee for EU merchants increased from 1.4% to 1.9%. New
            comparison table positions Stripe against regional processors.
          </p>
        </div>

        <div style={s.briefingCard}>
          <div style={s.briefingHeader}>
            <span style={s.competitorBadge}>Linear</span>
            <span style={s.periodText}>Jun 2–8, 2025</span>
            <div style={s.pillSpacer} />
            <span style={s.pillRoutine}>routine</span>
          </div>
          <p style={s.briefingBody}>
            Changelog added two new keyboard shortcuts and a bulk-reassign flow. No pricing or
            positioning changes detected this week.
          </p>
        </div>

        <div style={s.briefingCard}>
          <div style={s.briefingHeader}>
            <span style={s.competitorBadge}>Vercel</span>
            <span style={s.periodText}>Jun 2–8, 2025</span>
            <div style={s.pillSpacer} />
            <span style={s.pillRoutine}>routine</span>
          </div>
          <p style={s.briefingBody}>
            Blog published a case study on AI-generated frontends. No feature page or pricing
            changes in the tracked period.
          </p>
        </div>
      </div>
    </div>
  );
}
