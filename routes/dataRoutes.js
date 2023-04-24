require("dotenv").config();
const express = require("express");
const dataRoute = express.Router();
const Staff = require("../models/Staff");

dataRoute.get("/api/staff_data", async (req, res) => {
  try {
    const staff = await Staff.staff.find({}).exec();
    res.status(200).json(staff);
  } catch (error) {
    res.json({ message: error.message });
  }
});


module.exports = dataRoute;
