//
// HERE WE ADD THE CONNECTION WITH OUR DB THROUGH EXPRESS
//
const express = require(`express`);
const connect = require(`./config/db.config`)

const PORT = 5000;
const app = express();
connect();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));