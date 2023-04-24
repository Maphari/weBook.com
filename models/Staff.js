const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema({
  itemCategory: String,
  rating: String,
  itemImage: String,
  location: String,
});

const staff = mongoose.model("staff", staffSchema);

module.exports = {
  staff,
};
