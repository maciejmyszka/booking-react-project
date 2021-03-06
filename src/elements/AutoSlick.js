import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import img1 from "../images/hotel-img-1.jpg"
import img2 from "../images/hotel-img-2.jpg"
import img3 from "../images/hotel-img-3.jpg"
import img4 from "../images/hotel-img-4.jpg"

const AutoSlick = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width < 601 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="auto-slick-wrapper">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src={img4}
            alt="hotel"
            layout="constrained"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlick;
