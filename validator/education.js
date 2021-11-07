const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEducation(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "required school";
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
