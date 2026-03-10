import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Cameras() {
  const [cameras, setCameras] = useState([]);
  const endpoint = "http://localhost:8080/api/cameras";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setCameras(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <main>
      {cameras.map((camera) => (
        <ProductCard key={camera.id} product={camera} />
      ))}
    </main>
  );
}
