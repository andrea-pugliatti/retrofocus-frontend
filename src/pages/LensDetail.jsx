import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoader } from "../contexts/LoaderContext";

export default function LensDetail() {
  const [lens, setLens] = useState();
  const { setLoader } = useLoader();
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/lenses/${id}`;

  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    return date.split("-").at(0);
  }

  useEffect(() => {
    setLoader(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setLens(res);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoader(false));
  }, [endpoint, setLoader]);

  return (
    <>
      {lens && (
        <div className="product-card">
          <div className="product-image">
            <img
              src={`${imageEndpoint}${lens.image}`}
              alt={lens.name}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="product-body">
            <h1 className="product-body-title playfair-font">{lens.name}</h1>
            <p className="product-body-subtitle">
              <span>{getYear(lens.yearReleased)}</span>
              <span>{lens.format}</span>
              <span>{lens.type}</span>
            </p>
            <p className="product-body-description">{lens.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
