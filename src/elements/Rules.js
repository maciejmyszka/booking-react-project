import React, {useContext} from "react";
import { HotelContext } from "../HotelContext";

const Rules = ({refRules}) => {

  const {hotelName} = useContext(HotelContext)

  return (
    <div className="rules-wrapper" ref={refRules}>
      <div className="rules-header">
        <div className="header-left">
          <h3>Zasady pobytu</h3>
          <p>
            Obiekt {hotelName} przyjmuje życzenia specjalne
            – możesz je dodać w kolejnym kroku rezerwacji!
          </p>
        </div>
        <button>Zobacz dostępność</button>
      </div>
      <div className="rules-content">
        <div>
          <p className="first-p">Zameldowanie</p>
          <p>
            Zameldowanie od godziny 15:00. Przy zameldowaniu wymagane jest
            okazanie ważnego dowodu tożsamości ze zdjęciem oraz karty kredytowej
          </p>
        </div>
        <div>
          <p>Wymeldowanie</p>
          <p>Wymeldowanie do godziny 12:00.</p>
        </div>
        <div>
          <p>Odwołanie rezerwacji/ przedpłata</p>
          <p>
            Zasady dotyczące przedpłaty i odwoływania rezerwacji różnią się w
            zależności od rodzaju zakwaterowania. Prosimy wprowadzić datę pobytu
            i sprawdzić warunki rezerwacji wybranego pokoju.
          </p>
        </div>
        <div>
          <p>Zakwaterowanie dzieci</p>
          <p>
            Dzieci w każdym wieku są mile widziane. W tym obiekcie dzieci w
            wieku 12 lat lub więcej będą uważane za osoby dorosłe. Aby zobaczyć
            dokładne ceny oraz informacje o liczbie Gości, dodaj do wyszukiwania
            liczbę oraz wiek dzieci, z którymi podróżujesz.
          </p>
        </div>
        <div>
          <p>Brak ograniczeń wiekowych</p>
          <p>Brak ograniczeń wiekowych przy zameldowaniu</p>
        </div>
        <div>
          <p>Zwierzęta</p>
          <p>Zwierzęta są akceptowane. Mogą obowiązywać dodatkowe opłaty.</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
