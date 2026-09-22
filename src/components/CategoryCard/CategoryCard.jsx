function CategoryCard({ title, description, icon: Icon }) {
  return (
    <article className="category-card">
      <div className="category-icon">{Icon ? <Icon size={18} /> : null}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default CategoryCard;
