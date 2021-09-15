import React, { useRef, useContext } from "react";
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
import { AppContext } from "../AppContext";

const Objectpage = () => {
  const refInfo = useRef(null);
  const refRules = useRef(null);
  const refImportant = useRef(null);

  const {setHotel} = useContext(AppContext)

  return (
    <>
      <button className="backToResults" onClick={() => setHotel(false)}>Wróc do wyników wyszukiwania</button>
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
