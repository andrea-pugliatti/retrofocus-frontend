import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

export default function Lenses() {
  const endpoint = "http://localhost:8080/api/lenses";

  const { data, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Lenses</h1>
      </div>

      <div className="item-grid">
        {data &&
          data.map((lens) => (
            <Link key={lens.id} to={`/lenses/${lens.id}`}>
              <ItemCard item={lens} />
            </Link>
          ))}
      </div>

      {isLoading && <Loader />}
    </main>
  );
}
