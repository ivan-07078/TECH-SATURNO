function CategoryCard({ title, description }) {
  return (
    <article className="card category-card">
      <span className="eyebrow">Categoria</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default CategoryCard;
