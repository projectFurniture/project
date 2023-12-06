const { verifySignUp } = require("../middlewares");

const controller = require("../controllers/auth.controller");

const router = require("express").Router();
 
module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
 
  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  );
 
  router.post("/signin", controller.signin);
 
  router.post("/signout", controller.signout);

  router.post("/refreshtoken", controller.refreshToken);

  app.use("/api/auth", router);
};
 