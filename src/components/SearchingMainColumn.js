import React, { useState, useContext } from "react";
import search from "../images/search-icon.svg";
import arrow from "../images/arrow_down.svg";

import { AppContext } from "../AppContext";

const SearchingMainColumn = () => {
  const [panel, showPanel] = useState(true);

  const { city, children, adults, rooms } = useContext(AppContext);

  const setChildrenNumber = () => {
    if (children === 0) {
      return "bez dzieci";
    } else if (children === 1) {
      return "1 dziecko";
    } else if (children > 1) {
      return children + " dzieci";
    } else {
      return "bez dzieci";
    }
  };

  const setRoomsNumber = () => {
    if (rooms === 1) {
      return "1 pokój";
    } else if (rooms === 2 || rooms === 3 || rooms === 4) {
      return rooms + " pokoje";
    } else if (rooms > 4) {
      return rooms + " pokoi";
    } else {
      return "1 pokój";
    }
  };

  const setAdultsNumber = () => {
    if (adults === 1) {
      return "1 dorosły";
    } else if (adults > 1) {
      return adults + " dorosłych";
    } else {
      return "1 dorosły";
    }
  };

  // const [childrenNum, setChildrenNum] = useState(children);
  // const [adultsNum, setAdultsNum] = useState(adults);
  // const [roomsNum, setRoomsNum] = useState(rooms);
  // const [destination, setDestination] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showFullPanel = () => {
    showPanel((prevState) => !prevState);
  };

  return (
    <>
      <div className={panel ? "searching-panel" : "searching-panel hidden"}>
        <h3>Szukaj</h3>
        <img
          className="panel-mobile"
          src={arrow}
          alt="show-panel"
          onClick={showFullPanel}
          style={{
            transform: panel && "rotate(180deg)",
          }}
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="place">
            Cel podróży / nazwa obiektu:
            <img src={search} alt="search" height={25} width={25} />
            <input
              type="text"
              id="place"
              placeholder={city}
              // value={destination}
              // onChange={(e) => setDestination(e.target.value)}
            />
          </label>
          <label>
            Od
            <input type="date" />
          </label>
          <label>
            Do
            <input type="date" />
          </label>
          <div className="people-number">
            <input
              list="adults"
              name="adults"
              id="adult"
              placeholder={setAdultsNumber()}
              // onChange={(e) => setAdultsNum(e.target.value)}
            />
            <datalist id="adults">
              <option value="1 dorosły" />
              <option value="2 dorosłych" />
              <option value="3 dorosłych" />
              <option value="4 dorosłych" />
              <option value="5 dorosłych" />
            </datalist>

            <input
              list="children"
              name="children"
              id="child"
              placeholder={setChildrenNumber()}
              // onChange={(e) => setChildrenNum(e.target.value)}
            />
            <datalist id="children">
              <option value="bez dzieci" />
              <option value="1 dziecko" />
              <option value="2 dzieci" />
              <option value="3 dzieci" />
              <option value="4 dzieci" />
            </datalist>

            <input
              list="rooms"
              name="room"
              id="room"
              placeholder={setRoomsNumber()}
              // onChange={(e) => setRoomsNum(e.target.value)}
            />
            <datalist id="rooms">
              <option value="1 pokój" />
              <option value="2 pokoje" />
              <option value="3 pokoje" />
              <option value="4 pokoje" />
              <option value="5 pokoi" />
            </datalist>
          </div>

          <label htmlFor="work" className="work">
            <input type="checkbox" id="work" />
            Podróżuję służbowo
          </label>

          {/* <Link
            to="../searchpage"
            state={{
              children: childrenNum,
              rooms: roomsNum,
              adults: adultsNum,
              city: destination,
            }}
          > */}
          <button style={{ cursor: "pointer" }}>Szukaj</button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default SearchingMainColumn;
