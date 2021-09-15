import React, { useContext } from "react";
import Slider from "react-slick";
import { AppContext } from "../AppContext";

const PolishPlacesSlider = () => {
  const { setCity } = useContext(AppContext);

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "0",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="sea" onClick={() => setCity("Morze Bałtyckie")}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/49621.webp?k=c3e7e53d82053f92e2843891fff6b3c2a34d437ccd59e2a2498f971718a09419&o="
            alt="baltic sea"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Morze bałtyckie</p>
          {/* </Link> */}
          <span>11 542 obiektów</span>
        </div>
        <div className="gdansk" onClick={() => setCity("Gdańsk")}>
          {/* <Link to="../searchpage" state={{ city: "Gdańsk" }}> */}
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/972788.webp?k=17f14338090f7f5bbad0443f01a24aed1e17bfc4cee5c0b0c16c0cad94146f05&o="
            alt="Gdansk"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Gdańsk</p>
          {/* </Link> */}
          <span>4 109 obiektów</span>
        </div>
        <div className="sopot" onClick={() => setCity("Sopot")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/653008.webp?k=ca5d31f45c4605d8c4905782f6bb5bac98514ebcc254868ee7073222b88a5baf&o="
            alt="Sopot"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Sopot</p>
          <span>2 001 obiektów</span>
        </div>
        <div className="zakopane" onClick={() => setCity("Zakopane")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/653109.webp?k=39834303d6af8adc39cc8218ea8efc5291a013bd3228d53a50cb836833f4777f&o="
            alt="Zakopane"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Zakopane</p>
          <span>1 960 obiektów</span>
        </div>
        <div className="mazury" onClick={() => setCity("Mazury")}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/68006.webp?k=9401582d432d9fced32a37d0d7eb974e858436dffc038c73f87f305d6982f1dc&o="
            alt="Mazury"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Mazury</p>
          <span>2 681 obiektów</span>
        </div>
        <div className="wroclaw" onClick={() => setCity("Wrocław")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/972536.webp?k=fc90a871db0baae4bd8b649d9624809eaceee5f4ef218f09d158c8fe8d6d6abe&o="
            alt="Wroclaw"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Wrocław</p>
          <span>1 399 obiektów</span>
        </div>
        <div className="krakow" onClick={() => setCity("Kraków")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/652924.webp?k=f0a48e91f55098e6d16a361a0d7ba12726a056ff85f92ff616af0feb388024da&o="
            alt="Krakow"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Kraków</p>
          <span>4 090 obiektów</span>
        </div>
        <div className="warsaw" onClick={() => setCity("Warszawa")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/653082.webp?k=c161c185c16c0402f72a69272e3757ffa3b45f5a28accb4c07a2c989625132cf&o="
            alt="Warsaw"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Warszawa</p>
          <span>4 650 obiektów</span>
        </div>
        <div className="kolobrzeg" onClick={() => setCity("Kołobrzeg")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/652903.webp?k=4e9618ab0e4cee49da17679c1f4a8ea2df89cfded308eda2f86f590dd52e2802&o="
            alt="Kolobrzeg"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Kołobrzeg</p>
          <span>1 577 obiektów</span>
        </div>
        <div className="gdynia" onClick={() => setCity("Gdynia")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/652869.webp?k=ff0fcfe82f7b1bb9b5584027fbf8ff01af5aff6ce876035e5daebb407beb7371&o="
            alt="Gdynia"
            width={207}
            height={207}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Gdynia</p>
          <span>1 311 obiektów</span>
        </div>
      </Slider>
    </div>
  );
};

export default PolishPlacesSlider;
