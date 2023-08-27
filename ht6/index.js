const express = require('express');
const app = express();
const port = 3000;

var dataBank = require('./api/data/info');

app.use('/api/data/info', dataBank);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    