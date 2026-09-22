function Banner({ title, subtitle, actionLabel = 'Explorar agora' }) {
  return (
    <section className="hero-banner card">
      <div className="hero-copy">
        <span className="eyebrow">Tech Saturno</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button type="button" className="button button-primary">{actionLabel}</button>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </div>
    </section>
  );
}

export default Banner;
