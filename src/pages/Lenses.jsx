import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import EmptyList from "../components/EmptyList";
import ErrorState from "../components/ErrorState";
import FilterControls from "../components/FilterControls";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";

export default function Lenses() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.toString();
  const { data, error, isLoading, refetch } = useFetch(
    searchString
      ? `${import.meta.env.VITE_BACKEND_URL}/api/lenses?${searchString}`
      : `${import.meta.env.VITE_BACKEND_URL}/api/lenses`
  );

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">Collection</p>
        <h1 className="playfair-font">Lenses</h1>
      </div>

      <FilterControls />

      {data && (
        <div className="item-grid">
          {data.map((lens) => (
            <Link key={lens.id} to={`/lenses/${lens.id}`}>
              <ItemCard item={lens} />
            </Link>
          ))}
        </div>
      )}

      {isLoading && <Loader />}
      {error && (
        <ErrorState title="Unable to load lenses." description={error.message} onAction={refetch} />
      )}
      {data?.length == 0 && (
        <EmptyList>
          <p className="playfair-font">No lens found</p>
        </EmptyList>
      )}
    </main>
  );
}
