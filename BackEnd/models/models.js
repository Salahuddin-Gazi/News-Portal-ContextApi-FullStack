const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  author: "",
  title: String,
  description: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
});

const Model = mongoose.model("News", NewsSchema);
module.exports = Model;
