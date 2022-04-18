function responseConfirmation() {
  return "OK, request received with sucess";
}

function responseUsers() {
  const users = [
    {
      id: 1,
      name: "Carlos"
    },
    {
      id: 2,
      name: "Ana"
    },
    {
      id: 3,
      name: "Guilherme"
    }
  ];

  return users;
}

module.exports = {
  responseConfirmation,
  responseUsers,
  users
};
