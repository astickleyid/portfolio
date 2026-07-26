import { useState } from 'react';

const shippedItems = [
  { project: 'VOID RIFT', feature: 'HERALD OF VOID boss at VOID SURGE wave 15 — multi-phase swarm commander with phase transitions and elite burst' },
  { project: 'VOID RIFT', feature: 'Kill streak combo multiplier — chain kills for x2–x5 credit/score boost with animated HUD timer' },
  { project: 'VOID RIFT', feature: 'BOSS ENRAGED overlay — red screen flash + warning text + 8-bullet burst when boss drops to 50% HP' },
  { project: 'Rival', feature: 'TrialBanner — trial/cancelled/expired subscription status bar with upgrade CTA and session dismissal' },
  { project: 'Rival', feature: 'Mobile hamburger nav — responsive drawer for the 8-link NavBar on small screens' },
  { project: 'Rival', feature: 'Scheduled weekly digest cron — hourly Vercel cron sends email+Slack to all users at their configured time' },
  { project: 'VOID RIFT', feature: 'Freeze Orb drop — 4% enemy death chance, slows all enemies 60% for 3s with ice-blue shimmer' },
  { project: 'Rival', feature: 'Email report delivery — one-click send of the weekly competitive intelligence report to your inbox' },
  { project: 'Portfolio', feature: 'Rival added to live products panel — competitive intel SaaS now listed alongside nXcor, ClaruSign, VOID RIFT' },
  { project: 'VOID RIFT', feature: 'Ghost Orb drop — 3% drop from elite/WANTED enemies, 3s invincibility on pickup with cyan shimmer' },
  { project: 'Rival', feature: 'Copy as Markdown export — one-click full weekly report copy for Slack/email sharing' },
  { project: 'Rival', feature: 'weekly report page — /report route, grouped by competitor, signal severity, print-ready' },
  { project: 'Rival', feature: 'search + competitor filter on Notes page — keyword and dropdown filters with live results count' },
  { project: 'VOID RIFT', feature: 'Medic Orb drop — 4% enemy death chance when HP <60%, +20 HP heal, glowing green cross orb' },
  { project: 'VOID RIFT', feature: 'Power Surge orb drop — 6% enemy death chance, 1.8× DMG boost for 8s with HUD timer' },
  { project: 'Portfolio', feature: 'tech stack grid — 6-category visual breakdown of frontend, backend, AI, mobile, and infra skills' },
  { project: 'Rival', feature: 'Insights page — cross-competitor intelligence summary with activity ranking, top signals, and signal distribution' },
  { project: 'Rival', feature: 'competitor comparison modal — side-by-side signal analysis for 2 tracked competitors' },
  { project: 'Rival', feature: 'week-over-week trend indicators on Dashboard stat cards — ↑↓ delta vs last week' },
  { project: 'Rival', feature: 'Notes Journal — /notes route, annotated briefings grouped by competitor with inline note previews' },
  { project: 'Rival', feature: 'Bookmarks page — cross-competitor saved signals view with critical/notable counts' },
  { project: 'VOID RIFT', feature: 'Armory tab in Hangar — browse and unlock primary/secondary/defense/ultimate weapons with credits' },
  { project: 'VOID RIFT', feature: 'WANTED bounty targets — gold crown enemies with 2.5× HP and big credit reward, one per wave from level 3+' },
  { project: 'VOID RIFT', feature: 'Perfect Wave bonus — PERFECT WAVE! +50 credits overlay when clearing a wave without damage' },
  { project: 'VOID RIFT', feature: 'wave complete screen — accuracy %, time survived, tap-to-continue, animated entrance' },
  { project: 'Rival', feature: 'text search on CompetitorDetail — filter briefings by keyword, hides pagination when active' },
  { project: 'Rival', feature: 'signal type filter chips — All/Critical/Notable/Routine pills on CompetitorDetail' },
  { project: 'Rival', feature: 'signal trend sparklines on Competitors page — 8-week bars colored by severity' },
  { project: 'Rival', feature: 'signal distribution chips on Competitors page — critical/notable counts per competitor' },
  { project: 'Rival', feature: 'competitor pin-to-top — star icon hoists priority competitors, order persisted to localStorage' },
  { project: 'Portfolio', feature: 'case study modals — per-project Problem/Built/Impact/Decisions overlay for all 5 flagship projects' },
  { project: 'Portfolio', feature: 'lazy-load project iframes via IntersectionObserver — defer all 5 embeds until scrolled into view' },
  { project: 'Portfolio', feature: 'NxcorMockup + ClaruSignMockup wired — all 5 flagship projects now use static mockup components' },
  { project: 'VOID RIFT', feature: 'Missions tab in Hangar — daily mission progress bars, Claim button, reset countdown' },
  { project: 'Portfolio', feature: 'FieldlineMockup — inline CRM job pipeline kanban mockup for Fieldline showcase' },
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
