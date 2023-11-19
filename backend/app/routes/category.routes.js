module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new category

  router.post("/", categories.create);

  // Retrieve all category

  router.get("/", categories.findAll);

  // Retrieve all published category

  router.get("/published", categories.findAllPublished);

  // Retrieve a single category with id

  router.get("/:id", categories.findOne);

  // Update a category with id

  router.put("/:id", categories.update);

  // Delete a category with id

  router.delete("/:id", categories.delete);

  // Delete all category

  router.delete("/", categories.deleteAll);

  app.use("/api/categories", router);
};
