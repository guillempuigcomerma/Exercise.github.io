# NodeJS encryption api rest

This is a minimal api rest for NodeJS. This project includes inserting and encrypting a message and retrieving all history data in the SQLite DB!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.

# Running the software

* First of all, create db file with ```node sql.js``` . Useful command to restart and re-create the SQLite DB.
* ```node app.js``` for simple setups.

# API Endpoints

```
GET http://localhost:3000/history       =>  retrieve all db results
POST http://localhost:3000/process      =>  Encrypt the message via call to Python script ([caesarEncryption.py](https://github.com/guillempuigcomerma/Exercise.github.io/blob/master/goldenspear-backend/caesarEncrypt.py)), display encrypted word and store result to DB
```
