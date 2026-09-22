import Banner from '../../components/Banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import PwaPrompt from '../../components/pwa/PwaPrompt';

const sampleProducts = [
  { id: 1, name: 'Notebook Aurora 15', category: 'Computadores', price: 4999.9, rating: 4.9, description: 'Potência para produtividade e estudo.' },
  { id: 2, name: 'Headset Pulse X', category: 'Áudio', price: 799.9, rating: 4.8, description: 'Áudio imersivo com conexão rápida.' },
  { id: 3, name: 'Smartwatch Neo', category: 'Wearables', price: 1299.0, rating: 4.7, description: 'Monitoramento inteligente e design leve.' },
  { id: 4, name: 'Teclado Mecânico', category: 'Periféricos', price: 689.0, rating: 5.0, description: 'Feedback preciso para gamers e criadores.' }
];

function HomePage() {
  return (
    <div className="page">
      <Banner
        title="Tecnologia em movimento"
        subtitle="Acesse os melhores equipamentos, acessórios e power-ups para a sua rotina digital."
      />

      <Search />
      <PwaPrompt />

      <section>
        <div className="page-header">
          <span className="eyebrow">Destaques</span>
          <h2>Produtos em alta</h2>
        </div>

        <div className="grid grid-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
