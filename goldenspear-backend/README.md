# NodeJS encryption api rest

This is a minimal api rest for NodeJS. This project includes inserting and encrypting a message and retrieving all history data in the SQLite DB!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.

# Running the software

* First of all, create db file with ```node sql.js``` . Useful command to restart and re-create the SQLite DB.
* ```node app.js``` for simple setups.
* I would recommend looking at [the pm2 module](https://www.npmjs.com/package/pm2) for running on a production server.

# API Endpoints

```
GET http://localhost:3000/history
POST http://localhost:3000/process
```
