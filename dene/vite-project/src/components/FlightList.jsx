import React from "react";


const FlightList = ({ flights, onAddToCart }) => {
  if (flights.length === 0) {
    return <p>Uygun uçuş bulunamadı.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Havayolu</th>
          <th>Kalkış</th>
          <th>Varış</th>
          <th>Tarih</th>
          <th>Sepete Ekle</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.havayoluAdi}</td>
            <td>{flight.kalkisSaati}</td>
            <td>{flight.varisSaati}</td>
            <td>{flight.tarih}</td>
            <td>
              <button onClick={() => onAddToCart(flight)}>Ekle</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightList;
