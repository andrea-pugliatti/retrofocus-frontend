import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";

export default function CameraDetail() {
  const { id } = useParams();

  const endpoint = `http://localhost:8080/api/cameras/${id}`;

  const { data: camera, isLoading } = useFetch(endpoint);

  return (
    <main className="container">
      {camera && <ItemDetail item={camera} />}
      {isLoading && <Loader />}
    </main>
  );
}
