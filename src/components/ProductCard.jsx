import "./ProductCard.css";

function ProductCard({ name, price, inStock, image }) {
  return (
    <div className="card">

      {/* IMAGE CONTAINER */}
      <div className="image-container">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>

      <span className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

    </div>
  );
}

export default ProductCard;
