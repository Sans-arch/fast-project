const express = require('express');
const app = express();
const router = require('./src/controllers/usersController');

app.use(express.json());

app.use(router);


// app.listen(process.env.port || 3004, () => console.log(`Running on port 3000 at http://localhost:3000`));
module.exports = app;