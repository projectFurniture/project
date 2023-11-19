module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: String,

    description: String,

    price: Number,

    image: String,

    published: Boolean,

    qty: Number,

    category: String,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const Products = mongoose.model("products", schema);

  return Products;
};
