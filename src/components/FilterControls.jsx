import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SearchIcon from "./icons/SearchIcon";
import ApertureIcon from "./icons/ApertureIcon";

export default function FilterControls({ equipment = true }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [mount, setMount] = useState(searchParams.get("m") || "");

  const { data: mounts } = useFetch(
    equipment ? `${import.meta.env.VITE_BACKEND_URL}/api/mounts` : null
  );

  useEffect(() => {
    const nextQuery = searchParams.get("q") || "";
    const nextMount = searchParams.get("m") || "";

    if (query !== nextQuery) {
      setQuery(nextQuery);
    }

    if (mount !== nextMount) {
      setMount(nextMount);
    }
  }, [searchParamsString]);

  useEffect(() => {
    const syncParams = setTimeout(() => {
      const nextSearchParams = new URLSearchParams(searchParamsString);

      if (query) {
        nextSearchParams.set("q", query);
      } else {
        nextSearchParams.delete("q");
      }

      if (equipment && mount) {
        nextSearchParams.set("m", mount);
      } else {
        nextSearchParams.delete("m");
      }

      const nextSearchString = nextSearchParams.toString();

      if (nextSearchString !== searchParamsString) {
        setSearchParams(nextSearchParams, { replace: true });
      }
    }, 300);

    return () => clearTimeout(syncParams);
  }, [equipment, mount, query, searchParamsString, setSearchParams]);

  return (
    <div className="filter-controls">
      <div className="filter-search">
        <SearchIcon size={16} />
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {equipment && mounts && (
        <div className="filter-mount">
          <ApertureIcon size={16} />
          <select id="mounts" value={mount} onChange={(e) => setMount(e.target.value)}>
            <option value={""}>All Mounts</option>
            {mounts.map((mount) => {
              return (
                <option key={mount.id} value={mount.id}>
                  {mount.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}
