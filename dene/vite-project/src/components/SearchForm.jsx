import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [nereden, setNereden] = useState("");
  const [nereye, setNereye] = useState("");
  const [tarih, setTarih] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (nereden === nereye) {
      alert("Kalkış ve varış noktası aynı olamaz!");
      return;
    }

   
    const today = new Date().toISOString().split("T")[0];
    if (tarih < today) {
      alert("Geçmiş bir tarih seçemezsiniz!");
      return;
    }

    onSearch({ nereden, nereye, tarih });

    
    setNereden("");
    setNereye("");
    setTarih("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uçuş Ara</h3>
      <label>
        Nereden:
        <select
          value={nereden}
          onChange={(e) => setNereden(e.target.value)}
          required
        >
          <option value="">Seçiniz</option>
          <option value="Istanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">İzmir</option>
          <option value="Antalya">Antalya</option>
        </select>
      </label>
      <br />
      <label>
        Nereye:
        <select
          value={nereye}
          onChange={(e) => setNereye(e.target.value)}
          required
        >
          <option value="">Seçiniz</option>
          <option value="Istanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">İzmir</option>
          <option value="Antalya">Antalya</option>
        </select>
      </label>
      <br />
      <label>
        Tarih:
        <input
          type="date"
          value={tarih}
          onChange={(e) => setTarih(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchForm;
