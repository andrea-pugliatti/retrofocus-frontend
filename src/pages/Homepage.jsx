import { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";

export default function Homepage() {
  const [cameras, setCameras] = useState([]);
  const [lenses, setLenses] = useState([]);
  const endpoint = "http://localhost:8080/api/";

  useEffect(() => {
    fetch(endpoint + "cameras")
      .then((res) => res.json())
      .then((res) => {
        setCameras(res);
      })
      .catch((err) => {
        throw err;
      });

    fetch(endpoint + "lenses")
      .then((res) => res.json())
      .then((res) => {
        setLenses(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <Jumbotron />
      <section className="container">
        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="playfair-font">Cameras</h1>
          <div className="featured-grid">
            {cameras.slice(0, 5).map((camera) => (
              <ProductCard key={camera.id} product={camera} />
            ))}
          </div>
        </div>

        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="playfair-font">Lenses</h1>
          <div className="featured-grid">
            {lenses.slice(0, 5).map((lens) => (
              <ProductCard key={lens.id} product={lens} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
