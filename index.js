const express = require('express');
const app = express();

const resFunction = require('./src/requestResponse');

app.get("/", (req, res) => {
  res.json({
    message: resFunction()
  })
});

app.listen(3000, () => console.log(`Running on port 3000 at http://localhost:3000`));
