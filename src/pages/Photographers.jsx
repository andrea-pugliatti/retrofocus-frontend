import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Photographers() {
  const endpoint = "http://localhost:8080/api/photographers";
  const { data, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Repository</p>
        <h1 className="playfair-font">Photographers</h1>
      </div>

      <div className="item-grid">
        {data &&
          data.map((photographer) => (
            <Link key={photographer.id} to={`/photographers/${photographer.id}`}>
              <ItemCard item={photographer} />
            </Link>
          ))}
      </div>

      {isLoading && <Loader />}
    </main>
  );
}
