const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
  //primer verifiquem que no existeixi una taula previa
  db.run('DROP TABLE IF EXISTS Encryption', error => {
   if (error) {
     throw error;
   }});

  db.run(`CREATE TABLE Encryption (
    id INTEGER PRIMARY KEY,
    original_msg message TEXT NOT NULL,
    encrypted_msg TEXT NOT NULL,
    original_msg_crc INTEGER)`, (err) => {console.log(err);}
  );

  db.all('SELECT * FROM Encryption', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Finished seeding. There are ${rows.length} rows into the Encryption table.`);
  });
});
