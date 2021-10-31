const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfile(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!validator.isLength(data.username, { min: 5, max: 20 })) {
    errors.username = "username must between 5 and 20 caracters !";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "username required";
  }

  if (validator.isEmpty(data.skills)) {
    errors.skills = "skills required";
  }

  if (!isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid url";
    }
  }

  if (!isEmpty(data.github)) {
    if (!validator.isURL(data.github)) {
      errors.github = "Not a valid url";
    }
  }

  return {
    isValid: isEmpty(errors),
    errors,
  };
};
