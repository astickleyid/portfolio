export function NxcorMockup() {
  const s = {
    root: {
      background: '#0d1117',
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

    // Top header bar
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 14px',
      background: '#161b22',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      flexShrink: 0,
    },
    serverIcon: {
      width: '26px',
      height: '26px',
      borderRadius: '8px',
      background: '#7c3aed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    serverIconText: {
      fontSize: '11px',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.02em',
    },
    serverName: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#e6edf3',
      letterSpacing: '-0.01em',
    },
    headerSpacer: { flex: 1 },
    onlineChip: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 8px',
      borderRadius: '12px',
      background: 'rgba(124,58,237,0.12)',
      border: '1px solid rgba(124,58,237,0.25)',
    },
    onlineDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#a78bfa',
      boxShadow: '0 0 6px rgba(167,139,250,0.7)',
    },
    onlineText: {
      fontSize: '10px',
      color: '#a78bfa',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },

    // Body: sidebar + content
    body: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
    },

    // Sidebar
    sidebar: {
      width: '112px',
      flexShrink: 0,
      background: '#161b22',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '8px',
      overflow: 'hidden',
    },
    sidebarSection: {
      padding: '0 8px 6px',
    },
    channelActive: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 8px',
      borderRadius: '6px',
      background: 'rgba(124,58,237,0.18)',
      marginBottom: '2px',
      cursor: 'default',
    },
    channelInactive: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 8px',
      borderRadius: '6px',
      marginBottom: '2px',
      cursor: 'default',
    },
    channelHash: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.3)',
      fontWeight: 600,
      lineHeight: 1,
    },
    channelHashActive: {
      fontSize: '12px',
      color: '#a78bfa',
      fontWeight: 600,
      lineHeight: 1,
    },
    channelLabel: {
      fontSize: '11px',
      color: 'rgba(230,237,243,0.45)',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    channelLabelActive: {
      fontSize: '11px',
      color: '#c4b5fd',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    divider: {
      height: '1px',
      background: 'rgba(255,255,255,0.06)',
      margin: '4px 8px 8px',
    },
    membersLabel: {
      fontSize: '9px',
      color: 'rgba(255,255,255,0.3)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '0 16px 6px',
    },
    memberRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      padding: '4px 16px',
    },
    memberAvatar: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '9px',
      fontWeight: 700,
      color: '#fff',
    },
    memberName: {
      fontSize: '10px',
      color: 'rgba(230,237,243,0.5)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    // Content area
    content: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      padding: '10px 12px',
      background: '#0d1117',
    },

    // Post cards
    card: {
      background: '#21262d',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '8px',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      marginBottom: '7px',
      flexShrink: 0,
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    postAvatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 700,
      color: '#fff',
    },
    postAuthor: {
      fontSize: '12px',
      fontWeight: 600,
      color: '#e6edf3',
    },
    postTime: {
      fontSize: '10px',
      color: 'rgba(230,237,243,0.35)',
      marginLeft: '2px',
    },
    postBody: {
      fontSize: '11.5px',
      color: 'rgba(230,237,243,0.72)',
      lineHeight: 1.55,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
    imageStrip: {
      height: '36px',
      borderRadius: '6px',
      background: 'linear-gradient(90deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.07) 60%, rgba(124,58,237,0.12) 100%)',
      border: '1px solid rgba(124,58,237,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStripText: {
      fontSize: '9px',
      color: 'rgba(167,139,250,0.5)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },
    reaction: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '11px',
      color: 'rgba(230,237,243,0.45)',
    },
    reactionEmoji: {
      fontSize: '12px',
    },
    shareBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '11px',
      color: 'rgba(230,237,243,0.35)',
      marginLeft: 'auto',
    },
    shareArrow: {
      fontSize: '11px',
    },
  };

  const members = [
    { initials: 'MK', bg: '#7c3aed', name: 'mkstudio' },
    { initials: 'JR', bg: '#0ea5e9', name: 'jrdrops' },
    { initials: 'AV', bg: '#059669', name: 'avdesign' },
  ];

  return (
    <div style={s.root} aria-hidden="true">
      {/* Header */}
      <div style={s.header}>
        <div style={s.serverIcon}>
          <span style={s.serverIconText}>nX</span>
        </div>
        <span style={s.serverName}>nXcor</span>
        <div style={s.headerSpacer} />
        <div style={s.onlineChip}>
          <div style={s.onlineDot} />
          <span style={s.onlineText}>14 online</span>
        </div>
      </div>

      {/* Body */}
      <div style={s.body}>
        {/* Sidebar */}
        <div style={s.sidebar}>
          <div style={s.sidebarSection}>
            <div style={s.channelActive}>
              <span style={s.channelHashActive}>#</span>
              <span style={s.channelLabelActive}>feed</span>
            </div>
            <div style={s.channelInactive}>
              <span style={s.channelHash}>#</span>
              <span style={s.channelLabel}>drops</span>
            </div>
            <div style={s.channelInactive}>
              <span style={s.channelHash}>#</span>
              <span style={s.channelLabel}>media</span>
            </div>
            <div style={s.channelInactive}>
              <span style={s.channelHash}>#</span>
              <span style={s.channelLabel}>demos</span>
            </div>
          </div>

          <div style={s.divider} />

          <div style={s.membersLabel}>Members</div>
          {members.map((m) => (
            <div key={m.name} style={s.memberRow}>
              <div style={{ ...s.memberAvatar, background: m.bg }}>
                {m.initials}
              </div>
              <span style={s.memberName}>{m.name}</span>
            </div>
          ))}
        </div>

        {/* Content feed */}
        <div style={s.content}>
          {/* Post 1 */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={{ ...s.postAvatar, background: '#7c3aed' }}>MK</div>
              <span style={s.postAuthor}>@mkstudio</span>
              <span style={s.postTime}>· 2h ago</span>
            </div>
            <p style={s.postBody}>
              just shipped dark mode — took longer than expected but the contrast ratios are finally dialed in. worth the extra day.
            </p>
            <div style={s.imageStrip}>
              <span style={s.imageStripText}>preview · dark-mode-v2.png</span>
            </div>
            <div style={s.cardFooter}>
              <span style={s.reaction}><span style={s.reactionEmoji}>❤</span> 24</span>
              <span style={s.reaction}><span style={s.reactionEmoji}>💬</span> 7</span>
              <span style={s.shareBtn}><span style={s.shareArrow}>↗</span> Share</span>
            </div>
          </div>

          {/* Post 2 */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={{ ...s.postAvatar, background: '#0ea5e9' }}>JR</div>
              <span style={s.postAuthor}>@jrdrops</span>
              <span style={s.postTime}>· 5h ago</span>
            </div>
            <p style={s.postBody}>
              dropped a new template pack — 12 layouts, all export-ready. grab it while it's free this week only.
            </p>
            <div style={s.cardFooter}>
              <span style={s.reaction}><span style={s.reactionEmoji}>❤</span> 11</span>
              <span style={s.reaction}><span style={s.reactionEmoji}>💬</span> 3</span>
              <span style={s.shareBtn}><span style={s.shareArrow}>↗</span> Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
