import React from "react";

import santorini from "../images/santorini small.jpg";
import portugal from "../images/portugal small.jpg";
import train from "../images/train small.jpg";
import pink from "../images/pink-house small.jpg";
import lake from "../images/lake small.jpg";

const Inspiration = () => {
  return (
    <div className="inspiration-wrapper">
      <h2>Poszukaj inspiracji na kolejną podróż</h2>
      <div className="articles-wrapper">
        <div className="row-3">
          <img src={santorini} alt="santorini" />
          <div className="dark">
            <h3 className="santorini">
              Najlepsze domy wakacyjne na Santorynie
            </h3>
            <p>
              Spędź długie dni w tych olśniewających domach wakacyjnych na
              Santorynie.
            </p>
          </div>
        </div>
        <div className="row-3">
          <img src={portugal} alt="portugal" />
          <div className="dark">
            <h3 className="portugal">Lokalny przewodnik po Portugalii</h3>
            <p>
              Podążaj śladami lokalnych podróżujących i odkryj Portugalię,
              której jeszcze nie widziałeś.
            </p>
          </div>
        </div>
        <div className="row-3">
          <img src={train} alt="train" />
          <div className="dark">
            <h3 className="train">
              Wspaniałe podróże pociągiem: Ekspres Lodowcowy
            </h3>
            <p>Daj się oczarować magicznym krajobrazom Szwajcarii.</p>
          </div>
        </div>
        <div className="row-2">
          <img src={pink} alt="house" />
          <div className="dark">
            <h3 className="house">
              Te niezwykłe miejsca muszą być na Twojej liście!
            </h3>
            <p>
              Stwórz podróżniczą listę życzeń z miejscami, które już niedługo
              będziesz mógł zobaczyć.
            </p>
          </div>
        </div>
        <div className="row-2">
          <img src={lake} alt="lake" />
          <div className="dark">
            <h3 className="lake">Polskie jeziora pełne magii</h3>
            <p>
              Spowite mgłą idylle, lasy pierwotne i szaleństwo lodowego
              żeglarstwa zapraszają.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
