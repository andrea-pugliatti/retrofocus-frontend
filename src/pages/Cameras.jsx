import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoader } from "../contexts/LoaderContext";
import { Link } from "react-router-dom";

export default function Cameras() {
  const [cameras, setCameras] = useState([]);
  const { setLoader } = useLoader();
  const endpoint = "http://localhost:8080/api/cameras";

  useEffect(() => {
    setLoader(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setCameras(res);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoader(false));
  }, [setLoader]);

  return (
    <main className="container">
      <div className="product-grid">
        {cameras.map((camera) => (
          <Link key={camera.id} to={`/cameras/${camera.id}`}>
            <ProductCard product={camera} />
          </Link>
        ))}
      </div>
    </main>
  );
}
