export function ClaruSignMockup() {
  const s = {
    root: {
      background: '#fafaf9',
      border: '1px solid rgba(0,0,0,0.09)',
      borderRadius: '12px',
      overflow: 'hidden',
      maxHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      fontSize: '12px',
      lineHeight: 1.5,
      userSelect: 'none',
    },

    // App header bar
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 14px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      flexShrink: 0,
    },
    logo: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#1a1a1a',
      letterSpacing: '-0.02em',
    },
    logoDot: {
      color: '#dc2626',
    },
    headerSpacer: { flex: 1 },
    scorePill: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      borderRadius: '20px',
      background: 'rgba(220,38,38,0.08)',
      border: '1px solid rgba(220,38,38,0.2)',
    },
    scoreLabel: {
      fontSize: '10px',
      color: '#dc2626',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    scoreDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#dc2626',
    },

    // Body: doc + sidebar
    body: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
    },

    // Document panel
    doc: {
      flex: 1,
      padding: '14px 16px',
      overflow: 'hidden',
      background: '#fff',
      borderRight: '1px solid rgba(0,0,0,0.07)',
    },
    docTitle: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#374151',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    docTitleIcon: { fontSize: '13px' },
    para: {
      fontSize: '11px',
      color: '#6b7280',
      lineHeight: 1.6,
      marginBottom: '8px',
    },
    highlight: {
      background: 'rgba(220,38,38,0.12)',
      borderBottom: '1.5px solid rgba(220,38,38,0.5)',
      color: '#b91c1c',
      padding: '0 1px',
      borderRadius: '2px',
      fontWeight: 500,
    },
    highlightYellow: {
      background: 'rgba(234,179,8,0.12)',
      borderBottom: '1.5px solid rgba(234,179,8,0.5)',
      color: '#92400e',
      padding: '0 1px',
      borderRadius: '2px',
      fontWeight: 500,
    },
    clause: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '5px',
      background: 'rgba(220,38,38,0.05)',
      border: '1px solid rgba(220,38,38,0.18)',
      borderRadius: '6px',
      padding: '7px 9px',
      marginBottom: '6px',
    },
    clauseBadge: {
      flexShrink: 0,
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#dc2626',
      color: '#fff',
      fontSize: '9px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1px',
    },
    clauseText: {
      fontSize: '10.5px',
      color: '#374151',
      lineHeight: 1.4,
    },

    // Sidebar
    sidebar: {
      width: '140px',
      flexShrink: 0,
      background: '#fafaf9',
      padding: '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      overflow: 'hidden',
    },
    sidebarSection: {
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: '8px',
      padding: '8px 10px',
    },
    sidebarLabel: {
      fontSize: '9px',
      fontWeight: 700,
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      marginBottom: '6px',
    },
    riskScore: {
      fontSize: '26px',
      fontWeight: 800,
      color: '#dc2626',
      lineHeight: 1,
      letterSpacing: '-0.03em',
    },
    riskGrade: {
      fontSize: '10px',
      color: '#dc2626',
      fontWeight: 600,
      marginTop: '2px',
    },
    flagRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '4px',
    },
    flagDot: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      flexShrink: 0,
    },
    flagLabel: {
      fontSize: '10px',
      color: '#374151',
      lineHeight: 1.3,
    },
    actionBtn: {
      display: 'block',
      width: '100%',
      padding: '7px 0',
      borderRadius: '6px',
      background: '#1a1a1a',
      color: '#fff',
      fontSize: '10.5px',
      fontWeight: 600,
      textAlign: 'center',
      border: 'none',
      cursor: 'default',
      letterSpacing: '0.01em',
    },
  };

  const flags = [
    { color: '#dc2626', label: 'Auto-renewal clause', severity: 'high' },
    { color: '#dc2626', label: 'Unlimited liability', severity: 'high' },
    { color: '#eab308', label: 'IP assignment scope', severity: 'medium' },
  ];

  return (
    <div style={s.root} aria-hidden="true">
      {/* Header */}
      <div style={s.header}>
        <span style={s.logo}>Claru<span style={s.logoDot}>Sign</span></span>
        <div style={s.headerSpacer} />
        <div style={s.scorePill}>
          <div style={s.scoreDot} />
          <span style={s.scoreLabel}>HIGH RISK</span>
        </div>
      </div>

      {/* Body */}
      <div style={s.body}>
        {/* Document */}
        <div style={s.doc}>
          <div style={s.docTitle}>
            <span style={s.docTitleIcon}>📄</span>
            Service Agreement — v3.2.pdf
          </div>

          <p style={s.para}>
            This Agreement shall <span style={s.highlight}>automatically renew for successive one-year terms</span> unless
            terminated in writing no fewer than 90 days prior to expiration.
          </p>

          <p style={s.para}>
            Client agrees to <span style={s.highlight}>unlimited liability</span> for damages arising from use of the
            platform, with no cap on total exposure. Vendor's liability shall not exceed{' '}
            <span style={s.highlightYellow}>the fees paid in the prior 30-day period</span>.
          </p>

          {/* Flagged clause */}
          <div style={s.clause}>
            <div style={s.clauseBadge}>!</div>
            <span style={s.clauseText}>
              IP created during the engagement transfers to Vendor in perpetuity across all markets and media.
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div style={s.sidebar}>
          <div style={s.sidebarSection}>
            <div style={s.sidebarLabel}>Risk score</div>
            <div style={s.riskScore}>82</div>
            <div style={s.riskGrade}>Grade: F</div>
          </div>

          <div style={s.sidebarSection}>
            <div style={s.sidebarLabel}>Red flags</div>
            {flags.map((f) => (
              <div key={f.label} style={s.flagRow}>
                <div style={{ ...s.flagDot, background: f.color }} />
                <span style={s.flagLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <button style={s.actionBtn}>Draft Reply ↗</button>
        </div>
      </div>
    </div>
  );
}
