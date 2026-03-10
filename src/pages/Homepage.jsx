import { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";

export default function Homepage() {
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
    <>
      <Jumbotron />
      <section className="container">
        <p>Featured</p>
        <h1>Cameras</h1>
        {cameras.map((camera) => (
          <div key={camera.id}>{camera.name}</div>
        ))}
        <p>Featured</p>
        <h1>Lenses</h1>
      </section>
    </>
  );
}
