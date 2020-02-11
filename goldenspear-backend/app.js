const express = require('express');
const app = express();
const cors = require('cors');
//middleware per tractar cos request
const bodyParser = require('body-parser');
const CRC8 = require('./crc8.js');

const PORT = process.env.PORT || 4001;
//importem  la base dade sper poder-hi interactuar
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

//importem la base de dades
new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

//per poder servir fitxer statics CSS, imatges, etc
app.use(express.static('public'));

app.get('/history', (req, res, next) => {
  db.all('SELECT * FROM Encryption', (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({results: rows});
    }
  });
});


app.post('/process', (req, res, next) => {
  const message = req.body.word;
  const byte_array = message.split('').map(function(x){return x.charCodeAt(0)})
  const crc8 = new CRC8()
  const crc = crc8.checksum(byte_array)
  const spawn = require("child_process").spawn;
  let encrypted_msg = '';
  db.get(`SELECT SUM(original_msg_crc) AS suma FROM Encryption`, (err,row) => {
    var shift;
    if(row.suma == null){
      shift = 0;
    } else {
      shift = row.suma;
    }
    const caesarEncrypt = spawn('python3',["./caesarEncrypt.py",message,shift]);
    caesarEncrypt.stdout.on('data', (data) => {
      encrypted_msg += data.toString();
      db.run(`INSERT INTO Encryption (original_msg, encrypted_msg, original_msg_crc)
              VALUES ($original_msg, $encrypted_msg, $original_msg_crc)`,
      {
        $original_msg: message,
        $encrypted_msg: encrypted_msg,
        $original_msg_crc: crc,
      }, function(err) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        db.get(`SELECT * FROM Encryption WHERE id = ${this.lastID}`, (err, row) => {
          if (!row) {
            return res.sendStatus(500);
          }
          res.status(201).send({encryptionResult: row});
        });
      });
    });
  })
});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
