import React, { useContext } from "react";
import heart from "../images/heart-icon.svg";
import arrow from "../images/arrow_down.svg";
import { AppContext } from "../AppContext";
import { HotelContext } from "../HotelContext";

const Place = ({
  name,
  city,
  distance,
  grade,
  rate,
  opinions,
  img,
  description,
  reservation,
  adults,
  children,
  rooms,
}) => {
  const { setHotel } = useContext(AppContext);

  const { setHotelName } = useContext(HotelContext);
  const { setHotelCity } = useContext(HotelContext);
  const { setHotelGrade } = useContext(HotelContext);
  const { setHotelRate } = useContext(HotelContext);
  const { setHotelOpinions } = useContext(HotelContext);
  const { setHotelImg } = useContext(HotelContext);
  const { setHotelDescription } = useContext(HotelContext);
  const { setHotelReservation } = useContext(HotelContext);
  const { setHotelDistance } = useContext(HotelContext);

  const setHotelProperties = () => {
    setHotelName(name);
    setHotelCity(city);
    setHotelDistance(distance);
    setHotelGrade(distance);
    setHotelRate(rate);
    setHotelOpinions(opinions);
    setHotelImg(img);
    setHotelDescription(description);
    setHotelReservation(reservation);
    setHotel((prevState) => !prevState);
  };

  return (
    <div className="single-place">
      <img
        src={img}
        alt={name}
        width={200}
        height={200}
        onClick={() => setHotelProperties()}
        style={{ cursor: "pointer" }}
      />
      <img src={heart} alt="Save" />
      <div className="place-description">
        <h3 onClick={() => setHotelProperties()} style={{ cursor: "pointer" }}>
          {name}
        </h3>
        <div className="address-card">
          <p>{city}</p>
          <p>Pokaż na mapie</p>
          <span>{distance} od centrum</span>
        </div>
        <p className="description">{description}</p>
        <p className="reservation">{reservation}</p>
      </div>
      <div className="rating-wrapper">
        <div className="rating">
          <p>{grade}</p>
          <span>{opinions} opinii</span>
        </div>
        <div className="grade">
          <p>{rate}</p>
        </div>
        <button>Pokaż ceny</button>
      </div>
      <div className="mobile-rating">
        <img src={arrow} alt="more" className="arrow-mobile" />
      </div>
    </div>
  );
};

export default Place;
