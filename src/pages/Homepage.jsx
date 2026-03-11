import { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";
import { useLoader } from "../contexts/LoaderContext";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [cameras, setCameras] = useState([]);
  const [lenses, setLenses] = useState([]);
  const { setLoader } = useLoader();

  const endpoint = "http://localhost:8080/api/";

  useEffect(() => {
    setLoader(true);
    fetch(endpoint + "cameras")
      .then((res) => res.json())
      .then((res) => {
        setCameras(res);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoader(false));

    fetch(endpoint + "lenses")
      .then((res) => res.json())
      .then((res) => {
        setLenses(res);
      })
      .catch((err) => {
        throw err;
      });
  }, [setLoader]);

  return (
    <>
      <Jumbotron />
      <section className="container">
        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="featured-title playfair-font">Cameras</h1>
          <div className="featured-grid">
            {cameras.slice(0, 5).map((camera) => (
              <Link key={camera.id} to={`/cameras/${camera.id}`}>
                <ProductCard product={camera} />
              </Link>
            ))}
          </div>
        </div>

        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="featured-title playfair-font">Lenses</h1>
          <div className="featured-grid">
            {lenses.slice(0, 5).map((lens) => (
              <Link key={lens.id} to={`/lenses/${lens.id}`}>
                <ProductCard product={lens} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
