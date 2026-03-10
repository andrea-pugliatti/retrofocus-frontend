import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Lenses() {
  const [lenses, setLenses] = useState([]);
  const endpoint = "http://localhost:8080/api/lenses";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setLenses(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <main>
      {lenses.map((lens) => (
        <ProductCard key={lens.id} product={lens} />
      ))}
    </main>
  );
}
