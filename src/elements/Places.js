import React from "react";

const Places = ({ placesCategory }) => {
  const places = {
    regions: [
      {
        id: 1,
        name: "Mazury",
        number: "2 691 obiektów",
      },
      {
        id: 2,
        name: "Morze Bałtyckie",
        number: "11 569 obiektów",
      },
      {
        id: 3,
        name: "Mierzeja Wiślna",
        number: "573 obiekty",
      },
      {
        id: 4,
        name: "Kornwalia",
        number: "5 275 obiektów",
      },
      {
        id: 5,
        name: "wielkopolskie",
        number: "2 008 obiektów",
      },
      {
        id: 6,
        name: "Pieniny Mountains",
        number: "494 obiektów",
      },
      {
        id: 7,
        name: "Bieszczady",
        number: "935 obiektów",
      },
      {
        id: 8,
        name: "Szklarska Poręba i okolice",
        number: "614 obiektów",
      },
      {
        id: 9,
        name: "warmińsko-mazurskie",
        number: "2 957 obiektów",
      },
      {
        id: 10,
        name: "Góry Stołowe",
        number: "535 obiektów",
      },
      {
        id: 11,
        name: "dolnośląskie",
        number: "4 863 obiekty",
      },
      {
        id: 12,
        name: "Kraków-Częstochowa",
        number: "164 obiekty",
      },
      {
        id: 13,
        name: "Zalew Zegrzyński",
        number: "29 obiektów",
      },
      {
        id: 14,
        name: "Bali",
        number: "12 681 obiektów",
      },
      {
        id: 15,
        name: "Żywiec Beskids",
        number: "Tuchola Forest",
      },
      {
        id: 16,
        name: "Majorka",
        number: "10 780 obiektów",
      },
      {
        id: 17,
        name: "podlaskie",
        number: "1 236 obiektów",
      },
      {
        id: 18,
        name: "Kaszuby",
        number: "4 176 obiektów",
      },
      {
        id: 19,
        name: "lubuskie",
        number: "586 obiektów",
      },
      {
        id: 20,
        name: "Tuchola Forest",
        number: "325 obiektów",
      },
    ],
    cities: [
      {
        id: 1,
        name: "Berlin",
        number: "1 749 hoteli",
      },
      {
        id: 2,
        name: "Zakopane",
        number: "1 960 hoteli",
      },
      {
        id: 3,
        name: "Warszawa",
        number: "4 691 hoteli",
      },
      {
        id: 4,
        name: "Szczawnica",
        number: "187 hoteli",
      },
      {
        id: 5,
        name: "Rzeszów",
        number: "2 008 hoteli",
      },
      {
        id: 6,
        name: "Ostróda",
        number: "494 hoteli",
      },
      {
        id: 7,
        name: "Mikołajki",
        number: "935 hoteli",
      },
      {
        id: 8,
        name: "Legnica",
        number: "614 hoteli",
      },
      {
        id: 9,
        name: "Koszalin",
        number: "2 957 hoteli",
      },
      {
        id: 10,
        name: "Jurata",
        number: "635 hoteli",
      },
      {
        id: 11,
        name: "Paryż",
        number: "4 863 hoteli",
      },
      {
        id: 12,
        name: "Praga",
        number: "4 164 hoteli",
      },
      {
        id: 13,
        name: "Wrocław",
        number: "2 129 hoteli",
      },
      {
        id: 14,
        name: "Ustka",
        number: "1 681 hoteli",
      },
      {
        id: 15,
        name: "Opole",
        number: "374 hoteli",
      },
      {
        id: 16,
        name: "Łeba",
        number: "1 780 hoteli",
      },
      {
        id: 17,
        name: "Lublin",
        number: "2 236 hoteli",
      },
      {
        id: 18,
        name: "Łódź",
        number: "4 106 hoteli",
      },
      {
        id: 19,
        name: "Hel",
        number: "1 586 hoteli",
      },
      {
        id: 20,
        name: "Gdańsk",
        number: "3 125 hoteli",
      },
    ],
    places: [
      {
        id: 1,
        name: "Wieżowiec Burdż al-Arab",
        number: "4 283 obiekty",
      },
      {
        id: 2,
        name: "Energy-Land",
        number: "72 obiekty",
      },
      {
        id: 3,
        name: "Molo w Sopocie",
        number: "2 001 obiektów",
      },
      {
        id: 4,
        name: "Biebrzański Park Narodowy",
        number: "10 obiektów",
      },
      {
        id: 5,
        name: "Sky Tower",
        number: "1 683 obiekty",
      },
      {
        id: 6,
        name: "Rynek Główny",
        number: "4 094 obiektów",
      },
      {
        id: 7,
        name: "Moszna Castle",
        number: "1 obiekt",
      },
      {
        id: 8,
        name: "Wilczy Szaniec",
        number: "",
      },
      {
        id: 9,
        name: "Zamek Czocha",
        number: "14 obiektów",
      },
      {
        id: 10,
        name: "Zakłady kąpielowe",
        number: "1 400 obiektów",
      },
      {
        id: 11,
        name: "Słowiński Park Narodowy",
        number: "5 obiektów",
      },
      {
        id: 12,
        name: "Jezioro Rożnowskie",
        number: "",
      },
      {
        id: 13,
        name: "Sanktuarium Matki Bożej",
        number: "144 obiekty",
      },
      {
        id: 14,
        name: "Zamek Książ",
        number: "7 obiektów",
      },
      {
        id: 15,
        name: "Rynek we Wrocławiu",
        number: "1 399 obiektów",
      },
      {
        id: 16,
        name: "Cetrum handlowe",
        number: "415 obiektów",
      },
      {
        id: 17,
        name: "Gubałówka",
        number: "1 960 obiektów",
      },
      {
        id: 18,
        name: "Horyniec",
        number: "6 obiektów",
      },
      {
        id: 19,
        name: "Ojcowski Park Narodowy",
        number: "5 obiektów",
      },
      {
        id: 20,
        name: "Plaża w Sopocie",
        number: "2 001 obiektów",
      },
    ],
  };

  return (
    <div className="places-wrapper">
      {places[placesCategory].map((place) => (
        <div key={place.id}>
          <p>{place.name}</p>
          <span>{place.number}</span>
        </div>
      ))}
    </div>
  );
};

export default Places;
