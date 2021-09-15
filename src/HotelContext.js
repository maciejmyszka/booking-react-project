import { createContext } from "react";

export const defaultHotel = {
  hotelName: "",
  setHotelName: () => {},
  hotelCity: "",
  setHotelCity: () => {},
  hotelGrade: 0,
  setHotelGrade: () => {},
  hotelRate: "",
  setHotelRate: () => {},
  hotelOpinions: 0,
  setHotelOpinions: () => {},
  hotelImg: "",
  setHotelImg: () => {},
  hotelDescription: "",
  setHotelDescription: () => {},
  hotelReservation: 0,
  setHotelReservation: () => {},
  hotelDistance: 0,
  setHotelDistance: () => {}
};

export const HotelContext = createContext(defaultHotel);
