import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function PhotographerDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/photographers/${id}`;
  const imageEndpoint = "http://localhost:8080/images/";

  const { data: photographer, isLoading } = useFetch(endpoint);

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <main className="container">
      {photographer && (
        <div className="product-card">
          <div className="product-image">
            <img
              src={photographer.image ? `${imageEndpoint}${photographer.image}` : null}
              alt={photographer.name}
            />
          </div>

          <div className="product-body">
            <h1 className="product-body-title playfair-font">{photographer.name}</h1>
            <p className="product-body-subtitle">
              <span>{getYear(photographer.birthday)}</span>
            </p>
            <p className="product-body-description">{photographer.biography}</p>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </main>
  );
}
