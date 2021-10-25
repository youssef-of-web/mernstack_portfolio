const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/users");
const ProfileController = require("../controllers/profile");
const passport = require("passport");

/* user router */
Router.post("/registration", UserController.AddUser);
Router.post("/login", UserController.LoginUser);

/* profile router */
Router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  ProfileController.Profile
);
module.exports = Router;
