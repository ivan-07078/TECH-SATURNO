function CartPage() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Carrinho</span>
        <h1>Seu pedido</h1>
      </div>

      <div className="card empty-state">
        <p>Seu carrinho está vazio no momento. Adicione alguns produtos para continuar.</p>
      </div>
    </section>
  );
}

export default CartPage;
