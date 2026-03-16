import CalendarIcon from "./icons/CalendarIcon";
import ApertureIcon from "./icons/ApertureIcon";
import CameraIcon from "./icons/CameraIcon";
import ArrowIcon from "./icons/ArrowIcon";

export default function ItemCard({ item }) {
  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    return date.split("-").at(0);
  }

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={item.image ? imageEndpoint + item.image : null} alt={item.name} />
      </div>

      <div className="item-body">
        <div>
          <h1 className="item-body-title playfair-font">{item.name}</h1>
          <div className="item-body-subtitle">
            <div className="icon-flex">
              <CalendarIcon size={16} />
              {item.yearReleased ? (
                <div> {getYear(item.yearReleased)}</div>
              ) : (
                <div> {getYear(item.birthday)}</div>
              )}
            </div>

            {item.format && (
              <div className="icon-flex">
                <ApertureIcon size={16} />
                <div> {item.format}</div>
              </div>
            )}

            {item.type && (
              <div className="icon-flex">
                <CameraIcon size={18} />
                <div> {item.type}</div>
              </div>
            )}
          </div>

          <p className="item-body-description">
            {item.description ? item.description : item.biography}
          </p>
        </div>

        <div className="item-btn-more">
          <div>Learn more</div>
          <ArrowIcon size={18} />
        </div>

        <img className="item-body-overlay" src="/logo.svg" alt="" />
      </div>
      <img className="item-mark" src="/images/vintage_cameras.png" alt="" />
    </div>
  );
}
