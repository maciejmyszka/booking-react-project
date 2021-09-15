import React, { useRef } from "react";
import CoronaAlert from "../elements/CoronaAlert";
import BarOnTop from "../elements/BarOnTop";
import Location from "../elements/Location";
import SearchingMainColumn from "../components/SearchingMainColumn";
import DetailsNav from "../components/DetailsNav";
import MapElement from "../elements/MapElement";
import HotelInfo from "../elements/HotelInfo";
import Newsletter from "../elements/Newsletter";
import Footer from "../elements/Footer";
import BottomCityBar from "../elements/BottomCityBar";

const Objectpage = () => {
  // const {
  //   name = "",
  //   city = "",
  //   grade = "",
  //   rate = "",
  //   opinions = "",
  //   img = "",
  //   adults = "",
  //   children = "",
  //   rooms = "",
  // } = location.state;

  const refInfo = useRef(null);
  const refRules = useRef(null);
  const refImportant = useRef(null);

  return (
    <>
      <BarOnTop />
      <CoronaAlert />
      <Location />
      <DetailsNav
        refInfo={refInfo}
        refRules={refRules}
        refImportant={refImportant}
      />
      <div className="main-content-wrapper">
        <div className="search-column-wrapper objectpage">
          <SearchingMainColumn />
          <MapElement />
        </div>
        <HotelInfo
          refInfo={refInfo}
          refRules={refRules}
          refImportant={refImportant}
        />
      </div>
      <BottomCityBar />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Objectpage;
