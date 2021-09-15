import React from "react";

import healthImg from "../images/health-icon.svg"

const HealthSecure = () => {
  return (
    <div className="health-secure-wrapper">
      <div className="health-pic">
        <img
          src={healthImg}
          alt="health protection"
          layout="constrained"
          height={64}
          width={64}
        />
      </div>
      <div className="health-description">
        <h4>Dodatkowe środki bezpieczeństwa i ochrony zdrowia</h4>
        <p>
          Ten obiekt podjął dodatkowe kroki w zakresie ochrony zdrowia i
          higieny, aby zapewnić Ci bezpieczeństwo
        </p>
        <span>Zobacz szczegóły dotyczące zdrowia i bezpieczeństwa</span>
      </div>
    </div>
  );
};

export default HealthSecure;
