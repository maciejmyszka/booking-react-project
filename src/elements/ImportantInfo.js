import React from "react";

const ImportantInfo = ({ refImportant }) => {
  return (
    <div className="important-info-wrapper" ref={refImportant}>
      <div className="info-header">
        <h3>Ważne informacje</h3>
        <button>Zobacz dostępność</button>
      </div>
      <div className="info-content">
        <p>
          Osoby dokonujące rezerwacji, którą należy opłacić przed przyjazdem,
          otrzymają od personelu obiektu szczegółowe informacje dotyczące
          płatności, w tym link do bezpiecznej platformy płatniczej.
        </p>
        <p>
          Pobyt dzieci do 12. roku życia jest bezpłatny, jeśli korzystają one z
          łóżek stanowiących standardowe wyposażenie pokoju/apartamentu.
        </p>
        <p>
          W odpowiedzi na koronawirusa (COVID-19) ten obiekt zapewnia obecnie
          dodatkowe środki bezpieczeństwa i środki sanitarne.
        </p>
        <p>
          Sprzedaż jedzenia i napojów w tym obiekcie może być ograniczona lub
          niedostępna ze względu na koronawirusa (COVID-19).
        </p>
        <p>
          W odpowiedzi na koronawirusa (COVID-19) ten obiekt podjął środki
          mające na celu ochronę gości i personelu. Niektóre usługi i
          udogodnienia mogą być niedostępne lub ograniczone.
        </p>
        <p>
          W momencie zameldowania wymagane jest okazanie ważnego dowodu
          tożsamości ze zdjęciem oraz karty kredytowej. Życzenia specjalne
          zostaną zrealizowane w zależności od dostępności, a ich realizacja
          może podlegać dodatkowej opłacie.
        </p>
      </div>
    </div>
  );
};

export default ImportantInfo;
