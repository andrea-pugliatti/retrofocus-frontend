import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="jumbo-image">
        <div className="overlay" />
        <img src="/images/jumbo.jpg" alt="Cameras and lenses" />
      </div>

      <div className="container-jumbotron">
        <div className="jumbo-text">
          <p className="uppercase color-accent">Curated Collection</p>
          <h1 className="jumbo-title playfair-font">The Art of Vintage Photography</h1>
          <p className="jumbo-subtitle">
            Explore a curated repository of iconic cameras and lenses from the golden age of
            photography. Every piece tells a story of precision engineering and timeless design.
          </p>
          <div className="jumbo-buttons">
            <Link className="btn-primary" to={"/"}>
              Browse Collection
            </Link>
            <Link className="btn-outline" to={"/"}>
              Learn more
            </Link>
          </div>
          <div className="jumbo-display">
            <div>
              <div className="jumbo-display-number">9</div> pieces
            </div>
            <div>
              <div className="jumbo-display-number">5</div> brands
            </div>
            <div>
              <div className="jumbo-display-number">4</div> decades
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
