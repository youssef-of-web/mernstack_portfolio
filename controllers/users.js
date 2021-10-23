const Users = require("../models/users");
var bcrypt = require("bcryptjs");
const validateRegistration = require("../validator/registration");
const AddUser = async (req, res) => {
  const { isValid, errors } = validateRegistration(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  } else {
    await Users.findOne({ email: req.body.email }).then((result) => {
      if (result) {
        res.status(404).json({ email: "user exist" });
      } else {
        const user = new Users(req.body);
        var hash = bcrypt.hashSync(user.password, 8);

        /* 
            #hash = jsfjshfgdjhfsdhfsd31311313
            # user.password = azerty
            */
        user.password = hash;
        user
          .save()
          .then(() => res.json({ message: "user added with success" }))
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
};

module.exports = {
  AddUser,
};
