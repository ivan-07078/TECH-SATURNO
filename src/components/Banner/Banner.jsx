import { ShieldCheck, BadgePercent, Truck } from 'lucide-react';

function Banner({ title, subtitle, actionLabel = 'Confira nossos produtos' }) {
  return (
    <section className="hero-banner">
      <div className="hero-copy">
        <span className="eyebrow">Tech Saturno</span>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-actions">
          <button type="button" className="button button-primary">{actionLabel}</button>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="device device-headphones" />
        <div className="device device-controller" />
        <div className="device device-watch" />
        <div className="device device-charger" />
      </div>

      <div className="hero-benefits">
        <div className="benefit-pill">
          <span className="benefit-icon"><ShieldCheck size={14} /></span>
          Qualidade em cada compra
        </div>
        <div className="benefit-pill">
          <span className="benefit-icon"><BadgePercent size={14} /></span>
          Preço justo e variedade
        </div>
        <div className="benefit-pill">
          <span className="benefit-icon"><Truck size={14} /></span>
          Confiança em todo o processo
        </div>
      </div>
    </section>
  );
}

export default Banner;
