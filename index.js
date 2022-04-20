const express = require('express');
require('express-async-errors');

const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

// app.listen(process.env.port || 3004, () => console.log(`Running on port 3000 at http://localhost:3000`));
