import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// Mock database
let users = [];

// Get the list of users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// Add a new user
router.post("/", (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res
      .status(400)
      .send("All fields (first_name, last_name, email) are required.");
  }

  const newUser = { ...req.body, id: uuidv4() };
  users.push(newUser);

  res.status(201).send(`${newUser.first_name} has been added to the database.`);
});

// Get a user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    return res.status(404).send("User not found.");
  }

  res.status(200).json(foundUser);
});

// Delete a user by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const userExists = users.some((user) => user.id === id);

  if (!userExists) {
    return res.status(404).send("User not found.");
  }

  users = users.filter((user) => user.id !== id);

  res.status(200).send(`User with ID ${id} deleted successfully.`);
});

// Update a user by ID
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send("User not found.");
  }

  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.status(200).send(`User with ID ${id} has been updated.`);
});

export default router;
