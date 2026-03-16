import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";

export default function LensDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/lenses/${id}`;

  const { data: lens, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      {lens && <ItemDetail item={lens} />}
      {isLoading && <Loader />}
    </main>
  );
}
