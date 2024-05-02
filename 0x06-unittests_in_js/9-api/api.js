const express = require('express');
const app = express();

const port = 7865;

app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', function (req, res) {
  const cartId = req.params.id;
  if (!cartId) {
    res.status(400).send('Cart ID is required');
  } else {
    res.send(`Payment methods for cart ${cartId}`);
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});