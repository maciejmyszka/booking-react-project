import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import flag from "../images/poland-flag-icon.png";

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
          height={270}
          width={548}
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
          height={270}
          width={548}
          layout="constrained"
          placeholder="blurred"
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
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/837292.webp?k=9293cf5c590443607202da7ddd474ca6e9c997380cd99ce02744b6679a5a4074&o"
          alt="Stronie Śląskie"
          height={270}
          width={365}
          layout="constrained"
          placeholder="blurred"
        />
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
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/653088.webp?k=76bd7bed43629bbe011d168b869d69b80e1e550cdd80b0fa4b5629ee481116ea&o"
          alt="Wisła"
          height={270}
          width={365}
          layout="constrained"
          placeholder="blurred"
        />
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
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/972790.webp?k=169b38f78038e54b9bb08e1ae7cc754acf0e189247305edd2ec353bf97d545b8&o"
          alt="Poznań"
          height={270}
          width={365}
          layout="constrained"
          placeholder="blurred"
        />
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
