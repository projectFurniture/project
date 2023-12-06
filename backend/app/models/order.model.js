module.exports = (mongoose) => {

  var schema = mongoose.Schema({
    user_id: String,
    order_status: String,
    order_delivery_address: String,
    order_date: Date,
    product_list: [
      {
        id: String,
        name: String,
        description: String,
        price: Number,
        image: String,
        published: Boolean,
        qty: Number,
        category: String
      }
    ],
    payment: {
      mode: String,
      details: {
        name: String,
        email: String,
        cardNumber: Number,
        expiryDate: String,
        cvv: Number,
      },
    }
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("orders", schema);

  return Order;
};
