const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateExperience(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";

  if (validator.isEmpty(data.title)) {
    errors.title = "required title";
  }

  if (validator.isEmpty(data.company)) {
    errors.company = "required title";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "required title";
  }

  if (validator.isEmpty(data.to)) {
    errors.to = "required title";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
