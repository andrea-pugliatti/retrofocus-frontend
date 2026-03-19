import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import EmptyList from "../components/EmptyList";
import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

export default function Lenses() {
  const endpoint = "http://localhost:8080/api/lenses";
  const [searchParams] = useSearchParams();
  const { data, isLoading, refetch } = useFetch(`${endpoint}?${searchParams}`);

  useEffect(() => {
    const getData = setTimeout(() => {
      refetch();
    }, 300);

    return () => clearTimeout(getData);
  }, [searchParams]);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Lenses</h1>
      </div>

      <FilterControls />

      <div className="item-grid">
        {data?.map((lens) => (
          <Link key={lens.id} to={`/lenses/${lens.id}`}>
            <ItemCard item={lens} />
          </Link>
        ))}
      </div>

      {isLoading && <Loader />}
      {data?.length == 0 && (
        <EmptyList>
          <p>No lens found!</p>
        </EmptyList>
      )}
    </main>
  );
}
