import jsPDF from "jspdf";
import React, { useState } from "react";
const ReservationForm = ({ cart }) => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [tcNo, setTcNo] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  const handleReservation = () => {
    
    if (cart.length === 0) {
      alert("Sepet boş! Lütfen bir uçuş seçin.");
      return;
    }

    
    if (!ad || !soyad || !tcNo || !telefon || !email) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    
    if (!/^\d{11}$/.test(tcNo)) {
      alert("TC Kimlik No 11 haneli olmalıdır!");
      return;
    }

    
    if (!/^\d{10,11}$/.test(telefon)) {
      alert("Telefon numarası geçersiz!");
      return;
    }

    
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Geçerli bir e-posta adresi girin!");
      return;
    }

   
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Rezervasyon Bilgileri", 10, 10);

    doc.setFontSize(12);
    doc.text(`Ad: ${ad}`, 10, 20);
    doc.text(`Soyad: ${soyad}`, 10, 30);
    doc.text(`TC No: ${tcNo}`, 10, 40);
    doc.text(`Telefon: ${telefon}`, 10, 50);
    doc.text(`E-posta: ${email}`, 10, 60);

    doc.text("Uçuş Bilgileri:", 10, 80);
    cart.forEach((flight, index) => {
      doc.text(
        `${index + 1}. ${flight.havayoluAdi} - Kalkış: ${
          flight.kalkisSaati
        }, Varış: ${flight.varisSaati}, Tarih: ${flight.tarih}`,
        10,
        90 + index * 10
      );
    });

    doc.save("rezervasyon.pdf");
    alert("Rezervasyon başarılı ve PDF oluşturuldu!");

    setAd("");
    setSoyad("");
    setTcNo("");
    setTelefon("");
    setEmail("");
  };

  return (
    <div>
      <h3>Rezervasyon Formu</h3>
      <label>
        Ad:
        <input
          type="text"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Soyad:
        <input
          type="text"
          value={soyad}
          onChange={(e) => setSoyad(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        TC No:
        <input
          type="text"
          value={tcNo}
          onChange={(e) => setTcNo(e.target.value)}
          required
          maxLength="11"
        />
      </label>
      <br />
      <label>
        Telefon:
        <input
          type="text"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          required
          maxLength="11"
        />
      </label>
      <br />
      <label>
        E-posta:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleReservation}>Kaydet ve PDF Al</button>
    </div>
  );
};

export default ReservationForm;
