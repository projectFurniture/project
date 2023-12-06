const { authJwt } = require("../middlewares");

const users = require("../controllers/user.controller.js");

module.exports = (app) => {

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  const router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // // Route to make a user an admin (requires admin privileges)
  // router.put("/admin/:id", [authJwt.verifyToken, authJwt.isAdmin], users.makeAdmin);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Delete all Users
  router.delete("/", users.deleteAll);

  router.get(
    "/customer",
    [authJwt.verifyToken, authJwt.isModerator],
    users.customerDashboard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    users.adminDashboard
  );

  app.use("/api/users", router);
};
