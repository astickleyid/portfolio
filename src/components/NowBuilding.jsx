export function NowBuilding() {
  const projects = ['Rival', 'VOID RIFT', 'nXcor'];

  return (
    <div className="now-building">
      <span className="now-building__dot" aria-hidden="true" />
      <span className="now-building__label">Now Building</span>
      <div className="now-building__pills">
        {projects.map((name) => (
          <span key={name} className="now-building__pill">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
