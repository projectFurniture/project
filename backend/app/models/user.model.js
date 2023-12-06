module.exports = (mongoose) => {

  var schema = mongoose.Schema({
    username: String,
    user_email: String,
    user_password: String,
    user_telephone: Number,
    user_address: String,
    user_role: Number
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("users", schema);

  return User;
};
