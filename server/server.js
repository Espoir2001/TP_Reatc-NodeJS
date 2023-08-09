

const express = require("express");
const mongoose = require("mongoose");
const filmRouter = require("./routes/FilmRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USER_PASSWORD}@ffiniss0.lxmquuf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to mongoDB!"))
  .catch((error) => {
    console.log(error);
  });

app.use("/films", filmRouter);

app.listen(`${process.env.PORT_SERVER}`, () => {
  console.log(`Node api is running on port ${process.env.PORT_SERVER}`);
});