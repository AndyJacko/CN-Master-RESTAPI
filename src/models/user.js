const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
});

userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  } else {
    throw new Error("Incorrect Password");
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
