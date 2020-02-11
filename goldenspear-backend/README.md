# NodeJS encryption api rest

This is a minimal api rest for NodeJS. This project includes inserting and encrypting a message and retrieving all history data in the SQLite DB!

# Features

* Python ^3.6
* NodeJS
* SQLite
* Express
* REST API

# Requirements

* [node & npm](https://nodejs.org/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

# Installation :wrench:

* Run ```npm install``` on the cloned directory.

# Running the software :arrow_forward:

* First of all, create db file with ```node sql.js``` . Useful command to restart and re-create the SQLite DB.
* ```node app.js``` for running the server and listen to requests.

# API Endpoints

```
GET http://localhost:4001/history       =>  retrieve all db results
POST http://localhost:4001/process      =>  Encrypt the message via call caesarEncryption.py, display
                                            encrypted message and store result to DB
```

# File description :page_with_curl:

* **caesarEncrypt.py**: python file where Caesar Encryption with lower case alphabet is applied.
* **crc8.js**: javascript file to calculate crc-8 checksum need in caesarEncryption.py as the shift value.
* **sql.js**: ensures no Encryption table already exists and creates a new one
* **app.js**: server file
