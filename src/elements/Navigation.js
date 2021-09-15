import React from "react";
import bed_icon from "../images/bed_icon.svg";
import plane_icon from "../images/plane_icon.svg";
import car_icon from "../images/car_icon.svg";
import attractions_icon from "../images/attractions_icon.svg";
import taxi_icon from "../images/taxi_icon.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <img src={bed_icon} alt="bed" />
          Pobyty
        </li>
        <li>
          <img src={plane_icon} alt="plane" />
          Loty
        </li>
        <li>
          <img src={car_icon} alt="car" />
          Wynajem samochodów
        </li>
        <li>
          <img src={attractions_icon} alt="attractions" />
          Atrakcje
        </li>
        <li>
          <img src={taxi_icon} alt="taxi" />
          Taksówki lotniskowe
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
