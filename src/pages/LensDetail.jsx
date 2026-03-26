import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import ErrorState from "../components/ErrorState";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import NotFoundState from "../components/NotFoundState";

export default function LensDetail() {
  const { id } = useParams();
  const {
    data: lens,
    error,
    isLoading,
    refetch
  } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/api/lenses/${id}`);

  return (
    <main className="container">
      {lens && <ItemDetail item={lens} />}
      {isLoading && <Loader />}
      {error?.status === 404 && (
        <NotFoundState
          title="That lens is missing from the archive."
          description="We could not find a lens record for this address. Try browsing the full lens collection instead."
        />
      )}
      {error && error.status !== 404 && (
        <ErrorState
          title="Unable to load this lens."
          description={error.message}
          onAction={refetch}
        />
      )}
    </main>
  );
}
