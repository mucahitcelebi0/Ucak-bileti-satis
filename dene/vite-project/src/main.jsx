import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchForm from "./components/SearchForm"; 
import FlightList from "./components/FlightList"; 
import ReservationForm from "./components/ReservationForm"; 
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
