import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import EmptyList from "../components/EmptyList";
import ErrorState from "../components/ErrorState";
import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

import type Photographer from "../util/photographer";

export default function Photographers() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.toString();
  const { data, error, isLoading, refetch } = useFetch<Photographer[]>(
    searchString
      ? `${import.meta.env.VITE_BACKEND_URL}/api/photographers?${searchString}`
      : `${import.meta.env.VITE_BACKEND_URL}/api/photographers`
  );

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Repository</p>
        <h1 className="playfair-font">Photographers</h1>
      </div>

      <FilterControls equipment={false} />

      {data && (
        <div className="item-grid">
          {data.map((photographer: Photographer) => (
            <Link key={photographer.id} to={`/photographers/${photographer.id}`}>
              <ItemCard item={photographer} />
            </Link>
          ))}
        </div>
      )}

      {isLoading && <Loader />}
      {error && (
        <ErrorState
          title="Unable to load photographers."
          description={error.message}
          onAction={refetch}
        />
      )}
      {data?.length == 0 && (
        <EmptyList>
          <p className="playfair-font">No photographer found</p>
        </EmptyList>
      )}
    </main>
  );
}
