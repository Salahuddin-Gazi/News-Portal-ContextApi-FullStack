const express = require("express");
const routes = express.Router();
const Joi = require("joi");
const Models = require("../models/models");

routes.route("/newNews").post(async (req, res) => {
  const schema = Joi.object({
    author: Joi.allow(),
    title: Joi.string().min(10),
    description: Joi.allow(),
    url: Joi.disallow(),
    urlToImage: Joi.allow(),
    publishedAt: Joi.allow(),
    content: Joi.allow(),
  });
  try {
    const value = await schema.validateAsync(req.body);
    const newNews = new Models(req.body);
    const savedNews = await newNews.save();
    // console.log(value);
    return res.send(savedNews);
  } catch (error) {
    // console.log(error);
    return res.send(`Status 400: Bad Request. ${error.details[0].message}`);
  }
});

routes.route("/news").get(async (req, res) => {
  const newsData = await Models.find();
  // console.log(newsData);
  res.send(newsData);
});

routes.route("/delNews/:id").delete(async (req, res) => {
  const del = await Models.findByIdAndDelete({ _id: req.params.id });
  res.send(del);
});

module.exports = routes;
