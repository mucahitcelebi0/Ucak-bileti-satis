import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./components/SearchForm"; 
import FlightList from "./components/FlightList"; 
import ReservationForm from "./components/ReservationForm"; 
import IllerListesi from "./components/IllerListesi"; 


const App = () => {
  const [flights, setFlights] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSearch = (criteria) => {
    
    const dummyFlights = [
      {
        id: 1,
        havayoluAdi: "THY",
        kalkisSaati: "10:00",
        varisSaati: "12:00",
        tarih: "2025-01-15",
      },
      {
        id: 2,
        havayoluAdi: "Pegasus",
        kalkisSaati: "14:00",
        varisSaati: "16:00",
        tarih: "2025-01-15",
      },
    ];

    
    const filteredFlights = dummyFlights.filter(
      (flight) =>
        flight.tarih === criteria.tarih &&
        flight.kalkisSaati.includes(criteria.nereden) &&
        flight.varisSaati.includes(criteria.nereye)
    );

    setFlights(filteredFlights);
  };

  const handleAddToCart = (flight) => {
    setCart([...cart, flight]);
  };

  return (
    <div>
      <header>
        <h1>Uçak Rezervasyon Sistemi</h1>
      </header>
      <IllerListesi /> {}
      <SearchForm onSearch={handleSearch} />
      <FlightList flights={flights} onAddToCart={handleAddToCart} />
      <ReservationForm cart={cart} />
    </div>
  );
};

export default App;
