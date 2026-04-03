import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import type Camera from "../util/camera";
import type Lens from "../util/lens";

type FeaturedListProps = {
  list: Camera[] | Lens[];
  type: string;
};

export default function FeaturedList({ list, type }: FeaturedListProps) {
  function getCapitalizedType(type: string): string {
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
