const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Using middleware
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "nodeapi",
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  
  const query = req.query;
  console.log(query);

  res.json({
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {
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
});

app.listen("5000", () => {
  console.log("Listening on port 5000!");
});
