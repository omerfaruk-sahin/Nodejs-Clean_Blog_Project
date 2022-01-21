const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session')
const MongoStore = require('connect-mongo');

const app = express();

const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute=require("./routes/userRoute")
const port = 3000;

// DB connected
mongoose
  .connect("mongodb://localhost/SmartEduPjct")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//Global variaable
global.userID = null;
// Middlewares
app.use(express.static("puplic"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'session_id',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/SmartEduPjct' })
}))
app.use('*', (req, res, next) => {
  userID = req.session.userID;
  next();
});


app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Sunucu 'http://localhost:3000/'  ile başlatıldı...`);
});
