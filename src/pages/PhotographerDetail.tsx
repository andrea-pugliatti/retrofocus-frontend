import { Link, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import ErrorState from "../components/ErrorState";
import ItemCard from "../components/ItemCard";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import NotFoundState from "../components/NotFoundState";

import type Photographer from "../util/photographer";

export default function PhotographerDetail() {
  const { id } = useParams();
  const {
    data: photographer,
    error,
    isLoading,
    refetch
  } = useFetch<Photographer>(`${import.meta.env.VITE_BACKEND_URL}/api/photographers/${id}`);

  return (
    <main className="container">
      {photographer && (
        <>
          <ItemDetail item={photographer} />

          <div className="featured">
            <p className="uppercase color-accent bold">Featured</p>
            <h1 className="featured-title playfair-font">
              Cameras & Lenses used by {photographer.name}
            </h1>

            <div className="featured-grid">
              {photographer.cameras?.map((item) => (
                <Link key={item.id} to={`/cameras/${item.id}`}>
                  <ItemCard item={item} />
                </Link>
              ))}
              {photographer.lenses?.map((item) => (
                <Link key={item.id} to={`/lenses/${item.id}`}>
                  <ItemCard item={item} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {isLoading && <Loader />}
      {error?.status === 404 && (
        <NotFoundState
          title="That photographer is missing from the archive."
          description="We could not find a photographer record for this address. Try browsing the full repository instead."
        />
      )}
      {error && error.status !== 404 && (
        <ErrorState
          title="Unable to load this photographer."
          description={error.message}
          onAction={refetch}
        />
      )}
    </main>
  );
}
