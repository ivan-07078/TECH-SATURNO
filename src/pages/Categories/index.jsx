const categories = [
  'Computadores',
  'Periféricos',
  'Áudio',
  'Smart Home',
  'Acessórios',
  'Games'
];

function CategoriesPage() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="eyebrow">Explore</span>
        <h1>Categorias</h1>
      </div>

      <div className="grid grid-3">
        {categories.map((category) => (
          <div key={category} className="card category-card">
            <h3>{category}</h3>
            <p>Produtos selecionados para a sua rotina tech.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesPage;
