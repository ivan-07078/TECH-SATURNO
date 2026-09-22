import { Heart, ShoppingCart, Star } from 'lucide-react';

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

function ProductCard({ product }) {
  const price = Number(product?.price ?? 0);

  return (
    <article className="product-card card">
      <div className="product-image">
        <span className="badge">Em destaque</span>
        <button type="button" className="favorite-button" aria-label="Adicionar aos favoritos">
          <Heart size={16} />
        </button>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span>{product?.category ?? 'Eletrônicos'}</span>
          <span className="rating">
            <Star size={14} fill="currentColor" />
            {product?.rating ?? 4.9}
          </span>
        </div>

        <h3>{product?.name ?? 'Produto Tech Saturno'}</h3>
        <p>{product?.description ?? 'Acesso premium com tecnologia moderna e design premium.'}</p>

        <div className="product-footer">
          <strong>{priceFormatter.format(price)}</strong>
          <button type="button" className="button button-primary mini-button">
            <ShoppingCart size={16} />
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
