function FavoritesPage() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Favoritos</span>
        <h1>Itens salvos</h1>
      </div>

      <div className="card empty-state">
        <p>Ainda não há produtos favoritos. Salve seus itens preferidos para acompanhar melhor.</p>
      </div>
    </section>
  );
}

export default FavoritesPage;
