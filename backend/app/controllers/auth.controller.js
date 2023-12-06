var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const db = require("../models");
const { users: User, refreshToken: RefreshToken } = db;

exports.signup = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      user_email: req.body.user_email,
      user_password: bcrypt.hashSync(req.body.user_password, 8),
      user_telephone: req.body.user_telephone,
      user_address: req.body.user_address,
      user_role: 2,
    });

    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    let refreshToken = await RefreshToken.createToken(user);

    let Userorities = user.user_role === 1 ? ["ROLE_ADMIN"] : ["ROLE_CUSTOMER"]

    // Send the token and user information as response
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.user_email,
      roles: Userorities,
      accessToken: token,
      refreshToken: refreshToken
    });
     
  } catch (err) {
    res.status(500).send({ message: err.message || "Error occurred while signing up." });
  }
};

exports.signin = async (req, res) => {

  const { user_email, user_password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ user_email });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Check if the provided password matches the stored password
    const passwordIsValid = bcrypt.compareSync(user_password, user.user_password);
    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: "Invalid password." });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    let refreshToken = await RefreshToken.createToken(user);

    let Userorities = user.user_role === 1 ? ["ROLE_ADMIN"] : ["ROLE_CUSTOMER"]

    // Send the token and user information as response
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: Userorities,
      accessToken: token,
      refreshToken: refreshToken
    });

  } catch (err) {
    res.status(500).send({ message: err.message || "Error occurred while signing in." });
  }


};

exports.refreshToken = async (req, res) => {

  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, { useFindAndModify: false }).exec();
      
      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    let newAccessToken = jwt.sign({ id: refreshToken.User._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
