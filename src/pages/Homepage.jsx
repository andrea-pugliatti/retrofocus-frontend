import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import Jumbotron from "../components/Jumbotron";
import FeaturedList from "../components/FeaturedList";

export default function Homepage() {
  const endpoint = "http://localhost:8080/api/";

  const { data: cameras, isLoading: isLoadingCameras } = useFetch(endpoint + "cameras");

  const { data: lenses, isLoading: isLoadingLenses } = useFetch(endpoint + "lenses");

  const getPieces = () => cameras.length + lenses.length;
  // const getBrands = () => {}
  // const getDecades = () => {}

  return (
    <>
      {cameras && lenses && <Jumbotron pieces={getPieces()} brands={24} decades={12} />}
      <section className="container">
        {cameras && (
          <>
            <FeaturedList list={cameras.slice(0, 5)} type={"cameras"} />
            {isLoadingCameras && <Loader />}
          </>
        )}

        {lenses && (
          <>
            <FeaturedList list={lenses.slice(0, 5)} type={"lenses"} />
            {isLoadingLenses && <Loader />}
          </>
        )}
      </section>
    </>
  );
}
