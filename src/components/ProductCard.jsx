export default function ProductCard({ product }) {
  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image ? `${imageEndpoint}${product.image}` : null} alt={product.name} />
      </div>

      <div className="product-body">
        <h1 className="product-body-title playfair-font">{product.name}</h1>
        <p className="product-body-subtitle">
          {product.yearReleased ? (
            <span>{getYear(product.yearReleased)}</span>
          ) : (
            <span>{getYear(product.birthday)}</span>
          )}
          {product.format && <span>{product.format}</span>}
          {product.type && <span>{product.type}</span>}
        </p>

        <p className="product-body-description">
          {product.description ? product.description : product.biography}
        </p>
        <img className="product-body-overlay" src="/logo.svg" alt="" />
      </div>
    </div>
  );
}
