import React from "react";
import HotelTop from "./HotelTop";
import HotelPicture from "./HotelPicture";
import HealthSecure from "./HealthSecure";
import HotelDescription from "./HotelDescription";
import Rules from "./Rules";
import ImportantInfo from "./ImportantInfo";

const HotelInfo = ({
  refInfo,
  refRules,
  refImportant,
}) => {
  return (
    <div className="hotel-info-wrapper">
      <HotelTop />
      <HotelPicture />
      <HealthSecure />
      <HotelDescription refInfo={refInfo} />
      <Rules refRules={refRules} />
      <ImportantInfo refImportant={refImportant} />
    </div>
  );
};

export default HotelInfo;
