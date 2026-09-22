import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Detalhes</span>
        <h1>Produto #{id}</h1>
      </div>

      <div className="card product-detail-card">
        <h2>Notebook Aurora 15</h2>
        <p>Desempenho premium para trabalho, criação e entretenimento com experiência ultrafina e moderna.</p>
        <button type="button" className="button button-primary">Adicionar ao carrinho</button>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
