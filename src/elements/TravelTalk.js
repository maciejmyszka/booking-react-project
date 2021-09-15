import React from "react";

const TravelTalk = () => {
  return (
    <div className="travel-talk-wrapper">
      <h2>Nawiąż kontakt z innymi podróżującymi</h2>
      <div className="travel-pictures">
        <div className="travel-element">
          <img
            src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/czech-republic/8ccd7847c7c92876008c870c7b654dda4e7b16ec.jpg"
            alt="Czech"
            width={263}
            height={263}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Czechy</p>
          <span>Społeczność podróżujących</span>
          <span>114 368 podróżujących</span>
        </div>
        <div className="travel-element">
          <img
            src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/poland/02ab0ff83db3f5bb92af0b12c797e1efe058fa6c.jpg"
            alt="Poland"
            width={263}
            height={263}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Polska</p>
          <span>Społeczność podróżujących</span>
          <span>147 681 podróżujących</span>
        </div>
        <div className="travel-element">
          <img
            src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
            alt="Travel Talk"
            width={263}
            height={263}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Travel Talk</p>
          <span>Ogólna dyskusja</span>
          <span>559 436 podróżujących</span>
        </div>
        <div className="travel-element">
          <img
            src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"
            alt="more society"
            width={263}
            height={263}
            layout="constrained"
            placeholder="blurred"
          />
          <p>Więcej społeczności</p>
          <span>Zobacz wszystkie</span>
          <span>10 103 767 podróżujących</span>
        </div>
      </div>
    </div>
  );
};

export default TravelTalk;
