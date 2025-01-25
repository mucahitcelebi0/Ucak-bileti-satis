const sql = require('mssql');

const config = {
  server: 'localhost', 
  database: 'UcakRezervasyon', 
  options: {
    encrypt: false, 
    enableArithAbort: true
  },
  port: 1433, 
  authentication: {
    type: 'ntlm', 
    options: {
      domain: '', 
      userName: '', 
      password: '' 
    }
  }
};

async function connectToDb() {
  try {
    const pool = await sql.connect(config);
    console.log('Veritabanına bağlanıldı');
    return pool;
  } catch (err) {
    console.error('Veritabanına bağlanılamadı', err);
  }
}

module.exports = { connectToDb };
