const db = require("../models");
const Order = db.orders;

const jwt = require('jsonwebtoken');
const secretKey = "grocery-store-key";


// Create and Save a new Order
exports.create = (req, res) => {

  const accessToken = req.headers['x-access-token'];

  let userId;

  try {
    const decodedToken = jwt.verify(accessToken, secretKey);
    userId = decodedToken.id;
  } catch (error) {
    return res.status(401).send({
      message: 'Access token is invalid or expired.',
    });
  }

  // Validate request
  if (
    !req.body.order_status ||
    !req.body.order_delivery_address ||
    !req.body.product_list ||
    !req.body.payment ||
    !Array.isArray(req.body.product_list) ||
    req.body.product_list.length === 0 ||
    !req.body.product_list.every(
      (product) =>
        product.id &&
        product.name &&
        product.description &&
        product.price &&
        product.image &&
        product.published !== undefined &&
        product.qty !== undefined &&
        product.category
    )
  ) {
    res.status(400).send({
      message: "All fields are required!",
    });
    return;
  }

  if (
    req.body.payment.mode === "card" &&
    (!req.body.payment.details.name ||
      !req.body.payment.details.email ||
      !req.body.payment.details.cardNumber ||
      !req.body.payment.details.expiryDate ||
      !req.body.payment.details.cvv)
  ) {
    res.status(400).send({
      message:
        "Invalid payment details. For card payment, all details are required.",
    });
    return;
  }

  const currentDate = new Date();

  // Create an Order
  const order = new Order({
    user_id: userId,
    order_status: req.body.order_status,
    order_delivery_address: req.body.order_delivery_address,
    order_date: currentDate,
    product_list: req.body.product_list,
    payment: req.body.payment,
  });

  // Save Order in the database
  order
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the order.",
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders.",
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Order.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          message: "Not found Order with id " + id,
        });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id,
      });
    });
};

// Update an Order by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  Order.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found!`,
        });
      } else
        res.send({
          message: "Order was updated successfully.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
};

// Delete an Order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Order.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`,
        });
      } else {
        res.send({
          message: "Order was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id,
      });
    });
};

// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  Order.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Orders were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders.",
      });
    });
};

// Get orders based on users.
exports.findByUserId = (req, res) => {
  const userId = req.params.id;

  Order.find({ user_id: userId })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({
          message: `No orders found for User ID ${userId}.`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving orders for User ID ${userId}.`,
      });
    });
};
