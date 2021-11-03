export default function CategoriesList({ categorizations }) {
  return (
    <ul className="view-list categories-list">
      {categorizations.map((category) => (
        <li className="view-list-item" key={category.id}>
          <div className="category-badge">
            <div className="image-container">
              <img
                alt={category.name}
                className="abs-pos-img"
                src={category.photo}
              />
            </div>
            <div className="category-name">{category.name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
