import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import pin_icon from "../images/pin-icon.svg";

const MapElement = () => {

  const {city} = useContext(AppContext)

  return (
    <div className="map-wrapper">
      <img
        src="https://cf.bstatic.com/static/img/map/map-entry-point/7813a559b03ef30ba107ca5224172615a210e416.png"
        alt="map"
        width={244.19}
      />
      <button>Pokaż na mapie</button>
      <p>{city}</p>
      <img src={pin_icon} alt="pin" />
    </div>
  );
};

export default MapElement;
