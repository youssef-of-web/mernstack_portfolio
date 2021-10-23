const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/users");

Router.post("/users", UserController.AddUser);

module.exports = Router;
