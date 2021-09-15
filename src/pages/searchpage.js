import React, { useContext, useState } from "react";
import CoronaAlert from "../elements/CoronaAlert";
import BarOnTop from "../elements/BarOnTop";
import Location from "../elements/Location";
import SearchAndResult from "../components/SearchAndResult";
import Newsletter from "../elements/Newsletter";
import Footer from "../elements/Footer";
import { AppContext } from "../AppContext";
import Objectpage from "../pages/objectpage";

import { HotelContext, defaultHotel } from "../HotelContext";

const Searchpage = () => {
  const { hotel } = useContext(AppContext);

  const [hotelName, setHotelName] = useState(defaultHotel.hotelName);
  const [hotelCity, setHotelCity] = useState(defaultHotel.hotelCity);
  const [hotelGrade, setHotelGrade] = useState(defaultHotel.hotelGrade);
  const [hotelRate, setHotelRate] = useState(defaultHotel.hotelRate);
  const [hotelOpinions, setHotelOpinions] = useState(
    defaultHotel.hotelOpinions
  );
  const [hotelImg, setHotelImg] = useState(defaultHotel.hotelImg);
  const [hotelDescription, setHotelDescription] = useState(
    defaultHotel.hotelDescription
  );
  const [hotelReservation, setHotelReservation] = useState(
    defaultHotel.hotelReservation
  );
  const [hotelDistance, setHotelDistance] = useState(
    defaultHotel.hotelDistance
  );

  return hotel ? (
    <HotelContext.Provider
      value={{
        hotelName,
        setHotelName,
        hotelCity,
        setHotelCity,
        hotelGrade,
        setHotelGrade,
        hotelRate,
        setHotelRate,
        hotelOpinions,
        setHotelOpinions,
        hotelImg,
        setHotelImg,
        hotelDescription,
        setHotelDescription,
        hotelReservation,
        setHotelReservation,
        hotelDistance,
        setHotelDistance,
      }}
    >
      <Objectpage />
    </HotelContext.Provider>
  ) : (
    <>
      <HotelContext.Provider
        value={{
          hotelName,
          setHotelName,
          hotelCity,
          setHotelCity,
          hotelGrade,
          setHotelGrade,
          hotelRate,
          setHotelRate,
          hotelOpinions,
          setHotelOpinions,
          hotelImg,
          setHotelImg,
          hotelDescription,
          setHotelDescription,
          hotelReservation,
          setHotelReservation,
          hotelDistance,
          setHotelDistance,
        }}
      >
        <BarOnTop />
        <CoronaAlert />
        <Location />
        <SearchAndResult />
        <Newsletter />
        <Footer />
      </HotelContext.Provider>
    </>
  );
};

export default Searchpage;
