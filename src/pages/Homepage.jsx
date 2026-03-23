import { useFetch } from "../hooks/useFetch";

import FeaturedList from "../components/FeaturedList";
import Jumbotron from "../components/Jumbotron";
import Loader from "../components/Loader";
import Values from "../components/Values";

export default function Homepage() {
  const endpoint = "http://localhost:8080/api/";

  const { data: cameras, isLoading: isLoadingCameras } = useFetch(endpoint + "cameras");
  const { data: lenses, isLoading: isLoadingLenses } = useFetch(endpoint + "lenses");

  const getPieces = () => cameras?.length + lenses?.length;

  return (
    <>
      {cameras && lenses && <Jumbotron pieces={getPieces()} brands={24} decades={12} />}
      <section className="my-1">
        <FeaturedList list={cameras?.slice(0, 7)} type={"cameras"} />
        {isLoadingCameras && <Loader />}
      </section>

      <section className="my-1">
        <FeaturedList list={lenses?.slice(0, 7)} type={"lenses"} />
        {isLoadingLenses && <Loader />}
      </section>

      <section className="my-1">
        <Values />
      </section>
    </>
  );
}
