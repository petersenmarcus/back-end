const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }


})

module.exports = Movie = mongoose.model("movie", MovieSchema);
