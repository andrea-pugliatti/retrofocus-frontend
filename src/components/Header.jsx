import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { id: 1, title: "Cameras", href: "/cameras" },
  { id: 2, title: "Lenses", href: "/lenses" },
  { id: 3, title: "Adapters", href: "/adapters" },
  { id: 4, title: "About", href: "/about" }
];

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to={"/"} className="d-flex">
          <Logo height={40} width={100} />
          <h2 className="site-title playfair-font">RetroFocus</h2>
        </Link>
        <div className="links">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
