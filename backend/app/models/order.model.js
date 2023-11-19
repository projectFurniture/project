module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    user_id: String,
    order_status: String,
    order_items: [
      {
        product_id: String,
        qty: Number,
      },
    ],
    payment: {
      payment_mode: String,
      payment_date: Date,
    },
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("orders", schema);

  return Order;
};
