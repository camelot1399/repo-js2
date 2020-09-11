const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));

app.use('/api/cart', cartRouter);


const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});