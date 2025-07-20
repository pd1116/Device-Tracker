const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

exports.deleteUser = async (req, res) => {
  await User.findOneAndDelete({ id: req.params.id });
  res.status(204).send();
};
