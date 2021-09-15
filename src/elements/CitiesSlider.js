import React from "react";
import Slider from "react-slick";

const CitiesSlider = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "10px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  return (
    <div className="citiesSlider-wrapper">
      <Slider {...settings}>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/711920.jpg?k=93cd5aa61b0dbe026cda8b294980a0c00e90770744f4890cc255ae2df6fff802&o="
              alt="Kielce"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Kielce</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>152 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>141 apartamentów</p>
            <span>, </span>
            <p>10 obiektów B&B</p>
            <span>, </span>
            <p>9 kwater prywatnych</p>
            <span>, </span>
            <p>6 pensjonatów</p>
          </div>
        </div>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/940296.jpg?k=1eee11b9488c38a5fcb21068b0f3604a4c89c54d79872280049e9bbdcf84bd7f&o="
              alt="Płock"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Płock</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>30 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>24 apartamentów</p>
            <span>, </span>
            <p>5 obiektów B&B</p>
            <span>, </span>
            <p>3 kwatery prywatne</p>
          </div>
        </div>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/653060.jpg?k=2496bd5ff6f97cfa09ac95444320d9b20e949e81545e2a5d520fb54b2b156237&o="
              alt="Torun"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Toruń</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>368 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>350 apartamentów</p>
            <span>, </span>
            <p>16 kwater prywatnych</p>
            <span>, </span>
            <p>15 hosteli</p>
            <span>, </span>
            <p>10 hoteli apartamentowych</p>
          </div>
        </div>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/646175.jpg?k=2702a51407e53a8336288b7238ad87d2d579a4da2311775263152ead163f5f6b&o="
              alt="Bydgoszcz"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Bydgoszcz</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>104 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>97 apartamentów</p>
            <span>, </span>
            <p>6 obiektów B&B</p>
            <span>, </span>
            <p>13 hosteli</p>
            <span>, </span>
            <p>7 hoteli apartamentowych</p>
          </div>
        </div>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/652899.jpg?k=260ba3e03b0e5ad10563760de2b241f83f847cdc5d49e01b2956842c4cb68dca&o="
              alt="Katowice"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Katowice</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>187 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>172 apartamentów</p>
            <span>, </span>
            <p>19 hosteli</p>
            <span>, </span>
            <p>14 kwater prywatnych</p>
            <span>, </span>
            <p>10 hoteli apartamentowych</p>
          </div>
        </div>
        <div className="slide-element">
          <div className="picture">
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/653054.jpg?k=7a9cdb5d930bc22dd126d62ab9ed9226de353cc9dee602cc7f1a2116655591d5&o="
              alt="Szklarska Poręba"
              height={197}
              width={263}
              layout="constrained"
              placeholder="blurred"
            />
            <div className="dark">
              <h3>Szklarska Poręba</h3>
              <p>Polska</p>
            </div>
          </div>
          <div className="description">
            <p>498 obiektów na wynajem sezonowy</p>
            <span>, </span>
            <p>348 apartamentów</p>
            <span>, </span>
            <p>60 obiektów B&B</p>
            <span>, </span>
            <p>70 kwater prywatnych</p>
            <span>, </span>
            <p>25 domów wakacyjnych</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CitiesSlider;
