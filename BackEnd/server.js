const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
const URI = "mongodb+srv://salahuddin:1406Onik@news.atsee.mongodb.net/newsDB";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB Connected Yo!");
});

server.use(bodyParser.json());
server.use(cors());
//Routes
// app.get("/", (req, res) => {
//   res.send("Hola Mi Hija");
// });

//News Routes
const NewsRoute = require("./routes/routes");
server.use("/routes", NewsRoute);

//how to start up the server
// const port = process.env.PORT;

const port = 5000;
server.listen(port, () => console.log(`Listening to port ${port}...!`));
