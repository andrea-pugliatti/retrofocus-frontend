import { Link } from "react-router-dom";
import ApertureIcon from "./icons/ApertureIcon";
import ArrowIcon from "./icons/ArrowIcon";
import CalendarIcon from "./icons/CalendarIcon";
import CameraIcon from "./icons/CameraIcon";

export default function ItemDetail({ item }) {
  const imageEndpoint = "http://localhost:8080/images/";

  function getYear(date) {
    console.log(item);
    return date.split("-").at(0);
  }

  return (
    <div className="detail-main">
      <div className="detail-image-container">
        <img src={imageEndpoint + item.image} alt={item.name} />
      </div>

      <div className="detail-body-container">
        <div>
          <h1 className="detail-title playfair-font">{item.name}</h1>

          <div className="detail-quick-facts">
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
        </div>

        <div>
          <h3 className="color-accent uppercase">About</h3>
          <p className="">{item.description ? item.description : item.biography}</p>
        </div>

        {item.description && (
          <div>
            <h3 className="color-accent uppercase">Specifications</h3>

            <div className="detail-specs-container">
              {item.yearReleased && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Year Released</div>
                  <div className="detail-spec-description">{getYear(item.yearReleased)}</div>
                </div>
              )}
              {item.yearDiscontinued && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Year Discontinued</div>
                  <div className="detail-spec-description">{getYear(item.yearDiscontinued)}</div>
                </div>
              )}
              {item.type && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Type</div>
                  <div className="detail-spec-description">{item.type}</div>
                </div>
              )}
              {item.format && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Format</div>
                  <div className="detail-spec-description">{item.format}</div>
                </div>
              )}
              {item.minShutterSpeed && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Minimum Shutter Speed</div>
                  <div className="detail-spec-description">{item.minShutterSpeed}</div>
                </div>
              )}
              {item.maxShutterSpeed && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Maximum Shutter Speed</div>
                  <div className="detail-spec-description">{item.maxShutterSpeed}</div>
                </div>
              )}
              {item.isAutofocus != null && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Autofocus</div>
                  <div className="detail-spec-description">{item.isAutofocus ? "Yes" : "No"}</div>
                </div>
              )}
              {item.minFocalLength && (
                <div className="detail-spec">
                  <div className="detail-spec-title">
                    {item.maxFocalLength != item.minFocalLength
                      ? "Minimum Focal Length"
                      : "Focal Length"}
                  </div>
                  <div className="detail-spec-description">{item.minFocalLength}mm</div>
                </div>
              )}
              {item.maxFocalLength && item.maxFocalLength != item.minFocalLength && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Maximum Focal Length</div>
                  <div className="detail-spec-description">{item.maxFocalLength}mm</div>
                </div>
              )}
              {item.minAperture && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Minimum Aperture</div>
                  <div className="detail-spec-description">f/{item.minAperture}</div>
                </div>
              )}
              {item.maxAperture && (
                <div className="detail-spec">
                  <div className="detail-spec-title">Maximum Aperture</div>
                  <div className="detail-spec-description">f/{item.maxAperture}</div>
                </div>
              )}
            </div>
          </div>
        )}
        <Link
          to={item.type ? "/cameras" : item.biography ? "/photographers" : "/lenses"}
          className="detail-btn-back icon-flex"
        >
          Back
          <ArrowIcon size={24} />
        </Link>
      </div>
    </div>
  );
}
