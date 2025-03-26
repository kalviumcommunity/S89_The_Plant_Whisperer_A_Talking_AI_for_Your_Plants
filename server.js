const express = require('express');
const { resolve } = require('path');

const app = express();

app.use(express.static('static'));

const vevanth = require("./schema");

const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());


app.get('/ping', (req, res) => {
    try {
        res.status(200).send({msg:'pong'});
    } catch (error) {
        res.status(500).send({msg:"something went wrong"})
    }
});
app.get('/', (req, res) => {
    res.send('Connected to mongodb successfully');
  });

  const router = require("./router");

  app.use("/Sahithi",router);


app.listen(3000,async () => {
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully!")
    } catch (error) {
        console.log("Error",error);
    }
});