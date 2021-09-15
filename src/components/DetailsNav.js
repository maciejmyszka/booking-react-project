import React from "react";
import info_icon from "../images/info_icon.svg";

const DetailsNav = ({ refInfo, refRules, refImportant }) => {
  const scrollToRef = (ref) => ref.current.scrollIntoView();

  return (
    <div className="details-nav-wrapper">
      <button>Wyrównujemy ceny</button>
      <ul>
        <li onClick={() => scrollToRef(refInfo)} style={{ cursor: "pointer" }}>
          Informacje i ceny
        </li>
        <li>Udogodnienia</li>
        <li onClick={() => scrollToRef(refRules)} style={{ cursor: "pointer" }}>
          Zasady pobytu
        </li>
        <li
          onClick={() => scrollToRef(refImportant)}
          style={{ cursor: "pointer" }}
        >
          Ważne informacje
        </li>
        <li>Opinie gości</li>
      </ul>
      <div className="corona-info">
        <img src={info_icon} alt="info" />
        <p>
          W odpowiedzi na koronawirusa (COVID-19) ten obiekt zapewnia obecnie
          dodatkowe środki bezpieczeństwa i środki sanitarne.
        </p>
        <span>Więcej informacji</span>
      </div>
    </div>
  );
};

export default DetailsNav;
