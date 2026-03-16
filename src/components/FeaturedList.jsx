import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function FeaturedList({ list, type }) {
  function getCapitalizedType(type) {
    return type[0].toUpperCase() + type.slice(1);
  }

  return (
    <div className="featured">
      <p className="uppercase color-accent bold">Featured</p>
      <h1 className="featured-title playfair-font">{getCapitalizedType(type)}</h1>

      <div className="featured-grid">
        {list?.map((item) => (
          <Link key={item.id} to={`/${type.toLowerCase()}/${item.id}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
