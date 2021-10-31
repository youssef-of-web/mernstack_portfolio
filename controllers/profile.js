const Profiles = require("../models/profile");
const Users = require("../models/users");
const validateProfile = require("../validator/profile");

//@route POST
//@desc POST profiles
//@access public
const AddProfile = (req, res) => {
  const { errors, isValid } = validateProfile(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  const AllField = {};

  AllField.user = req.user.id;

  if (req.body.username) {
    AllField.username = req.body.username;
  }
  if (req.body.country) {
    AllField.country = req.body.country;
  }
  if (req.body.website) {
    AllField.website = req.body.website;
  }
  if (req.body.bio) {
    AllField.bio = req.body.bio;
  }

  if (typeof req.body.skills != undefined) {
    AllField.skills = req.body.skills.split(",");
  }
  /* 
  AllFiels = {
    user,
    username,
    country,
    website,
    skills,
    ....,
    socials: {
      linkedin,
      github
    }
  }
  */
  AllField.socials = {};

  if (req.body.linkedin) {
    AllField.socials.linkedin = req.body.linkedin;
  }
  if (req.body.github) {
    AllField.socials.github = req.body.github;
  }

  Profiles.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      Profiles.findOneAndUpdate(
        { user: req.user.id },
        { $set: AllField },
        { new: true }
      ).then((result) => res.json(result));
    } else {
      Profiles.findOne({ username: req.body.username }).then((user) => {
        if (user) {
          errors.username = "username exist";
          res.status(404).json(errors);
        } else {
          const newProfile = new Profiles(AllField);
          newProfile.save().then((profile_result) => res.json(profile_result));
        }
      });
    }
  });
};
//@route GET
//@desc GET profiles
//@access private
const GetProfile = (req, res) => {
  const errors = {};
  Profiles.findOne({ user: req.user.id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.profile = "no profile";
        res.status(404).json(errors);
      } else {
        res.json(profile);
      }
    })
    .catch((err) => res.status(500).json(err));
};
//@route GET
//@desc GET profiles by username
//@access private
const GetUsername = (req, res) => {
  const errors = {};
  Profiles.findOne({ username: req.params.username })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.profile = "no profile linked to this username";
        res.status(404).json(errors);
      } else {
        res.json(profile);
      }
    })
    .catch((err) => res.status(500).json(err));
};
//@route GET
//@desc GET all profiles
//@access public
const GetAllProfile = (req, res) => {
  Profiles.find()
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.profile = "no profile ";
        res.status(404).json(errors);
      } else {
        res.json(profile);
      }
    })
    .catch((err) => res.status(500).json(err));
};
//@route DELETE
//@desc DELETE profile and user
//@access private
const DeleteProfile = (req, res) => {
  Profiles.findOneAndRemove({ user: req.user.id }).then(() => {
    Users.findOneAndRemove({ _id: req.user.id }).then(() =>
      res.json({ success: true })
    );
  });
};

module.exports = {
  AddProfile,
  GetProfile,
  GetUsername,
  GetAllProfile,
  DeleteProfile,
};
