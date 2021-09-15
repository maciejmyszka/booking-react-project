import React from "react";
import Navigation from "./Navigation";
import menu from "../images/menu-icon.svg";
import profile from "../images/profile-icon.svg";
import flag from "../images/poland_icon.png";

const BarOnTop = () => {
  return (
    <div className="company-wrapper">
      <div className="company-intro">
        <h3>
          <a
            href="/homepage.js"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Booking<span>.com</span>
          </a>
        </h3>
        <div className="panel-mobile">
          <img src={profile} alt="profil" />
          <img src={menu} alt="menu" />
        </div>
        <div className="intro-info">
          <p>PLN</p>
          <img src={flag} alt="pl" width={25} height={25} layout="fixed" />
          <p>?</p>
          <button>Udostępnij obiekt</button>
          <button>Zarejerstruj się</button>
          <button>Zaloguj się</button>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default BarOnTop;
