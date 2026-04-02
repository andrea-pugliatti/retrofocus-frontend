import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import type Camera from "../util/camera";
import type Lens from "../util/lens";

export default function FeaturedList({ list, type }: {list: Camera[] | Lens[], type: string}) {
  function getCapitalizedType(type: string) {
    return type[0].toUpperCase() + type.slice(1);
  }

  return (
    <div className="featured">
      <div className="container">
        <p className="uppercase color-accent bold">Featured</p>
        <h1 className="featured-title playfair-font">{getCapitalizedType(type)}</h1>
      </div>

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
