const Profile = (req, res) => {
  res.json(req.user);
};

module.exports = {
  Profile,
};
