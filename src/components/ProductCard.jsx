export default function ProductCard({ product }) {
  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`${imageEndpoint}${product.image}`} alt={product.name} />
      </div>

      <div className="product-body">
        <h1 className="product-body-title playfair-font">{product.name}</h1>
        <p className="product-body-subtitle">
          <span>{getYear(product.yearReleased)}</span>
          <span>{product.format}</span>
          <span>{product.type}</span>
        </p>
        <p className="product-body-description">{product.description}</p>
      </div>
    </div>
  );
}
