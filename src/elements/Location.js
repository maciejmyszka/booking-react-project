import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import arrow from "../images/arrow-right-icon.svg";

const Location = () => {
  const { object, city } = useContext(AppContext);

  const setName = () => {
    switch (object) {
      case "resort":
        return "Ośrodki wypoczynkowe";
      case "hotel":
        return "Hotele";
      case "motel":
        return "Motele";
      case "apartment":
        return "Apartamenty";
      case "house":
        return "Domki";
      case "villa":
        return "Wille";
      case "country":
        return "Domki wiejskie";
      case "camping":
        return "Luksusowe kempingi";
      case "apartmentHotel":
        return "Hotele-Apartamenty";
      case "pensionat":
        return "Pensionaty";
      case "hostel":
        return "Hostele";
      default:
        return null;
    }
  };

  return (
    <div className="location-wrapper">
      <p>Strona główna</p>
      <img src={arrow} alt="arrow right" />
      <p>Polska</p>
      <img src={arrow} alt="arrow right" />
      <p>
        {city}
        {setName()}
      </p>
      <img src={arrow} alt="arrow right" />
      <p>{city ? city : "Wyniki wyszukiwania"}</p>
    </div>
  );
};

export default Location;
