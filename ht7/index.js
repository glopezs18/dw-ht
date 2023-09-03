const express = require('express');
const app = express();
const port = 3000;

const login = require('./proyecto/login');
const data = require('./proyecto/data');

app.use('/proyecto/login', login);
app.use('/proyecto/data', data);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});