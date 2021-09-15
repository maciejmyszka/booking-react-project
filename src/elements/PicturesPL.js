import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import flag from "../images/poland-flag-icon.png";

import stronie from "../images/stronie small.jpg";
import wisla from "../images/wisla small.jpg";
import poznan from "../images/poznan small.jpg";

const PicturesPL = () => {
  const { setCity } = useContext(AppContext);
  return (
    <div className="pictures-wrapper">
      <div
        className="gdynia"
        onClick={() => setCity("Gdynia")}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/652865.webp?k=648b949fb883d9c31a7e4b3ed42ae6154867bd7621e8f63aa4a4c25f6a0de380&o"
          alt="Gdynia"
        />
        <div className="picture-top">
          <h3>Gdynia</h3>
          <img src={flag} alt="PL" />
          <span>1 313 obiektów</span>
        </div>
        <div className="price">
          <p>Średnia cena</p>
          <span>794zł</span>
        </div>
      </div>
      <div
        className="sopot"
        onClick={() => setCity("Sopot")}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/653007.webp?k=e3c2f699c4314da1e0cd08fb80ff8cd77b4ea1cdf5f5bc79f5bfe62df0cbdb44&o"
          alt="Sopot"
        />
        <div className="picture-top">
          <h3>Sopot</h3>
          <img src={flag} alt="PL" />
          <span>2 000 obiektów</span>
        </div>
        <div className="price">
          <p>Średnia cena</p>
          <span>404zł</span>
        </div>
      </div>
      <div
        className="stronie"
        onClick={() => setCity("Stronie Śląskie")}
        style={{ cursor: "pointer" }}
      >
        <img src={stronie} alt="Stronie Śląskie" />
        <div className="picture-top">
          <h3>Stronie Śląskie</h3>
          <img src={flag} alt="PL" />
          <span>149 obiektów</span>
        </div>
        <div className="price">
          <p>Średnia cena</p>
          <span>197zł</span>
        </div>
      </div>
      <div
        className="wisla"
        onClick={() => setCity("Wisła")}
        style={{ cursor: "pointer" }}
      >
        <img src={wisla} alt="Wisła" />
        <div className="picture-top">
          <h3>Wisła</h3>
          <img src={flag} alt="PL" />
          <span>330 obiektów</span>
        </div>
        <div className="price">
          <p>Średnia cena</p>
          <span>270zł</span>
        </div>
      </div>
      <div
        className="poznan"
        onClick={() => setCity("Poznań")}
        style={{ cursor: "pointer" }}
      >
        <img src={poznan} alt="Poznań" />
        <div className="picture-top">
          <h3>Poznań</h3>
          <img src={flag} alt="PL" />
          <span>1045 obiektów</span>
        </div>
        <div className="price">
          <p>Średnia cena</p>
          <span>255zł</span>
        </div>
      </div>
    </div>
  );
};

export default PicturesPL;
