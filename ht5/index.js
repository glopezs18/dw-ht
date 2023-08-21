const express = require('express');
const app = express();
const port = 3000;

var citizen = require('./api/registro/ciudadanos');

app.use('/api/registro/ciudadanos', citizen);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



