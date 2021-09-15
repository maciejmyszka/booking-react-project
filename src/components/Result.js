import React, { useContext } from "react";
import initialData from "../initialData";
import Place from "../elements/Place";
import { AppContext } from "../AppContext";

const Result = () => {
  const { object, city, children, adults, rooms } = useContext(AppContext);

  const setProperResult = () => {
    if (object) {
      const results = initialData
        .filter((place) => place.type === object)
        .map((filteredPlace) => (
          <Place
            key={filteredPlace.id}
            name={filteredPlace.name}
            city={filteredPlace.city}
            distance={filteredPlace.distance}
            grade={filteredPlace.grade}
            rate={filteredPlace.rate}
            opinions={filteredPlace.opinions}
            img={filteredPlace.img}
            description={filteredPlace.description}
            reservation={filteredPlace.reservation}
            adults={adults}
            children={children}
            rooms={rooms}
          />
        ));
      return results;
    } else if (city) {
      const results = initialData
        .filter((place) => place.city === city)
        .map((filteredPlace) => (
          <Place
            key={filteredPlace.id}
            name={filteredPlace.name}
            city={filteredPlace.city}
            distance={filteredPlace.distance}
            grade={filteredPlace.grade}
            rate={filteredPlace.rate}
            opinions={filteredPlace.opinions}
            img={filteredPlace.img}
            description={filteredPlace.description}
            reservation={filteredPlace.reservation}
            adults={adults}
            children={children}
            rooms={rooms}
          />
        ));
      return results;
    }
  };

  const setLength = () => {
    if (object) {
      const results = initialData
        .filter((place) => place.type === object)
        .map((filteredPlace) => (
          <Place
            key={filteredPlace.id}
            name={filteredPlace.name}
            city={filteredPlace.city}
            distance={filteredPlace.distance}
            grade={filteredPlace.grade}
            rate={filteredPlace.rate}
            opinions={filteredPlace.opinions}
            img={filteredPlace.img}
            description={filteredPlace.description}
            reservation={filteredPlace.reservation}
          />
        ));
      switch (results.length) {
        case 0:
          return results.length + " obiektów";
        case 1:
          return results.length + " obiekt";
        case 2:
          return results.length + " obiekty";
        case 3:
          return results.length + " obiekty";
        case 4:
          return results.length + " obiekty";
        default:
          return results.length + " obiektów";
      }
    } else if (city) {
      const results = initialData
        .filter((place) => place.city === city)
        .map((filteredPlace) => (
          <Place
            key={filteredPlace.id}
            name={filteredPlace.name}
            city={filteredPlace.city}
            distance={filteredPlace.distance}
            grade={filteredPlace.grade}
            rate={filteredPlace.rate}
            opinions={filteredPlace.opinions}
            img={filteredPlace.img}
            description={filteredPlace.description}
            reservation={filteredPlace.reservation}
          />
        ));
      switch (results.length) {
        case 0:
          return results.length + " obiektów";
        case 1:
          return results.length + " obiekt";
        case 2:
          return results.length + " obiekty";
        case 3:
          return results.length + " obiekty";
        case 4:
          return results.length + " obiekty";
        default:
          return results.length + " obiektów";
      }
    }
  };

  const nameObject = () => {
    switch (object) {
      case "hotel":
        return "Hotele";
      case "apartment":
        return "Apartamenty";
      case "resort":
        return "Ośrodki wypoczynkowe";
      case "villa":
        return "Wille";
      case "house":
        return "Domki";
      case "country":
        return "Domki wiejskie";
      case "camping":
        return "Luksusowy kemping";
      case "apartmentHotel":
        return "Hotele apartamentowe";
      case "pensionat":
        return "Pensjonaty";
      case "hostel":
        return "Hostele";
      case "motel":
        return "Motele";
      default:
        return;
    }
  };

  return (
    <div className="result">
      <div className="result-locations">
        <h3>
          {nameObject()}
          {city}: znaleziono {setLength()}
        </h3>
        <img
          src="https://cf.bstatic.com/static/img/map/map-entry-point/7813a559b03ef30ba107ca5224172615a210e416.png"
          alt="map"
          width={162}
          height={72}
          layout="constrained"
        />
        <button>Pokaż na mapie</button>
      </div>
      <div className="sort-result">
        <button>Wybrane przez nas</button>
        <button>Całe domy i apartamenty</button>
        <button>Gwiazdki (od największej liczby gwiazdek)</button>
        <button>...</button>
      </div>
      {setProperResult()}
    </div>
  );
};

export default Result;
