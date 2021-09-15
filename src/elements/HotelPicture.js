import React, {useContext} from "react";
import { HotelContext } from "../HotelContext";
import AutoSlick from "./AutoSlick";

const HotelPicture = () => {

  const {hotelImg, hotelGrade, hotelRate, hotelOpinions} = useContext(HotelContext)

  return (
    <div className="hotel-picture-wrapper">
      <div className="rating">
        <div className="left">
          <p>{hotelGrade}</p>
          <span>{hotelOpinions} opinii</span>
        </div>
        <p>{hotelRate}</p>
      </div>
      <AutoSlick />
      <div className="col-picture">
        <img src={hotelImg} alt="hotel" width={273.5} height={170} />
        <img src={hotelImg} alt="hotel" width={273.5} height={170} />
      </div>
      <div className="main-picture">
        <img src={hotelImg} alt="hotel" width={531} height={350} />
      </div>
    </div>
  );
};

export default HotelPicture;
