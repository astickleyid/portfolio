import { useState, useEffect, useRef } from 'react';

export function DeviceSimulator({ url, label, height = 520, scale = 0.75, children, image = null }) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [visible, setVisible] = useState(false);
  const simRef = useRef(null);

  // Defer mounting the iframe until the frame scrolls into view (perf).
  useEffect(() => {
    const el = simRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Some embedded apps hold open live sockets and never fire a clean onLoad,
  // leaving the spinner hanging. Reveal after a grace period regardless.
  useEffect(() => {
    if (!visible || children || image) return undefined;
    const t = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(t);
  }, [visible, children, image]);

  return (
    <div className="device-sim" ref={simRef}>
      <div className="device-sim__chrome">
        <div className="device-sim__dots">
          <span className="device-sim__dot device-sim__dot--red" />
          <span className="device-sim__dot device-sim__dot--yellow" />
          <span className="device-sim__dot device-sim__dot--green" />
        </div>
        <div className="device-sim__bar">
          <span className="device-sim__lock">🔒</span>
          <span className="device-sim__url">{label || url}</span>
        </div>
      </div>
      <div className="device-sim__viewport" style={{ height }}>
        {!visible ? (
          <div className="device-sim__placeholder" style={{ width: '100%', height: '100%' }} />
        ) : image ? (
          // Real screenshot for sites that block iframe embedding (X-Frame-Options).
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="device-sim__shot"
            style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
          >
            <img
              src={image}
              alt={`${label} — live site`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
              loading="lazy"
            />
            <span className="device-sim__shot-badge">Open {label} ↗</span>
          </a>
        ) : children ? (
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            {children}
          </div>
        ) : !blocked ? (
          <iframe
            src={url}
            className="device-sim__iframe"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              width: `${100 / scale}%`,
              height: `${100 / scale}%`,
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setBlocked(true)}
            title={label}
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-modals"
            loading="lazy"
          />
        ) : (
          <div className="device-sim__fallback">
            <a href={url} target="_blank" rel="noreferrer">Open {label} ↗</a>
          </div>
        )}
        {visible && !children && !image && !loaded && !blocked && (
          <div className="device-sim__loading">Loading…</div>
        )}
      </div>
    </div>
  );
}
