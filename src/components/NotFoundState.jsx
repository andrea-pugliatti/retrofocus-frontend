import { Link } from "react-router-dom";

export default function NotFoundState({
  title = "This page never made it into the contact sheet.",
  description
}) {
  return (
    <section className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-text">
          <h1 className="playfair-font">{title}</h1>
          <p className="not-found-lead">{description}</p>

          <Link className="btn-primary" to={"/"}>
            Back to Homepage
          </Link>
        </div>

        <div className="not-found-panel">
          <div className="not-found-code playfair-font">404</div>
        </div>
      </div>
    </section>
  );
}
