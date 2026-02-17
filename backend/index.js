require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
    console.log("APP Started");
    mongoose.connect(uri);
    console.log("Database Connected!");

});