import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

export default function Photographers() {
  const endpoint = "http://localhost:8080/api/photographers";
  const { data, isLoading, isError } = useFetch(endpoint);

  return (
    <main>
      <div>
        {data && data.map((photographer) => <p key={photographer.id}>{photographer.name}</p>)}
      </div>

      {isLoading && <Loader />}

      {isError && (
        <>
          <span>Error</span>
          <Loader />
        </>
      )}
    </main>
  );
}
