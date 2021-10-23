const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/users");

Router.post("/registration", UserController.AddUser);

module.exports = Router;
