import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SearchIcon from "./icons/SearchIcon";
import ApertureIcon from "./icons/ApertureIcon";

export default function FilterControls({ equipment = true }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams?.get?.("q") || "");
  const [mount, setMount] = useState(searchParams?.get?.("m") || "");

  const { data: mounts } = useFetch("http://localhost:8080/api/mounts");

  useEffect(() => {
    setSearchParams({ q: query, m: mount });

    if (query == "" && mount == "") {
      setSearchParams({});
    }
  }, [query, mount, setSearchParams]);

  return (
    <div className="filter-controls">
      <div className="filter-search">
        <SearchIcon size={16} />
        <input
          id="search"
          type="search"
          className="filter-search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {equipment && mounts && (
        <div className="filter-mount">
          <ApertureIcon size={16} />
          <select value={mount} onChange={(e) => setMount(e.target.value)}>
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
