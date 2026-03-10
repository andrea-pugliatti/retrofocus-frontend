import { useEffect } from "react";

export default function ProductCard({ product }) {
  useEffect(() => {
    console.log(product);
  });

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <div className="product-card">
      <div>{product.name}</div>
      <div>
        <div>{getYear(product.yearReleased)}</div>
        <div>{product.format}</div>
        <div>{product.type}</div>
      </div>
      <div>{product.description}</div>
    </div>
  );
}
