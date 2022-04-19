const { Router } = require('express');
const router = Router();

const users = [];

router.get("/users", (req, res) => {
  return users;
});

router.post("/users", (req, res) => {
  const { name, surname } = req.body;
  const userAlreadyExists = users.some(user => user.name === name && user.surname === surname);

  if (userAlreadyExists) {
    res.json({ message: "User already exists!" });
  }
  
  users.push({ name, surname });
  res.json({ message: "User registered with success!", name, surname });
});

module.exports = router;