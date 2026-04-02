import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link to={"/"} className="d-flex">
            <Logo height={50} width={100} />
            <h1 className="playfair-font">RetroFocus</h1>
          </Link>
          <p>
            A curated repository of iconic cameras and lenses from the golden age of photography.
          </p>
        </div>

        <div className="footer-links">
          <h3>Collections</h3>
          <Link to={"/cameras"}>Cameras</Link>
          <Link to={"/lenses"}>Lenses</Link>
          <Link to={"/photographers"}>Photographers</Link>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <Link to={"/about"}>About</Link>
          <Link to={"/photographers"}>Browse</Link>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div>{new Date().getFullYear()} RetroFocus. A celebration of photographic heritage.</div>
        <div>Built with care for the craft.</div>
      </div>
    </footer>
  );
}
