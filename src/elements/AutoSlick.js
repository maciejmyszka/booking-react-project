import React, { useState, useEffect } from "react";
import Slider from "react-slick";

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
            src="../images/hotel-img-1.jpg"
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src="../images/hotel-img-2.jpg"
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src="../images/hotel-img-3.jpg"
            alt="hotel"
            layout="constrained"
          />
        </div>
        <div>
          <img
            src="../images/hotel-img-4.jpg"
            alt="hotel"
            layout="constrained"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlick;
