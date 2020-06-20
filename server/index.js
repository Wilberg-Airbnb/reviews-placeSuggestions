
const express = require('express');
const PORT = 3000;

const {seed,seed2} = require('./seed.js')

const app = express();
app.use(express.static('public/dist'));


console.log(seed);
app.listen(PORT, () => {
  console.log(`App is now listening on port ${PORT}`);
});