const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/users");
const ProfileController = require("../controllers/profile");
const passport = require("passport");

/* user router */
Router.post("/registration", UserController.AddUser);
Router.post("/login", UserController.LoginUser);

/* profile router */
Router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  ProfileController.AddProfile
);

Router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  ProfileController.GetProfile
);

Router.get(
  "/profile/:username",
  passport.authenticate("jwt", { session: false }),
  ProfileController.GetUsername
);

Router.get("/all", ProfileController.GetAllProfile);

Router.delete(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  ProfileController.DeleteProfile
);

Router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  ProfileController.AddExperience
);

Router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  ProfileController.AddEducation
);

Router.delete(
  "/experience/:id",
  passport.authenticate("jwt", { session: false }),
  ProfileController.DelExperience
);

Router.delete(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  ProfileController.DelEducation
);

module.exports = Router;
