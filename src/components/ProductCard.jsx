import { Link } from "react-router-dom";
import ClockIcon from "./ClockIcon";
import ApertureIcon from "./ApertureIcon";
import CameraIcon from "./CameraIcon";

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
        <div className="product-body-subtitle">
          <div>
            <ClockIcon size={14} />
            {product.yearReleased ? (
              <span> {getYear(product.yearReleased)}</span>
            ) : (
              <span> {getYear(product.birthday)}</span>
            )}
          </div>
          {product.format && (
            <div>
              <ApertureIcon size={14} />
              <span> {product.format}</span>
            </div>
          )}
          {product.type && (
            <div>
              <CameraIcon size={14} />
              <span> {product.type}</span>
            </div>
          )}
        </div>

        <p className="product-body-description">
          {product.description ? product.description : product.biography}
        </p>
        <img className="product-body-overlay" src="/logo.svg" alt="" />
      </div>
      <img className="product-mark" src="/images/vintage_cameras.png" alt="" />
    </div>
  );
}
