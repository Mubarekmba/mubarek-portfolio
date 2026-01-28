export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="text-center mb-5" data-reveal>
      {eyebrow ? (
        <p className="section-eyebrow mb-2 text-uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="section-title mb-2">{title}</h2>
      {subtitle ? <p className="text-secondary mb-0">{subtitle}</p> : null}
    </header>
  );
}


