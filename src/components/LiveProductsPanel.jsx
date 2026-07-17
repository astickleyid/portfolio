import { ArrowUpRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'nXcor',
    desc: 'Creator platform · n-xcor.com',
    href: 'https://n-xcor.com',
    status: 'Live',
    live: true,
  },
  {
    name: 'ClaruSign',
    desc: 'AI contract review · clarusign.com',
    href: 'https://clarusign.vercel.app',
    status: 'Live',
    live: true,
  },
  {
    name: 'AURA',
    desc: 'Geo-AR platform',
    href: 'https://aura-ar-world.vercel.app',
    status: 'Live',
    live: true,
  },
  {
    name: 'findafiend',
    desc: 'Community rideshare · Detroit / Toledo',
    href: 'https://findafiend.com',
    status: 'Beta',
    live: false,
  },
  {
    name: 'KeyBridge',
    desc: 'Universal API key vault',
    href: 'https://github.com/astickleyid/keybridge',
    status: 'Beta',
    live: false,
  },
  {
    name: 'VOID RIFT',
    desc: 'Browser game',
    href: 'https://voidrift.vercel.app',
    status: 'Live',
    live: true,
  },
  {
    name: 'Rival',
    desc: 'Competitive intelligence SaaS',
    href: 'https://rival-alpha.vercel.app',
    status: 'Live',
    live: true,
  },
];

export function LiveProductsPanel() {
  return (
    <aside className="live-panel" aria-label="Live shipped products">
      <header className="live-panel__head">
        <span className="live-panel__title">Shipped · Live deployments</span>
        <span className="live-panel__pulse">
          <span className="live-panel__dot" aria-hidden="true" />
          {PRODUCTS.filter((p) => p.live).length} live
        </span>
      </header>

      <div role="list">
        {PRODUCTS.map((product, i) => (
          <a
            key={product.name}
            href={product.href}
            target="_blank"
            rel="noreferrer"
            className="live-panel__row"
            role="listitem"
          >
            <span className="live-panel__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="live-panel__name">
              <b>{product.name}</b>
              <span>{product.desc}</span>
            </span>
            <span className={`live-panel__status${product.live ? ' live-panel__status--live' : ''}`}>
              {product.status}
            </span>
            <span className="live-panel__arrow" aria-hidden="true">
              <ArrowUpRight size={14} />
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
