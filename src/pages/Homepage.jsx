import { useFetch } from "../hooks/useFetch";

import ErrorState from "../components/ErrorState";
import FeaturedList from "../components/FeaturedList";
import Jumbotron from "../components/Jumbotron";
import Loader from "../components/Loader";
import Values from "../components/Values";

export default function Homepage() {
  const {
    data: cameras,
    error: camerasError,
    isLoading: isLoadingCameras,
    refetch: refetchCameras
  } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/api/cameras`);
  const {
    data: lenses,
    error: lensesError,
    isLoading: isLoadingLenses,
    refetch: refetchLenses
  } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/api/lenses`);

  const getPieces = () => cameras?.length + lenses?.length;

  return (
    <>
      {cameras && lenses && <Jumbotron pieces={getPieces()} brands={24} decades={12} />}
      <section className="my-1">
        <FeaturedList list={cameras?.slice(0, 7)} type={"cameras"} />
        {isLoadingCameras && <Loader />}
        {camerasError && (
          <ErrorState
            title="Unable to load featured cameras."
            description={camerasError.message}
            onAction={refetchCameras}
          />
        )}
      </section>

      <section className="my-1">
        <FeaturedList list={lenses?.slice(0, 7)} type={"lenses"} />
        {isLoadingLenses && <Loader />}
        {lensesError && (
          <ErrorState
            title="Unable to load featured lenses."
            description={lensesError.message}
            onAction={refetchLenses}
          />
        )}
      </section>

      <section className="my-1">
        <Values />
      </section>
    </>
  );
}
