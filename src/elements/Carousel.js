import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { AppContext } from "../AppContext";

import apartment from "../images/apartment slider small.jpg";
import apartmentHotel from "../images/apartmentHotel slider small.jpg";
import camping from "../images/camping slider small.jpg";
import country from "../images/country slider small.jpg";
import houses from "../images/house slider small.jpg";
import holiday from "../images/holidayHouse slider small.jpg";
import guesthouse from "../images/guesthouse slider small.jpg";
import hostel from "../images/hostel slider small.jpg";
import motel from "../images/motel slider small.jpg";
import resort from "../images/resort slider small.jpg";
import villa from "../images/villa slider small.jpg";
import hotel from "../images/hotel-slider small.jpg";

const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const { setObject } = useContext(AppContext);

  const setSlides = () => {
    if (width > 692) {
      return 5;
    } else if (width < 692 && width > 505) {
      return 4;
    } else {
      return 3;
    }
  };

  let settings = {
    infinite: false,
    centerPadding: "5px",
    slidesToShow: setSlides(),
    slidesToScroll: 1,
    swipeToSlide: true,
    slidesToSlide: 12,
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="slide-element" onClick={() => setObject("hotel")}>
          <img
            src={hotel}
            alt="hotel"
            width={207}
            height={180}
            placeholder="blurred"
          />
          <p>Hotele</p>
          <span>778 455 hoteli</span>
        </div>
        <div className="slide-element" onClick={() => setObject("apartment")}>
          <img
            src={apartment}
            alt="apartment"
            width={207}
            height={180}
            placeholder="blurred"
          />
          <p>Apartamenty</p>
          <span>754 877 apartamentów</span>
        </div>
        <div className="slide-element" onClick={() => setObject("resort")}>
          <img
            src={resort}
            alt="resort"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Ośrodki wypoczynkowe</p>
          <span>17 646 ośrodków wypoczynkowych</span>
        </div>
        <div className="slide-element" onClick={() => setObject("villa")}>
          <img
            src={villa}
            alt="villa"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Wille</p>
          <span>380 163 wille</span>
        </div>
        <div className="slide-element" onClick={() => setObject("house")}>
          <img
            src={houses}
            alt="house"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Domki</p>
          <span>30 148 domków</span>
        </div>
        <div className="slide-element" onClick={() => setObject("country")}>
          <img
            src={country}
            alt="country"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Domki wiejskie</p>
          <span>137 155 domków wiejskich</span>
        </div>
        <div className="slide-element" onClick={() => setObject("camping")}>
          <img
            src={camping}
            alt="camping"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Luksusowy kemping</p>
          <span>10 143 luksusowe kempingi</span>
        </div>
        <div
          className="slide-element"
          onClick={() => setObject("apartmentHotel")}
        >
          <img
            src={apartmentHotel}
            alt="hotel apartment"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Hotele apartamentowe</p>
          <span>32 702 hotele apartamentowe</span>
        </div>
        <div className="slide-element" onClick={() => setObject("house")}>
          <img
            src={holiday}
            alt="holiday house"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Domy wakacyjne</p>
          <span>380 286 domów wakacyjnych</span>
        </div>
        <div className="slide-element" onClick={() => setObject("pensionat")}>
          <img
            src={guesthouse}
            alt="guesthouse"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Pensjonaty</p>
          <span>111 512 pensjonatów</span>
        </div>
        <div className="slide-element" onClick={() => setObject("hostel")}>
          <img
            src={hostel}
            alt="hostel"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Hostele</p>
          <span>17 842 hostele</span>
        </div>
        <div className="slide-element" onClick={() => setObject("motel")}>
          <img
            src={motel}
            alt="motel"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Motele</p>
          <span>13 914 moteli</span>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
