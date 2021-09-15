import React from "react";
import info_icon from "../images/info_icon.svg";
import arrow_down from "../images/arrow_down.svg";
import { useState } from "react";

const CoronaAlert = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="alert">
      <div
        className="corona"
        onClick={() => setVisible((prevState) => !prevState)}
      >
        <img src={info_icon} alt="info" />
        <p>Koronawirus (COVID-19) - wsparcie</p>
        <img
          src={arrow_down}
          alt="more"
          className={isVisible === true ? "transform-up" : null}
        />
      </div>
      {isVisible && (
        <div className="more-corona">
          <p>
            Sprawdź ograniczenia dotyczące podróżowania. Podróżowanie może być
            dozwolone tylko w określonych celach, a podróżowanie zwłaszcza w
            celach turystycznych może nie być dozwolone.
          </p>
          <p className="more">Dowiedz się więcej</p>
        </div>
      )}
    </div>
  );
};

export default CoronaAlert;
