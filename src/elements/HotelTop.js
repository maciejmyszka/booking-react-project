import React, {useContext} from "react";
import star from "../images/star-icon.png";
import pin from "../images/pin-icon.svg";
import heart from "../images/heart-black-icon.svg";
import share from "../images/share-icon.svg";
import { HotelContext } from "../HotelContext";

const HotelTop = () => {
  const {hotelName, hotelCity} = useContext(HotelContext)

  return (
    <div className="hotel-header">
      <div className="header-left">
        <h2>
          <span>Hotel</span>
          {hotelName}
        </h2>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <div className="header-address">
          <p>
            <img src={pin} alt="pin" />
            {hotelCity}
          </p>
          <p>- Doskonała lokalizacja -</p>
          <p>Pokaż mapę</p>
        </div>
      </div>
      <div className="header-right">
        <img src={heart} alt="save" />
        <img src={share} alt="share" />
        <button>Zarezerwuj teraz</button>
      </div>
    </div>
  );
};

export default HotelTop;
