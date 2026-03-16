import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";

export default function PhotographerDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/photographers/${id}`;

  const { data: photographer, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      {photographer && <ItemDetail item={photographer} />}
      {isLoading && <Loader />}
    </main>
  );
}
