import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h1>RetroFocus</h1>
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
