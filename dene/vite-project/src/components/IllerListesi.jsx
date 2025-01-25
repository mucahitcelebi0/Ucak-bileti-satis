import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IllerListesi = () => {
  const [iller, setIller] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/iller') 
      .then((response) => {
        setIller(response.data); 
      })
      .catch((error) => {
        console.error('Veri alınamadı:', error);
      });
  }, []);

  return (
    <div>
      <h1>İller Listesi</h1>
      <ul>
        {iller.map((il) => (
          <li key={il.Id}>{il.SehirAdi}</li>
        ))}
      </ul>
    </div>
  );
};

export default IllerListesi; 