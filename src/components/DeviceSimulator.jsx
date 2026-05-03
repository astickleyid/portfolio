import { useState } from 'react';

export function DeviceSimulator({ url, label, height = 520, scale = 0.75 }) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <div className="device-sim">
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
        {!blocked ? (
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
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
          />
        ) : (
          <div className="device-sim__fallback">
            <a href={url} target="_blank" rel="noreferrer">
              Open {label} ↗
            </a>
          </div>
        )}
        {!loaded && !blocked && (
          <div className="device-sim__loading">Loading…</div>
        )}
      </div>
    </div>
  );
}
