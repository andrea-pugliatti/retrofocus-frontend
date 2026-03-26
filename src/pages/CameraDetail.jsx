import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import ErrorState from "../components/ErrorState";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import NotFoundState from "../components/NotFoundState";

export default function CameraDetail() {
  const { id } = useParams();
  const {
    data: camera,
    error,
    isLoading,
    refetch
  } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/api/cameras/${id}`);

  return (
    <main className="container">
      {camera && <ItemDetail item={camera} />}
      {isLoading && <Loader />}
      {error?.status === 404 && (
        <NotFoundState
          title="That camera is missing from the archive."
          description="We could not find a camera record for this address. Try browsing the full collection instead."
        />
      )}
      {error && error.status !== 404 && (
        <ErrorState
          title="Unable to load this camera."
          description={error.message}
          onAction={refetch}
        />
      )}
    </main>
  );
}
