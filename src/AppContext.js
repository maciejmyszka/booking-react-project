import { createContext } from "react";

export const defaultObject = {
  object: "",
  setObject: () => {},
  city: "",
  setCity: () => {},
  adults: 0,
  setAdults: () => {},
  children: 0,
  setChildren: () => {},
  rooms: 0,
  setRooms: () => {},
  hotel: false,
  setHotel: () => {},
  hotelName: "",
  setHotelName: () => {},
  hotelCity: "",
  setHotelCity: () => {},
  hotelGrade: 0,
  setHotelGrade: ()=> {},
  hotelRate: "",
  setHotelRate: () => {},
  hotelOpinions: 0,
  setHotelOpinions: () => {},
  hotelImg: "",
  setHotelImg: () => {}
};

export const AppContext = createContext(defaultObject);
