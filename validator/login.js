const validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateLogin(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "error format email";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }

  return {
    isValid: isEmpty(errors),
    errors,
  };
};
