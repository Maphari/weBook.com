require("dotenv").config();
const express = require("express");
const dataRoute = express.Router();

dataRoute.get("/api/hotel_locaiton/:location/:locale", (req, res) => {
  
});



module.exports = dataRoute;
