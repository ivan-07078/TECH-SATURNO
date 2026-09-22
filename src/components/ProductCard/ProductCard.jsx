import { Heart, ShoppingCart, Star } from 'lucide-react';

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

function ProductCard({ product }) {
  const price = Number(product?.price ?? 0);
  const visualClass = product?.visual ?? 'visual-headset';

  return (
    <article className="product-card">
      <div className="product-visual">
        <span className="product-tag">Novo</span>
        <button type="button" className="fav-button" aria-label="Adicionar aos favoritos">
          <Heart size={15} />
        </button>
        <span className={`visual-device ${visualClass}`} aria-hidden="true" />
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span>{product?.category ?? 'Eletrônicos'}</span>
          <span className="product-rating">
            <Star size={12} fill="currentColor" />
            {product?.rating ?? 4.9}
          </span>
        </div>

        <h3>{product?.name ?? 'Produto Tech Saturno'}</h3>
        <p>{product?.description ?? 'Acesso premium com tecnologia moderna e design premium.'}</p>

        <div className="product-footer">
          <strong className="product-price">{priceFormatter.format(price)}</strong>
          <button type="button" className="button button-primary buy-button">
            <ShoppingCart size={15} />
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
