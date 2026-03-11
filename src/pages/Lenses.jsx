import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoader } from "../contexts/LoaderContext";
import { Link } from "react-router-dom";

export default function Lenses() {
  const [lenses, setLenses] = useState([]);
  const { setLoader } = useLoader();
  const endpoint = "http://localhost:8080/api/lenses";

  useEffect(() => {
    setLoader(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setLenses(res);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoader(false));
  }, [setLoader]);

  return (
    <main className="container">
      <div className="product-grid">
        {lenses.map((lens) => (
          <Link key={lens.id} to={`/lenses/${lens.id}`}>
            <ProductCard product={lens} />
          </Link>
        ))}
      </div>
    </main>
  );
}
