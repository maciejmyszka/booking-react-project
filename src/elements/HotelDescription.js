import React, {useContext} from "react";
import pin from "../images/pin-icon.svg";
import parking from "../images/parking-icon.png";
import { HotelContext } from "../HotelContext";

const HotelDescription = ({refInfo }) => {

  const {hotelCity, hotelName, hotelRate} = useContext(HotelContext)

  return (
    <div className="hotel-description-wrapper" ref={refInfo}>
      <div className="description-left">
        <h4>Jedna z najlepszych opcji w mieście {hotelCity}</h4>
        <p>
          Obiekt {hotelName}, usytuowany w miejscowości {hotelCity}, oferuje centrum
          fitness, prywatny parking oraz bar. Odległość ważnych miejsc od
          obiektu: Aqua Park – 400 m. Do dyspozycji Gości przygotowano takie
          udogodnienia, jak restauracja, całodobowa recepcja, obsługa pokoju
          oraz bezpłatne WiFi. W hotelu zapewniono kryty basen, wannę spa oraz
          bankomat.
        </p>
        <p>
          W każdym pokoju w obiekcie zapewniono biurko, telewizor z płaskim
          ekranem i prywatną łazienkę. Wszystkie opcje zakwaterowania wyposażone
          są w szafę i czajnik.
        </p>
        <p>
          Każdego ranka na miejscu serwowane jest śniadanie w formie bufetu.
        </p>
        <p>
          Obiekt {hotelName} oferuje saunę. W miejscowości {hotelCity} i okolicy Goście
          obiektu mogą uprawiać rozmaite sporty, takie jak narciarstwo oraz
          jazda na rowerze.
        </p>
        <p>
          Obiekt zapewnia również centrum biznesowe, a Goście mogą poczytać
          prasę.
        </p>
        <p>
          Parom bardzo się podoba ta lokalizacja – za pobyt dla 2 osób oceniają
          ją na {hotelRate}
        </p>
        <p>Mówimy w Twoim języku!</p>
      </div>
      <div className="description-right">
        <img src={pin} alt="pin" />
        <span>Świetna lokalizacja: wysoko oceniana przez Gości</span>
        <p>Śniadanie</p>
        <span>wegetariańskie, wegańskie, bezglutenowe, w formie bufetu</span>
        <img src={parking} alt="parking" />
        <span>Prywatny parking przy hotelu</span>
        <button>Zarezerwuj teraz</button>
      </div>
    </div>
  );
};

export default HotelDescription;
