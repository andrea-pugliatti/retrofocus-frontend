import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="d-flex">
            <Logo height={50} width={100} />
            <h1 className="playfair-font">RetroFocus</h1>
          </div>
          <p>
            A curated repository of iconic cameras and lenses from the golden age of photography.
          </p>
        </div>

        <div className="footer-links">
          <h3>Collections</h3>
          <Link>Cameras</Link>
          <Link>Lenses</Link>
          <Link>Adapters</Link>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <Link>About</Link>
          <Link>Browse</Link>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div>RetroFocus. A celebration of photographic heritage.</div>
        <div>Built with care for the craft.</div>
      </div>
    </footer>
  );
}
