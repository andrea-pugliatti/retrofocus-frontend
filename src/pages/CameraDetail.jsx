import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function CameraDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/cameras/${id}`;
  const imageEndpoint = "http://localhost:8080/images/";

  const { data: camera, isLoading } = useFetch(endpoint);

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <main className="container">
      {camera && (
        <div className="product-card">
          <div className="product-image">
            <img
              src={camera.image ? `${imageEndpoint}${camera.image}` : null}
              alt={camera.name}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="product-body">
            <h1 className="product-body-title playfair-font">{camera.name}</h1>
            <p className="product-body-subtitle">
              <span>{getYear(camera.yearReleased)}</span>
              <span>{camera.format}</span>
              <span>{camera.type}</span>
            </p>
            <p className="product-body-description">{camera.description}</p>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </main>
  );
}
