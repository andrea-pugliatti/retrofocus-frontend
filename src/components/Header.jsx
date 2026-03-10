import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <Link to={"/"}>
          <h2>RetroFocus</h2>
        </Link>
        <div className="links">
          <NavLink to={"/"}>Cameras</NavLink>
          <NavLink to={"/"}>Lenses</NavLink>
          <NavLink to={"/"}>Adapters</NavLink>
          <NavLink to={"/"}>About</NavLink>
        </div>
      </div>
    </header>
  );
}
