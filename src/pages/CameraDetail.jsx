import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoader } from "../contexts/LoaderContext";

export default function CameraDetail() {
  const [camera, setCamera] = useState();
  const { setLoader } = useLoader();
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/cameras/${id}`;

  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    return date.split("-").at(0);
  }

  useEffect(() => {
    setLoader(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setCamera(res);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoader(false));
  }, [endpoint, setLoader]);

  return (
    <>
      {camera && (
        <div className="product-card">
          <div className="product-image">
            <img
              src={`${imageEndpoint}${camera.image}`}
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
    </>
  );
}
