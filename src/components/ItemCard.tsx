import CalendarIcon from "./icons/CalendarIcon";
import ApertureIcon from "./icons/ApertureIcon";
import CameraIcon from "./icons/CameraIcon";
import ArrowIcon from "./icons/ArrowIcon";

import { type Item, isCamera, isPhotographer, getYearFromItem } from "../util/item";

export default function ItemCard({ item }: { item: Item }) {

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={`${import.meta.env.VITE_BACKEND_URL}/images/${item.image}`} alt={item.name} />
      </div>

      <div className="item-body">
        <div>
          <h1 className="item-body-title playfair-font">{item.name}</h1>
          <div className="item-body-subtitle">
            <div className="icon-flex">
              <CalendarIcon size={16} />
              <div>{getYearFromItem(item)}</div>
            </div>

            {isCamera(item) && (
              <div className="icon-flex">
                <ApertureIcon size={16} />
                <div>{item.format}</div>
              </div>
            )}

            {isCamera(item) && (
              <div className="icon-flex">
                <CameraIcon size={18} />
                <div>{item.type}</div>
              </div>
            )}
          </div>

          <p className="item-body-description">
            {isPhotographer(item) ? item.biography : item.description}
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
