import React from "react";

const Explore = () => {
  return (
    <div className="explore-wrapper">
      <h2>Odkrywaj</h2>
      <div className="explore-pictures">
        <div className="explore-element">
          <img
            src="https://cf.bstatic.com/images/city/360x240/689/689587.jpg"
            alt="USA"
            width={207}
            height={135}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Stany Zjednoczone Ameryki</p>
          <div className="explore-description">
            <p>
              Podczas wyjazdu do kraju Stany Zjednoczone Ameryki skorzystaj z
              strakcji takich, jak: relaks, restauracje i zakupy!
            </p>
          </div>
        </div>
        <div className="explore-element">
          <img
            src="https://cf.bstatic.com/images/city/360x240/613/613105.jpg"
            alt="Włochy"
            width={207}
            height={135}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Włochy</p>
          <div className="explore-description">
            <p>
              Podczas wyjazdu do kraju Włochy skorzystaj z atrakcji takich, jak:
              stare miasto, krajobrazy i jedzenie!
            </p>
          </div>
        </div>
        <div className="explore-element">
          <img
            src="https://cf.bstatic.com/images/city/360x240/613/613088.jpg"
            alt="Francja"
            width={207}
            height={135}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Francja</p>
          <div className="explore-description">
            <p>
              Cisza, krajobrazy i stare miasto to punkty obowiązkowe wyjazdu do
              kraju Francja!
            </p>
          </div>
        </div>
        <div className="explore-element">
          <img
            src="https://cf.bstatic.com/images/city/360x240/971/971353.jpg"
            alt="Hiszpania"
            width={207}
            height={135}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Hiszpania</p>
          <div className="explore-description">
            <p>
              Jeśli lubisz rzeczy takie, jak: cisza, stare miasto i jedzenie, to
              nie możesz odpuścić sobie wyjazdu do kraju Hiszpania!
            </p>
          </div>
        </div>
        <div className="explore-element">
          <img
            src="https://cf.bstatic.com/images/city/360x240/972/972613.jpg"
            alt="Niemcy"
            width={207}
            height={135}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Niemcy</p>
          <div className="explore-description">
            <p>
              Koniecznie odwiedź kraj Niemcy! To miejsce polecane w kategoriach
              stare miasto, spacery i przechadzki po mieście.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
