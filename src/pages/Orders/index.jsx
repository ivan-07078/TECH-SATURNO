function OrdersPage() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Pedidos</span>
        <h1>Histórico</h1>
      </div>

      <div className="card empty-state">
        <p>Nenhum pedido realizado até o momento.</p>
      </div>
    </section>
  );
}

export default OrdersPage;
