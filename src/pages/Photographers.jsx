import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

export default function Photographers() {
  const endpoint = "http://localhost:8080/api/photographers";
  const [searchParams] = useSearchParams();
  const { data, isLoading, refetch } = useFetch(`${endpoint}?${searchParams}`);

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Repository</p>
        <h1 className="playfair-font">Photographers</h1>
      </div>

      <FilterControls equipment={false} />

      <div className="item-grid">
        {data &&
          data.map((photographer) => (
            <Link key={photographer.id} to={`/photographers/${photographer.id}`}>
              <ItemCard item={photographer} />
            </Link>
          ))}
      </div>

      {isLoading && <Loader />}
    </main>
  );
}
