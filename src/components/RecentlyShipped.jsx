import { useState } from 'react';

const shippedItems = [
  { project: 'Rival', feature: 'competitor pin-to-top — star icon hoists priority competitors, order persisted to localStorage' },
  { project: 'VOID RIFT', feature: 'rewarded ad web simulation — 5s countdown, skip-after-3s, animated progress bar, Claim Reward UX' },
  { project: 'Portfolio', feature: 'NowBuilding updated to Rival — competitor intelligence, live project signal' },
  { project: 'Rival', feature: 'signal activity heatmap — 30-day color-coded strip, click a square to filter briefings by day' },
  { project: 'VOID RIFT', feature: 'global leaderboard tab — Local/Global toggle, fetches from LeaderboardSystem' },
  { project: 'Rival', feature: 'Cmd+K global search palette — full-text search across competitors and briefings' },
  { project: 'VOID RIFT', feature: 'Daily Challenge launcher in Hangar — seeded run, today\'s best score, Start button' },
  { project: 'VOID RIFT', feature: 'Leaderboard tab in Hangar — top 20 local runs with rank, score, wave, difficulty' },
  { project: 'VOID RIFT', feature: 'Restore Purchases — App Store 3.1.1 compliance, Settings UI button wired to IAPManager' },
  { project: 'VOID RIFT', feature: 'Settings tab in Hangar — master/sfx/music volume sliders + mute toggle wired to AudioManager' },
  { project: 'Portfolio', feature: 'VoidRiftMockup wired into HeroBrowserMockup hero as 4th slide — live UI preview in hero' },
  { project: 'Rival', feature: 'AI competitor suggestions — enter your company, get 5 rivals instantly' },
  { project: 'VOID RIFT', feature: 'Daily Challenge launcher in Hangar — seeded run, best score, Start button' },
  { project: 'VOID RIFT', feature: 'Leaderboard tab in Hangar — top 20 local runs with rank, wave, difficulty' },
  { project: 'Rival', feature: 'Critical/Notable signal badges on briefing cards — inline red + orange indicators' },
  { project: 'Portfolio', feature: 'NxcorMockup — inline social feed UI component for showcase panel' },
  { project: 'Portfolio', feature: 'ClaruSignMockup — inline contract risk analysis UI for showcase panel' },
  { project: 'VOID RIFT', feature: 'daily streak + total challenges tracking — wired to achievement system' },
  { project: 'Rival', feature: 'ReactMarkdown briefing rendering — formatted content in expanded view' },
  { project: 'Portfolio', feature: 'buildStats row in showcase — timeline, team size, platform per project' },
  { project: 'Rival', feature: 'changelog URL auto-detect — suggests /changelog path on website blur' },
  { project: 'Rival', feature: 'Last 24h date filter + D/W keyboard shortcuts for date ranges' },
  { project: 'Rival', feature: 'full keyboard shortcuts modal — ?-key, all bindings documented' },
  { project: 'Rival', feature: 'Copy as Markdown per-card — structured export with competitor + signal + notes' },
  { project: 'Rival', feature: 'Notable signal stat card on Dashboard — orange badge + filter toggle' },
  { project: 'Portfolio', feature: 'VoidRiftMockup + RivalMockup wired into HeroBrowserMockup hero slides' },
  { project: 'VOID RIFT', feature: 'Restore Purchases — App Store 3.1.1 compliance, Settings UI button' },
  { project: 'VOID RIFT', feature: 'Settings tab in Hangar — master/sfx/music sliders + mute toggle' },
  { project: 'VOID RIFT', feature: 'tech fragment collect notification — gold shimmer toast on pickup' },
  { project: 'VOID RIFT', feature: 'live mission progress HUD — top-right panel with 3 daily mission bars' },
  { project: 'Rival', feature: 'New This Week summary — 7-day briefing rollup grouped by competitor' },
  { project: 'Rival', feature: 'unread briefing count badges per competitor on Competitors list' },
  { project: 'Portfolio', feature: 'availability status badge — pulsing green Available for consulting pill' },
  { project: 'Portfolio', feature: 'active section highlighting in StickyProjectNav' },
  { project: 'VOID RIFT', feature: 'post-wave stats overlay — wave number, kills, credits for 2s before upgrade picker' },
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
  { project: 'Rival', feature: 'filter persistence + CSV export' },
  { project: 'VOID RIFT', feature: 'persistent Hangar upgrade shop' },
];

const marqueeStyles = `
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export function RecentlyShipped() {
  const [paused, setPaused] = useState(false);
  const doubled = [...shippedItems, ...shippedItems];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
          animationPlayState: paused ? 'paused' : 'running',
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
