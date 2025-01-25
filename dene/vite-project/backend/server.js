const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDb } = require('./dbConfig');

const app = express();
app.use(bodyParser.json());
app.use(cors());


let pool;
connectToDb().then((dbPool) => {
  pool = dbPool;
});


app.get('/api/iller', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM Iller');
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Veritabanı hatası');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
