module.exports = (mongoose) => {
  var categorySchema = mongoose.Schema({
    name: String,
  });

  categorySchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const Categories = mongoose.model("categories", categorySchema);

  return Categories;
};
