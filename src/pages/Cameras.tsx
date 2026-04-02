import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import EmptyList from "../components/EmptyList";
import ErrorState from "../components/ErrorState";
import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

import type Camera from "../util/camera";

export default function Cameras() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.toString();
  const { data, error, isLoading, refetch } = useFetch<Camera[]>(
    searchString
      ? `${`${import.meta.env.VITE_BACKEND_URL}/api/cameras`}?${searchString}`
      : `${import.meta.env.VITE_BACKEND_URL}/api/cameras`
  );

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Cameras</h1>
      </div>

      <FilterControls />

      {data && (
        <div className="item-grid">
          {data.map((camera) => (
            <Link key={camera.id} to={`/cameras/${camera.id}`}>
              <ItemCard item={camera} />
            </Link>
          ))}
        </div>
      )}

      {isLoading && <Loader />}
      {error && (
        <ErrorState
          title="Unable to load cameras."
          description={error.message}
          onAction={refetch}
        />
      )}
      {data?.length == 0 && (
        <EmptyList>
          <p className="playfair-font">No camera found</p>
        </EmptyList>
      )}
    </main>
  );
}
