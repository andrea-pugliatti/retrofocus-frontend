import CalendarIcon from "./CalendarIcon";
import ApertureIcon from "./ApertureIcon";
import CameraIcon from "./CameraIcon";
import ArrowIcon from "./ArrowIcon";

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
        <div>
          <h1 className="product-body-title playfair-font">{product.name}</h1>
          <div className="product-body-subtitle">
            <div className="icon-flex">
              <CalendarIcon size={16} />
              {product.yearReleased ? (
                <div> {getYear(product.yearReleased)}</div>
              ) : (
                <div> {getYear(product.birthday)}</div>
              )}
            </div>

            {product.format && (
              <div className="icon-flex">
                <ApertureIcon size={16} />
                <div> {product.format}</div>
              </div>
            )}

            {product.type && (
              <div className="icon-flex">
                <CameraIcon size={18} />
                <div> {product.type}</div>
              </div>
            )}
          </div>

          <p className="product-body-description">
            {product.description ? product.description : product.biography}
          </p>
        </div>

        <div className="product-btn-more">
          <div>Learn more</div>
          <ArrowIcon size={18} />
        </div>

        <img className="product-body-overlay" src="/logo.svg" alt="" />
      </div>
      <img className="product-mark" src="/images/vintage_cameras.png" alt="" />
    </div>
  );
}
