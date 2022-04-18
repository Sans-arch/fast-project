const express = require('express');
const app = express();

const responseFunctions = require('./src/requestResponse');

app.get("/", (req, res) => {
  res.json({
    message: responseFunctions.responseConfirmation()
  })
});

app.get("/users", (req, res) => {
  res.json(responseFunctions.responseUsers());
});

app.listen(3000, () => console.log(`Running on port 3000 at http://localhost:3000`));
