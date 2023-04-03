require('dotenv').config();
require('./config/db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const exphbs = require("express-handlebars");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const flash = require("connect-flash");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "base1",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
  );
  
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 60 * 60 * 1000,// 1 hour
    secure: false,
    httpOnly: false, 
  }
}));

app.use(flash());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());




app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/student", require("./routes/student"));





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

