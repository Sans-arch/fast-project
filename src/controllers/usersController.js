
const users = [];

const createUser = (req, res) => {
  const { name, surname } = req.body;
  const userAlreadyExists = users.some(user => user.name === name && user.surname === surname);
  
  if (userAlreadyExists) {
    res.json({ message: "User already exists!" });
  }
  
  users.push({ name, surname });
  res.json({ message: "User registered with success!", name, surname });
};

const getUsers = (req, res) => {
  return users;
}

module.exports = {
  createUser,
  getUsers
};
