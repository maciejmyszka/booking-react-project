import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <h2>Oszczędzaj czas i pieniądze!</h2>
      <p>
        Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty
      </p>
      <div className="mail">
        <input type="email" placeholder="Adres mailowy" />
        <label className="input-mobile">
          <input type="checkbox" />
          Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
        </label>
        <button>Zaprenumeruj</button>
      </div>
      <label>
        <input type="checkbox" />
        Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
      </label>
    </div>
  );
};

export default Newsletter;
