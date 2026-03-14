import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Cameras() {
  const endpoint = "http://localhost:8080/api/cameras";

  const { data, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Cameras</h1>
      </div>

      <div className="product-grid">
        {data &&
          data.map((camera) => (
            <Link key={camera.id} to={`/cameras/${camera.id}`}>
              <ProductCard product={camera} />
            </Link>
          ))}
      </div>

      {isLoading && <Loader />}
    </main>
  );
}
