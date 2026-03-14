import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";

export default function Homepage() {
  const endpoint = "http://localhost:8080/api/";

  const { data: cameras, isLoading: isLoadingCameras } = useFetch(endpoint + "cameras");

  const { data: lenses, isLoading: isLoadingLenses } = useFetch(endpoint + "lenses");

  const getPieces = () => cameras.length + lenses.length;
  // const getBrands = () => {}
  // const getDecades = () => {}

  return (
    <>
      {cameras && lenses && <Jumbotron pieces={getPieces()} brands={24} decades={12} />}
      <section className="container">
        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="featured-title playfair-font">Cameras</h1>

          <div className="featured-grid">
            {cameras &&
              cameras.slice(0, 5).map((camera) => (
                <Link key={camera.id} to={`/cameras/${camera.id}`}>
                  <ProductCard product={camera} />
                </Link>
              ))}
          </div>

          {isLoadingCameras && <Loader />}
        </div>

        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="featured-title playfair-font">Lenses</h1>

          <div className="featured-grid">
            {lenses &&
              lenses.slice(0, 5).map((lens) => (
                <Link key={lens.id} to={`/lenses/${lens.id}`}>
                  <ProductCard product={lens} />
                </Link>
              ))}
          </div>

          {isLoadingLenses && <Loader />}
        </div>
      </section>
    </>
  );
}
