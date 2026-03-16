import { Link, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import ItemCard from "../components/ItemCard";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";

export default function PhotographerDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/photographers/${id}`;

  const { data: photographer, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      <>
        <ItemDetail item={photographer} />

        <div className="featured">
          <p className="uppercase color-accent bold">Featured</p>
          <h1 className="featured-title playfair-font">
            Cameras & Lenses used by {photographer?.name}
          </h1>

          <div className="featured-grid">
            {photographer?.cameras?.map((item) => (
              <Link key={item.id} to={`/cameras/${item.id}`}>
                <ItemCard item={item} />
              </Link>
            ))}
            {photographer?.lenses?.map((item) => (
              <Link key={item.id} to={`/lenses/${item.id}`}>
                <ItemCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </>

      {isLoading && <Loader />}
    </main>
  );
}
