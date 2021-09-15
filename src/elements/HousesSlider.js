import React from "react";
import Slider from "react-slick";
import praga from "../images/praga-slider.jpg";
import rio from "../images/rio-slider.jpg";
import petersburg from "../images/petersburg-slider.jpg";
import amsterdam from "../images/amsterdam-slider.jpg";
import madryt from "../images/madryt-slider.jpg";

const HousesSlider = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: 0,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1095,
        slidesToShow: 4,
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="slide-element">
          <img
            src={praga}
            alt="prague"
            width={209}
            height={200}
            layout="constrained"
            placeholder="blurred"
          />
          <span>3 Epoques</span>
          <span>Praga</span>
          <p>Ceny od 269 zł</p>
          <div className="rating">
            <p>9,2</p>
            <p>Znakomity</p>
            <span>568 opinii</span>
          </div>
        </div>
        <div className="slide-element">
          <img
            src={rio}
            alt="rio de janeiro"
            width={209}
            height={200}
            layout="constrained"
            placeholder="blurred"
          />
          <span>Sugar Loft Apartments</span>
          <span>Rio de Janeiro</span>
          <p>Ceny od 257 zł</p>
          <div className="rating">
            <p>9,0</p>
            <p>Znakomity</p>
            <span>312 opinii</span>
          </div>
        </div>
        <div className="slide-element">
          <img
            src={petersburg}
            alt="petersburg"
            width={209}
            height={200}
            layout="constrained"
            placeholder="blurred"
          />
          <span>Apartments on Belinskogo ulitsa</span>
          <span>Petersburg</span>
          <p>Ceny od 754 zł</p>
          <div className="rating">
            <p>9,8</p>
            <p>Wyjątkowy</p>
            <span>26 opinii</span>
          </div>
        </div>
        <div className="slide-element">
          <img
            src={amsterdam}
            alt="amsterdam"
            width={209}
            height={200}
            layout="constrained"
            placeholder="blurred"
          />
          <span>Lake View Apartment Amsterdam</span>
          <span>Amsterdam</span>
          <p>Ceny od 4 087 zł</p>
          <div className="rating">
            <p>9,3</p>
            <p>Znakomity</p>
            <span>60 opinii</span>
          </div>
        </div>
        <div className="slide-element">
          <img
            src={madryt}
            alt="madrit"
            width={209}
            height={200}
            layout="constrained"
            placeholder="blurred"
          />
          <span>BNBHolder Vintage & Colorful SOL</span>
          <span>Madryt</span>
          <p>Ceny od 1 067 zł</p>
          <div className="rating">
            <p>9,1</p>
            <p>Znakomity</p>
            <span>44 opinii</span>
          </div>
        </div>
        <div className="slide-more">
          <img
            src="https://cf.bstatic.com/static/img/join/bh_carousel_more_background/5132764897ca62019efeefc5ad9c296227434ba9.jpg"
            alt="more"
            width={209}
            height={340}
            layout="constrained"
            placeholder="blurred"
          />
          <p>
            Mamy o wiele więcej domów i apartamentów, które Ci się spodobają
          </p>
          <button className="more-btn">Zobacz ofertę domów</button>
        </div>
      </Slider>
    </div>
  );
};

export default HousesSlider;
