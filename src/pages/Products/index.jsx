import ProductCard from '../../components/ProductCard/ProductCard';

const products = [
  { id: 1, name: 'Notebook Aurora 15', category: 'Computadores', price: 4999.9, rating: 4.9, description: 'Potência para produtividade e estudo.' },
  { id: 2, name: 'Headset Pulse X', category: 'Áudio', price: 799.9, rating: 4.8, description: 'Áudio imersivo com conexão rápida.' },
  { id: 3, name: 'Smartwatch Neo', category: 'Wearables', price: 1299.0, rating: 4.7, description: 'Monitoramento inteligente e design leve.' },
  { id: 4, name: 'Teclado Mecânico', category: 'Periféricos', price: 689.0, rating: 5.0, description: 'Feedback preciso para gamers e criadores.' },
  { id: 5, name: 'Monitor Quantum', category: 'Monitores', price: 1899.0, rating: 4.8, description: 'Colorimetria e foco para profissionais.' },
  { id: 6, name: 'SSD 2TB', category: 'Armazenamento', price: 549.0, rating: 4.9, description: 'Velocidade e estabilidade para seus arquivos.' }
];

function ProductsPage() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Catálogo</span>
        <h1>Produtos</h1>
      </div>

      <div className="grid grid-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
