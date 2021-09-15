import React, {useContext} from "react";
import { HotelContext } from "../HotelContext";

const BottomCityBar = () => {

  const {hotelCity} = useContext(HotelContext)

  return (
    // <Link
    //   to="../searchpage"
    //   state={{ city: city }}
    //   style={{ color: "transparent" }}
    // >
      <div className="bottom-bar-wrapper">
        <h3>{hotelCity} - największe atrakcje</h3>
        <p>
          Kliknij tutaj aby zobaczyć więcej hoteli i inych opcji zakwaterowania
          przy popularnych atrakcjach w miejscu {hotelCity}
        </p>
      </div>
    // </Link>
  );
};

export default BottomCityBar;
