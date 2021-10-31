const express = require("express");
const app = express();
const Router = require("./router/index");
require("dotenv").config();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
var morgan = require("morgan");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(morgan("tiny"));
/* connect database */
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("database connected");
});

/* init passport */
app.use(passport.initialize());
require("./config/Passport")(passport);

/* Router */
app.use("/api", Router);

/* START SERVER */
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server run on port:${port}`);
});
