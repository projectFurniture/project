const db = require("../models");
const User = db.users;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.user_email });
    if (user) {
      return res.status(400).send({ message: "Failed! Email is already in use!" });
    }
    next();
  } catch (err) {
    res.status(500).send({ message: err.message || "Error occurred while checking duplicate username or email." });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;