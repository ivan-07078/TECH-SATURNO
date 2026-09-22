function CartSummary({ items = [], total = 0 }) {
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  return (
    <aside className="card pwa-banner">
      <div>
        <span className="eyebrow">Resumo</span>
        <h3>{items.length} itens no carrinho</h3>
      </div>
      <strong>{formattedTotal}</strong>
    </aside>
  );
}

export default CartSummary;
