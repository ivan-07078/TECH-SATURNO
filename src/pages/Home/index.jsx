import {
  Smartphone,
  Headphones,
  Gamepad2,
  PlugZap,
  Laptop,
  Watch,
  Home,
  Wrench,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Banner from '../../components/Banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const categories = [
  { title: 'Celulares e Smartphones', description: 'Leve e rápido', icon: Smartphone },
  { title: 'Fones e Headsets', description: 'Som imersivo', icon: Headphones },
  { title: 'Games e Acessórios', description: 'Ação e diversão', icon: Gamepad2 },
  { title: 'Carregadores e Cabos', description: 'Tudo conectado', icon: PlugZap },
  { title: 'Notebooks e Computadores', description: 'Potência e performance', icon: Laptop },
  { title: 'Smartwatches e Relógios', description: 'Estilo e saúde', icon: Watch },
  { title: 'Casa & Cozinha', description: 'Tecnologia no dia a dia', icon: Home },
  { title: 'Ferramentas', description: 'Trabalho e manutenção', icon: Wrench },
  { title: 'Ver mais categorias', description: 'Explore tudo', icon: ChevronRight }
];

const sampleProducts = [
  { id: 1, name: 'Headset Gamer Pro', category: 'Áudio', price: 1299.0, rating: 4.9, description: 'Som imersivo para focar no jogo.', visual: 'visual-headset' },
  { id: 2, name: 'Controle Elite X', category: 'Games', price: 599.0, rating: 4.8, description: 'Precisão para partidas intensas.', visual: 'visual-controller' },
  { id: 3, name: 'Smartwatch Nova', category: 'Wearables', price: 899.0, rating: 4.7, description: 'Estilo com tecnologia inteligente.', visual: 'visual-watch' },
  { id: 4, name: 'Smartphone Aurora', category: 'Mobile', price: 2499.0, rating: 5.0, description: 'Performance e qualidade de imagem.', visual: 'visual-smartphone' }
];

function HomePage() {
  return (
    <div className="page">
      <Banner
        title="TECNOLOGIA QUE<br /><span class='purple'>FACILITA SEU DIA</span>"
        subtitle="Eletrônicos e produtos selecionados para você viver o melhor da tecnologia."
      />

      <section>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="product-header-row">
          <h2>Mais Vendidos</h2>
          <a href="/produtos" className="section-link">
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="product-grid">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-grid">
        <article className="promo-banner promo-banner--games">
          <span className="eyebrow">Games</span>
          <h3>GAMES<br />É AQUI!</h3>
          <button type="button" className="button button-primary promo-button">Saiba mais</button>
        </article>

        <article className="promo-banner promo-banner--smartphones">
          <span className="eyebrow">Smartphones</span>
          <h3>SMARTPHONES<br />E ACESSÓRIOS</h3>
          <button type="button" className="button button-primary promo-button">Ver ofertas</button>
        </article>

        <article className="promo-banner promo-banner--support">
          <span className="eyebrow">Atendimento</span>
          <h3>ATENDIMENTO<br />EM RECIFE E REGIÃO</h3>
          <button type="button" className="button button-primary promo-button">Converse</button>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
