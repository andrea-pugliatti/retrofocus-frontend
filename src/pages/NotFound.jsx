import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <main className="container">
      <section className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-text">
            <h1 className="playfair-font">This page never made it into the contact sheet.</h1>
            <p className="not-found-lead">
              The address <span>{pathname}</span> does not point to a page in the RetroFocus
              archive.
            </p>

            <Link className="btn-primary" to="/">
              Back to Homepage
            </Link>
          </div>

          <div className="not-found-panel">
            <div className="not-found-code playfair-font">404</div>
          </div>
        </div>
      </section>
    </main>
  );
}
