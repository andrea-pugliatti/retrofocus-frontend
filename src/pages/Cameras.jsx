import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Cameras() {
  const endpoint = "http://localhost:8080/api/cameras";

  const { data, isLoading, isError } = useFetch(endpoint);

  return (
    <main className="container">
      <div className="product-grid">
        {data &&
          data.map((camera) => (
            <Link key={camera.id} to={`/cameras/${camera.id}`}>
              <ProductCard product={camera} />
            </Link>
          ))}
      </div>

      {isLoading && <Loader />}

      {isError && (
        <>
          <span>Error</span>
          <Loader />
        </>
      )}
    </main>
  );
}
