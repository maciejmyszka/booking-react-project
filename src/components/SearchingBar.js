import React from "react";
import bed_icon from "../images/black-bed_icon.svg";
import person_icon from "../images/person_icon.svg";
import { useState, useContext } from "react";

import { AppContext } from "../AppContext";

const SearchingBar = () => {
  const [details, setDetails] = useState(false);

  const [cityInput, setCityInput] = useState("");

  const { rooms, setRooms } = useContext(AppContext);
  const { adults, setAdults } = useContext(AppContext);
  const { children, setChildren } = useContext(AppContext);
  const { setCity } = useContext(AppContext);

  const showDetails = () => {
    setDetails((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const roomsWord = () => {
    if (rooms === 1) {
      return "pokój";
    } else if (rooms > 1 && rooms < 5) {
      return "pokoje";
    } else if (rooms >= 5) {
      return "pokoi";
    }
  };

  const onChangePlace = (e) => {
    const value = e.target.value;
    setCityInput(value);
  };

  return (
    <div className="search-wrapper">
      <div className="search">
        <h1>Znajdź oferty hoteli, domów i wielu innych obiektów...</h1>
        <p>Od przytulnych domków wiejskich po modne apartamenty w mieście</p>
      </div>
      <div className="search-mobile">
        <h1>Wyszukaj</h1>
        <p>Miejsce, obiekt, a może adres...</p>
      </div>
      <div className="bar-wrapper">
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <img src={bed_icon} alt="bed" />
            <input
              type="text"
              placeholder="Dokąd się wybierasz?"
              value={cityInput}
              onChange={onChangePlace}
            />
            <input type="date" placeholder="zameldowanie/wymeldowanie" />
            <img src={person_icon} alt="person" />
            <div>
              <p onClick={() => showDetails()}>
                {adults} {adults === 1 ? "dorosły" : "dorosłych"} - {children}{" "}
                dzieci - {rooms} {roomsWord()}
              </p>
              {details && (
                <div className="details">
                  <div className="adults">
                    <p>Dorośli</p>
                    <div className="changeData">
                      <button
                        className="change"
                        style={
                          adults <= 1
                            ? {
                                pointerEvents: "none",
                              }
                            : null
                        }
                        onClick={() => setAdults((prevState) => prevState - 1)}
                      >
                        -
                      </button>
                      <p>{adults}</p>
                      <button
                        className="change"
                        onClick={() => setAdults((prevState) => prevState + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="children">
                    <p>Dzieci</p>
                    <span>w wieku od 0 do 17 lat</span>
                    <div className="changeData">
                      <button
                        className="change"
                        style={
                          children <= 0
                            ? {
                                pointerEvents: "none",
                              }
                            : null
                        }
                        onClick={() =>
                          setChildren((prevState) => prevState - 1)
                        }
                      >
                        -
                      </button>
                      <p>{children}</p>
                      <button
                        className="change"
                        onClick={() =>
                          setChildren((prevState) => prevState + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="rooms">
                    <p>Pokoje</p>
                    <div className="changeData">
                      <button
                        className="change"
                        style={
                          rooms <= 1
                            ? {
                                pointerEvents: "none",
                              }
                            : null
                        }
                        onClick={() => setRooms((prevState) => prevState - 1)}
                      >
                        -
                      </button>
                      <p>{rooms}</p>
                      <button
                        className="change"
                        onClick={() => setRooms((prevState) => prevState + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="confirm-mobile" onClick={showDetails}>
                    Gotowe
                  </button>
                </div>
              )}
            </div>
            <button type="submit" onClick={() => setCity(cityInput)}>
              Szukaj
            </button>
          </form>
        </div>
        <input type="checkbox" id="work" />
        <label htmlFor="work">Podróżuję służbowo</label>
      </div>
    </div>
  );
};

export default SearchingBar;
