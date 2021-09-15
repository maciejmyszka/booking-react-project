import React from "react";
import BarOnTop from "../elements/BarOnTop";
import CoronaAlert from "../elements/CoronaAlert";
import SearchingBar from "../components/SearchingBar";
import KindOfObject from "../elements/KindOfObject";
import PicturesPL from "../elements/PicturesPL";
import PolishPlaces from "../elements/PolishPlaces";
import FavHouses from "../elements/FavHouses";
import Inspiration from "../elements/Inspiration";
import TravelTalk from "../elements/TravelTalk";
import CitiesSlider from "../elements/CitiesSlider";
import OurFav from "../elements/OurFav";
import Explore from "../elements/Explore";
import Newsletter from "../elements/Newsletter";
import Footer from "../elements/Footer";
import Searchpage from "../pages/searchpage";

import { useState } from "react";

import { AppContext, defaultObject } from "../AppContext";

const Homepage = () => {
  const [city, setCity] = useState(defaultObject.city);
  const [object, setObject] = useState(defaultObject.object);
  const [adults, setAdults] = useState(defaultObject.adults);
  const [children, setChildren] = useState(defaultObject.children);
  const [rooms, setRooms] = useState(defaultObject.rooms);
  const [hotel, setHotel] = useState(defaultObject.hotel);

  return object || city ? (
    <AppContext.Provider
      value={{
        object,
        setObject,
        city,
        setCity,
        adults,
        setAdults,
        children,
        setChildren,
        rooms,
        setRooms,
        hotel,
        setHotel
      }}
    >
      <Searchpage />
    </AppContext.Provider>
  ) : (
    <>
      <AppContext.Provider
        value={{
          object,
          setObject,
          city,
          setCity,
          adults,
          setAdults,
          children,
          setChildren,
          rooms,
          setRooms,
        }}
      >
        <BarOnTop />
        <CoronaAlert />
        <SearchingBar />
        <KindOfObject />
        <PicturesPL />
        <PolishPlaces />
        <FavHouses />
        <Inspiration />
        <TravelTalk />
        <CitiesSlider />
        <OurFav />
        <Explore />
        <Newsletter />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default Homepage;
