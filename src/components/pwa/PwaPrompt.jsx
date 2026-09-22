import { Download } from 'lucide-react';

function PwaPrompt() {
  return (
    <div className="card pwa-banner">
      <div>
        <span className="eyebrow">Aplicativo</span>
        <h2>Instale o Tech Saturno</h2>
      </div>
      <button type="button" className="button button-primary">
        <Download size={18} />
        Instalar
      </button>
    </div>
  );
}

export default PwaPrompt;
