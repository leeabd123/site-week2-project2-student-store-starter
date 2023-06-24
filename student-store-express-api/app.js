const express = require('express');
const axios = require('axios');
const cors = require("cors");
const fs = require("fs");




const app = express();

app.use(cors());
app.use(express.json());

const store = require('./routes/Store');

app.use('/', store);


//Error handling 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.get('/', (req, res) => {
    const response = { ping: 'pong' };
    res.status(200).json(response);
});
  

module.exports = app;






