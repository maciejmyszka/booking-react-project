import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { AppContext } from "../AppContext";

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
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt="hotel"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Hotele</p>
          <span>778 455 hoteli</span>
        </div>
        <div className="slide-element" onClick={() => setObject("apartment")}>
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt="apartment"
            width={207}
            height={180}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Apartamenty</p>
          <span>754 877 apartamentów</span>
        </div>
        <div className="slide-element" onClick={() => setObject("resort")}>
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg"
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
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg"
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
