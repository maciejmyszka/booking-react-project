import React, { useState } from "react";
import Places from "./Places";

const OurFav = () => {
  const [placesCategory, setPlacesCategory] = useState("regions");

  return (
    <div className="ourFav-wrapper">
      <h2>Nasze ulubione miejsca</h2>
      <ul className="fav-bar">
        <li
          style={
            placesCategory === "regions"
              ? { backgroundColor: "#0071c2", color: "#fff" }
              : null
          }
          onClick={() => setPlacesCategory("regions")}
        >
          Regiony
        </li>
        <li
          style={
            placesCategory === "cities"
              ? { backgroundColor: "#0071c2", color: "#fff" }
              : null
          }
          onClick={() => setPlacesCategory("cities")}
        >
          Miasta
        </li>
        <li
          style={
            placesCategory === "places"
              ? { backgroundColor: "#0071c2", color: "#fff" }
              : null
          }
          onClick={() => setPlacesCategory("places")}
        >
          Ciekawe miejsca
        </li>
      </ul>
      <Places placesCategory={placesCategory} />
    </div>
  );
};

export default OurFav;
