import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import EmptyList from "../components/EmptyList";
import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

export default function Cameras() {
  const endpoint = "http://localhost:8080/api/cameras";
  const [searchParams] = useSearchParams();
  const { data, isLoading, refetch } = useFetch(`${endpoint}?${searchParams}`);

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Cameras</h1>
      </div>

      <FilterControls />

      <div className="item-grid">
        {data?.map((camera) => (
          <Link key={camera.id} to={`/cameras/${camera.id}`}>
            <ItemCard item={camera} />
          </Link>
        ))}
      </div>

      {isLoading && <Loader />}
      {data?.length == 0 && (
        <EmptyList>
          <p>No camera found!</p>
        </EmptyList>
      )}
    </main>
  );
}
