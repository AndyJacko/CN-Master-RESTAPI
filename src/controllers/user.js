const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ message: "User Created", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

exports.readUser = async (req, res) => {
  try {
    const readUser = await User.find({ _id: req.params.id });
    res.status(200).send({ user: readUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

exports.readUsers = async (req, res) => {
  try {
    const readUsers = await User.find({});
    res.status(200).send({ users: readUsers });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    if (updatedUser.modifiedCount === 1) {
      const selectedUser = await User.find({ _id: req.body.id });
      res.status(200).send({ message: "User Updated", user: selectedUser });
    } else {
      res
        .status(200)
        .send({ message: `User With ID: ${req.body.id} Already Up To Date` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const selectedUser = await User.find({ _id: req.params.id });
    const deletedUser = await User.deleteOne({ _id: req.params.id });

    if (deletedUser.deletedCount === 1) {
      res.status(200).send({ message: "User Deleted", user: selectedUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};
