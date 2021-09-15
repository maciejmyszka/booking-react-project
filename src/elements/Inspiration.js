import React from "react";

const Inspiration = () => {
  return (
    <div className="inspiration-wrapper">
      <h2>Poszukaj inspiracji na kolejną podróż</h2>
      <div className="articles-wrapper">
        <div className="row-3">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/37680501.webp?k=ec4d8ece0cc3547af25f33f1ad879751936a27b3952e1ddb3036be48438efcd6&o="
            alt="santorini"
            layout="constrained"
            width={354.19}
            height={320}
            placeholder="blurred"
          />
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
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/116099712.webp?k=b7fa9c665459dba1a8bf2a2d67b75feba8e9ec94436f2a140c1e0ef358c88f20&o="
            alt="portugal"
            layout="constrained"
            width={354.19}
            height={320}
            placeholder="blurred"
          />
          <div className="dark">
            <h3 className="portugal">Lokalny przewodnik po Portugalii</h3>
            <p>
              Podążaj śladami lokalnych podróżujących i odkryj Portugalię,
              której jeszcze nie widziałeś.
            </p>
          </div>
        </div>
        <div className="row-3">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/23277800.webp?k=937be7b50e2d6082f5e4da748463e7243474c68dffb82142613c0838f40f7b3e&o="
            alt="train"
            layout="constrained"
            width={354.19}
            height={320}
            placeholder="blurred"
          />
          <div className="dark">
            <h3 className="train">
              Wspaniałe podróże pociągiem: Ekspres Lodowcowy
            </h3>
            <p>Daj się oczarować magicznym krajobrazom Szwajcarii.</p>
          </div>
        </div>
        <div className="row-2">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/720x405/94160112.webp?k=511285b8c22d68430160352b01a32273de7b00beb2ddaba26ea6ba553bc9dd24&o="
            alt="house"
            layout="constrained"
            width={539}
            height={320}
            placeholder="blurred"
          />
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
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/54070861.webp?k=328aa130c0ce448184754c5384610e3c22f136fab3aa60db5e4b63768e2c0fdf&o="
            alt="lake"
            layout="constrained"
            width={539}
            height={320}
            placeholder="blurred"
          />
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
