import { Link } from "react-router-dom";
import ApertureIcon from "./icons/ApertureIcon";
import ArrowIcon from "./icons/ArrowIcon";
import CalendarIcon from "./icons/CalendarIcon";
import CameraIcon from "./icons/CameraIcon";
import { type Item, isCamera, isLens, isPhotographer, getYearFromItem, getYearFromString } from "../util/item";

export default function ItemDetail({ item }: { item: Item }) {

  if (!item) {
    return <></>;
  }

  return (
    <div className="detail-main">
      <div className="detail-image-container">
        <img src={`${import.meta.env.VITE_BACKEND_URL}/images/${item.image}`} alt={item.name} />
      </div>

      <div className="detail-body-container">
        <div>
          <h1 className="detail-title playfair-font">{item.name}</h1>

          <div className="detail-quick-facts">
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
        </div>

        <div>
          <h3 className="color-accent uppercase">About</h3>
          <p className="">{isPhotographer(item) ? item.biography : item.description}</p>
        </div>

        {(isCamera(item) || isLens(item)) && (
          <div>
            <h3 className="color-accent uppercase">Specifications</h3>

            <div className="detail-specs-container">
              {isCamera(item) && (
                <>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Year Released</div>
                    <div className="detail-spec-description">{getYearFromItem(item)}</div>
                  </div>
                  {item.yearDiscontinued && (
                    <div className="detail-spec">
                      <div className="detail-spec-title">Year Discontinued</div>
                      <div className="detail-spec-description">{getYearFromString(item.yearDiscontinued)}</div>
                    </div>
                  )}
                  <div className="detail-spec">
                    <div className="detail-spec-title">Type</div>
                    <div className="detail-spec-description">{item.type}</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Format</div>
                    <div className="detail-spec-description">{item.format}</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Minimum Shutter Speed</div>
                    <div className="detail-spec-description">{item.minShutterSpeed}</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Maximum Shutter Speed</div>
                    <div className="detail-spec-description">{item.maxShutterSpeed}</div>
                  </div>
                </>
              )}

              {isLens(item) && (
                <>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Autofocus</div>
                    <div className="detail-spec-description">{item.isAutofocus ? "Yes" : "No"}</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Minimum Focal Length</div>
                    <div className="detail-spec-description">{item.minFocalLength}mm</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Maximum Focal Length</div>
                    <div className="detail-spec-description">{item.maxFocalLength}mm</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Minimum Aperture</div>
                    <div className="detail-spec-description">f/{item.minAperture}</div>
                  </div>
                  <div className="detail-spec">
                    <div className="detail-spec-title">Maximum Aperture</div>
                    <div className="detail-spec-description">f/{item.maxAperture}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <Link
          to={isCamera(item) ? "/cameras" : isPhotographer(item) ? "/photographers" : "/lenses"}
          className="detail-btn-back icon-flex"
        >
          Back
          <ArrowIcon size={24} />
        </Link>
      </div>
    </div>
  );
}
