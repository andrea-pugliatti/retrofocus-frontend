import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoader } from "../contexts/LoaderContext";

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
          <ProductCard key={camera.id} product={camera} />
        ))}
      </div>
    </main>
  );
}
