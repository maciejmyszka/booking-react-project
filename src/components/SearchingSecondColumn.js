import React from "react";

const SearchingSecondColumn = () => {
  // const { object } = useContext(AppContext);

  return (
    <div className="second-column">
      <h3>Filtruj według następujących kryteriów:</h3>
      <div className="health">
        <h4>Zdrowie i bezpieczeństwo</h4>
        <label htmlFor="health">
          <input type="checkbox" id="health" />
          <span>
            Obiekty z dodatkowymi środkami bezpieczeństwa i ochrony zdrowia
          </span>
        </label>
      </div>
      <div className="popular">
        <h4>Popularne filtry</h4>
        <label htmlFor="5star">
          <input type="checkbox" id="5star" />
          <span>5 gwiazdek</span>
        </label>
        <label htmlFor="pool">
          <input type="checkbox" id="pool" />
          <span>kryty basen</span>
        </label>
        <label htmlFor="beach">
          <input type="checkbox" id="beach" />
          <span>plaża</span>
        </label>
        <label htmlFor="center">
          <input type="checkbox" id="center" />
          <span>Centrum</span>
        </label>
        <label htmlFor="hotel">
          <input type="checkbox" id="hotel" />
          <span>Hotele</span>
        </label>
        <label htmlFor="houses">
          <input type="checkbox" id="houses" />
          <span>Domki letniskowe</span>
        </label>
        <label htmlFor="resort">
          <input type="checkbox" id="resort" />
          <span>Ośrodki wypoczynkowe</span>
        </label>
      </div>
      <div className="kind">
        <h4>Rodzaj obiektu</h4>
        <form>
          <label htmlFor="apartments">
            {/* <Link to="../searchpage" state={{ object: "apartment" }}> */}
            <input
              type="checkbox"
              id="apartments"
              // checked={object === "apartment" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Apartamenty</span>
          </label>
          <label htmlFor="hotels">
            {/* <Link to="../searchpage" state={{ object: "hotel" }}> */}
            <input
              type="checkbox"
              id="hotels"
              // checked={object === "hotel" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Hotele</span>
          </label>
          <label htmlFor="hostels">
            {/* <Link to="../searchpage" state={{ object: "hostel" }}> */}
            <input
              type="checkbox"
              id="hostels"
              // checked={object === "hostel" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Hostel</span>
          </label>
          <label htmlFor="pensionats">
            {/* <Link to="../searchpage" state={{ object: "pensionat" }}> */}
            <input
              type="checkbox"
              id="pensionats"
              // checked={object === "pensionat" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Pensionaty</span>
          </label>
          <label htmlFor="motels">
            {/* <Link to="../searchpage" state={{ object: "motel" }}> */}
            <input
              type="checkbox"
              id="motels"
              // checked={object === "motel" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Motele</span>
          </label>
          <label htmlFor="house">
            {/* <Link to="../searchpage" state={{ object: "house" }}> */}
            <input
              type="checkbox"
              id="house"
              // checked={object === "house" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Domy</span>
          </label>
          <label htmlFor="camping">
            {/* <Link to="../searchpage" state={{ object: "camping" }}> */}
            <input
              type="checkbox"
              id="camping"
              // checked={object === "camping" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Camping</span>
          </label>
          <label htmlFor="resorts">
            {/* <Link to="../searchpage" state={{ object: "resort" }}> */}
            <input
              type="checkbox"
              id="resorts"
              // checked={object === "resort" ? "checked" : null}
              style={{ cursor: "pointer" }}
              readOnly
            />
            {/* </Link> */}
            <span>Ośrodki wypoczynkowe</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchingSecondColumn;
