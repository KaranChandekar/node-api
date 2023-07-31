import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const getSpecialUser = (req, res) => {
  res.json({
    success: true,
    message: "just joking!",
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated user",
  });
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Deleted user",
  });
};

export const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("temp", "lol").json({
    success: true,
    message: "Registered successfully!",
  });
};
