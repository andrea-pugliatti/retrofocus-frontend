import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

export default function Photographers() {
  const endpoint = "http://localhost:8080/api/photographers";
  const { data, isLoading, isError } = useFetch(endpoint);

  return (
    <main className="container">
      <div className="product-grid">
        {data &&
          data.map((photographer) => (
            <Link key={photographer.id} to={`/photographers/${photographer.id}`}>
              <ProductCard product={photographer} />
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
